import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import style from "../styles/hero.module.scss";
import HeroBg from "../public/heroBg.jpg";

import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { setInterval } from 'timers/promises';
import Link from 'next/link';

export interface IHeroProps {
}

export default function Hero(props: IHeroProps) {

  const [keyword, setKeyword] = useState(false);
  useEffect(() => {
    window.setTimeout(() => setKeyword(!keyword), 4000);
  }, [keyword])
  // if (typeof window !== "undefined" && keyword === 'Caterer') {
  //   window.setInterval(() => setKeyword('Baker'), 4000);
  // }
  return (
    <div className={style.parent}>
      <div className={style.container}>
        <div className={style.bg}>
          {/* <Image src={HeroBg} alt='Background image' /> */}
          {/* <img src='../public/heroBg.jpg' alt='Background image' /> */}
        </div>
        <div className={style.content}>
          <h2>Let&apos;s be your</h2>
          <span>{keyword ? 'Baker' : 'Caterer'}</span>
          {/* <span>{keyword}</span> */}
          {/* <span>Baker</span> */}
          <p className={style.content__info}>Get the best catering services for all your yummie food and for all events.</p>
          <Link href='https://wa.me/2348176458082'>
            <button className={style.heroBtn}>
              <div className={style.heroBtn__icon}>
                <MdOutlineAddShoppingCart />
              </div>
              Book now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
