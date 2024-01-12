import {useState} from 'react';
import {accountsData, cardsData, currencyBalanceData, transactionsData} from '@_mock/index';

export const usePayment = () => {
    const [balances] = useState(currencyBalanceData)
    const [cards] = useState(cardsData)
    const [accounts] = useState(accountsData)
    const [transactions] = useState(transactionsData)

    return {
        balances,
        cards,
        accounts,
        transactions,
    }
}
