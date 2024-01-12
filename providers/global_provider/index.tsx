import React, { FC, ReactNode } from 'react';
import Header from '@sections/header';

interface IProps {
    children: ReactNode;
    className: string;
}

const GlobalProvider: FC<IProps> = ({ children, className }) => {
    return (
        <div className={className}>
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default GlobalProvider;
