import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import RelatedPages from '../components/RelatedPages/RelatedPages';
import Link from "next/link";
import Head from 'next/head';
import FaqAccordion from "../components/FaqAccordion/FaqAccordion";
import PhotoshootTileMenu from '../components/PhotoshootTileMenu/PhotoshootTileMenu';
import HeroLanding from '../components/HeroLanding/HeroLanding';

// FAQ data (één bron voor zowel frontend als JSON-LD)
const faqItems = [
  {
    question: "Wat zijn de mooiste locaties voor een fotoshoot in Leiden?",
    answer: (
      <span>Ik ken veel mooie plekken in en rond Leiden en ik denk graag mee om de perfecte locatie te vinden voor de mooiste fotoshoot. Afhankelijk van het tijdstip en je wensen kan ik een mooie locatie vinden met prachtig licht. In de binnenstad in Leiden heb je prachtige straatjes, bruggetjes en pleintjes. Voor een groepsfotoshoot kom ik graag in Leidsehout, dit bos is mooi compact maar er is altijd wel een plekje met mooi licht te vinden.</span>
    ),
  },
  {
    question: "Voor wie is een fotoshoot in Leiden geschikt?",
    answer: (
      <span>Voor gezinnen, stellen, zwangeren, professionals en iedereen die mooie foto&#39;s wil op een unieke locatie in Leiden.</span>
    ),
  },
  {
    question: "Hoe boek ik een fotoshoot in Leiden?",
    answer: (
      <span>Stuur eenvoudig een bericht via het <Link href="/contact">contactformulier</Link> of <Link href="/boek-een-fotoshoot">boek direct online</Link>. We bespreken samen je wensen en plannen de shoot.</span>
    ),
  },
  {
    question: "Wat kost een fotoshoot in Leiden?",
    answer: (
      <span>Je doet al een fotoshoot vanaf 139 euro. De prijzen variëren per type fotoshoot en het aantal foto&#39;s je wenst af te nemen. Ik heb hier verschillende prijs pakketten voor beschikbaar, kijk op de fotoshoot pagina van de fotoshoot die jij wilt doen voor meer informatie.</span>
    ),
  },
  {
    question: "Kan ik zelf een locatie kiezen in Leiden?",
    answer: (
      <span>Ja, je mag altijd zelf een favoriete locatie aandragen. Ik denk graag mee en ken veel mooie plekken in en rond Leiden!</span>
    ),
  },
];

// Utility om tekst uit JSX te halen voor JSON-LD
function jsxToText(node) {
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(jsxToText).join('');
  if (node && node.props && node.props.children) return jsxToText(node.props.children);
  return '';
}


