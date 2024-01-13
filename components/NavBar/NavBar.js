import React, {useState} from "react";
import styles from "../Header/Header.module.scss";
import {FiMenu} from "react-icons/fi";
import {FiXCircle} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import {HiArrowSmRight} from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";



export function NavBar() {


    const [menuType, setMenuType] = useState({type: "desktop-menu",buttonName: "Menu"});

    const closeMenu = () => {
        setMenuType({type: "desktop-menu",buttonName: "Menu"});
    }

    const switchMenuType = () => {
        if (menuType.type == 'mobile-menu') {
            setMenuType({type: "desktop-menu",buttonName: "Menu"});
        }
        else if (menuType.type == 'desktop-menu') {
            setMenuType({type: "mobile-menu",buttonName: "Sluiten"});
        }
    }
    //console.log(menuType.type);

    // if (menuType == 'desktop') {
    console.log('....');
    console.log(menuType.type);
    return (
        <nav className={`${styles[menuType.type]} ${styles.nav}`}>
            <a className={styles['mobile-menu-button']} onClick={switchMenuType}  >
            {menuType.type == 'desktop-menu' && <FiMenu  />}
            {menuType.type == 'mobile-menu' && <FiXCircle />}                
                <span>{menuType.buttonName}</span>
            </a>
            <div className={styles.logoWrapper}>
                <Image className={styles.logo} src="https://dev1.maxvanwijnen.nl/docs/images/logo/logo-maxvanwijnen-fotografie-black-280.webp"
                       width={140}
                       height={41}
                       alt="Maxvanwijnen logo" />
            </div>

            <div className={styles['nav-items']}>
                <Link href="/" legacyBehavior><a onClick={closeMenu}>Home</a></Link>
                <Link href="/fotoshoot" legacyBehavior><a onClick={closeMenu} className={styles['fotoshoot']}> Fotoshoots</a></Link>
                <div className={styles['submenu-fotoshoot']}>
                    <Link href="/fotoshoot/kinderen" legacyBehavior><a onClick={closeMenu}>Kinderen</a></Link>
                    <Link href="/fotoshoot/portret" legacyBehavior><a onClick={closeMenu}>Portret</a></Link>
                    <Link href="/fotoshoot/loveshoot" legacyBehavior><a onClick={closeMenu}>Loveshoot</a></Link>
                    <Link href="/fotoshoot/familie" legacyBehavior><a onClick={closeMenu}>Familie</a></Link>
                    <Link href="/fotoshoot/zwangerschap" legacyBehavior><a onClick={closeMenu}>Zwangerschap</a></Link>
                    <Link href="/fotoshoot/trouwen" legacyBehavior><a onClick={closeMenu}>Bruidsreportage</a></Link>
                </div>
                <Link href="/fotostudio" legacyBehavior><a onClick={closeMenu}>Studio</a></Link>
                <Link href="/portfolio" legacyBehavior><a onClick={closeMenu}>Portfolio</a></Link>
                <Link href="/fotografie-workshop" legacyBehavior><a onClick={closeMenu}>Workshops</a></Link>
                <Link href="/prijzen" legacyBehavior><a onClick={closeMenu}>Prijzen</a></Link>
                <Link href="/over-mij" legacyBehavior><a onClick={closeMenu}>Over mij</a></Link>
                <Link href="/contact" legacyBehavior><a onClick={closeMenu}>Contact</a></Link>
            </div>
            <div className={styles['book-button']}>
                <Link href="/boek-een-fotoshoot" legacyBehavior><a onClick={closeMenu}>Boek een fotoshoot <HiArrowSmRight /></a></Link>
            </div>

        </nav>

    );
}

export default NavBar;