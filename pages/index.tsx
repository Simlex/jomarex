import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
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
    </div>
  )
}

export default Home
