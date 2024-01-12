import React, {FC} from 'react';
import Button from '@components/common/button';
import PlusIcon from "@svg/plus.svg"
import {useTranslation} from 'react-i18next';
import {TAccount} from '../../../../types/types';
import {hideCardNumber} from '@utils/index';
import styles from "./styles.module.scss"
import Typography from '@components/common/typography';

interface IProps {
    accounts: TAccount[]
}

const Accounts: FC<IProps> = ({ accounts }) => {
    const {t} = useTranslation(undefined, {keyPrefix: "home_page.accounts"})
    return (
        <div className={styles.wrapper}>
            <Button className={styles.add_button} variant="dark" size="large">
                {t("add_money")}
            </Button>
            <div className={styles.accounts}>
                <Typography variant="title" weight="bold">
                    {t("title")}
                </Typography>
                <ul className={styles.accounts_list}>
                    {accounts.map(item => <li key={item.card} className={styles.account_item}>
                        <Typography>
                            {item.name} ({hideCardNumber(item.card, "full")})
                        </Typography>
                    </li>)}
                </ul>
                <Button className={styles.add_card}>
                    <div>
                        <PlusIcon />
                    </div>
                    <Typography variant="title" weight="bold">
                        {t("link_new")}
                    </Typography>
                </Button>
            </div>
        </div>
    );
};

export default Accounts;
