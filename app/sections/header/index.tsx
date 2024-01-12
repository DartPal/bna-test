import React from 'react';
import LogoIcon from "@svg/header_logo.svg"
import NotificationIcon from "@svg/notification.svg"
import ArrowDownIcon from "@svg/arrow_down.svg"
import {useTranslation} from 'react-i18next';
import {useUserContext} from '@hooks/context/useUserContext';
import Image from 'next/image';
import {getFirstLetter} from '@utils/index';
import styles from "./styles.module.scss"
import NavLink from '@components/common/navlink';
import Button from '@components/common/button';

const Header = () => {
    const {firstName, lastName, avatar} = useUserContext()
    const {t, i18n} = useTranslation(undefined, {keyPrefix: "header"})

    const handleChangeLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
    }

    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <LogoIcon />
                    <nav>
                        <ul className={styles.navigation}>
                            <li>
                                <NavLink href='/'>{t('home')}</NavLink>
                            </li>
                            <li>
                                <NavLink href='/xeppt-card'>{t("xeppt_card")}</NavLink>
                            </li>
                            <li>
                                <NavLink href='/statements'>{t("statements")}</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.right}>
                    <Button className={styles.language} onClick={handleChangeLanguage}>
                        {i18n.language}
                    </Button>
                    <Button variant="light" className={styles.notification}>
                        <NotificationIcon />
                    </Button>
                    <div>
                        {avatar
                            ? <Image className={styles.avatar} width={40} height={40} src={avatar} alt={`${firstName} avatar`} />
                            : <div className={styles.logo_symbols}>{getFirstLetter(firstName)}{getFirstLetter(lastName)}</div>
                        }
                    </div>
                    <div>
                        <Button className={styles.profile_button}>
                            {firstName} {lastName}
                            <ArrowDownIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;