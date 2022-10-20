import Image from 'next/image';
import React, { useState } from 'react';
import style from '../../styles/services.module.scss';

import serviceImg1 from '../../public/services/serviceImg.jpg';
import whatsapp from '../../public/whatsapp.png';
import caterer1 from '../../public/services/caterer1.jpg';
import caterer2 from '../../public/services/caterer2.jpg';
import gallery2 from '../../public/gallery/gallery2.jpg';

import { BiBookHeart } from 'react-icons/bi';
import Link from 'next/link';

export interface IServicesContainerProps {
}

export default function ServicesContainer(props: IServicesContainerProps) {
    const [visibleGroup, setVisibleGroup] = useState('Catering');
    const groups = ['Catering', 'Baking', 'Learning'];
    const galleryImgs = [gallery2, gallery2, gallery2, gallery2, gallery2, gallery2, gallery2, gallery2, gallery2]

    return (
        <div className={style.servicesGroup}>
            <div className={style.servicesGroup__top}>
                <ul>
                    <li
                        className={visibleGroup === 'Catering' ? style.selected : ''}
                        onClick={() => setVisibleGroup('Catering')}>Catering</li>
                    <li
                        className={visibleGroup === 'Baking' ? style.selected : ''}
                        onClick={() => setVisibleGroup('Baking')}>Baking</li>
                    <li
                        className={visibleGroup === 'Learning' ? style.selected : ''}
                        onClick={() => setVisibleGroup('Learning')}>Learning</li>
                </ul>
            </div>

            {
                (visibleGroup === 'Baking' || visibleGroup === 'Catering') && (
                    <>
                        {/* Show only when Catering is clicked */}
                        <div className={style.servicesGroup__picInfo}>
                            <div className={`${style.eachSubService} ${style.first}`}>
                                <div className={style.eachSubService__note}>
                                    <span>Wedding</span>
                                    For your catering services for outdoor events, weddings, birthday parties, engagements and others. Click the button below to reach out to us,
                                    we&apos;ll be happy to render our services.
                                </div>
                                <div className={style.eachSubService__img}>
                                    <Image src={serviceImg1} />
                                </div>
                            </div>
                            <div className={`${style.eachSubService} ${style.second}`}>
                                <div className={style.eachSubService__note}>
                                    <span>Wedding</span>
                                    For your catering services for outdoor events, weddings, birthday parties, engagements and others. Click the button below to reach out to us, we&apos;ll be happy to render our services.
                                </div>
                                <div className={style.eachSubService__img}>
                                    <Image src={serviceImg1} />
                                </div>
                            </div>
                            <div className={`${style.eachSubService} ${style.third}`}>
                                <div className={style.eachSubService__note}>
                                    <span>Wedding</span>
                                    For your catering services for outdoor events, weddings, birthday parties, engagements and others.
                                </div>
                                <div className={style.eachSubService__img}>
                                    <Image src={serviceImg1} />
                                </div>
                            </div>
                            <div className={`${style.eachSubService} ${style.fourth}`}>
                                <div className={style.eachSubService__note}>
                                    <span>Wedding</span>
                                    For your catering services for outdoor events, weddings, birthday parties, engagements and others. Click the button below to reach out to us, we&apos;ll be happy to render our services.
                                </div>
                                <div className={style.eachSubService__img}>
                                    <Image src={serviceImg1} />
                                </div>
                            </div>
                            <div className={`${style.eachSubService} ${style.fifth}`}>
                                <div className={style.eachSubService__note}>
                                    <span>Wedding</span>
                                    For your catering services for outdoor events, weddings, birthday parties, engagements and others. Click the button below to reach out to us, we&apos;ll be happy to render our services.
                                </div>
                                <div className={style.eachSubService__img}>
                                    <Image src={serviceImg1} />
                                </div>
                            </div>
                            <div className={`${style.eachSubService} ${style.sixth}`}>
                                <div className={style.eachSubService__note}>
                                    <span>Wedding</span>
                                    For your catering services for outdoor events, weddings, birthday parties, engagements and others. Click the button below to reach out to us, we&apos;ll be happy to render our services.
                                </div>
                                <div className={style.eachSubService__img}>
                                    <Image src={serviceImg1} />
                                </div>
                            </div>
                        </div>
                        <div className={style.servicesGroup__note}>
                            For your catering services for outdoor events, weddings, birthday parties, engagements and others. Click the button below to reach out to us, we&apos;ll be happy to render our services.
                        </div>
                    </>
                )
            }

            {
                visibleGroup === 'Learning' && (
                    <>
                        {/* Show only when Learning is clicked */}
                        <div className={style.servicesGroup__learning}>
                            <div className={style.learningContent}>
                                <h2>Enroll for our <br /> <span>catering</span> classes</h2>
                                <p>Apart from providing out healthiest and tastiest meals to
                                    your doorstep, we also offer private lessons for individuals
                                    that are looking to improve their cooking skills, or are trying
                                    to learn a new cuisine. All our classes are taught by an expert
                                    chef who is well experienced in teaching people how to cook.
                                </p>
                                <Link href='https://wa.me/2348176458082'>
                                    <div className={style.learningContent__cta}>
                                        <BiBookHeart />
                                        Enroll Now
                                    </div>
                                </Link>
                            </div>
                            <div className={style.learningImgs}>
                                <div className={style.img1}>
                                    <Image src={caterer1} alt='caterer' />
                                </div>
                                <div className={style.img2}>
                                    <Image src={caterer2} alt='caterer' />
                                </div>
                            </div>
                        </div>
                        <div className={style.servicesGroup__gallery}>
                            <div className={style.scrollContainer}>
                                <div className={style.carouselImgGroup}>
                                    {
                                        galleryImgs.map((each, index) => {
                                            return (
                                                <div className={style.carouselImg} key={index}>
                                                    <Image src={gallery2} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <Link href='/'>
                                <a>View gallery</a>
                            </Link>
                        </div>
                    </>
                )
            }

            <Link href='https://wa.me/2348176458082'>
                <div className={style.servicesGroup__cta}>
                    Connect with us
                    <div className={style.ctaImage}>
                        <Image src={whatsapp} />
                    </div>
                </div>
            </Link>
        </div>
    );
}
