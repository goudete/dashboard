import React from "react";
import { ConnectionContext } from "../helpers/connection";

type CreateProposalButtonProps = {
  context: ConnectionContext;
};

export const CreateProposalButton = ({
  context,
}: CreateProposalButtonProps) => {
  const onClick = (context: ConnectionContext) => {};

  return <div onClick={() => onClick(context)}></div>;
};
