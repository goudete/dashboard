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
    accountNumber: 'B4K1O6O7P1G1A0K5U8G1K7',
    currency: '$',
    amount: 11256,
    title: 'Personal',
  },
  {
    DaoId: "2",
    accountNumber: 'A0U8K2O6L3N5G3B4B7B4U8',
    currency: '£',
    amount: 2132,
    title: 'My DAO',
  },
  {
    DaoId: "3",
    accountNumber: 'O6U8K3K2A5B4P7O6O7U9G3',
    currency: '€',
    amount: 7300,
    title: 'Savings',
  },
];

const mockTransactions: Transaction[] = [
  {
    date: 1659850380000,
    amount: 9.99,
    name: "Adobe Photography Plan",
    type: 'fiat'
  },
  {
    date: 1659763980000,
    amount: 25,
    name: "Domestic Wire Fee",
    type: 'fiat',
  },
  {
    date: 1660605703470,
    amount: 0.04209274,
    hash: "6b1fce6a6ae71a46ad5347ac78451fec64dc29f784036db892217047badda9e5",
    type: 'chain',
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
