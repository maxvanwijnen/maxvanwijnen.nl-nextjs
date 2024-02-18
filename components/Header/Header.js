import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { HiArrowSmRight } from 'react-icons/hi';
import styles from './Header.module.scss';
import { NavBar } from '../NavBar/NavBar';
import { PhotoshootTileMenu } from '../PhotoshootTileMenu/PhotoshootTileMenu'

import logoImg from '../../public/img/logo/logo-maxvanwijnen-fotografie-black.png';



function HeaderItems({currentPage}) {
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

export default function Header({page, h1='Professionele portretfotografie',text_position = 'left', descr = ''}) {
    //let currentPage  = 'fotoshoot';


    if (!page){
        page = 'home';
    }

    console.log(page)

    let darken_bg = 'none'

    
    switch(page) {
        case 'home':
          text_position='left'
          h1 = 'Professionele portretfotografie'
          descr = 'Welkom op de website van Max van Wijnen Fotografie. Neem de tijd om verder te kijken en ontdek de diverse fotoshoots, van portretten tot gezinsmomenten. Kies jouw perfecte shoot of overweeg een fotoshoot cadeaubon voor een dierbare.'
          darken_bg = 'darken-bg'
          break;
        case 'fotostudio':
            text_position = 'right'
            h1 = 'Fotostudio in Leiden'
            descr  = 'De mooiste zwangerschaps fotografie om deze bijzonder tijd vast te leggen. In de studio komen we tot de mooiste en dierbaarste foto\'s'
            darken_bg = 'darken-bg'
            break;
        case 'fotoshoot':
            text_position = 'left'
            h1 = 'Jouw Fotoshoot'
            descr  = 'Ontdek mijn diverse fotoshoots: portretten, familieshoots, zwangerschaps fotografie en meer. Welke kies jij? Of geef een fotoshoot cadeau aan een dierbare.'
            break;
        case 'fotoshootzwangerschap':
            text_position = 'left'
            h1 = 'Zwangerschaps fotoshoot'
            descr  = 'De mooiste zwangerschapfotografie om deze bijzonder tijd vast te leggen. In de studio komen we tot de mooiste en dierbaarste foto\'s'
            break;
        case 'fotoshootportret':
            text_position='left'
            h1 = 'Portret Fotoshoot'
            descr = 'Mooie portret foto\'s laten maken in de studio of op locatie. Gewoon voor je zelf, de familie, of een zakelijk portret.'
            break;
        case 'fotoshootkinderen':
            text_position = 'left'
            h1 = 'Kinder fotoshoot'
            descr = 'Mooi kinderfotografie om voor altijd te koesteren'
            break;
        case 'fotoshootfamilie':
            text_position='left'
            h1 = 'Familie fotoshoot'
            descr = 'Proffesionele foto\'s met de hele familie laten maken'
            break;
        case 'fotoshootloveshoot':
            text_position='right'
            h1 = 'Fotoshoot loveshoot'
            descr = 'Doe een leuke fotoshoot samen met je geliefde. Dan heb je niet alleen mooie foto`s maar zijn jullie samen een leuke ervaring rijker'
            break;
        case 'fotoshoottrouwen':
            text_position='left'
            h1 = 'Trouw reportage'
            descr = 'Gaan jullie trouwen en zijn jullie opzoek naar een fotograaf? Met liefdef fotografeer ik jullie bruiloft'
            break;
        case 'fotografie-workshop':
            text_position='left'
            h1 = 'Fotografie workshops voor alle niveaus'
            descr = 'Leer je camera kennen in een beginners cursus of leer nabewerken in een photoshop cursus. Alles is mogelijk'
            break;
        case 'boek-een-fotoshoot':
            text_position='right'
            h1 = 'Boek een fotoshoot'
            descr = 'Een leuke fotoshoot gezien en wil je mij graag boeken als jouw fotograaf? Boek direct je shoot via deze pagina'
            break;
        case 'contact':
            text_position = 'left'
            h1 = 'Neem contact op'
            descr = 'Wil je shoot boeken of heb je vragen over mijn diensten? Neem gerust even contact op voor de mogelijkheden'
            break;
        case 'fotoshoot-buiten':
            text_position =  'right'
            h1 = 'Fotoshoot buiten'
            descr = 'Jouw fotoshoot buiten op locatie'
            break;
        case 'fotoshoot-leiden':
            text_position = 'right'
            h1 = 'Fotoshoot Leiden'
            descr = 'Leiden biedt prachtige locaties voor een mooie fotoshoot, maar je bent natuurlijk ook van harte welkom in mijn fotostudio in Leiden'
            break;
        case 'fotoshoot-noordwijk':
            text_position = 'left'
            h1 = 'Fotoshoot Noordwijk'
            descr = 'Noordwijk biedt prachtige locaties voor de mooiste fotoshoot. Kom naar het bos, het strand of een andere locatie, in Noordwijk maken we mooie foto\'s'
            break;
        case 'fotoshoot-strand':
            text_position = 'left'
            h1 = 'Fotoshoot op het strand'
            descr = 'Het strand is een prachtige locatie voor een fotoshoot, lees er hier meer over'
            break;
        case 'over-mij':
            text_position = 'left'
            h1 = 'Over mij als fotograaf'
            descr = 'Fotografie is mijn passie'
            break;
        case 'portfolio':
            text_position = 'left'
            h1 = 'Mijn fotografie portfolio'
            descr = 'Bekijk hier mijn fotografie portfolio. Heb je een shoot bij mij gedaan en vind je het leuk ook op mijn portfolio te staan, leuk!  Maar niets hoeft natuurlijk'
            break;
        case 'prijzen':
            text_position = 'left'
            h1 = 'Fotografie prijzen'
            descr = 'Lees meer over de prijzen van mijn fotografie diensten'
            break;

        
        
        

        default:
          // code block
    }
    
    page = page.includes('#') ? page.substring(0, page.indexOf('#')) : page;
    
    return (
        <header className={`${styles[page]} ${styles.header}`}>
            <NavBar />
            <div className={`${styles[text_position]} ${styles.container}`}>
                <div className={`${styles.textblock}`}>
                    <h1 className={styles['main-title']}>{h1}</h1>
                    <div className={`${styles.descr} ${styles[darken_bg]}`}>{descr}</div>
                    {/* <div className={styles['call-to-action']}>Lees meer</div> */}

                </div>
                {/*<Breadcrumbs />*/}
            </div>
        </header>

    );

}
//<div className={styles['filter']}></div>