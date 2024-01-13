import React, {FC, useState} from 'react';
import {TTransaction} from '../../../../types/types';
import Typography from '@components/common/typography';
import {useTranslation} from 'react-i18next';
import Button from '@components/common/button';
import styles from "./styles.module.scss"
import TableTag from '@components/table_tag';
import TransactionItem from '@sections/main/transactions/transaction_item';

interface IProps {
    transactions: TTransaction[]
}

const Transactions: FC<IProps> = ({ transactions }) => {
    const {t} = useTranslation(undefined, {keyPrefix: "home_page.transactions"})
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className={styles.wrapper}>
            <Typography variant="h2" weight="bold">
                {t("title")}
            </Typography>
            <div className={styles.content}>
                <div className={styles.table_header}>
                    <div className={styles.left}>
                        <TableTag
                            isActive={activeTab === 0}
                            onClick={() => setActiveTab(0)}
                        >
                            {t("list.all")}
                        </TableTag>
                        <TableTag
                            isActive={activeTab === 1}
                            onClick={() => setActiveTab(1)}
                        >
                            {t("list.card")}
                        </TableTag>
                    </div>
                    <Button variant="dark" size="small">
                        {t("list.show_more")}
                    </Button>
                </div>
                <div className={styles.table_content}>
                    {transactions.map((item, i) => <TransactionItem
                        key={i}
                        transaction={item}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default Transactions;
