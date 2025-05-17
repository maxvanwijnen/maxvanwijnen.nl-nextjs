import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { HiArrowSmRight } from 'react-icons/hi';
import styles from './Header.module.scss';
import { NavBar } from '../NavBar/NavBar';
import { PhotoshootTileMenu } from '../PhotoshootTileMenu/PhotoshootTileMenu'
import BookingFormModal from '../BookingForm/BookingFormModal';

import logoImg from '../../public/img/logo/logo-maxvanwijnen-fotografie-black.png';

// Mapping van page naar header afbeelding
const headerImages = {
  home: '/img/header/Kinderfotografie-header.webp',
  fotoshootfamilie: '/img/header/familiefotografie_header.webp',
  fotoshootkinderen: '/img/header/Kinderfotografie-header.webp',
  fotoshootloveshoot: 'https://dev1.maxvanwijnen.nl/docs/images/header/loveshoot-fotoshoot.webp',
  fotoshoottrouwen: 'https://dev1.maxvanwijnen.nl/docs/images/header/bruidsreportage.webp',
  fotoshootzwangerschap: 'https://dev1.maxvanwijnen.nl/docs/images/header/zwangerschapsfotografie.webp',
  fashionfotograaf: 'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp',
  fotoshootfashion: 'https://dev1.maxvanwijnen.nl/docs/images/header/fashion-mode-fotografie.webp',
  overmij: 'https://dev1.maxvanwijnen.nl/docs/images/header/fotoshoot-op-het-strand.webp',
  boekeenfotoshoot: 'https://dev1.maxvanwijnen.nl/docs/images/header/fotoshoot-op-het-strand.webp',
  fotoshootportret: 'https://dev1.maxvanwijnen.nl/docs/images/header/portretfotografie.webp',
  prijzen: 'https://dev1.maxvanwijnen.nl/docs/images/header/zwangerschapsfotografie.webp',
  // fallback
  default: '/img/header/Kinderfotografie-header.webp',
};

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
    let showPhotoTileMenu = false


    switch(page) {
        case 'home':
          text_position='left'
          h1 = 'Professionele portretfotografie'
          descr = 'Welkom op de website van Max van Wijnen Fotografie. Neem de tijd om verder te kijken en ontdek de diverse fotoshoots, van portretten tot gezinsmomenten. Kies jouw perfecte shoot of overweeg een fotoshoot cadeaubon voor een dierbare.'
          darken_bg = 'darken-bg'
          showPhotoTileMenu = false
          break;
        case 'fotostudio':
            text_position = 'right'
            h1 = 'Fotostudio in Leiden'
            descr  = 'In de studio weten we een aantal dingen zeker, we hebben geen last van slecht weer, het licht is altijd mooi, en we kunnen ook \'s avonds fotograferen. Zie ik je binnenkort in mijn fotostudio?'
            darken_bg = 'darken-bg'
            showPhotoTileMenu = false
            break;
        case 'fotoshoot':
            text_position = 'left'
            h1 = 'Jouw Fotoshoot'
            descr  = 'Ontdek mijn diverse fotoshoots: portretten, familieshoots, zwangerschaps fotografie en meer. Welke kies jij? Of geef een fotoshoot cadeau aan een dierbare.'
            showPhotoTileMenu = false
            break;
        case 'fotoshootzwangerschap':
            text_position = 'left'
            h1 = 'Zwangerschaps fotoshoot'
            descr  = 'De mooiste zwangerschapfotografie om deze bijzonder tijd vast te leggen. In de studio komen we tot de mooiste en dierbaarste foto\'s'
            showPhotoTileMenu = false
            break;
        case 'fotoshootportret':
            text_position='left'
            h1 = 'Portret Fotoshoot'
            descr = 'Mooie portret foto\'s laten maken in de studio of op locatie. Gewoon voor je zelf, de familie, of een zakelijk portret.'
            showPhotoTileMenu = false
            break;
        case 'fotoshootkinderen':
            text_position = 'left'
            h1 = 'Kinder fotoshoot'
            descr = 'Mooi kinderfotografie om voor altijd te koesteren'
            showPhotoTileMenu = false
            break;
        case 'fotoshootfashion':
            text_position='left'
          h1 = 'Fashion fotograaf voor merken, modellen & campagnes'
          descr = 'Professionele fashion fotograaf voor merken, modellen en campagnes. Unieke fashion shoots op locatie of in de studio.'
          showPhotoTileMenu = false
          break;
        case 'fotoshootfamilie':
            text_position='left'
            h1 = 'Familie fotoshoot'
            descr = 'Proffesionele foto\'s met de hele familie laten maken'
            showPhotoTileMenu = false
            break;
        case 'fotoshootloveshoot':
            text_position='right'
            h1 = 'Fotoshoot loveshoot'
            descr = 'Doe een leuke fotoshoot samen met je geliefde. Dan heb je niet alleen mooie foto`s maar zijn jullie samen een leuke ervaring rijker'
            showPhotoTileMenu = false
            break;
        case 'fotoshoottrouwen':
            text_position='left'
            h1 = 'Trouw reportage'
            descr = 'Gaan jullie trouwen en zijn jullie opzoek naar een fotograaf? Met liefdef fotografeer ik jullie bruiloft'
            showPhotoTileMenu = false
            break;
        case 'fotografie-workshop':
            text_position='left'
            h1 = 'Fotografie workshops voor alle niveaus'
            descr = 'Leer je camera kennen in een beginners cursus of leer nabewerken in een photoshop cursus. Alles is mogelijk'
            showPhotoTileMenu = false
            break;
        case 'boek-een-fotoshoot':
            text_position='right'
            h1 = 'Boek een fotoshoot'
            descr = 'Een leuke fotoshoot gezien en wil je mij graag boeken als jouw fotograaf? Boek direct je shoot via deze pagina'
            showPhotoTileMenu = false
            break;
        case 'contact':
            text_position = 'left'
            h1 = 'Neem contact op'
            descr = 'Wil je shoot boeken of heb je vragen over mijn diensten? Neem gerust even contact op voor de mogelijkheden'
            showPhotoTileMenu = false
            break;
        case 'fotoshoot-buiten':
            text_position =  'right'
            h1 = 'Fotoshoot buiten'
            descr = 'Jouw fotoshoot buiten op locatie'
            showPhotoTileMenu = true
            break;
        case 'fotoshoot-leiden':
            text_position = 'right'
            h1 = 'Fotoshoot Leiden'
            descr = 'Leiden biedt prachtige locaties voor een mooie fotoshoot, maar je bent natuurlijk ook van harte welkom in mijn fotostudio in Leiden'
            showPhotoTileMenu = true
            break;
        case 'fotoshoot-noordwijk':
            text_position = 'left'
            h1 = 'Fotoshoot Noordwijk'
            descr = 'Noordwijk biedt prachtige locaties voor de mooiste fotoshoot. Kom naar het bos, het strand of een andere locatie, in Noordwijk maken we mooie foto\'s'
            showPhotoTileMenu = true
            break;
        case 'fotoshoot-strand':
            text_position = 'left'
            h1 = 'Fotoshoot op het strand'
            descr = 'Het strand is een prachtige locatie voor een fotoshoot, lees er hier meer over'
            showPhotoTileMenu = true
            break;
        case 'fotoshoot-hillegom':
            text_position = 'right'
            h1 = 'Fotograaf in Hillegom'
            descr = 'Als professioneel fotograaf in Hillegom leg ik jouw mooiste momenten vast. Van portretfotografie tot familiefotoshoots in de prachtige Bollenstreek.'
            showPhotoTileMenu = true
            break;
        case 'over-mij':
            text_position = 'left'
            h1 = 'Over mij als fotograaf'
            descr = 'Fotografie is mijn passie'
            showPhotoTileMenu = false
            break;
        case 'portfolio':
            text_position = 'left'
            h1 = 'Mijn fotografie portfolio'
            descr = 'Bekijk hier mijn fotografie portfolio. Heb je een shoot bij mij gedaan en vind je het leuk ook op mijn portfolio te staan, leuk!  Maar niets hoeft natuurlijk'
            showPhotoTileMenu = false
            break;
        case 'prijzen':
            text_position = 'left'
            h1 = 'Fotografie prijzen'
            descr = 'Lees meer over de prijzen van mijn fotografie diensten'
            showPhotoTileMenu = false
            break;
        default:
          // code block
    }


    page = page.includes('#') ? page.substring(0, page.indexOf('#')) : page;
    
    const [modalOpen, setModalOpen] = React.useState(false);

    // Bepaal de juiste afbeelding
    const normalizedPage = (page || '').replace(/[-_]/g, '').toLowerCase();
    const headerImg = headerImages[normalizedPage] || headerImages.default;

    // Optioneel: donkere overlay alleen bij lichte afbeeldingen
    // Overlay overal uitgeschakeld
    const showOverlay = false;

    return (
        <div className={styles.headerOuter}>
          <header className={`${styles[page]} ${styles.header}`} style={{position:'relative', overflow:'hidden'}}>
            {/* Header achtergrondafbeelding als Next.js Image */}
            <Image
              src={headerImg}
              alt="Header achtergrond foto"
              fill
              style={{objectFit:'cover', zIndex:0}}
              priority
              sizes="100vw"
            />
            {/* Donkere overlay alleen tonen indien nodig */}
            {showOverlay && (
              <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.35)', zIndex:1}}/>
            )}
            <NavBar />
            <div className={`${styles[text_position]} ${styles.container}`} style={{position:'relative', zIndex:2}}>
                <div className={`${styles.textblock}`}>
                    <h1 className={styles['main-title']}>{h1}</h1>
                    <div className={`${styles.descr} ${styles[darken_bg]}`}>{descr}</div>
                    <div className={styles.bookButtonWrap}>
                      <button onClick={() => setModalOpen(true)} className={styles.bookButton}>
                        Boek een fotoshoot
                        <HiArrowSmRight style={{marginLeft:8, verticalAlign:'middle'}}/>
                      </button>
                    </div>
                </div>
                {/*<Breadcrumbs />*/}
            </div>
          </header>
          <BookingFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );

}
//<div className={styles['filter']}></div>