import { FunctionComponent, ReactElement } from "react";
import style from '../../styles/contact.module.scss';

import { IoMailOutline, IoCall, IoLocationSharp } from 'react-icons/io5';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';
import whatsappImg from '../../public/whatsapp.png';
import Image from "next/image";
import Link from "next/link";

interface ContactAreaProps {

}

const ContactArea: FunctionComponent<ContactAreaProps> = (): ReactElement => {
    return (
        <div className={style.sectionContainer}>
            <div className={style.sectionContainer__contact}>
                <h1>Contact Us</h1>
                <p>Feel free to contact us any time. We will get back to you as soon as we can.</p>
                <Link href='https://wa.me/2348176458082'>
                    <div className={style.whatsappBox}>
                        <div className={style.whatsappBox__img}>
                            <Image src={whatsappImg} />
                        </div>
                        <p>via whatsapp</p>
                        <FiChevronRight />
                    </div>
                </Link>
            </div>
            <div className={style.sectionContainer__info}>
                <h2>Info</h2>
                <ul>
                    <li><IoMailOutline /> victoria@gmail.com</li>
                    <li><IoCall /> +234 807 645 8082</li>
                    <li><IoLocationSharp /> Salvation crescent, Agric, Lagos.</li>
                    <li><AiOutlineFieldTime /> Available</li>
                </ul>
            </div>
        </div>
    );
}

export default ContactArea;