const FotoshootLeiden = () => {

    const relatedPages = [
        {text : "Zwangerschapsfotoshoot in Leiden",link : "/fotoshoot/zwangerschap"},
        {text : "Fotostudio in Leiden",link : "/fotostudio"},
        {text : "Fotograaf in Noordwijk",link : "/fotoshoot-noordwijk"},
        {text : "Fotografie workshops in Leiden",link : "/fotografie-workshop"}
    ]

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Max van Wijnen Fotografie Leiden",
        "image": "https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp",
        "description": "Professionele fotograaf in Leiden, gespecialiseerd in zwangerschapsfotografie, kinderfotografie en familiefotografie",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Leiden",
            "addressRegion": "Zuid-Holland",
            "addressCountry": "NL"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.1601",
            "longitude": "4.4970"
        },
        "url": "https://www.maxvanwijnen.nl/fotoshoot-leiden",
        "telephone": "+31628812008",
        "priceRange": "€€",
        "areaServed": ["Leiden", "Leiderdorp", "Voorschoten", "Oegstgeest", "Katwijk"],
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "52.1601",
                "longitude": "4.4970"
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
                {/* BreadcrumbList structured data */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "BreadcrumbList",
                      "itemListElement": [
                        {
                          "@type": "ListItem",
                          "position": 1,
                          "name": "Home",
                          "item": "https://www.maxvanwijnen.nl/"
                        },
                        {
                          "@type": "ListItem",
                          "position": 2,
                          "name": "Fotoshoot Leiden",
                          "item": "https://www.maxvanwijnen.nl/fotoshoot-leiden"
                        }
                      ]
                    })
                  }}
                />
                {/* Article structured data */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Article",
                      "headline": "Fotoshoot Leiden: professionele fotografie op unieke locaties",
                      "description": "Boek een fotoshoot in Leiden bij Max van Wijnen. Ontdek de mooiste locaties, prijzen en veelgestelde vragen. Laat je professioneel vastleggen op de mooiste plekken van Leiden. Je doet al een fotoshoot vanaf 139 euro.",
                      "image": "https://dev1.maxvanwijnen.nl/docs/images/fashion/mode-fotofrafie-leiden.webp",
                      "author": {
                        "@type": "Person",
                        "name": "Max van Wijnen"
                      },
                      "publisher": {
                        "@type": "Organization",
                        "name": "Max van Wijnen Fotografie",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://www.maxvanwijnen.nl/logo.png"
                        }
                      },
                      "datePublished": "2024-05-10"
                    })
                  }}
                />
                {/* BreadcrumbList structured data */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "BreadcrumbList",
                      "itemListElement": [
                        {
                          "@type": "ListItem",
                          "position": 1,
                          "name": "Home",
                          "item": "https://www.maxvanwijnen.nl/"
                        },
                        {
                          "@type": "ListItem",
                          "position": 2,
                          "name": "Fotoshoot Leiden",
                          "item": "https://www.maxvanwijnen.nl/fotoshoot-leiden"
                        }
                      ]
                    })
                  }}
                />
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      "mainEntity": faqItems.map(item => ({
                        "@type": "Question",
                        "name": item.question,
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": jsxToText(item.answer)
                        }
                      }))
                    })
                  }}
                />
                <title>Fotograaf Leiden | Professionele Fotoshoot in Leiden | Max van Wijnen</title>
                <meta name="description"
                      content="Op zoek naar een professionele fotograaf in Leiden? Specialist in zwangerschapsfotografie, kinderfotografie en familiefotografie. Bekijk mijn portfolio en boek direct."/>
                <meta name="keywords"
                      content="fotograaf leiden, fotoshoot leiden, zwangerschapsfotografie leiden, kinderfotografie leiden, familiefotografie leiden, portretfotografie leiden"/>
                <meta name="author" content="Max van Wijnen"/>
                <meta name="robots" content="index, follow"/>
                
                {/* Geo tags */}
                <meta name="geo.region" content="NL-ZH"/>
                <meta name="geo.placename" content="Leiden"/>
                <meta name="geo.position" content="52.1601;4.4970"/>
                <meta name="ICBM" content="52.1601, 4.4970"/>
                
                {/* Open Graph tags */}
                <meta property="og:title" content="Fotograaf Leiden | Professionele Fotoshoot in Leiden"/>
                <meta property="og:description"
                />
                {/* OG Image voor Google/socials */}
                <meta property="og:image" content="https://dev1.maxvanwijnen.nl/docs/images/fashion/mode-fotofrafie-leiden.webp"/>
                <meta name="twitter:image" content="https://dev1.maxvanwijnen.nl/docs/images/fashion/mode-fotofrafie-leiden.webp"/>
                <meta name="image" content="https://dev1.maxvanwijnen.nl/docs/images/fashion/mode-fotofrafie-leiden.webp"/>
                <link rel="image_src" href="https://dev1.maxvanwijnen.nl/docs/images/fashion/mode-fotofrafie-leiden.webp"/>
                <meta property="og:image:alt" content="Fashion fotoshoot Leiden - Max van Wijnen"/>
                <meta property="og:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp"/>
                <meta property="og:url" content="https://www.maxvanwijnen.nl/fotoshoot-leiden"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="Max van Wijnen Fotografie"/>
                
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Fotograaf Leiden | Professionele Fotoshoot in Leiden"/>
                <meta name="twitter:description"
                      content="Professionele fotograaf in Leiden, gespecialiseerd in zwangerschapsfotografie, kinderfotografie en familiefotografie"/>
                <meta name="twitter:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Noordwijk-002.webp"/>
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://www.top-fotografen.nl/fotograaf/max-van-wijnen"/>
                
                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Head>
            <section>
                <HeroLanding
                    title="Fotoshoot Leiden: leg jullie mooiste momenten vast"
                    description="Een fotoshoot in Leiden is de perfecte manier om blijvende herinneringen te maken. Of je nu kiest voor een loveshoot, familieportret of spontane reportage in het historische centrum: ik help je ontspannen en stralend op de foto!"
                    ctaLabel="Bekijk mogelijkheden"
                    ctaHref="#mogelijkheden"
                    usps={["Persoonlijke aanpak", "Snelle levering", "Locatie naar keuze", "Professionele nabewerking"]}
                    showCarousel={true}
                />
                <TextContent
                    title="Fotoshoot Leiden"
                    firstItem={false}
                >Ben je op zoek naar een fotograaf voor een mooie fotoshoot in of rondom Leiden? Dan ben je bij mij aan het juiste adres. Je kunt bij mij terecht voor alle type fotoshoots zoals een <Link href="/fotoshoot/zwangerschap">zwangerschapsfotoshoot</Link>,  <Link href="/fotoshoot/familie">familiefotoshoot</Link> of een <Link href="/fotoshoot/portret">portretfotoshoot</Link>. Of heb je zelf een ander goed idee? Laat het me weten! Ik doe al mijn fotoshoots op locatie. Leiden kent vele mooie locaties voor fotoshoots, lees er hier meer over.</TextContent>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/zwangerschapsfotografie-leiden-studio.webp"
                    cssClass="Kinderen"
                    imgAlt = "Zwangerschap fotoshoot in leiden"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Zwangerschap fotoshoot in Leiden"
                    isFirstArticle={false}
                    isInverted={true}
                >
                    Ben je zwanger en wil je dit graag vast laten leggen tijdens een mooie fotoshoot in Leiden? Je bent bij mij aan het juiste adres! Als fotograaf werk ik het liefst buiten in natuurlijk licht. We vinden altijd wel een plekje waar we geweldig licht hebben om zo de mooiste foto`s van jouw zwangerschap te maken. Een stad als Leiden is een ideale locatie voor mooie zwangerschapsfotografie. Natuurlijk is de rest van het gezin ook van harte welkom voor de fotoshoot. Wil je foto`s met een meer stedelijke uitstraling, kies je een van de prachtige hofjes, of gaan we richting een van de vele stadsparken in Leiden? Jij mag het zeggen!
                </TxtImg2Column>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/fotoshoot-in-leiden.webp"
                    cssClass="Kinderen"
                    imgAlt = "Familie fotografie"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Fotoshoot locaties in Leiden"
                    isFirstArticle={false}
                    isInverted={false}
                >
                    Het centrum van Leiden is natuurlijk prachtig voor foto`s met een stedelijke sfeer. Die typische leidsche sfeer met de prachtige grachten, bruggetjes en straatjes zijn fantastisch voor een mooie fotoshoot. Maar binnen loopafstand bevinden zich ook genoeg parken waar we prachtige plekjes gaan vinden voor een mooie foto. Kortom ben je op zoek naar een mooie plek voor portretfoto`s? Leiden heeft het allemaal.
                </TxtImg2Column>
                <TextContent
                    title="Portretfotografie buiten in Leiden">
                    Heb je een portretfoto nodig voor je social media kanalen of website? Of vind je het gewoon leuk om mooie foto`s te laten maken? Ook een portretfotoshoot kan uitstekend buiten in Leiden gedaan worden.
                </TextContent>
                <TextContent
                    title="Familiefotografie in Leiden">
                    Met het hele gezin een mooie fotoshoot doen in Leiden, dat staat garant voor de mooiste resultaten. Het leuke van Leiden is dat we van de karakteristieke straatjes, zo ineens in een park belanden of bij de Leidsche grachten zijn. Een totaal andere familiefoto binnen enkele meter lopen.
                </TextContent>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
                    cssClass="Kinderen"
                    imgAlt = "Familie fotografie"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Andere locaties voor een fotoshoot in de bollenstreek"
                    isFirstArticle={false}
                    isInverted={true}
                >
                    Voor portretten zijn natuurlijk alle locaties mogelijk. Een groene, bosrijke omgeving biedt een sfeervolle achtergrond, maar ook het strand en de duinen kunnen een mooie locatie zijn. Heb je zelf wensen? Laat het me weten! Ik fotografeer momenteel in de Bollenstreek. Noordwijk, Noordwijkerhout, Voorhout, Katwijk en Leiden. Locaties buiten de Bollenstreek of de Randstad zijn in overleg uiteraard ook mogelijk.
                </TxtImg2Column>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/zwangerschap-fotoshoot-leiden-met-dochter.webp"
                    cssClass="Kinderen"
                    imgAlt = "Familie fotografie"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Mijn fotostudio in Leiden"
                    isFirstArticle={false}
                    isInverted={false}
                >
                    Buiten fotograferen is natuurlijk prachtig, maar soms gaat de voorkeur uit naar een sessie in de fotostudio. Voordelen van de studio zijn, ook bij slecht weer kunnen we fotograferen, je hebt meer privacy en met de diverse achtergrond kleuren kunnen we eenvoudig de mooiste kleur combinaties maken.
                    Wil je graag mooie studio foto`s laten maken? In mijn studio in Leiden ben je van harte welkom! Lees er <Link href="/fotostudio">hier</Link> meer over.
                </TxtImg2Column>
                <RelatedPages  
                    relatedTo = 'Fotoshoot Leiden'
                    relatedPages = {relatedPages}
                />

                {/* Link naar Peaky Blinder shoot in Leiden */}
                <div style={{marginTop: '2rem', textAlign: 'center'}}>
                  <Link href="/blog/fashion-fotoshoot-leiden-mannelijk-model" legacyBehavior>
                    <a style={{fontWeight: 'bold', color: '#2d2d2d', textDecoration: 'underline', fontFamily: 'Raleway, sans-serif'}}>Bekijk ook de Peaky Blinder fotoshoot in Leiden &rarr;</a>
                  </Link>
                </div>

                {/* FAQ-blok over fotoshoots in Leiden */}
                <section style={{marginTop: '3rem'}}>
                  <h2>Veelgestelde vragen over fotoshoots in Leiden</h2>
                  <FaqAccordion faqs={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />
                </section>
            </section>
        </>
    )
}

export default FotoshootLeiden;