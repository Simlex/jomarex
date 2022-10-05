import { FunctionComponent, ReactElement } from "react";

import style from '../styles/Navabr.module.scss';
import Logo from '../public/logo.svg';
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {
    return (
        <div className={style.container}>
            <div className={style.container__logo}>
                <Image src={Logo} alt='Logo' />
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