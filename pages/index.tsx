import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CardContainer from '../components/card-section/CardContainer'
import Gallery from '../components/gallery-section/Gallery'
import Hero from '../components/Hero'
import Whatsapp from '../components/Whatsapp'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage | Jomarex</title>
        <meta name="description" content="Homepage for Jomarex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <section>
        <CardContainer />
      </section>
      <section>
        <Gallery />
      </section>
      <Whatsapp />
    </div>
  )
}

export default Home
