export interface DaoType {
    id?: string,
	name?: string,
	bankAccounts?: BankAccount[],
	cards?: Card[];
    displayName?: string;
    ogImage?: string;
    programId?: string;
    realmId?: string;
    symbol?: string;
}

export interface BankAccount {
    DaoId: string,
}

export interface Card {
    DaoId: string,
	owners: string,
    bankAccountId: string,
    limit: number,
    cardNumber: number
}

export interface Transaction {
    date: number,
    amount: number,
    name: string
}