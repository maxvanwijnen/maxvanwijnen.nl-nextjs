import React, {useState} from "react";
import styles from "../Header/Header.module.scss";
import {FiMenu} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import {HiArrowSmRight} from "react-icons/hi";


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
                <FiMenu  /> <span>{menuType.buttonName}</span>
            </a>
            <div className={styles.logoWrapper}>
                <Image className={styles.logo} src="https://dev1.maxvanwijnen.nl/docs/images/logo/logo-maxvanwijnen-fotografie-black-280.webp"
                       width={140}
                       height={41}
                       alt="Maxvanwijnen logo" />
            </div>

            <div className={styles['nav-items']}>
                <Link href="/"><a onClick={closeMenu}>Home</a></Link>
                <Link href="/fotoshoot"><a onClick={closeMenu} className={styles['fotoshoot']}> Fotoshoots</a></Link>
                <div className={styles['submenu-fotoshoot']}>
                    <Link href="/fotoshoot/kinderen" ><a onClick={closeMenu}>Kinderen</a></Link>
                    <Link href="/fotoshoot/portret"><a onClick={closeMenu}>Portret</a></Link>
                    <Link href="/fotoshoot/loveshoot"><a onClick={closeMenu}>Loveshoot</a></Link>
                    <Link href="/fotoshoot/familie"><a onClick={closeMenu}>Familie</a></Link>
                    <Link href="/fotoshoot/zwangerschap"><a onClick={closeMenu}>Zwangerschap</a></Link>
                    <Link href="/fotoshoot/trouwen"><a onClick={closeMenu}>Bruidsreportage</a></Link>
                </div>
                <Link href="/fotostudio"><a onClick={closeMenu}>Studio</a></Link>
                <Link href="/portfolio"><a onClick={closeMenu}>Portfolio</a></Link>
                <Link href="/prijzen"><a onClick={closeMenu}>Prijzen</a></Link>
                <Link href="/over-mij"><a onClick={closeMenu}>Over mij</a></Link>
                <Link href="/contact"><a onClick={closeMenu}>Contact</a></Link>
            </div>
            <div className={styles['book-button']}>
                <Link href="/boek-een-fotoshoot"><a onClick={closeMenu}>Boek een fotoshoot <HiArrowSmRight /></a></Link>
            </div>

        </nav>

    );
}

export default NavBar;