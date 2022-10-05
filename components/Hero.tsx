import * as React from 'react';
import Image from 'next/image';

import style from "../styles/hero.module.scss";
import HeroBg from "../public/heroBg.jpg";

import { MdOutlineAddShoppingCart } from 'react-icons/md';

export interface IHeroProps {
}

export default function Hero(props: IHeroProps) {
  return (
    <div className={style.parent}>
      <div className={style.bg}>
        <Image src={HeroBg} alt='Background image' />
      </div>
      <div className={style.content}>
        <h2>Let&apos;s be your</h2>
        <span>Baker</span>
        <p className={style.content__info}>Get the best catering services for all your yummie food and for all events.</p>
        <button className={style.heroBtn}>
          <div className={style.heroBtn__icon}>
            <MdOutlineAddShoppingCart />
          </div>
          Book now
        </button>
      </div>
    </div>
  );
}
