import React, { FC, ReactNode, useMemo } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

interface IProps {
    href: string;
    children: ReactNode;
    className?: string;
}

const cx = classNames.bind(styles);

const NavLink: FC<IProps> = ({ href, className, children }) => {
    const router = useRouter();
    const rootStyles = useMemo(
        () =>
            cx([
                styles.root,
                { isActive: router.pathname === href },
                className,
            ]),
        [className, href, router],
    );

    return (
        <Link href={href} className={rootStyles}>
            {children}
        </Link>
    );
};

export default NavLink;
