import React, { FC, useMemo } from 'react';
import { TCard } from '../../../types/types';
import Tag from '@components/common/tag';
import { ECardStatus } from '../../../types/enum';
import { capitalizeFirstLetter, hideCardNumber } from '@utils/index';
import { currencies } from '@const/currency';
import Typography from '@components/common/typography';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

interface IProps {
    card: TCard;
    className?: string;
}

const cx = classNames.bind(styles);
const Card: FC<IProps> = ({ card, className }) => {
    const { t } = useTranslation(undefined, { keyPrefix: 'home_page.cards' });

    const rootStyles = useMemo(
        () => cx([styles.wrapper, className]),
        [className],
    );

    const getTagVariant = (status: ECardStatus) => {
        switch (status) {
            case ECardStatus.INACTIVE:
                return 'warning';
            case ECardStatus.ACTIVE:
                return 'success';
            case ECardStatus.BANNED:
                return 'error';
        }
    };

    return (
        <div
            className={rootStyles}
            style={{
                backgroundImage: `url(/assets/svg/${card.card_image})`,
            }}
        >
            <Tag variant={getTagVariant(card.status)}>
                {capitalizeFirstLetter(card.status)}
            </Tag>
            <div>
                <div className={styles.amount}>
                    {currencies[card.currency].symbol}
                    {card.amount.toFixed(2)}
                </div>
                <Typography variant='subtitle' className={styles.description}>
                    {t('available_balance')}
                </Typography>
            </div>
            <div>
                <Typography variant='subtitle' className={styles.number}>
                    {hideCardNumber(card.card, 'partial', 'dots')}
                </Typography>
            </div>
        </div>
    );
};

export default Card;
