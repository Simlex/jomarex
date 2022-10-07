import Image from 'next/image';
import * as React from 'react';

import style from '../../styles/gallery.module.scss';
import gallery1 from '../../public/gallery/gallery1.jpg';

export interface IGalleryProps {
}

export default function Gallery (props: IGalleryProps) {
  return (
    <div className={style.parent}>
        <h2>Our Mouth-Watering Gallery</h2>
        <div className={style.galleryBox}>
            <div className={`${style.galleryItem} ${style.img1}`}>
                <Image src={gallery1} />
            </div>
            <div className={`${style.galleryItem} ${style.img2}`}>
                <Image src={gallery1} />
            </div>
            <div className={`${style.galleryItem} ${style.img3}`}>
                <Image src={gallery1} />
            </div>
            <div className={`${style.galleryItem} ${style.img4}`}>
                <Image src={gallery1} />
            </div>
            <div className={`${style.galleryItem} ${style.img4}`}>
                <Image src={gallery1} />
            </div>
            <div className={`${style.galleryItem} ${style.img4}`}>
                <Image src={gallery1} />
            </div>
            <div className={`${style.galleryItem} ${style.img4}`}>
                <Image src={gallery1} />
            </div>
            <div className={`${style.galleryItem} ${style.img4}`}>
                <Image src={gallery1} />
            </div>
        </div>
    </div>
  );
}
