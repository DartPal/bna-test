import React, { useState } from 'react';
import LogoIcon from '@svg/header_logo.svg';
import NotificationIcon from '@svg/notification.svg';
import ArrowDownIcon from '@svg/arrow_down.svg';
import { useTranslation } from 'react-i18next';
import { useUserContext } from '@hooks/context/useUserContext';
import Image from 'next/image';
import { getFirstLetter } from '@utils/index';
import styles from './styles.module.scss';
import NavLink from '@components/common/navlink';
import Button from '@components/common/button';
import Hamburger from 'hamburger-react';

const Header = () => {
    const [isOpened, setIsOpened] = useState(false);
    const { firstName, lastName, avatar } = useUserContext();
    const { t, i18n } = useTranslation(undefined, { keyPrefix: 'header' });

    const handleChangeLanguage = () => {
        const lang = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.mobile_menu}>
                    <Hamburger
                        toggled={isOpened}
                        toggle={() => setIsOpened((state) => !state)}
                    />
                </div>
                <div className={styles.left}>
                    <LogoIcon />
                    <nav className={styles.navigation}>
                        <ul>
                            <li>
                                <NavLink href='/'>{t('home')}</NavLink>
                            </li>
                            <li>
                                <NavLink href='/xeppt-card'>
                                    {t('xeppt_card')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href='/statements'>
                                    {t('statements')}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.right}>
                    <Button
                        className={styles.language}
                        onClick={handleChangeLanguage}
                    >
                        {i18n.language}
                    </Button>
                    <Button variant='light' className={styles.notification}>
                        <NotificationIcon />
                    </Button>
                    <div>
                        {avatar ? (
                            <Image
                                className={styles.avatar}
                                width={40}
                                height={40}
                                src={avatar}
                                alt={`${firstName} avatar`}
                            />
                        ) : (
                            <div className={styles.logo_symbols}>
                                {getFirstLetter(firstName)}
                                {getFirstLetter(lastName)}
                            </div>
                        )}
                    </div>
                    <div>
                        <Button className={styles.profile_button}>
                            <span>
                                {firstName} {lastName}
                            </span>
                            <ArrowDownIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
