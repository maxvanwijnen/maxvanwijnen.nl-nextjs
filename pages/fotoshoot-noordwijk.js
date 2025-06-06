import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import IntroTextImg from "../components/IntroTextImg/IntroTextImg";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import Head from 'next/head';
import Faq from '../components/FAQ/Faq';
import Link from 'next/link';
import RelatedPages from '../components/RelatedPages/RelatedPages';
import HeroLanding from '../components/HeroLanding/HeroLanding';

const FotoshootNoordwijk = () => {

    const relatedPages = [
        {text : "Zwangerschapsfotoshoot in Leiden",link : "/fotoshoot/zwangerschap"},
        {text : "Fotostudio in Leiden",link : "/fotostudio"},
        {text : "Fotograaf in Noordwijk",link : "/fotoshoot-noordwijk"},
        {text : "Fotoshoot op het strand",link : "/fotoshoot-strand"}
    ]

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Max van Wijnen Fotografie Noordwijk",
        "image": "https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp",
        "description": "Professionele fotograaf in Noordwijk, gespecialiseerd in zwangerschapsfotografie, kinderfotografie en familiefotografie",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Noordwijk",
            "addressRegion": "Zuid-Holland",
            "addressCountry": "NL"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.2333",
            "longitude": "4.4333"
        },
        "url": "https://www.maxvanwijnen.nl/fotoshoot-noordwijk",
        "telephone": "+31628812008",
        "priceRange": "€€",
        "areaServed": ["Noordwijk", "Noordwijkerhout", "Katwijk", "Voorhout", "Sassenheim"],
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "52.2333",
                "longitude": "4.4333"
            },
            "geoRadius": "10000"
        },
        "makesOffer": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Zwangerschapsfotografie"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Kinderfotografie"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Familiefotografie"
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Fotograaf Noordwijk | Professionele Fotoshoot in Noordwijk | Max van Wijnen</title>
                <meta name="description"
                      content="Op zoek naar een professionele fotograaf in Noordwijk? Specialist in zwangerschapsfotografie, kinderfotografie en familiefotografie. Bekijk mijn portfolio en boek direct."/>
                <meta name="keywords"
                      content="fotograaf noordwijk, fotoshoot noordwijk, zwangerschapsfotografie noordwijk, kinderfotografie noordwijk, familiefotografie noordwijk, portretfotografie noordwijk"/>
                <meta name="author" content="Max van Wijnen"/>
                <meta name="robots" content="index, follow"/>
                
                {/* Geo tags */}
                <meta name="geo.region" content="NL-ZH"/>
                <meta name="geo.placename" content="Noordwijk"/>
                <meta name="geo.position" content="52.2333;4.4333"/>
                <meta name="ICBM" content="52.2333, 4.4333"/>
                
                {/* Open Graph tags */}
                <meta property="og:title" content="Fotograaf Noordwijk | Professionele Fotoshoot in Noordwijk"/>
                <meta property="og:description"
                      content="Professionele fotograaf in Noordwijk, gespecialiseerd in zwangerschapsfotografie, kinderfotografie en familiefotografie"/>
                <meta property="og:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp"/>
                <meta property="og:url" content="https://www.maxvanwijnen.nl/fotoshoot-noordwijk"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="Max van Wijnen Fotografie"/>
                
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Fotograaf Noordwijk | Professionele Fotoshoot in Noordwijk"/>
                <meta name="twitter:description"
                      content="Professionele fotograaf in Noordwijk, gespecialiseerd in zwangerschapsfotografie, kinderfotografie en familiefotografie"/>
                <meta name="twitter:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp"/>
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://www.top-fotografen.nl/fotograaf/max-van-wijnen"/>
                
                {/* JSON-LD structured data */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>
            <section>
                <HeroLanding
                    title="Fotoshoot Noordwijk: jouw verhaal aan zee"
                    description="Met het strand, de zee en de duinen als decor leg ik jouw mooiste momenten vast. Boek nu een fotoshoot in Noordwijk voor pure, spontane beelden!"
                    ctaLabel="Bekijk mogelijkheden"
                    ctaHref="#mogelijkheden"
                    usps={["Strand & duinen", "Persoonlijke aanpak", "Snelle levering", "Professionele nabewerking"]}
                    showCarousel={true}
                />
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/content-long/fotoshoot-leeuwenhorstbos-noordwijk.webp"
                    cssClass="Kinderen"
                    imgAlt = "Fotoshoot Leeuwenhorstbos in Noordwijk"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Fotoshoot locaties in Noordwijk"
                    isFirstArticle={false}
                >
                    Een mooie locatie voor een fotoshoot in Noordwijk is het Leeuwenhorstbos. Ik kom hier graag vanwege de mooie plekjes en paden. Er is altijd wel een plekje te vinden waar het licht mooi is. Het bos is niet te groot waardoor we niet ver hoeven te lopen, maar toch biedt het alle mogelijkeheden voor een mooie fotoshoot.
                </TxtImg2Column>

                <TextImg
                    title="De juiste voorbereiding voor een perfecte familieshoot"
                    img="https://dev1.maxvanwijnen.nl/docs/images/content-long/familie-fotoshoot.webp"
                >
                    <h3>Andere locaties voor een fotoshoot in Noordwijk</h3>
                    <p>Voor portretten zijn natuurlijk alle locaties mogelijk. Een groene, bosrijke omgeving biedt een sfeervolle achtergrond, maar ook het strand en de duinen kunnen een mooie locatie zijn. Heb je zelf wensen? Laat het me weten! Ik fotografeer momenteel in de Bollenstreek. Noordwijk, Noordwijkerhout, Voorhout, Katwijk en <Link href="/fotoshoot-leiden">Leiden</Link>. Locaties buiten de Bollenstreek of de Randstad zijn in overleg uiteraard ook mogelijk.
                    </p>


                </TextImg>

                <Faq />
                <RelatedPages  
                    relatedTo = 'Fotoshoot Leiden'
                    relatedPages = {relatedPages}
                />

            </section>
        </>
    )
}

export default FotoshootNoordwijk;