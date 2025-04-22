import Head from 'next/head';
import TextContent from "../../components/TextContent/TextContent";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import Image from 'next/image';
import Link from "next/link";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import styles from '../../components/TextContent/TextContent.module.scss';

const heroImg = "/img/shoots/fashion/soluzione/fashion-shoot-strand-zee.jpg";

export default function Fashion() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Max van Wijnen Fotografie",
        "url": "https://www.maxvanwijnen.nl/fotoshoot/fashion",
        "image": "https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-blouses.webp",
        "description": "Professionele fashion fotograaf en modefotograaf voor merken, modellen en campagnes. Gespecialiseerd in fashion shoots, lookbook fotografie en branding fotografie.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sixlaan 4",
            "addressLocality": "Hillegom",
            "postalCode": "2182 TV",
            "addressCountry": "NL"
        },
        "telephone": "+31612345678",
        "priceRange": "€€",
        "areaServed": ["Hillegom", "Noordwijk", "Leiden", "Randstad", "Nederland"],
        "sameAs": [
          "https://www.facebook.com/maxvanwijnenfotografie",
          "https://www.instagram.com/maxvanwijnenfotografie/"
        ]
    };

    return (
        <div>
            <Head>
                <title>Fashion Fotograaf - Max van Wijnen</title>
                <meta name="description" content="Ik ben een ervaren fashion fotograaf gespecialiseerd in modefotografie voor merken, modellen en campagnes. Creatief, professioneel en met oog voor detail. Ontdek mijn unieke stijl en bekijk mijn fashion portfolio!" />
                <meta name="keywords" content="fashion fotograaf, modefotograaf, fashion shoot, lookbook, campagne, editorial, modellen, merken, studio, locatie, branding fotografie, modelfotografie" />
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
                <meta property="og:image" content="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-blouses.webp"/>
                <meta property="og:url" content="https://www.maxvanwijnen.nl/fotoshoot/fashion"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="Max van Wijnen Fotografie"/>
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Fashion Fotograaf | Professionele Fashion Shoots & Modelfotografie"/>
                <meta name="twitter:description" content="Fashion fotograaf voor high-end fashion shoots, lookbooks en campagnes. Gespecialiseerd in modelfotografie en fashion branding."/>
                <meta name="twitter:image" content="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-blouses.webp"/>
                {/* Canonical URL */}
                <link rel="canonical" href="https://www.maxvanwijnen.nl/fotoshoot/fashion"/>
                {/* JSON-LD structured data */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>
            <div style={{ position: 'relative', width: '100%', height: '48vw', maxHeight: 520, minHeight: 220, marginBottom: '2.5rem', borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.07)' }}>
              <Image
                src={heroImg}
                alt="Fashion fotoshoot op het strand en bij de zee"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <h2 style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 'clamp(2.2rem,6vw,3.2rem)',
                fontWeight: 800,
                textShadow: '0 4px 32px rgba(0,0,0,0.35), 0 1px 8px rgba(0,0,0,0.22)',
                zIndex: 2,
                textAlign: 'center',
                padding: '0 1vw',
                letterSpacing: '0.01em',
                pointerEvents: 'none',
              }}>
                Fashion fotograaf &amp; fashion shoot op het strand
              </h2>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg,rgba(0,0,0,0.32) 0%,rgba(0,0,0,0.10) 38%,rgba(0,0,0,0.15) 100%)',
                zIndex: 1,
              }} />
            </div>
            <main className={styles.fashionMain}>
                <section className={styles.fashionIntroSection}>
                    <p className={styles.fashionIntroText}>
                        Op zoek naar een professionele fashion fotograaf, modefotograaf of modelfotograaf die jouw merk, kledingcollectie of lookbook krachtig in beeld brengt? Met jarenlange ervaring in fashion fotografie, modefotografie en branding shoots help ik merken, modellen en designers aan unieke beelden die opvallen. Of het nu gaat om een editorial shoot, branding campagne, kledingfotografie of creatieve samenwerking: ik zorg voor stijlvolle fotografie die jouw verhaal vertelt en indruk maakt.
                    </p>
                    <ul className={styles.specialisatiesPills}>
                        <li>Fashion shoots voor merken, modellen & influencers</li>
                        <li>Lookbook fotografie & kledingfotografie</li>
                        <li>Campagne fotografie & branding fotografie</li>
                        <li>Editorial fotografie en creatieve samenwerkingen</li>
                        <li>High-end fashion fotoshoots</li>
                    </ul>
                </section>
                <section className={styles.fashionGridSection}>
                    <div className={styles.fashionGridRow}>
                        <div className={styles.fashionGridImg}>
                            <Image
                              src="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp"
                              alt="Fashion fotograaf op locatie - kledingfotografie voor merken"
                              width={400}
                              height={270}
                              sizes="(max-width: 600px) 100vw, 400px"
                              loading="lazy"
                            />
                        </div>
                        <div className={styles.fashionGridText}>
                            <h2>Fashion fotografie op locatie</h2>
                            <p>Fashion shoots op locatie geven je beelden een unieke sfeer. Of je nu kiest voor een urban setting, het strand of een bijzondere binnenlocatie, samen creëren we een shoot die past bij jouw stijl en merkidentiteit. Als ervaren fashion fotograaf en modefotograaf denk ik graag mee over het concept en styling.</p>
                        </div>
                    </div>
                    <div className={`${styles.fashionGridRow} ${styles.reverse}`}> 
                        <div className={styles.fashionGridText}>
                            <h2>Professionele modelfotografie & studio fashion shoots</h2>
                            <p>In de studio heb ik volledige controle over licht, styling en sfeer. Dit maakt het mogelijk om jouw fashion collectie, branding campagne of lookbook shoot op het hoogste niveau vast te leggen. Ideaal voor modellen, merken en designers die op zoek zijn naar high-end fashion fotografie en modelfotografie.</p>
                        </div>
                        <div className={styles.fashionGridImg}>
                            <Image
                              src="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio-lichte-achtergrond.webp"
                              alt="Professionele modelfotografie in de studio - fashion fotograaf"
                              width={400}
                              height={270}
                              sizes="(max-width: 600px) 100vw, 400px"
                              loading="lazy"
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.fashionUspSection}>
                    <h2>Waarom kiezen voor Max van Wijnen als fashion fotograaf?</h2>
                    <ul className={styles.uspList}>
                        <li>Creatief, professioneel & ervaren fashion fotograaf</li>
                        <li>Veel ervaring met fashion, modelfotografie, kledingfotografie en branding</li>
                        <li>Snelle levering en duidelijke communicatie</li>
                        <li>Samenwerking met stylisten, visagisten en modellenbureau&#39;s mogelijk</li>
                        <li>Portfolio met diverse fashion shoots, lookbooks en campagnes</li>
                    </ul>
                    <p>Wil je meer weten of direct een fashion fotoshoot boeken? <Link href="/contact">Neem contact op</Link>, bekijk mijn <Link href="/portfolio">portfolio</Link> of lees meer over <Link href="/fotoshoot/portret">modelfotografie</Link> voor inspiratie!</p>
                </section>
                <section className={styles.fashionFaqSection}>
                    <h2>Veelgestelde vragen over fashion fotografie</h2>
                    <FaqAccordion
                      faqs={[
                        {
                          question: "Wat doet een fashion fotograaf?",
                          answer: (
                            <span>Als fashion fotograaf help ik merken, designers en magazines om kleding, modellen en modecampagnes krachtig en stijlvol vast te leggen. Met oog voor detail, creativiteit en jouw wensen zorg ik ervoor dat kleding en accessoires optimaal tot hun recht komen – op locatie of in de studio, altijd met een uniek en passend concept.</span>
                          ),
                        },
                        {
                          question: "Voor wie is een fashion fotoshoot geschikt?",
                          answer: (
                            <span>Fashion fotografie is geschikt voor kledingmerken, modeontwerpers, modellen, influencers en iedereen die zijn of haar collectie of lookbook professioneel wil laten vastleggen.</span>
                          ),
                        },
                        {
                          question: "Hoe boek ik een fashion fotoshoot?",
                          answer: (
                            <span>Je kunt eenvoudig een fashion shoot boeken door het <Link href="/contact">contactformulier</Link> in te vullen of direct een <Link href="/boek-een-fotoshoot">fotoshoot te boeken</Link>. We bespreken samen jouw wensen, concept en locatie.</span>
                          ),
                        },
                        {
                          question: "Bied je ook branding fotografie en lookbook shoots aan?",
                          answer: (
                            <span>Ja, naast fashion fotografie bied ik ook lookbook fotografie en campagne fotografie aan voor merken en ondernemers.</span>
                          ),
                        },
                        {
                          question: "Wat kost een fashion fotoshoot?",
                          answer: (
                            <span>Laat me gerust weten wat het project betreft of wat de plannen zijn. Ik breng graag een vrijblijvende offerte uit!</span>
                          ),
                        },
                        {
                          question: "Kun je ook een model regelen voor de fashion fotoshoot?",
                          answer: (
                            <span>
                              Afhankelijk van jouw wensen kunnen we samen op zoek gaan naar een geschikt model. Max van Wijnen Fotografie kan een passend model aanbevelen uit een eigen netwerk, maar het is uiteraard ook mogelijk om zelf een model te regelen of samen te werken met een model dat door de opdrachtgever wordt aangedragen.
                            </span>
                          ),
                        },
                      ]}
                    />
                </section>
                <section className={styles.section}>
                  <h2>Fashion blog: Soluzione op het strand</h2>
                  <p>Lees het <Link href="/blog/fashion-fotografie-soluzione">blog over de fashion fotoshoot voor Soluzione blouses op het strand van Noordwijk</Link>. Hier vind je meer foto's, inspiratie en het verhaal achter de shoot.</p>
                </section>
                <section className={styles.section}>
                  <h2>Meer over Noordwijk</h2>
                  <p>Wist je dat <Link href="/fotoshoot/noordwijk">Noordwijk</Link> een van de mooiste locaties is voor een fashion fotoshoot? Ontdek de mogelijkheden!</p>
                </section>
                <ImageRow
                    title="Portfolio modefotografie"
                    images={[
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp', alt:'Fashion fotograaf blouses - kledingfotografie voor merken'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-utrecht.webp', alt:'Model fotograaf Utrecht - fashion fotografie'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-strand-Noordwijk.webp', alt:'Outdoor fashion fotografie - modefotograaf strand'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-blouses.webp', alt:'Modefotograaf blouse - kledingfotografie'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio-lichte-achtergrond.webp', alt:'Fashion fotografie in de studio - modelfotografie'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-soluzione.webp', alt:'Model fotografie - fashion fotograaf'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-utrecht-gracht.webp', alt:'Fashion foto Utrecht - modelfotograaf'},
                        {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio.webp', alt:'Fashion fotograaf studio - lookbook fotografie'}
                    ]}
                >Bekijk hier enkele voorbeelden van eerdere fashionfotoshoots.</ImageRow>
            </main>
        </div>
    );
}