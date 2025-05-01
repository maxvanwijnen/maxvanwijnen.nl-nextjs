import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import RelatedPages from '../components/RelatedPages/RelatedPages';
import Link from "next/link";
import Head from 'next/head';

const FotoshootHaarlem = () => {
    const relatedPages = [
        {text : "Zwangerschapsfotoshoot in Haarlem",link : "/fotoshoot/zwangerschap"},
        {text : "Fotoshoot in de Bollenstreek",link : "/fotoshoot-bollenstreek"},
        {text : "Fotograaf in Noordwijk",link : "/fotoshoot-noordwijk"},
        {text : "Fotografie workshops",link : "/fotografie-workshop"}
    ]

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.maxvanwijnen.nl/fotoshoot-haarlem",
        "name": "Max van Wijnen Fotografie Haarlem",
        "image": "https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp",
        "description": "Professionele fotograaf in Haarlem, gespecialiseerd in portret, familie en zwangerschapsfotografie in Haarlem en omgeving.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Haarlem",
            "addressRegion": "Noord-Holland",
            "addressCountry": "NL"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.3874",
            "longitude": "4.6462"
        },
        "url": "https://www.maxvanwijnen.nl/fotoshoot-haarlem",
        "telephone": "+31628812008",
        "priceRange": "€€",
        "areaServed": ["Haarlem", "Bloemendaal", "Heemstede", "Overveen", "Noord-Holland"],
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "52.3874",
                "longitude": "4.6462"
            },
            "geoRadius": "10000"
        }
    };

    return (
        <>
            <Head>
                <title>Fotograaf Haarlem | Professionele Fotoshoot | Max van Wijnen Fotografie</title>
                <meta name="description" content="Op zoek naar een professionele fotograaf in Haarlem? De mooiste fotografie voor zwangerschap, familie en portret fotoshoots in Haarlem en omgeving. Ook aanwezig op top-fotografen.nl" key="desc" />
                <link rel="canonical" href="https://www.maxvanwijnen.nl/fotoshoot-haarlem" />
                {/* Open Graph tags */}
                <meta property="og:title" content="Fotograaf Haarlem | Max van Wijnen Fotografie" />
                <meta property="og:description" content="Professionele fotograaf in Haarlem voor zwangerschap, familie en portretfotografie. Prachtige locaties zoals de Haarlemmerhout, het centrum van Haarlem en het strand van Bloemendaal." />
                <meta property="og:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp" />
                <meta property="og:url" content="https://www.maxvanwijnen.nl/fotoshoot-haarlem" />
                <meta property="og:type" content="website" />
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Fotograaf Haarlem | Max van Wijnen Fotografie" />
                <meta name="twitter:description" content="Professionele fotograaf in Haarlem voor zwangerschap, familie en portretfotografie. Prachtige locaties in Haarlem en omgeving." />
                <meta name="twitter:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp" />
                {/* Additional SEO meta tags */}
                <meta name="keywords" content="fotograaf haarlem, fotograaf in haarlem, fotoshoot haarlem, portretfotograaf haarlem, familiefotograaf haarlem, zwangerschapsfotografie haarlem, fotoshoot haarlemmerhout, fotoshoot bloemendaal, fotoshoot heemstede" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Max van Wijnen" />
                <meta name="geo.region" content="NL-NH" />
                <meta name="geo.placename" content="Haarlem" />
                <meta name="geo.position" content="52.3874;4.6462" />
                <meta name="ICBM" content="52.3874, 4.6462" />
                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Head>
            <section>
                <TextContent
                    title="Fotograaf in Haarlem"
                    firstItem={false}
                >Ben je op zoek naar een professionele fotograaf in Haarlem? Als ervaren fotograaf in Haarlem ben ik gespecialiseerd in het maken van prachtige <Link href="/fotoshoot/zwangerschap">zwangerschapsfoto&#39;s</Link>, <Link href="/fotoshoot/kinderen">kinderfotografie</Link>, <Link href="/fotoshoot/familie">familiefotoshoots</Link> en <Link href="/fotoshoot/portret">portretfotografie</Link>. Bekijk ook mijn profiel op <a href="https://www.top-fotografen.nl/fotograaf/max-van-wijnen" target="_blank" rel="noopener">top-fotografen.nl</a>.</TextContent>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp"
                    cssClass="Kinderen"
                    imgAlt="Professionele fotograaf Haarlem"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Fotoshoot in Haarlem en omgeving"
                    isFirstArticle={false}
                    isInverted={false}
                >
                    Als fotograaf in Haarlem help ik je graag met het vastleggen van bijzondere momenten. Of je nu een fotoshoot wilt in de gezellige binnenstad, tussen het groen van de Haarlemmerhout, of op het strand van Bloemendaal – samen kiezen we een plek die bij jou past. Met jaren ervaring in portret- en familiefotografie zorg ik ervoor dat jij je op je gemak voelt en we foto’s maken waar je nog lang met plezier op terug kijkt.
                </TxtImg2Column>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/zwangerschapsfotografie-leiden-studio.webp"
                    cssClass="Kinderen"
                    imgAlt="Zwangerschapsfotograaf Haarlem"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Zwangerschapsfotografie in Haarlem"
                    isFirstArticle={false}
                    isInverted={true}
                >
                    Zwanger zijn is een bijzondere en vaak emotionele tijd – een moment om stil te staan bij wat komt. Graag help ik je om die periode vast te leggen met foto's die echt iets zeggen. Rond Haarlem zijn er zoveel mooie plekken in de natuur die perfect zijn voor een zwangerschapsfotoshoot. Denk aan de rustige paadjes in de Haarlemmerhout, de duinen bij Bloemendaal of de prachtige Amsterdamse Waterleidingduinen, waar je echt even weg bent van de drukte. En natuurlijk is je partner of gezin ook van harte welkom om mee te doen – samen maken we er iets moois van.
                </TxtImg2Column>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/fotoshoot-in-leiden.webp"
                    cssClass="Kinderen"
                    imgAlt="Fotoshoot locaties Haarlem"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Unieke fotoshoot locaties in Haarlem"
                    isFirstArticle={false}
                    isInverted={false}
                >
                    Haarlem en omgeving bieden talloze mogelijkheden voor een prachtige fotoshoot. Van de historische binnenstad en de Haarlemmerhout tot het strand van Bloemendaal - elk seizoen heeft zijn eigen charme. Als lokale fotograaf ken ik de mooiste plekjes in en rond Haarlem, waar we samen onvergetelijke foto&#39;s kunnen maken die perfect aansluiten bij jouw wensen.
                </TxtImg2Column>
                <TextContent
                    title="Bijzondere fotoshoot locaties rond Haarlem">
                    Als fotograaf in Haarlem heb ik keuze uit prachtige locaties in de regio:
                    
                    De Haarlemmerhout, het oudste stadsbos van Nederland, biedt een unieke setting voor je fotoshoot. De mooie lanen, vijvers en het groen zorgen voor een sfeervol decor voor romantische portretten en familiefoto&#39;s.

                    Het strand van Bloemendaal, op slechts een korte afstand van Haarlem, is een geliefde locatie voor natuurlijke en sfeervolle foto&#39;s. Het prachtige duinlandschap, het brede strand en de ondergaande zon creëren magische momenten voor je fotoshoot.

                    De binnenstad van Haarlem met haar karakteristieke straatjes, grachten en monumentale gebouwen biedt volop mogelijkheden voor unieke en persoonlijke fotoshoots.
                </TextContent>
                <TextContent
                    title="Portretfotografie in Haarlem">
                    Zoek je een professionele portretfoto voor je LinkedIn, social media of website? Als portretfotograaf in Haarlem help ik je graag aan foto&#39;s die jou of je bedrijf perfect presenteren. Met oog voor detail en persoonlijke aandacht zorgen we samen voor het gewenste resultaat.
                </TextContent>
                <TextContent
                    title="Familiefotografie Haarlem">
                    Een familiefotoshoot in Haarlem is een prachtige manier om dierbare herinneringen vast te leggen. De diverse locaties in en rond Haarlem maken het mogelijk om gevarieerde en persoonlijke familiefoto&#39;s te maken. Van spontane momentopnames tot stijlvolle groepsportretten - samen creëren we foto&#39;s die je nog jaren met plezier terugkijkt.
                </TextContent>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
                    cssClass="Kinderen"
                    imgAlt="Fotograaf Haarlem"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Fotograaf in Haarlem"
                    isFirstArticle={false}
                    isInverted={true}
                >
                    Als fotograaf in Haarlem ben ik niet alleen actief in de stad zelf, maar ook in omliggende plaatsen zoals Bloemendaal, Zandvoort en Heemstede. De regio biedt een unieke mix van stedelijke omgevingen, parken, bossen, duinen en het strand. Neem contact op voor de mogelijkheden van een fotoshoot op jouw favoriete locatie in Haarlem of omgeving!
                </TxtImg2Column>
                <RelatedPages  
                    relatedTo='Fotograaf Haarlem'
                    relatedPages={relatedPages}
                />
            </section>
        </>
    )
}

export default FotoshootHaarlem;
