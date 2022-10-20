import { FunctionComponent, ReactElement } from "react";
import style from '../styles/bottomNav.module.scss';

import useResponsive from '../components/useResponsive';

import { GoHome } from 'react-icons/go';
import { TbMessageCircle } from 'react-icons/tb';
import { MdOutlineContactSupport, MdOutlineFastfood } from 'react-icons/md';
import Link from "next/link";
import { useRouter } from "next/router";

interface BottomNavProps {

}

const BottomNav: FunctionComponent<BottomNavProps> = (): ReactElement => {

    const onMoblie = useResponsive();

    const route = useRouter();
    const currentRoute = route.pathname;
    console.log(currentRoute);

    return (
        <>
            {
                onMoblie && (
                    <div className={style.container}>
                        <div className={style.box}>
                            <Link href='/'>
                                <div className={currentRoute === '/' ? `${style.links} ${style.linkActive}` : style.links}>
                                    <GoHome />
                                    Home
                                </div>
                            </Link>
                            <Link href='/about'>
                                <div className={currentRoute === '/about' ? `${style.links} ${style.linkActive}` : style.links}>
                                    <MdOutlineContactSupport />
                                    About us
                                </div>
                            </Link>
                            <Link href='/services'>
                                <div className={currentRoute === '/services' ? `${style.links} ${style.linkActive}` : style.links}>
                                    <MdOutlineFastfood />
                                    Our services
                                </div>
                            </Link>
                            <Link href='/contact'>
                                <div className={currentRoute === '/contact' ? `${style.links} ${style.linkActive}` : style.links}>
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