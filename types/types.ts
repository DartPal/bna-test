import {ECardStatus, ECurrency, EPaymentSystem, ETransactionType} from './enum';

export type TAccount = {
    name: string;
    card: number;
}

export type TBalance = {
    currency: ECurrency;
    amount: number;
}

export type TCard = {
    status: ECardStatus;
    currency: ECurrency;
    amount: number;
    system: EPaymentSystem;
    card: number;
    card_image: string;
}

export type TTransaction = {
    type: ETransactionType,
    name: string;
    date: number;
    amount: number;
}
