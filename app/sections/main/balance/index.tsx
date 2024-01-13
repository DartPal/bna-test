import React, {FC} from 'react';
import {TBalance} from '../../../../types/types';
import Typography from '@components/common/typography';
import {useTranslation} from 'react-i18next';
import AccountBalance from '@components/account_balance';
import styles from "./styles.module.scss"

interface IProps {
    balances: TBalance[]
}

const Balance: FC<IProps> = ({ balances }) => {
    const {t} = useTranslation(undefined, {keyPrefix: "home_page.balance"})
    return (
        <div className={styles.wrapper}>
            <Typography variant="h2" weight="bold">
                {t("title")}
            </Typography>
            <div>
                {balances.map((item, i) => <AccountBalance
                    key={i}
                    currency={item.currency}
                    amount={item.amount}
                />)}
            </div>
        </div>
    );
};

export default Balance;
