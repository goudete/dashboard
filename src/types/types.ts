
export interface Dao {
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
    website?: string | undefined
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