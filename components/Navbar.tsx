import { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";

import style from '../styles/Navbar.module.scss';
import Logo from '../public/logo.svg';
import LogoDark from '../public/logo_dark.svg';
import Image from "next/image";
import Link from "next/link";

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
    return (
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
    );
}

export default Navbar;