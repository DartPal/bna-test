import React, { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    className: string;
}

const GlobalProvider: FC<IProps> = ({ children, className }) => {
    return (
        <div className={className}>
            <div>{children}</div>
        </div>
    );
};

export default GlobalProvider;
