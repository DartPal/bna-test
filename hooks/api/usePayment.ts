import { useState } from 'react';
import {
    accountsData,
    cardsData,
    balanceData,
    transactionsData,
} from '@_mock/index';

export const usePayment = () => {
    const [balances] = useState(balanceData);
    const [cards] = useState(cardsData);
    const [accounts] = useState(accountsData);
    const [transactions] = useState(transactionsData);

    return {
        balances,
        cards,
        accounts,
        transactions,
    };
};
