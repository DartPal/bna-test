import React, { FC, ReactNode, useMemo } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Button from '@components/common/button';

interface IProps {
    isActive: boolean;
    children: ReactNode;
    onClick: () => void;
}

const cx = classNames.bind(styles);
const TableTag: FC<IProps> = ({ children, isActive, onClick }) => {
    const rootStyles = useMemo(
        () => cx([styles.root, { isActive }]),
        [isActive],
    );

    return (
        <Button size='small' className={rootStyles} onClick={onClick}>
            {children}
        </Button>
    );
};

export default TableTag;
