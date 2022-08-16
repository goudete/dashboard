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
    accountNumber: "B4K1O6O7P1G1A0K5U8G1K7",
    currency: "$",
    amount: 1250,
    title: "Marketing",
  },
  {
    DaoId: "2",
    accountNumber: "A0U8K2O6L3N5G3B4B7B4U8",
    currency: "$",
    amount: 30132,
    title: "Leasing",
  },
  {
    DaoId: "3",
    accountNumber: "O6U8K3K2A5B4P7O6O7U9G3",
    currency: "$",
    amount: 7300,
    title: "Operations",
  },
];

const mockTransactions: Transaction[] = [
  {
    date: 1659850380000,
    amount: 3450,
    name: "Deborah Miller Catering & Events",
    type: "ach/wire",
  },
  {
    date: 1659850380000,
    amount: 96.69,
    hash: "UNHyunyaaKNNDhKs3yuxASr4G1U997ZUbssQyv9FrLB7dXdu7L111omUnyB",
    type: "on chain",
  },
  {
    date: 1659763980000,
    amount: 400,
    name: "Sherwin-Williams Paint Store",
    type: 'ach/wire',
  },
  {
    date: 1659763980000,
    amount: 300,
    name: "SAMSUNG 32 inch UJ59 4k monitor",
    type: 'card',
  },
  {
    date: 1660605703470,
    amount: 0.39260969976905313,
    hash: "inuybvyaaKNNDhKs3yuxASr4G1U997ZUbssQyv9FrLB7dXdu7L111onXSSs",
    type: "on chain",
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
