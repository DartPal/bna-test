import React, { ButtonHTMLAttributes, FC, ReactNode, useMemo } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

interface IProps {
    variant?: 'default' | 'dark' | 'light' | 'primary';
    size?: 'default-size' | 'small' | 'large';
    children: ReactNode;
    className?: string;
}

const cx = classNames.bind(styles);
const Button: FC<IProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
    variant = 'default',
    size = 'default-size',
    children,
    className,
    ...props
}) => {
    const rootStyles = useMemo(
        () => cx([styles.root, size, variant, className]),
        [className, size, variant],
    );

    return <button className={rootStyles} {...props}>{children}</button>;
};

export default Button;
