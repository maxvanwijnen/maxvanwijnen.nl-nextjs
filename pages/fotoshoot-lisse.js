import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import Head from 'next/head';
import Link from 'next/link';
import RelatedPages from '../components/RelatedPages/RelatedPages';
import HeroLanding from '../components/HeroLanding/HeroLanding';
import FaqAccordion from '../components/FaqAccordion/FaqAccordion';

const FotoshootLisse = () => {
    const relatedPages = [
        {text : "Zwangerschapsfotoshoot in Lisse",link : "/fotoshoot/zwangerschap"},
        {text : "Fotostudio in Leiden",link : "/fotostudio"},
        {text : "Fotograaf in Haarlem",link : "/fotoshoot-haarlem"},
        {text : "Fotoshoot op het strand",link : "/fotoshoot-strand"},
        {text : "Fashion shoot op het strand", link: "/blog/fashion-fotografie-soluzione"}
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Max van Wijnen Fotografie Lisse",
        "image": "https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Zandvoort-001.webp",
        "description": "Fotograaf Lisse: professionele fotoshoots tussen de bollenvelden, in het centrum of op locatie. Gespecialiseerd in spontane, pure fotografie voor gezinnen, kinderen en koppels.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lisse",
        },
        "url": "https://www.maxvanwijnen.nl/fotoshoot-lisse",
        "telephone": "+31612345678"
    };

    return (
        <>
            <Head>
                <title>Fotograaf Lisse | Professionele Fotoshoot in Lisse | Max van Wijnen</title>
                <meta name="description" content="Op zoek naar een professionele fotograaf in Lisse? Specialist in gezinsfotografie, loveshoots en familiefotografie tussen de bollenvelden, in het centrum of op locatie. Bekijk mijn portfolio en boek direct."/>
                <meta property="og:title" content="Fotograaf Lisse | Professionele Fotoshoot in Lisse | Max van Wijnen"/>
                <meta property="og:description" content="Op zoek naar een professionele fotograaf in Lisse? Specialist in gezinsfotografie, loveshoots en familiefotografie tussen de bollenvelden, in het centrum of op locatie. Bekijk mijn portfolio en boek direct."/>
                <meta property="og:image" content="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-Zandvoort-001.webp"/>
                <meta property="og:url" content="https://www.maxvanwijnen.nl/fotoshoot-lisse"/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>
            <HeroLanding
                title="Fotograaf Lisse"
                description="Op zoek naar een professionele fotograaf in Lisse? Ik leg jouw gezin, liefde, familie of portret vast op een spontane en pure manier. In de omgeving van Lisse zijn er volop mogelijkheden: van kleurrijke bollenvelden tot de Amsterdamse Waterleidingduinen, het Keukenhofbos of andere mooie bossen in de buurt. Samen kiezen we de perfecte locatie voor jouw fotoshoot!"
                usp1="Spontane, pure fotografie"
                usp2="Bollenvelden, duinen & bos"
                usp3="Voor gezinnen, koppels & kinderen"
                image="https://dev1.maxvanwijnen.nl/docs/images/txt-image-above/Zwangerschapsfotoshoot-op-locatie-buiten.webp"
                showCarousel={true}
            />
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/txt-image-above/Zwangerschapsfotoshoot-op-locatie-buiten.webp"
                cssClass="Gezin"
                imgAlt = "Fotoshoot tussen de bollenvelden bij Lisse"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Fotoshoot in de bollenvelden van Lisse"
                isFirstArticle={false}
            >
                De bollenvelden rondom Lisse zijn een unieke locatie voor kleurrijke, vrolijke fotoshoots. Let op: niet alle bollenvelden zijn vrij toegankelijk voor fotoshoots. Wil je zeker zijn van een prachtige locatie waar fotograferen is toegestaan? Dan kunnen we terecht bij <strong>The Tulip Barn</strong>. Hier zijn de velden speciaal opengesteld voor bezoekers en fotoshoots. Houd er rekening mee dat hier een entreeprijs voor geldt, maar je krijgt er een schitterende, veilige en legale fotolocatie voor terug!
            </TxtImg2Column>
            <TextImg
                title="Waarom kiezen voor een fotograaf in Lisse?"
                img="https://dev1.maxvanwijnen.nl/docs/images/gallery/Familiefotoshoot-strand-001.webp"
            >
                <h3>Fotografie tussen de bloemen, in het centrum of in het park</h3>
                <p>In Lisse ken ik alle fotogenieke plekjes én de beste tijdstippen voor prachtig licht. Of je nu kiest voor een shoot tussen de bloemen, in het centrum of het park: we maken er iets bijzonders van. Reserveer eenvoudig jouw gezinsfotoshoot of <Link href="/fotoshoot-strand">bollenvelden-fotoshoot</Link> of <Link href="/fotoshoot-haarlem">gezinsfotoshoot</Link> in de regio Lisse!</p>
            </TextImg>
            <TextImg
                title="Loveshoot tussen de bollenvelden van Lisse"
                img="https://dev1.maxvanwijnen.nl/docs/images/gallery/Loveshoot-de-zilk-001.webp"
            >
                <p>Een van de mooiste plekken voor een loveshoot of portretshoot bij Lisse zijn natuurlijk de bollenvelden. Je vindt er volop kleur, rust en ruimte voor spontane, pure foto’s. Houd er rekening mee dat de bloeiperiode beperkt is, maar het levert unieke beelden op. Perfect voor wie houdt van natuur, bloemen en bijzondere herinneringen!</p>
            </TextImg>
            <FaqAccordion
                faqs={[
                    {
                        question: "Wat maakt een fotoshoot in Lisse uniek?",
                        answer: (
                            <span>De bollenvelden zorgen voor een kleurrijk en uniek decor. Je krijgt spontane, pure foto’s met een natuurlijke uitstraling – ideaal voor gezinnen, koppels en portretten.</span>
                        ),
                    },
                    {
                        question: "Wanneer is de beste tijd voor een bollenvelden fotoshoot?",
                        answer: (
                            <span>De bollenvelden staan meestal in bloei van half april tot begin mei. Boek tijdig om verzekerd te zijn van een plekje in deze korte, maar prachtige periode!</span>
                        ),
                    },
                    {
                        question: "Moet ik iets meenemen naar de fotoshoot?",
                        answer: (
                            <span>Neem vooral comfortabele kleding mee waarin je je prettig voelt. Denk aan laagjes, eventueel een extra jasje, en accessoires zoals hoedjes of een kleedje voor op het gras.</span>
                        ),
                    },
                    {
                        question: "Kunnen we ook bij zonsopkomst of zonsondergang fotograferen?",
                        answer: (
                            <span>Jazeker! Het gouden uur geeft magisch licht en zorgt voor extra sfeervolle foto’s. Dit is een aanrader voor fotoshoots in Lisse.</span>
                        ),
                    },
                    {
                        question: "Waar kunnen we parkeren bij de bollenvelden?",
                        answer: (
                            <span>Er zijn diverse parkeermogelijkheden in en rondom Lisse. Ik geef graag tips voor de beste parkeerplekken afhankelijk van de gekozen fotolocatie.</span>
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
                relatedTo = 'Fotoshoot Lisse'
                relatedPages = {relatedPages}
            />
        </>
    );
};

export default FotoshootLisse;
