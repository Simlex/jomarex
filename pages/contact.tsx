import Head from 'next/head';
import * as React from 'react';
import ContactArea from '../components/contact-section/contactArea';
import Hero from '../components/Hero';
import style from '../styles/contact.module.scss';

export interface IContactProps {
}

export default function Contact (props: IContactProps) {
  return (
    <div className={style.container}>
    <Head>
      <title>Contact us | Jomarex</title>
      <meta name="description" content="Homepage for Jomarex" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero />
    <ContactArea />
    </div>
  );
}
