import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Hero from '../components/Hero';
import style from '../styles/about.module.scss';

import workImg1 from '../public/services/workImg1.jpg';

export interface IAboutProps {
}

export default function About(props: IAboutProps) {
    return (
        <>
            <Head>
                <title>About Us | Jomarex</title>
                <meta name="description" content="Know more about Jomarex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />

            <div className={style.infoSection}>
                <div className={style.infoSection__story}>
                    <h2>Our <span>Story</span> and <span>Mission</span></h2>
                    <p>Yumies was founded in 2021, and its main focus is to bring joy
                        into the smile of people when we offer our services. we offer
                        different services such was baking, catering and we also teach
                        confectionaries</p>
                </div>
                <div className={style.infoSection__works}>
                    <h2>Our works and events</h2>
                    <div className={style.worksImgs}>
                        <div className={style.worksImgs__img}>
                            <Image src={workImg1} alt='Woman working'/>
                        </div>
                        <div className={style.worksImgs__img}>
                            <Image src={workImg1} alt='Woman working'/>
                        </div>
                        <div className={style.worksImgs__img}>
                            <Image src={workImg1} alt='Woman working'/>
                        </div>
                    </div>
                </div>
                <div className={style.viewBtn}>
                    View more
                </div>
            </div>
        </>
    );
}
