import React, { FC } from 'react';
import { ECurrency } from '../../../types/enum';
import { currencies } from '@const/currency';
import Typography from '@components/common/typography';
import styles from './styles.module.scss';

interface IProps {
    currency: ECurrency;
    amount: number;
}

const AccountBalance: FC<IProps> = ({ currency, amount }) => {
    return (
        <div className={styles.wrapper}>
            {currencies[currency].Icon}
            <Typography variant='title' weight='bold'>
                {currencies[currency].symbol}
                {amount.toFixed(2)}
            </Typography>
        </div>
    );
};

export default AccountBalance;
