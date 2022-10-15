import { FunctionComponent, ReactElement } from "react";
import style from '../styles/bottomNav.module.scss';

import useResponsive from '../components/useResponsive';

import { GoHome } from 'react-icons/go';
import { TbMessageCircle } from 'react-icons/tb';
import { MdOutlineContactSupport, MdOutlineFastfood } from 'react-icons/md';
import Link from "next/link";
interface BottomNavProps {

}

const BottomNav: FunctionComponent<BottomNavProps> = (): ReactElement => {

    const onMoblie = useResponsive();

    return (
        <>
            {
                onMoblie && (
                    <div className={style.container}>
                        <div className={style.box}>
                            <Link href='/'>
                                <div className={style.links}>
                                    <GoHome />
                                    Home
                                </div>
                            </Link>
                            <Link href='/about'>
                                <div className={style.links}>
                                    <MdOutlineContactSupport />
                                    About us
                                </div>
                            </Link>
                            <Link href='/services'>
                                <div className={style.links}>
                                    <MdOutlineFastfood />
                                    Our services
                                </div>
                            </Link>
                            <Link href='/contact'>
                                <div className={style.links}>
                                    <TbMessageCircle />
                                    Contact us
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default BottomNav;