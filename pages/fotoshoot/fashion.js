import Head from 'next/head';
import TextContent from "../../components/TextContent/TextContent";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import Link from "next/link";

export default function Fashion() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Max van Wijnen Fashion Fotografie",
        "image": "https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp",
        "description": "Fashion fotograaf voor professionele fashion shoots, lookbooks en campagnes. Gespecialiseerd in modelfotografie en fashion branding.",
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
        "url": "https://www.maxvanwijnen.nl/fotoshoot/fashion",
        "telephone": "+31628812008",
        "priceRange": "€€€",
        "areaServed": ["Hillegom", "Leiden", "Noordwijk", "Amsterdam", "Rotterdam", "Den Haag"],
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "52.2869",
                "longitude": "4.5833"
            },
            "geoRadius": "50000"
        },
        "makesOffer": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fashion fotografie"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Modelfotografie"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Lookbook shoots"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Campagne fotografie"}}
        ]
    };

    return (
        <div>
            <Head>
                <title>Fashion Fotograaf | Professionele Fashion Shoots & Modelfotografie | Max van Wijnen</title>
                <meta name="description" content="Fashion fotograaf voor high-end fashion shoots, lookbooks en campagnes. Gespecialiseerd in modelfotografie en fashion branding. Boek jouw fashion shoot bij Max van Wijnen."/>
                <meta name="keywords" content="fashion fotograaf, fashion photography, modelfotografie, fashion shoot, lookbook fotograaf, fashion branding, modefotografie, fashion campagne, professionele fashion fotograaf"/>
                <meta name="author" content="Max van Wijnen"/>
                <meta name="robots" content="index, follow"/>
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
                <link rel="canonical" href="https://www.top-fotografen.nl/fotograaf/max-van-wijnen"/>
                {/* JSON-LD structured data */}
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Head>
            <main>
                <TextContent
                    title="Fashion Fotograaf"
                    firstItem={false}
                >Ben je op zoek naar een professionele fashion fotograaf voor een unieke fashion shoot, lookbook of campagne? Met jarenlange ervaring in fashion- en modelfotografie help ik merken, modellen en designers om hun visie krachtig vast te leggen. Of het nu gaat om een editorial shoot, een branding campagne of een creatieve samenwerking, ik zorg voor beelden die indruk maken en jouw verhaal vertellen.<br/><br/>Mijn aanpak is persoonlijk en creatief: samen bespreken we het concept, de styling en de gewenste uitstraling. Dankzij mijn ervaring met zowel studio- als locatie shoots, kan ik elk idee omzetten in een professioneel eindresultaat. Bekijk mijn <Link href="/portfolio">portfolio</Link> voor recente fashion shoots of neem <Link href="/contact">contact</Link> op voor een vrijblijvende kennismaking.<br/><br/><strong>Specialisaties:</strong></TextContent>
                <ul style={{marginLeft: '2em', marginBottom: '2em'}}>
                  <li>Fashion shoots voor merken, modellen & influencers</li>
                  <li>Lookbook fotografie</li>
                  <li>Campagne fotografie</li>
                  <li>Editorial en creatieve samenwerkingen</li>
                </ul>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp"
                    cssClass="Fashion"
                    imgAlt="Fashion fotografie op locatie"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Fashion fotografie op locatie"
                    isFirstArticle={false}
                    isInverted={false}
                >Fashion shoots op locatie geven je beelden een unieke sfeer. Of je nu kiest voor een urban setting, het strand of een bijzondere binnenlocatie, samen creëren we een shoot die past bij jouw stijl en merkidentiteit.</TxtImg2Column>
                <TxtImg2Column
                    imgSource="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio-lichte-achtergrond.webp"
                    cssClass="Fashion"
                    imgAlt="Professionele modelfotografie in de studio"
                    imgWidth={573}
                    imgHeight={384}
                    txtTitle="Professionele modelfotografie in de studio"
                    isFirstArticle={false}
                    isInverted={true}
                >In de studio heb ik volledige controle over licht, styling en sfeer. Dit maakt het mogelijk om jouw fashion collectie of branding campagne op het hoogste niveau vast te leggen. Ideaal voor lookbooks, campagnes en portfolio shoots.</TxtImg2Column>
                <TextContent
                    title="Waarom kiezen voor Max van Wijnen als fashion fotograaf?"
                >- Creatief en professioneel<br/>- Veel ervaring met fashion, modellen en merken<br/>- Snelle levering en duidelijke communicatie<br/>- Samenwerking met stylisten, visagisten en modellenbureau&apos;s mogelijk<br/><br/>Wil je meer weten of direct een fashion shoot boeken? Neem <Link href="/contact">contact</Link> op of bekijk mijn <Link href="/portfolio">portfolio</Link> voor inspiratie!</TextContent>
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