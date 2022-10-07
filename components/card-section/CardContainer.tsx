import React, { useEffect, useState } from 'react';

import Card from './Card';
import style from '../../styles/card.module.scss';
import useResponsive from '../useResponsive';

export interface ICardContainerProps {
}

export default function CardContainer(props: ICardContainerProps) {

    const onMobile = useResponsive();

    return (
        <div className={onMobile ? style.mParent : style.parent}>
            <h2>Our Services</h2>
            <div className={onMobile ? style.mServices : style.services}>
                <Card onMobile={onMobile} />
                <Card onMobile={onMobile} />
                <Card onMobile={onMobile} />
            </div>
        </div>
    );
}
