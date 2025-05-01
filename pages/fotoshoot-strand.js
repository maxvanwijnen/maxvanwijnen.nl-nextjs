import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import Head from 'next/head';
import FaqAccordion from '../components/FaqAccordion/FaqAccordion';
import Link from 'next/link';

const FotoshootStrand = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.maxvanwijnen.nl/fotoshoot-strand",
        "name": "Max van Wijnen Fotografie Strand",
        "image": "https://dev1.maxvanwijnen.nl/docs/images/gallery/Trouwreportage-strand-001.webp",
        "description": "Professionele strand fotoshoot door Max van Wijnen. Fotograaf voor families, portretten, zwangerschap en loveshoots op het strand van Bloemendaal, Noordwijk, Zandvoort en Katwijk.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Noordwijk",
            "addressRegion": "Zuid-Holland",
            "addressCountry": "NL"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.2415",
            "longitude": "4.4331"
        },
        "url": "https://www.maxvanwijnen.nl/fotoshoot-strand",
        "telephone": "+31628812008",
        "priceRange": "€€",
        "areaServed": ["Noordwijk", "Bloemendaal", "Zandvoort", "Katwijk", "Zuid-Holland", "Noord-Holland"],
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "52.2415",
                "longitude": "4.4331"
            },
            "geoRadius": "20000"
        }
    };

    return (
        <>
            <Head>
                <title>Strand Fotoshoot | Fotograaf Strand | Max van Wijnen Fotografie</title>
                <meta name="description" content="Wil je een unieke fotoshoot op het strand? Professionele strand fotograaf voor familie, portret, zwangerschap en loveshoot op het strand van Bloemendaal, Noordwijk, Zandvoort en Katwijk. Bekijk tips, inspiratie en voorbeelden!" key="desc" />
                <meta name="keywords" content="fotoshoot strand, strand fotoshoot, fotograaf strand, fotoshoot Bloemendaal aan Zee, fotoshoot Noordwijk strand, fotoshoot Zandvoort, loveshoot strand, zwangerschapsshoot strand, familiefotoshoot strand" />
                <meta property="og:title" content="Strand Fotoshoot | Fotograaf Strand | Max van Wijnen Fotografie" />
                <meta property="og:description" content="Professionele strand fotoshoot voor families, portret, zwangerschap en loveshoot. Fotograaf op het strand van Bloemendaal, Noordwijk, Zandvoort en Katwijk." />
                <meta property="og:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Trouwreportage-strand-001.webp" />
                <meta property="og:url" content="https://www.maxvanwijnen.nl/fotoshoot-strand" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Strand Fotoshoot | Fotograaf Strand | Max van Wijnen Fotografie" />
                <meta name="twitter:description" content="Professionele strand fotoshoot voor families, portret, zwangerschap en loveshoot. Fotograaf op het strand van Bloemendaal, Noordwijk, Zandvoort en Katwijk." />
                <meta name="twitter:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Trouwreportage-strand-001.webp" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Max van Wijnen" />
                <meta name="geo.region" content="NL-ZH" />
                <meta name="geo.placename" content="Noordwijk" />
                <meta name="geo.position" content="52.2415;4.4331" />
                <meta name="ICBM" content="52.2415, 4.4331" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
                <link rel="canonical" href="https://www.maxvanwijnen.nl/fotoshoot-strand" />
                <link rel="preload" as="image" href="https://dev1.maxvanwijnen.nl/docs/images/gallery/Trouwreportage-strand-001.webp" />
            </Head>
            <section>
                <TextContent
                    title="Fotoshoot op het strand"
                    firstItem={false}
                    multiContent={[
                        "Een strand fotoshoot is de perfecte manier om ongedwongen, spontane en sfeervolle foto's te maken. Of je nu kiest voor een familiefotoshoot, loveshoot, zwangerschapsshoot of portret, het strand biedt altijd een prachtig decor. Het natuurlijke licht, de zee, het zand en de duinen zorgen voor een ontspannen sfeer en unieke beelden.",
                        "Populaire locaties voor een strand fotoshoot zijn Bloemendaal aan Zee, Noordwijk, Zandvoort en Katwijk. Elk strand heeft zijn eigen karakter: van de brede stranden van Noordwijk tot de ruige duinen van Bloemendaal en de gezellige sfeer van Zandvoort. Samen kiezen we de plek die het beste bij jou past.",
                        "Het gouden uur – het uur na zonsopkomst of voor zonsondergang – zorgt voor magisch licht en de mooiste kleuren. Ik adviseer altijd om de fotoshoot rond dit tijdstip te plannen voor het beste resultaat."
                    ]}
                />
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp"
                    cssClass="Kinderen"
                    imgAlt="Strand fotoshoot mode en portret"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Waarom kiezen voor een fotoshoot op het strand?"
                    isFirstArticle={false}
                    isInverted={false}
                >
                    Het strand is een plek waar je je vrij voelt en waar kinderen heerlijk kunnen spelen. Dat levert spontane, vrolijke foto's op. De wind door je haren, blote voeten in het zand, samen lachen en genieten – dat zie je terug op de foto's. Ook voor loveshoots en zwangerschapsfotoshoots is het strand een fantastische locatie. Elk seizoen heeft zijn eigen sfeer: van zomers zonlicht tot het ruige winterstrand.
                </TxtImg2Column>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/gallery/Vrijgezellenshoot-strand-002.webp"
                    cssClass="Kinderen"
                    imgAlt="Vrijgezellen fotoshoot strand"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Tips voor een geslaagde strand fotoshoot"
                    isFirstArticle={false}
                    isInverted={true}
                >
                    - Kies voor lichte, natuurlijke kleding die comfortabel zit en mooi kleurt bij het strand.<br />
                    - Neem eventueel een extra trui of vest mee voor als het afkoelt.<br />
                    - Laat kinderen lekker spelen en rennen – dat levert de leukste foto's op!<br />
                    - Accessoires zoals een hoed, sjaal of picknickkleed geven extra sfeer.<br />
                    - Plan de shoot bij voorkeur rond zonsopkomst of zonsondergang voor het mooiste licht.<br />
                </TxtImg2Column>
                <section>
                    <h2>Veelgestelde vragen over strand fotoshoots</h2>
                    <FaqAccordion
                      faqs={[
                        {
                          question: "Wat doet een strand fotograaf?",
                          answer: (
                            <span>Als strand fotograaf help ik gezinnen, stellen en groepen om spontane en sfeervolle foto&#39;s te maken op het strand. Met oog voor detail, creativiteit en jullie wensen zorg ik voor beelden die het echte strandgevoel uitstralen – altijd met een uniek concept en op de mooiste locaties.</span>
                          ),
                        },
                        {
                          question: "Voor wie is een strand fotoshoot geschikt?",
                          answer: (
                            <span>Een strand fotoshoot is geschikt voor families, kinderen, stellen, vriendengroepen, zwangeren en iedereen die mooie, ongedwongen foto&#39;s wil laten maken op het strand.</span>
                          ),
                        },
                        {
                          question: "Hoe boek ik een strand fotoshoot?",
                          answer: (
                            <span>Je kunt eenvoudig een strand shoot boeken door het <Link href="/contact">contactformulier</Link> in te vullen of direct een <Link href="/boek-een-fotoshoot">fotoshoot te boeken</Link>. We bespreken samen jouw wensen, concept en locatie.</span>
                          ),
                        },
                        {
                          question: "Bied je ook loveshoots, zwangerschapsshoots en groepsfotoshoots aan?",
                          answer: (
                            <span>Ja, naast familie- en portretfotografie bied ik ook loveshoots, zwangerschapsshoots en groepsfotoshoots aan op het strand. Elk type shoot wordt afgestemd op jullie wensen.</span>
                          ),
                        },
                        {
                          question: "Wat kost een strand fotoshoot?",
                          answer: (
                            <span>Laat gerust weten wat voor shoot je wilt of wat je plannen zijn. Ik maak graag een vrijblijvende offerte op maat!</span>
                          ),
                        },
                      ]}
                    />
                </section>
                <TextContent
                    title="Boek jouw strand fotoshoot"
                    firstItem={false}
                    multiContent={[
                        "Wil je ook zulke mooie, spontane foto's op het strand? Neem vrijblijvend contact op voor meer informatie, prijzen en beschikbaarheid. Samen maken we er een onvergetelijke ervaring van!"
                    ]}
                />
            </section>
        </>
    )
}

export default FotoshootStrand;