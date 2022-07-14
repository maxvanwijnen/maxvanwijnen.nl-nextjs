import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { HiArrowSmRight } from 'react-icons/hi';
import styles from '../styles/Header.module.css';



import logoImg from '../public/img/logo/logo-maxvanwijnen-fotografie-black.png';

/*
function Breadcrumbs(props) {

    const breadCrumbs = useBreadcrumbs();

    //console.log(breadCrumbs[breadCrumbs.length-1].match.pathname.substr(1).replace("/","-"));
    return (
        <div className="bread-crumbs">
            {breadCrumbs.map((breadCrumb) =>
                <Link to={breadCrumb.breadcrumb.key} key={breadCrumb.breadcrumb.key}>{breadCrumb.breadcrumb.props.children}</Link>
            )}
        </div>
    );
}
*/

function NavBar() {


    const [menuType, setMenuType] = React.useState({type: "desktop-menu",buttonName: "Menu"});

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
                <Image className={styles.logo} src="/../public/img/logo/logo-maxvanwijnen-fotografie-black.png"
                       width={140}
                       height={35}
                       alt="Maxvanwijnen logo" />
            </div>

            <div className={styles['nav-items']}>
                <Link href="/"><a onClick={closeMenu}>Home</a></Link>
                <Link href="/fotoshoot" className={styles.fotoshoot} ><a onClick={closeMenu}> Fotoshoots</a></Link>
                <div className={styles['submenu-fotoshoot']}>
                    <Link href="/fotoshoot/kinderen" ><a onClick={closeMenu}>Kinderen</a></Link>
                    <Link href="/fotoshoot/portret"><a  onClick={closeMenu}>Portret</a></Link>
                    <Link href="/fotoshoot/loveshoot"><a onClick={closeMenu}>Loveshoot</a></Link>
                </div>
                <Link href="/portfolio"><a onClick={closeMenu}>Portfolio</a></Link>
                <Link href="/over-mij"><a onClick={closeMenu}>Over mij</a></Link>
                <Link href="/contact"><a onClick={closeMenu}>Contact</a></Link>
            </div>
            <div className={styles['book-button']}>
                <Link href="/booking"><a onClick={closeMenu}>Boek een fotoshoot <HiArrowSmRight /></a></Link>
            </div>

        </nav>

    );
}

function HeaderItems(props) {
    console.log('++++');
    const breadCrumb = useBreadcrumbs();

    if (breadCrumb.length > 1){

        if (breadCrumb[1].match.pathname != '/preview') {
            return (
                <>
                    {/*<NavMobile/>*/}
                    <Header page={props.currentPage}/>
                </>
            );
        }
        else {
            return (<></>);
        }

    }
    else {

        return (
            <>
               {/* <NavMobile/>*/}
                <Header page={props.currentPage}/>
            </>
        );
    }
}

export default function Header(props) {
    //let currentPage  = 'fotoshoot';

    console.log('+++++'+props.page)
    return (
        <header className={`${props.page} ${styles.header}`}>
            <div className={styles['container']}>
                <NavBar />
                {/*<Breadcrumbs />*/}
            </div>

        </header>

    );

}