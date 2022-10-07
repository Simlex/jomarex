import * as React from 'react';

import Card from './Card';
import style from '../../styles/card.module.scss';

export interface ICardContainerProps {
}

export default function CardContainer(props: ICardContainerProps) {
    return (
        <div className={style.parent}>
            <h2>Our Services</h2>
            <div className={style.services}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
