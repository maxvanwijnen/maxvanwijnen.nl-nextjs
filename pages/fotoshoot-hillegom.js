import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import RelatedPages from '../components/RelatedPages/RelatedPages';
import Link from "next/link";
import Head from 'next/head';

const FotoshootHillegom = () => {
    const relatedPages = [
        {text : "Zwangerschapsfotoshoot in Hillegom",link : "/fotoshoot/zwangerschap"},
        {text : "Fotoshoot in de Bollenstreek",link : "/fotoshoot-bollenstreek"},
        {text : "Fotograaf in Noordwijk",link : "/fotoshoot-noordwijk"},
        {text : "Fotografie workshops",link : "/fotografie-workshop"}
    ]

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.maxvanwijnen.nl/fotoshoot-hillegom",
        "name": "Max van Wijnen Fotografie Hillegom",
        "image": "https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp",
        "description": "Professionele fotograaf in Hillegom, gespecialiseerd in portret, familie en zwangerschapsfotografie in de Bollenstreek.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hillegom",
            "addressRegion": "Zuid-Holland",
            "addressCountry": "NL"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.2869",
            "longitude": "4.5833"
        },
        "url": "https://www.maxvanwijnen.nl/fotoshoot-hillegom",
        "telephone": "+31628812008",
        "priceRange": "€€",
        "areaServed": ["Hillegom", "Bollenstreek", "Lisse", "Noordwijkerhout"],
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "52.2869",
                "longitude": "4.5833"
            },
            "geoRadius": "10000"
        }
    };

    return (
        <>
            <Head>
                <title>Fotograaf Hillegom | Professionele Fotoshoot | Max van Wijnen Fotografie</title>
                <meta name="description" content="Op zoek naar een professionele fotograaf in Hillegom? De mooiste fotografie voor zwangerschap, familie en portret fotoshoots in de Bollenstreek. Ook aanwezig op top-fotografen.nl" key="desc" />
                <link rel="canonical" href="https://www.top-fotografen.nl/fotograaf/max-van-wijnen" />
                
                {/* Open Graph tags */}
                <meta property="og:title" content="Fotograaf Hillegom | Max van Wijnen Fotografie" />
                <meta property="og:description" content="Professionele fotograaf in Hillegom voor zwangerschap, familie en portretfotografie. Prachtige locaties zoals Kasteel Keukenhof, Langevelderslag strand en de Waterleidingduinen." />
                <meta property="og:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp" />
                <meta property="og:url" content="https://www.maxvanwijnen.nl/fotoshoot-hillegom" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Fotograaf Hillegom | Max van Wijnen Fotografie" />
                <meta name="twitter:description" content="Professionele fotograaf in Hillegom voor zwangerschap, familie en portretfotografie. Prachtige locaties in de Bollenstreek." />
                <meta name="twitter:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp" />
                
                {/* Additional SEO meta tags */}
                <meta name="keywords" content="fotograaf hillegom, fotoshoot hillegom, portretfotograaf hillegom, familiefotograaf hillegom, zwangerschapsfotografie hillegom, kasteel keukenhof fotoshoot, fotoshoot langevelderslag, fotoshoot waterleidingduinen" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Max van Wijnen" />
                <meta name="geo.region" content="NL-ZH" />
                <meta name="geo.placename" content="Hillegom" />
                <meta name="geo.position" content="52.2869;4.5833" />
                <meta name="ICBM" content="52.2869, 4.5833" />
                
                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Head>
            <section>
                <TextContent
                    title="Fotograaf in Hillegom"
                    firstItem={false}
                >Ben je op zoek naar een professionele fotograaf in Hillegom? Als ervaren fotograaf in de Bollenstreek ben ik gespecialiseerd in het maken van prachtige <Link href="/fotoshoot/zwangerschap">zwangerschapsfoto's</Link>, <Link href="/fotoshoot/kinderen">kinderfotografie</Link>, <Link href="/fotoshoot/familie">familiefotoshoots</Link> en <Link href="/fotoshoot/portret">portretfotografie</Link>. Bekijk ook mijn profiel op <a href="https://www.top-fotografen.nl/fotograaf/max-van-wijnen" target="_blank" rel="noopener">top-fotografen.nl</a>.</TextContent>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp"
                    cssClass="Kinderen"
                    imgAlt="Professionele fotograaf Hillegom"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Fotoshoot in Hillegom en omgeving"
                    isFirstArticle={false}
                    isInverted={false}
                >
                    Als fotograaf in Hillegom bied ik diverse mogelijkheden voor jouw perfecte fotoshoot. Of je nu kiest voor een fotosessie in de prachtige Bollenstreek, een urban setting in het centrum van Hillegom, of een natuurlijke omgeving - samen vinden we de ideale locatie die past bij jouw wensen. Met jarenlange ervaring in portret- en familiefotografie weet ik precies hoe ik jouw mooiste momenten kan vastleggen.
                </TxtImg2Column>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/zwangerschapsfotografie-leiden-studio.webp"
                    cssClass="Kinderen"
                    imgAlt="Zwangerschapsfotograaf Hillegom"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Zwangerschapsfotografie in Hillegom"
                    isFirstArticle={false}
                    isInverted={true}
                >
                    Een zwangerschap is een magische periode die vraagt om vakkundige fotografie. Als ervaren zwangerschapsfotograaf in Hillegom leg ik deze bijzondere tijd met veel zorg vast. De Bollenstreek biedt prachtige locaties voor een zwangerschapsfotoshoot, van de kleurrijke bollenvelden in het voorjaar tot de sfeervolle parken en duinen het hele jaar door. Natuurlijk is de rest van het gezin ook van harte welkom tijdens de fotoshoot!
                </TxtImg2Column>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/fotoshoot-in-leiden.webp"
                    cssClass="Kinderen"
                    imgAlt="Fotoshoot locaties Hillegom"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Unieke fotoshoot locaties in Hillegom"
                    isFirstArticle={false}
                    isInverted={false}
                >
                    Hillegom en omgeving bieden talloze mogelijkheden voor een prachtige fotoshoot. Van de historische Hoftuin en het Wilhelminapark tot de karakteristieke bollenvelden - elk seizoen heeft zijn eigen charme. Als lokale fotograaf ken ik de mooiste plekjes in en rond Hillegom, waar we samen onvergetelijke foto's kunnen maken die perfect aansluiten bij jouw wensen.
                </TxtImg2Column>
                <TextContent
                    title="Bijzondere fotoshoot locaties rond Hillegom">
                    Als fotograaf in Hillegom heb ik keuze uit prachtige locaties in de regio:
                    
                    Het Kasteel Keukenhof en het omliggende bos bieden een sprookjesachtige setting voor je fotoshoot. Het historische kasteel, de prachtige tuinen en het sfeervolle bos vormen het perfecte decor voor romantische portretten en familiefoto's.

                    Het strand bij Langevelderslag, op slechts een korte afstand van Hillegom, is een geliefde locatie voor natuurlijke en sfeervolle foto's. Het prachtige duinlandschap, het brede strand en de ondergaande zon creëren magische momenten voor je fotoshoot.

                    De Amsterdamse Waterleidingduinen, een uniek natuurgebied grenzend aan Hillegom, biedt een verscheidenheid aan landschappen. Van open duinvlaktes tot beschutte bospaadjes - hier vinden we altijd het perfecte plekje voor jouw fotoshoot, met kans op het spotten van herten en andere wildlife als bijzondere bonus.
                </TextContent>
                <TextContent
                    title="Portretfotografie in Hillegom">
                    Zoek je een professionele portretfoto voor je LinkedIn, social media of website? Als portretfotograaf in Hillegom help ik je graag aan foto's die jou of je bedrijf perfect presenteren. Met oog voor detail en persoonlijke aandacht zorgen we samen voor het gewenste resultaat.
                </TextContent>
                <TextContent
                    title="Familiefotografie Hillegom">
                    Een familiefotoshoot in Hillegom is een prachtige manier om dierbare herinneringen vast te leggen. De diverse locaties in en rond Hillegom maken het mogelijk om gevarieerde en persoonlijke familiefoto's te maken. Van spontane momentopnames tot stijlvolle groepsportretten - samen creëren we foto's die je nog jaren met plezier terugkijkt.
                </TextContent>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
                    cssClass="Kinderen"
                    imgAlt="Fotograaf Bollenstreek Hillegom"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Fotograaf in de Bollenstreek"
                    isFirstArticle={false}
                    isInverted={true}
                >
                    Als fotograaf in de Bollenstreek ben ik niet alleen actief in Hillegom, maar ook in de omliggende gemeenten zoals Lisse, Noordwijkerhout en Noordwijk. De regio biedt een unieke mix van landschappen: van kleurrijke bollenvelden tot rustieke duingebieden en sfeervolle dorpskernen. Neem contact op voor de mogelijkheden van een fotoshoot op jouw favoriete locatie in de Bollenstreek!
                </TxtImg2Column>
                <RelatedPages  
                    relatedTo='Fotograaf Hillegom'
                    relatedPages={relatedPages}
                />
            </section>
        </>
    )
}

export default FotoshootHillegom;