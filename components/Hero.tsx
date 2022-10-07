import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import style from "../styles/hero.module.scss";
import HeroBg from "../public/heroBg.jpg";

import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { setInterval } from 'timers/promises';

export interface IHeroProps {
}

export default function Hero(props: IHeroProps) {

  const [keyword, setKeyword] = useState('Baker');
  if (typeof window !== "undefined" && keyword === 'Baker') {
    window.setInterval(() => setKeyword('Caterer'), 4000);
  }
  if (typeof window !== "undefined" && keyword === 'Caterer') {
    window.setInterval(() => setKeyword('Baker'), 4000);
  }
  return (
    <div className={style.parent}>
      <div className={style.container}>
        <div className={style.bg}>
          {/* <Image src={HeroBg} alt='Background image' /> */}
          {/* <img src='../public/heroBg.jpg' alt='Background image' /> */}
        </div>
        <div className={style.content}>
          <h2>Let&apos;s be your</h2>
          <span>{keyword}</span>
          <p className={style.content__info}>Get the best catering services for all your yummie food and for all events.</p>
          <button className={style.heroBtn}>
            <div className={style.heroBtn__icon}>
              <MdOutlineAddShoppingCart />
            </div>
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
