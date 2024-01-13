import {ECardStatus, ECurrency, EPaymentSystem, ETransactionType} from '../types/enum';
import {TAccount, TCard, TBalance, TTransaction} from '../types/types';

export const balanceData: TBalance[] = [
    {
        currency: ECurrency.CANADIAN,
        amount: 191,
    }
]

export const cardsData: TCard[] = [
    {
        status: ECardStatus.INACTIVE,
        currency: ECurrency.CANADIAN,
        amount: 0,
        system: EPaymentSystem.VISA,
        card: 4588993758490092,
        card_image: "card_bg.svg",
    }
]

export const accountsData: TAccount[] = [
    {
        name: "Signature RBC visa",
        card: 3648239847383234,
    },
    {
        name: "TD Bank Debit",
        card: 3648239847380024,
    }
]

export const transactionsData: TTransaction[] = [
    {
        type: ETransactionType.CARD,
        name: "Cineplex Inc.",
        date: 1695588986000,
        amount: -42.50,
    },
    {
        type: ETransactionType.BANK_ACCOUNT,
        name: "RBC Royal Bank",
        date: 1692478586000,
        amount: 500,
    },
    {
        type: ETransactionType.CARD,
        name: "Skyline Restaurant",
        date: 1690923386000,
        amount: -110.45,
    },
]
