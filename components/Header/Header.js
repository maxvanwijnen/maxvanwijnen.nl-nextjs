import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { HiArrowSmRight } from 'react-icons/hi';
import styles from './Header.module.scss';
import { NavBar } from '../NavBar/NavBar';


import logoImg from '../../public/img/logo/logo-maxvanwijnen-fotografie-black.png';



function HeaderItems({currentPage}) {
    console.log('++++');
    const breadCrumb = useBreadcrumbs();

    if (breadCrumb.length > 1){

        if (breadCrumb[1].match.pathname != '/preview') {
            return (
                <>
                    {/*<NavMobile/>*/}
                    <Header page={currentPage}/>
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
                <Header page={currentPage}/>
            </>
        );
    }
}

export default function Header({page}) {
    //let currentPage  = 'fotoshoot';


    if (!page){
        page = 'home';
    }
    
    page = page.includes('#') ? page.substring(0, page.indexOf('#')) : page;
    
    return (
        <header className={`${styles[page]} ${styles.header}`}>
            <div className={styles['container']}>
                <NavBar />
                <div className={styles['main-title']}>Professionele portretfotografie <br/>&<br/> workshops</div>

                {/*<Breadcrumbs />*/}
            </div>
            <div className={styles['filter']}></div>

        </header>

    );

}