export interface DaoType {
    id?: string,
	name?: string,
	bankAccounts?: BankAccount[],
	cards?: Card[];
    symbol?: string | undefined,
    displayName?: string | undefined,
    programId?: string | undefined,
    realmId?: string | undefined,
    bannerImage?: string | undefined,
    ogImage?: string | undefined,
    sharedWalletId?: string | undefined,
    sortRank?: number | undefined,
    keywords?: string | undefined,
    twitter?: string | undefined,
    website?: string | undefined,
    description?: string | undefined
}

export interface BankAccount {
    DaoId: string,
    accountNumber?: string;
    balance?: string;
    currency?: '€' | '$' | '£',
    amount?: number,
    title?: string,
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
    name?: string,
    hash?: string,
    type: 'on chain' | 'card' | 'ach/wire'
}
