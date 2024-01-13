import React, { FC } from 'react';
import { TCard } from '../../../../types/types';
import Typography from '@components/common/typography';
import { useTranslation } from 'react-i18next';
import Card from '@components/card';
import PlusIcon from '@svg/plus.svg';
import styles from './styles.module.scss';

interface IProps {
    cards: TCard[];
}

const Cards: FC<IProps> = ({ cards }) => {
    const { t } = useTranslation(undefined, { keyPrefix: 'home_page.cards' });

    return (
        <div className={styles.wrapper}>
            <Typography variant='h2' weight='bold'>
                {t('title')}
            </Typography>
            <div className={styles.row_wrapper}>
                <div className={styles.row}>
                    {cards.map((item) => (
                        <Card key={item.card} card={item} />
                    ))}
                    <button className={styles.new_card}>
                        <div>
                            <PlusIcon />
                        </div>
                        <Typography variant='title' weight='bold'>
                            {t('new_card')}
                        </Typography>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
