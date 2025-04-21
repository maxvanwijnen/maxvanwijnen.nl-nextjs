import Head from 'next/head';
import TextContent from "../../components/TextContent/TextContent";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import Link from "next/link";
import styles from '../../components/TextContent/TextContent.module.scss';

const heroImg = "https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-strand-Noordwijk.webp";

export default function Fashion() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Max van Wijnen Fotografie",
        "url": "https://www.maxvanwijnen.nl",
        "image": "https://www.maxvanwijnen.nl/logo192.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sixlaan 4",
            "addressLocality": "Hillegom",
            "postalCode": "2182 TV",
            "addressCountry": "NL",
        },
        "telephone": "+31612345678",
        "priceRange": "$$",
    };

    return (
        <div>
            <Head>
                <title>Fashion Fotograaf - Max van Wijnen</title>
                <meta name="description" content="Professionele fashion fotograaf voor merken, modellen en campagnes. Unieke fashion shoots op locatie of in de studio. Bekijk het portfolio!" />
                <meta name="keywords" content="fashion fotograaf, modefotograaf, fashion shoot, lookbook, campagne, editorial, modellen, merken, studio, locatie" />
                <meta name="author" content="Max van Wijnen" />
                <meta name="robots" content="index, follow" />
                {/* Geo tags */}
                <meta name="geo.region" content="NL-ZH"/>
                <meta name="geo.placename" content="Hillegom"/>
                <meta name="geo.position" content="52.2869;4.5833"/>
                <meta name="ICBM" content="52.2869, 4.5833"/>
                {/* Open Graph tags */}
                <meta property="og:title" content="Fashion Fotograaf | Professionele Fashion Shoots & Modelfotografie"/>
                <meta property="og:description" content="Fashion fotograaf voor high-end fashion shoots, lookbooks en campagnes. Gespecialiseerd in modelfotografie en fashion branding."/>
                <meta property="og:image" content="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp"/>
                <meta property="og:url" content="https://www.maxvanwijnen.nl/fotoshoot/fashion"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="Max van Wijnen Fotografie"/>
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Fashion Fotograaf | Professionele Fashion Shoots & Modelfotografie"/>
                <meta name="twitter:description" content="Fashion fotograaf voor high-end fashion shoots, lookbooks en campagnes. Gespecialiseerd in modelfotografie en fashion branding."/>
                <meta name="twitter:image" content="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp"/>
                {/* Canonical URL */}
                <link rel="canonical" href="https://www.maxvanwijnen.nl/fotoshoot/fashion"/>
                {/* JSON-LD structured data */}
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Head>
            <main className={styles.fashionMain}>
                <section className={styles.fashionIntroSection}>
                    <h1 className={styles.fashionHeroTitle} style={{marginTop:0}}>Fashion fotograaf voor merken, modellen & campagnes</h1>
                    <p className={styles.fashionIntroText}>
                        Op zoek naar een professionele fashion fotograaf die jouw merk, collectie of lookbook krachtig in beeld brengt? Met jarenlange ervaring in fashion- en modelfotografie help ik merken, modellen en designers aan unieke beelden die opvallen. Of het nu gaat om een editorial shoot, campagne of creatieve samenwerking: ik zorg voor stijlvolle fotografie die jouw verhaal vertelt en indruk maakt.
                    </p>
                    <ul className={styles.specialisatiesPills}>
                        <li>Fashion shoots voor merken, modellen & influencers</li>
                        <li>Lookbook fotografie</li>
                        <li>Campagne fotografie</li>
                        <li>Editorial en creatieve samenwerkingen</li>
                    </ul>
                </section>
                <section className={styles.fashionGridSection}>
                    <div className={styles.fashionGridRow}>
                        <div className={styles.fashionGridImg}>
                            <img src="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp" alt="Fashion fotografie op locatie" width="400" height="270" />
                        </div>
                        <div className={styles.fashionGridText}>
                            <h2>Fashion fotografie op locatie</h2>
                            <p>Fashion shoots op locatie geven je beelden een unieke sfeer. Of je nu kiest voor een urban setting, het strand of een bijzondere binnenlocatie, samen creëren we een shoot die past bij jouw stijl en merkidentiteit.</p>
                        </div>
                    </div>
                    <div className={`${styles.fashionGridRow} ${styles.reverse}`}> 
                        <div className={styles.fashionGridText}>
                            <h2>Professionele modelfotografie in de studio</h2>
                            <p>In de studio heb ik volledige controle over licht, styling en sfeer. Dit maakt het mogelijk om jouw fashion collectie of branding campagne op het hoogste niveau vast te leggen. Ideaal voor lookbooks, campagnes en portfolio shoots.</p>
                        </div>
                        <div className={styles.fashionGridImg}>
                            <img src="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio-lichte-achtergrond.webp" alt="Professionele modelfotografie in de studio" width="400" height="270" />
                        </div>
                    </div>
                </section>
                <section className={styles.fashionUspSection}>
                    <h2>Waarom kiezen voor Max van Wijnen als fashion fotograaf?</h2>
                    <ul className={styles.uspList}>
                        <li>Creatief en professioneel</li>
                        <li>Veel ervaring met fashion, modellen en merken</li>
                        <li>Snelle levering en duidelijke communicatie</li>
                        <li>Samenwerking met stylisten, visagisten en modellenbureau&apos;s mogelijk</li>
                    </ul>
                    <p>Wil je meer weten of direct een fashion shoot boeken? <Link href="/contact">Neem contact op</Link> of bekijk mijn <Link href="/portfolio">portfolio</Link> voor inspiratie!</p>
                </section>
                <ImageRow
                    images={[
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp', alt:'Fashion fotograaf blouses'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-utrecht.webp', alt:'Model fotograaf'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-strand-Noordwijk.webp', alt:'Outdoor fashion fotografie'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-blouses.webp', alt:'Modefotograaf blouse'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio-lichte-achtergrond.webp', alt:'Fashion fotografie in de studio'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-soluzione.webp', alt:'Model fotografie'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-utrecht-gracht.webp', alt:'Fashion foto'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio.webp', alt:'Fashion fotograaf'}
                    ]}
                >Bekijk hier enkele voorbeelden van eerdere fashionfotoshoots.</ImageRow>
            </main>
        </div>
    );
}