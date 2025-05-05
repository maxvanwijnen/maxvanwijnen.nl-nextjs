import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import IntroTextImg from "../components/IntroTextImg/IntroTextImg";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import Head from 'next/head';
import Link from 'next/link';
import RelatedPages from '../components/RelatedPages/RelatedPages';
import HeroLanding from '../components/HeroLanding/HeroLanding';
import FaqAccordion from '../components/FaqAccordion/FaqAccordion';

const FotoshootZandvoort = () => {
    const relatedPages = [
        {text : "Zwangerschapsfotoshoot in Zandvoort",link : "/fotoshoot/zwangerschap"},
        {text : "Fotostudio in Leiden",link : "/fotostudio"},
        {text : "Fotograaf in Haarlem",link : "/fotoshoot-haarlem"},
        {text : "Fotoshoot op het strand",link : "/fotoshoot-strand"}
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Max van Wijnen Fotografie Zandvoort",
        "image": "https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Zandvoort-001.webp",
        "description": "Fotograaf Zandvoort: professionele fotoshoots op het strand, in de duinen of op locatie. Gespecialiseerd in spontane, pure fotografie voor gezinnen, kinderen en koppels.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Zandvoort",
            "addressRegion": "Noord-Holland",
            "addressCountry": "NL"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.3740",
            "longitude": "4.5336"
        },
        "url": "https://www.maxvanwijnen.nl/fotoshoot-zandvoort",
        "telephone": "+31628812008",
        "priceRange": "€€",
        "areaServed": ["Zandvoort", "Bloemendaal", "Haarlem", "Overveen", "Bentveld"],
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "52.3740",
                "longitude": "4.5336"
            },
            "geoRadius": "10000"
        },
        "makesOffer": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Strandfotografie"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Gezinsfotografie"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Koppelfotografie"
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Fotograaf Zandvoort | Strandfotoshoot &amp; Gezinsfotografie | Max van Wijnen</title>
                <meta name="description"
                      content="Fotograaf Zandvoort nodig? Boek een professionele fotoshoot op het strand, in de duinen of op locatie. Spontane en pure fotografie voor gezinnen, kinderen en koppels. Bekijk portfolio en tarieven!"/>
                <meta name="keywords"
                      content="fotograaf zandvoort, fotoshoot zandvoort, strandfotografie zandvoort, gezinsfotografie zandvoort, kinderfotografie zandvoort, portretfotografie zandvoort, loveshoot zandvoort"/>
                <meta name="author" content="Max van Wijnen"/>
                <meta name="robots" content="index, follow"/>
                {/* Geo tags */}
                <meta name="geo.region" content="NL-NH"/>
                <meta name="geo.placename" content="Zandvoort"/>
                <meta name="geo.position" content="52.3740;4.5336"/>
                <meta name="ICBM" content="52.3740, 4.5336"/>
                {/* Open Graph tags */}
                <meta property="og:title" content="Fotograaf Zandvoort | Strandfotoshoot &amp; Gezinsfotografie"/>
                <meta property="og:description"
                      content="Fotograaf Zandvoort: professionele fotoshoots op het strand, in de duinen of op locatie. Gespecialiseerd in spontane, pure fotografie voor gezinnen, kinderen en koppels."/>
                <meta property="og:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Zandvoort-001.webp"/>
                <meta property="og:url" content="https://www.maxvanwijnen.nl/fotoshoot-zandvoort"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="Max van Wijnen Fotografie"/>
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Fotograaf Zandvoort | Strandfotoshoot &amp; Gezinsfotografie"/>
                <meta name="twitter:description"
                      content="Fotograaf Zandvoort: professionele fotoshoots op het strand, in de duinen of op locatie. Gespecialiseerd in spontane, pure fotografie voor gezinnen, kinderen en koppels."/>
                <meta name="twitter:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Zandvoort-001.webp"/>
                {/* Canonical URL */}
                <link rel="canonical" href="https://www.maxvanwijnen.nl/fotoshoot-zandvoort"/>
                {/* JSON-LD structured data */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>
            <section>
                <HeroLanding
                    title="Fotoshoot Zandvoort: spontane momenten aan zee"
                    description="Wil je een unieke fotoshoot in Zandvoort? Met het strand, de zee en de duinen als achtergrond leg ik jouw mooiste herinneringen vast. Boek direct jouw gezinsfotoshoot, loveshoot of portretshoot!"
                    ctaLabel="Bekijk mogelijkheden"
                    ctaHref="#mogelijkheden"
                    usps={["Strand & duinen Zandvoort", "Persoonlijke aanpak", "Snelle levering", "Professionele nabewerking"]}
                    showCarousel={true}
                />
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-strand-scheveningen-001.webp"
                    cssClass="Gezin"
                    imgAlt = "Loveshoot op het strand van Scheveningen bij zonsondergang"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Fotoshoot locaties in Zandvoort"
                    isFirstArticle={false}
                >
                    Zandvoort biedt met haar brede stranden, duinen en gezellige boulevard de perfecte locatie voor een fotoshoot. Of je nu kiest voor een gezinsfotoshoot, een loveshoot of spontane portretten: de mogelijkheden zijn eindeloos. Ik ken de mooiste plekjes in Zandvoort en denk graag mee over de perfecte setting voor jouw foto’s.
                </TxtImg2Column>

                <TextImg
                    title="Waarom kiezen voor een fotograaf in Zandvoort?"
                    img="https://dev1.maxvanwijnen.nl/docs/images/gallery/Familiefotoshoot-strand-001.webp"
                >
                    <h3>Fotografie op het strand, in de duinen of in het centrum</h3>
                    <p>In Zandvoort ken ik alle fotogenieke plekjes én de beste tijdstippen voor prachtig licht. Of je nu kiest voor een shoot op het strand, tussen de duinen of in het centrum: we maken er iets bijzonders van. Reserveer eenvoudig jouw gezinsfotoshoot of <Link href="/fotoshoot-strand">strandfotoshoot</Link> of <Link href="/fotoshoot-haarlem">gezinsfotoshoot</Link> in de regio Zandvoort!</p>
                </TextImg>

                <TextImg
                    title="Loveshoot in de Amsterdamse Waterleidingduinen"
                    img="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-de-zilk-001.webp"
                >
                    <p>Een van de mooiste plekken voor een loveshoot of portretshoot bij Zandvoort is de Amsterdamse Waterleidingduinen. Het is een prachtig natuurgebied met een combinatie van bos en duinlandschap. Voor de fotoachtergronden heeft het leuke paadjes, open vlaktes en prachtige bomen. Er is genoeg ruimte om in alle rust de fotoshoot te doen op een wat rustigere plek. Houd er rekening mee dat er een kleine entreeprijs geldt voor toegang tot het gebied, maar deze prachtige fotoshoot locatie is dat meer dan waard. De perfecte locatie voor een fotoshoot in de natuur nabij Zandvoort.</p>
                </TextImg>

                <FaqAccordion
                  faqs={[
                    {
                      question: "Wat maakt een fotoshoot in Zandvoort uniek?",
                      answer: (
                        <span>De combinatie van strand, zee en duinen zorgt voor een prachtig en afwisselend decor. Je krijgt spontane, pure foto’s met een natuurlijke uitstraling – ideaal voor gezinnen, koppels en portretten.</span>
                      ),
                    },
                    {
                      question: "Wat als het slecht weer is op de dag van de fotoshoot?",
                      answer: (
                        <span>Bij regen of harde wind plannen we kosteloos een nieuwe datum. Zandvoort biedt ook beschutte plekjes in de duinen, dus vaak kan de shoot gewoon doorgaan!</span>
                      ),
                    },
                    {
                      question: "Moet ik iets meenemen naar de strandshoot?",
                      answer: (
                        <span>Neem vooral comfortabele kleding mee waarin je je prettig voelt. Denk aan laagjes, eventueel een extra jasje, en accessoires zoals hoedjes of een kleedje voor op het zand.</span>
                      ),
                    },
                    {
                      question: "Kunnen we ook bij zonsondergang fotograferen?",
                      answer: (
                        <span>Jazeker! Het gouden uur rond zonsondergang geeft magisch licht en zorgt voor extra sfeervolle foto’s. Dit is een aanrader voor fotoshoots in Zandvoort.</span>
                      ),
                    },
                    {
                      question: "Is parkeren makkelijk bij het strand van Zandvoort?",
                      answer: (
                        <span>Er zijn diverse parkeermogelijkheden direct aan het strand en in de buurt van de duinen. Ik geef graag tips voor de beste parkeerplekken afhankelijk van de gekozen fotolocatie.</span>
                      ),
                    },
                    {
                      question: "Hoe snel ontvangen we de foto’s?",
                      answer: (
                        <span>Je ontvangt binnen 5 werkdagen een ruime selectie professioneel nabewerkte foto’s in hoge resolutie, via een persoonlijke online galerij.</span>
                      ),
                    },
                  ]}
                />
                <RelatedPages  
                    relatedTo = 'Fotoshoot Zandvoort'
                    relatedPages = {relatedPages}
                />
            </section>
        </>
    )
}

export default FotoshootZandvoort;
