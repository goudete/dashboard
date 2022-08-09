import { Dao, Transaction, Card, BankAccount } from "./types/types";

const mockDaos: Dao[] = [
    {
        id: '1',
        name: 'new-brex',
    },
    {
        id: '2',
        name: 'launch-house',
    },
    {
        id: '3',
        name: 'nyc-dao',
    },
    {
        id: '4',
        name: 'empire-dao',
    },
    {
        id: '5',
        name: 'poop-dao',
    },
];

const bankAccounts: BankAccount[] = [
    {
        DaoId: '1',
    },
    {
        DaoId: '2',
    },
    {
        DaoId: '3',
    },
];

const transactions: Transaction[] = [
    {
        date: 1659850380000,
        amount: 9.99,
        name: 'Adobe Photography Plan'
    },
    {
        date: 1659763980000,
        amount: 25,
        name: 'Domestic Wire Fee'
    },
];

const cards: Card[] = [
    {
        DaoId: '1',
        owners: 'enrique',
        bankAccountId: '12345',
        limit: 1000,
        cardNumber: 12345678910
    },
    {
        DaoId: '2',
        owners: 'kian',
        bankAccountId: '54321',
        limit: 1000,
        cardNumber: 12322245499
    },
];


export { mockDaos, bankAccounts, transactions, cards };