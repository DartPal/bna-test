import React, { FC, ReactNode, useMemo } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

interface IProps {
    variant?: 'h2' | 'title' | 'subtitle';
    weight?: 'bold' | 'regular' | 'thin' | 'semibold';
    children: ReactNode;
    className?: string;
}

const cx = classNames.bind(styles);

const Typography: FC<IProps> = ({
    variant = 'default',
    children,
    className,
    weight,
}) => {
    const rootStyles = useMemo(
        () => cx([styles.root, variant, weight, className]),
        [className, variant, weight],
    );

    const render = () => {
        switch (variant) {
            case 'h2':
                return <h2 className={rootStyles}>{children}</h2>;
            default:
                return <p className={rootStyles}>{children}</p>;
        }
    };

    return render();
};

export default Typography;
