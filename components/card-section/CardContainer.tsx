import React, { useEffect, useState } from 'react';

import Card from './Card';
import style from '../../styles/card.module.scss';
import useResponsive from '../useResponsive';

import { motion } from 'framer-motion';

export interface ICardContainerProps {
}

export default function CardContainer(props: ICardContainerProps) {

    const onMobile = useResponsive();

    return (
        <motion.div className={onMobile ? style.mParent : style.parent}
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{type: 'spring'}}
            // viewport={{ once: true }}
            >
            <h2>Our Services</h2>
            <div className={onMobile ? style.mServices : style.services}>
                <Card onMobile={onMobile} />
                <Card onMobile={onMobile} />
                <Card onMobile={onMobile} />
            </div>
        </motion.div>
    );
}
