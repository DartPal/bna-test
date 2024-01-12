import React from 'react';
import MainPageLayout from '@layouts/main';
import {usePayment} from '@hooks/api/usePayment';

const Index = () => {
    const {
        accounts,
        transactions,
        cards,
        balances,
    } = usePayment()
    return <div>
        <MainPageLayout
            accounts={accounts}
            transactions={transactions}
            cards={cards}
            balances={balances}
        />
    </div>;
};

export default Index;
