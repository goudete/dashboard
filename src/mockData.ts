import { DaoType, Transaction, Card, BankAccount } from "./types/types";

const mockDaos: DaoType[] = [
  {
    id: "1",
    name: "new-brex",
  },
  {
    id: "2",
    name: "launch-house",
  },
  {
    id: "3",
    name: "nyc-dao",
  },
  {
    id: "4",
    name: "empire-dao",
  },
  {
    id: "5",
    name: "poop-dao",
  },
];

const mockBankAccounts: BankAccount[] = [
  {
    DaoId: "1",
    accountNumber: '44482030',
    currency: 'usd',
    amount: 11256,
  },
  {
    DaoId: "2",
    accountNumber: '34982225',
    currency: 'gbp',
    amount: 2132,
  },
  {
    DaoId: "3",
    accountNumber: '08793111',
    currency: 'eur',
    amount: 1000,
  },
];

const mockTransactions: Transaction[] = [
  {
    date: 1659850380000,
    amount: 9.99,
    name: "Adobe Photography Plan",
  },
  {
    date: 1659763980000,
    amount: 25,
    name: "Domestic Wire Fee",
  },
];

const mockCards: Card[] = [
  {
    DaoId: "1",
    owners: "enrique",
    bankAccountId: "12345",
    limit: 1000,
    cardNumber: 12345678910,
  },
  {
    DaoId: "2",
    owners: "kian",
    bankAccountId: "54321",
    limit: 1000,
    cardNumber: 12322245499,
  },
];

// export { mockDaos, bankAccounts, transactions, cards };
export { mockBankAccounts, mockTransactions, mockCards };
