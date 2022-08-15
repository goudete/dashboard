import {
  createInstructionData,
  getAllGovernances,
  getTokenOwnerRecordAddress,
  ProgramAccount,
  Realm,
  VoteType,
  withCreateProposal,
  withInsertTransaction,
} from "@solana/spl-governance";
import {
  Keypair,
  PublicKey,
  Signer,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { ConnectionContext } from "./connection";

const PROGRAM_ID = new PublicKey(
  "GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw"
);

export async function submitProposal(
  context: ConnectionContext,
  keypair: Keypair,
  realm: ProgramAccount<Realm>,
  name: string,
  description: string
) {
  let instructions: TransactionInstruction[] = [];

  // gets the governance program version for the canonical program; hard coded to 2
  const programVersion = 2;
  // var programVersion = await getGovernanceProgramVersion(
  //   context.connection,
  //   PROGRAM_ID
  // );

  const voteType = VoteType.SINGLE_CHOICE;
  const options = ["Approve"];
  const useDenyOption = true;

  // gets all governances for a particular realm
  // this essentially means config for:
  // 1. governance over another configuration (meta governance?)
  // 2. governance over a particular treasury
  const governances = await getAllGovernances(
    context.connection,
    PROGRAM_ID,
    realm.pubkey
  );

  // here, I'm not sure which governance to take programmatically
  // on observation, governances[1] seems like the treasury
  // is there a way to programmatically differentiate the two?
  const governancePk = governances[1].pubkey;

  // for the specified owner public key, this gets the
  // proof that they own the necessary token (ie credentials)
  // over a particular governance
  // why is there a specific record for this? and not a single
  // program that tracks all the owners?
  const tokenOwnerRecordAddress = await getTokenOwnerRecordAddress(
    PROGRAM_ID,
    realm.pubkey,
    governancePk,
    keypair.publicKey
  );

  // given the arguments, this method pushes the correct instructions
  // into the "instructions" param (in our case, an empty array)
  const proposalAddress = await withCreateProposal(
    instructions,
    PROGRAM_ID,
    2,
    realm.pubkey,
    governancePk,
    tokenOwnerRecordAddress,
    name,
    description,
    realm.account.config.councilMint!,
    keypair.publicKey,
    governances[1].account.proposalCount,
    voteType,
    options,
    useDenyOption,
    keypair.publicKey
  );

  // create the instruction data to transfer money
  // from the governancePk (treasury) to the proposer PK
  const data = createInstructionData(
    SystemProgram.transfer({
      fromPubkey: governancePk,
      toPubkey: keypair.publicKey,
      lamports: 100,
    })
  );

  // this inserts the transfer transaction
  // into the "instructions" param which currently
  // just contains the proposal?
  await withInsertTransaction(
    instructions,
    PROGRAM_ID,
    programVersion,
    governancePk,
    proposalAddress,
    tokenOwnerRecordAddress,
    keypair.publicKey,
    0,
    0,
    0,
    [data],
    keypair.publicKey
  );

  // sign the transaction
  const signers: Signer[] = [];
  let transaction = new Transaction({ feePayer: keypair.publicKey });
  transaction.add(...instructions);
  signers.push(keypair);
  let tx = await context.connection.sendTransaction(transaction, signers);

  const result = await context.connection.confirmTransaction(tx);
  console.log("logging result");
  console.log(result);
}
