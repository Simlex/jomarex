import Head from "next/head";
import { FunctionComponent, ReactElement } from "react";
import Hero from "../components/Hero";
import ServicesContainer from "../components/services-section/servicesContainer";
import style from '../styles/services.module.scss';

interface ServicesProps {
    
}
 
const Services: FunctionComponent<ServicesProps> = ():ReactElement => {
    return ( 
        <div className={style.container}>
            
        <Head>
          <title>Our Services | Jomarex</title>
          <meta name="description" content="Our services page for Jomarex" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero />

        <ServicesContainer />
            
        </div>
     );
}
 
export default Services;