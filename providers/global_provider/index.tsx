import React, {FC, ReactNode, useMemo} from 'react';
import Header from '@sections/header';
import styles from "./styles.module.scss"
import PlanetImage from "@svg/planet.svg"
import classNames from 'classnames/bind';

interface IProps {
    children: ReactNode;
    className: string;
}

const cx = classNames.bind(styles)
const GlobalProvider: FC<IProps> = ({ children, className }) => {
    const rootStyles = useMemo(() => cx([
        styles.wrapper, className
    ]), [className])

    return (
        <div className={rootStyles}>
            <Header />
            {children}
            <div className={styles.planet}>
                <PlanetImage />
            </div>
        </div>
    );
};

export default GlobalProvider;
