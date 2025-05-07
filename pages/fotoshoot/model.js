import Head from 'next/head';
import TextContent from "../../components/TextContent/TextContent";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import Image from 'next/image';
import Link from "next/link";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import styles from '../../components/TextContent/TextContent.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const heroImg = "https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Model-fotoshoot-portfolio.webp";

export default function ModelFotoshoot() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Model Fotoshoot",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Max van Wijnen Fotografie",
      "url": "https://www.maxvanwijnen.nl/fotoshoot/model",
      "telephone": "+31612345678",
      "image": heroImg,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sixlaan 4",
        "addressLocality": "Hillegom",
        "postalCode": "2182 TV",
        "addressCountry": "NL"
      }
    },
    "description": "Professionele model fotoshoot voor portfolio en casting. Inclusief stylingadvies, professionele retouch en snelle levering van high-end beelden.",
    "areaServed": ["Hillegom", "Leiden", "Noordwijk", "Randstad", "Nederland"]
  };

  return (
    <div>
      <Head>
        <title>Model Fotoshoot - Portfolio &amp; Casting - Max van Wijnen</title>
        <meta name="description" content="Boek een professionele model fotoshoot voor portfolio, casting of modellenbureau. High-end beelden, ervaren modelfotograaf en snelle levering." />
        <meta name="keywords" content="model fotoshoot, portfolio fotoshoot, modelfotografie, casting foto, model portfolio, fashion model fotoshoot, modellen shoot" />
        <meta name="author" content="Max van Wijnen" />
        <meta name="robots" content="index, follow" />
        {/* Geo tags */}
        <meta name="geo.region" content="NL-ZH" />
        <meta name="geo.placename" content="Hillegom" />
        <meta name="geo.position" content="52.2869;4.5833" />
        <meta name="ICBM" content="52.2869, 4.5833" />
        {/* Open Graph */}
        <meta property="og:title" content="Model Fotoshoot | Professionele Portfolio &amp; Casting Foto's" />
        <meta property="og:description" content="Professionele model fotoshoot met coaching, styling en high-end retouch. Perfect voor jouw portfolio of casting." />
        <meta property="og:image" content={heroImg} />
        <meta property="og:url" content="https://www.maxvanwijnen.nl/fotoshoot/model" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Max van Wijnen Fotografie" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Model Fotoshoot | Professionele Portfolio &amp; Casting Foto's" />
        <meta name="twitter:description" content="Professionele model fotoshoot met coaching, styling en high-end retouch. Perfect voor jouw portfolio of casting." />
        <meta name="twitter:image" content={heroImg} />
        {/* Canonical */}
        <link rel="canonical" href="https://www.maxvanwijnen.nl/fotoshoot/model" />
        {/* Preload LCP */}
        <link rel="preload" as="image" href="https://dev1.maxvanwijnen.nl/docs/images/header/model-fotoshoot-portfolio.webp" />
        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <main className={styles.fashionMain}>
        <Breadcrumbs />
        <section className={styles.fashionIntroSection}>
          <h2 className={styles.fashionHeroTitle} style={{ marginTop: 0 }}>Model fotoshoot</h2>
          <p className={styles.fashionIntroText}>
            Ben jij (beginnend) model of influencer en wil je je portfolio naar een hoger niveau tillen? Met een professionele model fotoshoot creëer je beelden die opvallen bij bureaus, opdrachtgevers en castings. Ik help je met pose-coaching, stylingadvies en zorg voor high-end retouch zodat jouw foto&#39;s er perfect uitzien.
          </p>
          <ul className={styles.specialisatiesPills}>
            <li>Portfolio&nbsp;shoots</li>
            <li>Casting&nbsp;foto&#39;s</li>
            <li>High-end&nbsp;retouch</li>
            <li>Studio&nbsp;&amp;&nbsp;locatie</li>
            <li>Ervaren&nbsp;modelfotograaf</li>
          </ul>
        </section>

        <section className={styles.fashionGridSection}>
          <div className={styles.fashionGridRow}>
            <div className={styles.fashionGridImg}>
              <Image src="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp" alt="Model fotoshoot op locatie - kledingfotografie portfolio" width={400} height={270} sizes="(max-width: 600px) 100vw, 400px" loading="lazy" />
            </div>
            <div className={styles.fashionGridText}>
              <h2>Portfolio fotoshoot op locatie</h2>
              <p>Een buitenlocatie geeft je portfolio dynamiek en sfeer. Samen kiezen we een setting die past bij jouw stijl en doel. Met coaching zorg ik dat je ontspannen poseert en de beste expressies laat zien.</p>
            </div>
          </div>
          <div className={`${styles.fashionGridRow} ${styles.reverse}`}>
            <div className={styles.fashionGridText}>
              <h2>Professionele studio modelfotografie</h2>
              <p>In de studio creëren we strakke en tijdloze beelden met volledige controle over licht en styling. Perfect voor polaroids, close-ups en andere vereisten van modellenbureaus en castings.</p>
            </div>
            <div className={styles.fashionGridImg}>
              <Image src="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio-lichte-achtergrond.webp" alt="Studio model fotoshoot lichte achtergrond" width={400} height={270} sizes="(max-width: 600px) 100vw, 400px" loading="lazy" />
            </div>
          </div>
        </section>

        <section className={styles.fashionUspSection}>
          <h2>Waarom kiezen voor een model fotoshoot bij Max?</h2>
          <ul className={styles.uspList}>
            <li>Persoonlijke pose-coaching &amp; feedback</li>
            <li>Snelle selectie &amp; levering van beelden</li>
            <li>Professionele retouch voor magazine-kwaliteit</li>
            <li>Ervaring met modellenbureaus &amp; castings</li>
            <li>Portfolio advies op maat</li>
          </ul>
          <p className={styles.fashionIntroText}>
            Klaar voor een leuke modelfotoshoot? <Link href="/contact">Neem contact op</Link> of <Link href="/boek-een-fotoshoot">boek direct je model fotoshoot</Link>.
          </p>
        </section>

        <section className={styles.fashionFaqSection}>
          <h2>Veelgestelde vragen over model fotoshoots</h2>
          <FaqAccordion
            faqs={[
              {
                question: "Wat neem ik mee naar een model fotoshoot?",
                answer: <span>Neem verschillende outfits, accessoires en basis make-up mee. We bespreken vooraf welke looks het beste passen bij jouw doelen.</span>,
              },
              {
                question: "Hoeveel foto's krijg ik?",
                answer: <span>Na de shoot ontvang je een online selectie waaruit je jouw favoriete beelden kiest. Deze worden professioneel geretoucheerd.</span>,
              },
              {
                question: "Kan ik ook een gecombineerde fashion & model shoot boeken?",
                answer: <span>Zeker! Bekijk de <Link href="/fotoshoot/fashion">fashion fotoshoot</Link> pagina voor meer informatie of neem contact op voor een maatwerkpakket.</span>,
              },
              {
                question: "Hoe boek ik een model fotoshoot?",
                answer: <span>Kies een fotoshootpakket onderaan deze pagina en boek eenvoudig en geheel vrijblijvend je fotoshoot.</span>,
              },
            ]}
          />
          {/* Extra FAQ: TFP */}
          <FaqAccordion
            faqs={[
              {
                question: "Doe je ook TFP model fotografie?",
                answer: <span>Zo af en toe doe ik ook TFP model fotoshoots. Heb je een bijzonder idee? Laat het me gerust even weten.</span>,
              },
              {
                question: "Mag ik mijn Model fotoshoots overal gebruiken?",
                answer: <span>Je bent vrij de foto&#39;s van de model fotoshoot te gebruiken voor portfolio werk en andere niet-commerciële doeleinden. Het is niet zomaar toegestaan de fotoshoot voor campagnes en andere commerciële doeleinden te gebruiken. Werk je in opdracht van een (mode)bedrijf en wil je graag mooie fashion foto&#39;s maken? Natuurlijk kan dat! Kijk even op <Link href="/fotoshoot/fashion">de fashion shoot pagina</Link> en boek een fashion shoot.</span>,
              }
            ]}
          />
        </section>

        <ImageRow
          title="Portfolio model fotografie"
          images={[
            {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp', alt:'Model fotoshoot blouses - kledingfotografie portfolio'},
            {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-utrecht.webp', alt:'Model fotoshoot Utrecht - fashion portfolio'},
            {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-strand-Noordwijk.webp', alt:'Model fotoshoot strand Noordwijk'},
            {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-blouses.webp', alt:'Model fotoshoot blouse - kledingfotografie'},
            {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio-lichte-achtergrond.webp', alt:'Studio model fotoshoot lichte achtergrond'},
            {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-soluzione.webp', alt:'Model fotografie - fashion shoot'},
            {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-utrecht-gracht.webp', alt:'Model fotoshoot Utrecht gracht'},
            {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio.webp', alt:'Studio model fotoshoot lookbook'},
            {url:'https://dev1.maxvanwijnen.nl/docs/images/fashion/fashion-fotoshoot-mannelijk-model.webp', alt:'Fashion model fotoshoot Peaky Blinders stijl'}
          ]}
        >Bekijk hieronder enkele voorbeelden van recente model fotoshoots.</ImageRow>

        <TextContent title="Direct een model fotoshoot boeken?" firstItem={false}>
          Ben je klaar om jouw portfolio te upgraden en je kansen bij castings te vergroten? <Link href="/contact">Neem contact op</Link> voor een vrijblijvende offerte of plan direct een <Link href="/boek-een-fotoshoot">model fotoshoot</Link> in. Ik denk graag met je mee over concept, styling en locatie zodat we beelden creëren die jouw unieke look versterken.
        </TextContent>
      </main>
    </div>
  );
}
