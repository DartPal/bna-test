import React, {FC} from 'react';
import Accounts from '@sections/main/accounts';
import {TAccount, TBalance, TCard, TTransaction} from '../../../types/types';
import styles from "./styles.module.scss"
import Balance from '@sections/main/balance';
import Cards from '@sections/main/cards';
import Transactions from '@sections/main/transactions';

interface IProps {
    accounts: TAccount[],
    transactions: TTransaction[];
    cards: TCard[];
    balances: TBalance[];
}

const MainPageLayout: FC<IProps> = ({ accounts, balances, transactions, cards }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <Balance balances={balances} />
                <Cards cards={cards} />
                <Transactions transactions={transactions} />
            </div>
            <Accounts accounts={accounts}/>
        </div>
    );
};

export default MainPageLayout;
