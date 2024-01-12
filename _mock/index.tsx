import {ECardStatus, ECurrency, EPaymentSystem, ETransactionType} from '../types/enum';

export const currencyBalanceData = [
    {
        currency: ECurrency.CANADIAN,
        amount: 191,
    }
]

export const cardsData = [
    {
        status: ECardStatus.INACTIVE,
        currency: ECurrency.CANADIAN,
        amount: 0,
        system: EPaymentSystem.VISA,
        account: 4588993758490092,
    }
]

export const accountsData = [
    {
        name: "Signature RBC visa",
        account: 3648239847383234
    },
    {
        name: "TD Bank Debit",
        account: 3648239847380024
    }
]

export const transactionsData = [
    {
        type: ETransactionType.CARD,
        name: "Cineplex Inc.",
        date: 1695588986000,
        amount: -42.50
    },
    {
        type: ETransactionType.BANK_ACCOUNT,
        name: "RBC Royal Bank",
        date: 1692478586000,
        amount: 500
    },
    {
        type: ETransactionType.CARD,
        name: "Skyline Restaurant",
        date: 1690923386000,
        amount: -110.45
    },
]
