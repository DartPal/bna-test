import React, {FC, ReactNode, useMemo} from 'react';
import styles from "./styles.module.scss"
import classNames from 'classnames/bind';

interface IProps {
    children: ReactNode;
    variant?: "error" | "warning" | "success";
    className?: string;
}

const cx = classNames.bind(styles)

const Tag: FC<IProps> = ({ children, variant, className }) => {
    const rootStyles = useMemo(() => cx([
        styles.wrapper, className, variant
    ]), [className, variant])

    return (
        <div className={rootStyles}>
            {children}
        </div>
    );
};

export default Tag;
