import React, {FC} from 'react';
import Accounts from '@sections/main/accounts';
import {TAccount, TBalance, TCard, TTransaction} from '../../../types/types';
import styles from "./styles.module.scss"

interface IProps {
    accounts: TAccount[],
    transactions: TTransaction[];
    cards: TCard[];
    balances: TBalance[];
}

const MainPageLayout: FC<IProps> = ({ accounts }) => {
    return (
        <div className={styles.wrapper}>
            <Accounts accounts={accounts}/>
        </div>
    );
};

export default MainPageLayout;
