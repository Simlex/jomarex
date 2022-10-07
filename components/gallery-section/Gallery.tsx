import Image from 'next/image';
import React, { useState } from 'react';
import { BsFilterCircle } from 'react-icons/bs';

import style from '../../styles/gallery.module.scss';
import gallery1 from '../../public/gallery/gallery1.jpg';

export interface IGalleryProps {
    onMobile: any;
}

export default function Gallery(props: IGalleryProps) {

    const [dropdownVisible, setDropdownVisible] = useState(false);


    return (
        <div className={props.onMobile ? style.mParent : style.parent}>
            <h2>Our Mouth-Watering Gallery</h2>
            <div className={style.filter}>
                <div className={style.filterBox} onClick={() => { setDropdownVisible(!dropdownVisible) }}>
                    <p>Filter</p>
                    <BsFilterCircle />
                </div>
                {
                    dropdownVisible && (
                        <div className={style.dropdownBox}>
                            <p>Snacks</p>
                            <p>Foods</p>
                            <p>Pastries</p>
                        </div>
                    )
                }
            </div>
            <div className={props.onMobile ? style.mGalleryBox : style.galleryBox}>
                <div className={`${style.galleryItem} ${style.img1}`}>
                    <Image src={gallery1} alt='Food image' />
                </div>
                <div className={`${style.galleryItem} ${style.img2}`}>
                    <Image src={gallery1} alt='Food image' />
                </div>
                <div className={`${style.galleryItem} ${style.img3}`}>
                    <Image src={gallery1} alt='Food image' />
                </div>
                <div className={`${style.galleryItem} ${style.img4}`}>
                    <Image src={gallery1} alt='Food image' />
                </div>
                <div className={`${style.galleryItem} ${style.img4}`}>
                    <Image src={gallery1} alt='Food image' />
                </div>
                <div className={`${style.galleryItem} ${style.img4}`}>
                    <Image src={gallery1} alt='Food image' />
                </div>
                <div className={`${style.galleryItem} ${style.img4}`}>
                    <Image src={gallery1} alt='Food image' />
                </div>
                <div className={`${style.galleryItem} ${style.img4}`}>
                    <Image src={gallery1} alt='Food image' />
                </div>
            </div>
        </div>
    );
}
