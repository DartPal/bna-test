import React, { FC, useMemo } from 'react';
import Typography from '@components/common/typography';
import CardIcon from '@svg/card.svg';
import WalletIcon from '@svg/wallet.svg';
import moment from 'moment/moment';
import { TTransaction } from '../../../../types/types';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { ETransactionType } from '../../../../types/enum';
import { currencies } from '@const/currency';
import { enumTranslate } from '@locales/index';
import { useTranslation } from 'react-i18next';

interface IProps {
    transaction: TTransaction;
}

const cx = classNames.bind(styles);
const TransactionItem: FC<IProps> = ({ transaction }) => {
    const { i18n } = useTranslation();

    const amountStyles = useMemo(
        () => cx([styles.amount, { plus: transaction.amount > 0 }]),
        [transaction],
    );

    const iconStyles = useMemo(
        () =>
            cx([
                styles.icon,
                {
                    isWallet:
                        transaction.type === ETransactionType.BANK_ACCOUNT,
                },
            ]),
        [transaction],
    );

    return (
        <div className={styles.table_item}>
            <div className={styles.left}>
                <div className={iconStyles}>
                    {transaction.type === ETransactionType.CARD ? (
                        <CardIcon />
                    ) : (
                        <WalletIcon />
                    )}
                </div>
                <div>
                    <Typography weight='semibold' variant='title'>
                        {transaction.name}
                    </Typography>
                    <Typography variant='subtitle'>
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/*//@ts-expect-error*/}
                        {moment(transaction.date).format('MMM DD')},{' '}
                        {enumTranslate[transaction.type][i18n.language]}
                    </Typography>
                </div>
            </div>
            <Typography variant='title' weight='bold' className={amountStyles}>
                {transaction.amount > 0
                    ? `+${currencies[transaction.currency].symbol}${transaction.amount.toFixed(2)}`
                    : `-${currencies[transaction.currency].symbol}${(-transaction.amount).toFixed(2)}`}
            </Typography>
        </div>
    );
};

export default TransactionItem;
