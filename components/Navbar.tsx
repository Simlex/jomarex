import { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import style from '../styles/Navbar.module.scss';
import Logo from '../public/logo.svg';
import LogoDark from '../public/logo_dark.svg';
import Image from "next/image";
import Link from "next/link";
import useResponsive from "../components/useResponsive";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {


    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.scrollY);
        console.log(scrollY);
    }
    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    // function Responsiveness() {
    //     if (typeof window !== "undefined") {
    //         const [onMobile, setOnMobile] = useState<any>(window.matchMedia("(max-width: 768px)").matches);

    //         useEffect(() => {
    //             // Set media query btw 0px and 768px
    //             window.matchMedia("(max-width: 768px)").addEventListener('change', e => {
    //                 setOnMobile(e.matches);
    //             })
    //         })
    //         // Return the state variable
    //         return onMobile;
    //     }
    // }
    const onMobile = useResponsive();
    return (
        <>
            {
                !onMobile && (
                    <div className={`${style.container} ${scrollY > 440 && style.containerFill}`}>
                        <div className={style.container__logo}>
                            {
                                scrollY > 440 && (
                                    <Image src={LogoDark} alt='Logo' />
                                )
                            }
                            {
                                scrollY === 440 || scrollY < 440 && (
                                    <Image src={Logo} alt='Logo' />
                                )
                            }
                        </div>
                        <div className={style.container__navLinks}>
                            <ul>
                                <Link href='/'>
                                    <li className={style.navLink}>Home</li>
                                </Link>
                                <Link href='/'>
                                    <li className={style.navLink}>About Us</li>
                                </Link>
                                <Link href='/'>
                                    <li className={style.navLink}>Our Services</li>
                                </Link>
                                <Link href='/'>
                                    <li className={style.navLink}>Contact Us</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Navbar;