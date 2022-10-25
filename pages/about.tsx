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
                    <h2>Our <span>Story</span></h2>
                    <p>JOMAREX Catering  Services is situated at  Salvation Crescent Isokan Estate, Ori Okuta Ikorodu  Lagos.
                        We are into <span>Baking, Cooking, Training</span> and <span>selling baking materials</span>
                        <br />
                        <br />
                        For more than 20 years of catering events, we have been blessed to be a part of weddings, debuts, corporate events, and private celebrations. These events have given us valuable insights and ideas that inspire our continuous effort to provide better and improved services to a wider set of clients. But what really matters to us is our relationship with our customers.
                        {/* We start baking mart  7years ago. */}
                        <br />
                        <br />
                        Our guiding philosophy has been to consistently provide clients with high quality food at competitive prices and to provide a service that is efficient, friendly, and courteous.
                        Our goal is to give you a priceless and worry-free planning that is as enjoyable as the event itself.
                        <br />
                        <br />
                        We consider ourselves not only a caterer, but also a partner that will assist you during the process of conceptualizing, budgeting, planning, and on the day of your event.</p>
                </div>
                <div className={style.infoSection__story}>
                    <h2>Our <span>Vision</span></h2>
                    <p>To build an outstanding reputation that we exceed in every service through our dedication to the success of our customers, important occasions and creating memorable events.
                        To give back and contribute to our local community and charity groups to train  and help as much as we can by impacting knowledge to them.</p>
                </div>
                <div className={style.infoSection__story}>
                    <h2>Our <span>Mission</span></h2>
                    <p>Providing an impeccable service, quality delicious foods, quality tools,  and a passionate team. To give an impression that deliver a friendly and professional experience 
                        that brings our customers visions to life and creates powerful memories.</p>
                </div>
                <div className={style.infoSection__works}>
                    <h2>Our works and events</h2>
                    <div className={style.worksImgs}>
                        <div className={style.worksImgs__img}>
                            <Image src={workImg1} alt='Woman working' />
                        </div>
                        <div className={style.worksImgs__img}>
                            <Image src={workImg1} alt='Woman working' />
                        </div>
                        <div className={style.worksImgs__img}>
                            <Image src={workImg1} alt='Woman working' />
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
