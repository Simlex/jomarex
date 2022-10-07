import Image from 'next/image';
import * as React from 'react';

import style from '../../styles/card.module.scss';

import cateringImg from '../../public/cardImages/catering.jpg';

export interface ICardProps {
    onMobile: any;
}

export default function Card(props: ICardProps) {
    return (
        <div className={props.onMobile ? style.mCardContainer : style.cardContainer}>
            <h2>Catering</h2>
            <div className={style.cardContainer__content}>
                <div className={props.onMobile ? style.mImage : style.image}>
                    <Image src={cateringImg} alt='Image depicting catering' />
                </div>
                <p>Get the best catering services for all your events</p>
            </div>
            <div className={style.btn}>
                Explore
            </div>
        </div>
    );
}
