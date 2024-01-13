import {ETransactionType} from '../types/enum';

export const enumTranslate = {
    [ETransactionType.CARD]: {
        en: "Payment",
        fr: "Paiement",
    },
    [ETransactionType.BANK_ACCOUNT]: {
        en: "Transfer from bank",
        fr: "Virement depuis la banque",
    },
}
