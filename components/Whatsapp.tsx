import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";

import style from '../styles/whatsapp.module.scss';

import whatsapp from '../public/whatsapp.png';

interface WhatsappProps {

}

const Whatsapp: FunctionComponent<WhatsappProps> = (): ReactElement => {
    return (
        <div className={style.wParent}>
            <div className={style.whatsappIcon}>
                <Image src={whatsapp} />
            </div>
        </div>
    );
}

export default Whatsapp;