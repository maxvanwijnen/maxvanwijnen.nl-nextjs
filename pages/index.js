import Head from 'next/head';
import Image from 'next/image';
import homeStyles from '../styles/HomeModern.module.scss';
import Link from "next/link";
import Layout from './../components/layout';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO/SEO';
import { websiteSchema, organizationSchema, localBusinessSchema } from '../components/SEO/StructuredData';

export default function Home() {
  // Maak een breadcrumb lijst voor de huidige pagina
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.maxvanwijnen.nl' },
  ];
  
  // Voeg gestructureerde gegevens samen
  const structuredData = [
    websiteSchema,
    organizationSchema,
    localBusinessSchema,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Fotograaf in Noordwijk | Max van Wijnen Fotografie",
      "description": "Professionele fotografie voor particulieren en bedrijven. Portretten, fashion, bedrijfsfotografie en meer. Ervaren fotograaf in Noordwijk en omgeving.",
      "url": "https://www.maxvanwijnen.nl",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.maxvanwijnen.nl"
      }
    }
  ];

  return (
    <>
      <SEO 
        title="Fotograaf in Noordwijk | Professionele fotoshoots op locatie"
        description="Ontdek professionele fotografie van Max van Wijnen. Portretten, fashion, bedrijfsfotografie en meer. Ervaren fotograaf in Noordwijk en omgeving."
        ogImage="https://www.maxvanwijnen.nl/img/og-default.jpg"
        structuredData={structuredData}
      />
      <Breadcrumbs />
      {/* HERO SECTION */}
      <section className={homeStyles.homeHero}>
        <div className={homeStyles.homeHeroText}>
          <h1 className={homeStyles.homeHeroTitle}>Professionele fotografie</h1>
          <div className={homeStyles.homeHeroSubtitle}>
            Fotoshoots voor gezinnen, bedrijven, merken en creatieve ondernemers. Altijd persoonlijk, creatief en met oog voor jouw unieke verhaal.
          </div>
          <div className={homeStyles.homeHeroBtnWrap}>
            <a className={homeStyles.homeHeroBtn} href="#diensten">Bekijk mijn aanbod</a>
          </div>
        </div>
        <div className={homeStyles.homeHeroImg}>
          <Image 
            src="https://dev1.maxvanwijnen.nl/docs/images/intro-text/Max-van-Wijnen-Profielfoto.webp" 
            alt="Max van Wijnen fotograaf"
            width={500}
            height={500}
            priority
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              borderRadius: '8px'
            }}
          />
        </div>
      </section>

      {/* DIENSTEN / SPECIALISATIES */}
      <section id="diensten" className={homeStyles.servicesGrid}>
        <div className={homeStyles.serviceCard}>
          <div className={homeStyles.serviceCardTitle}>Fashion & branding</div>
          <div className={homeStyles.serviceCardDesc}>Fashion, lookbook en branding shoots voor merken en ondernemers.</div>
          <Link href="/fotoshoot/fashion" className={homeStyles.serviceCardLink}>Meer over fashion fotografie</Link>
        </div>
        <div className={homeStyles.serviceCard}>
          <div className={homeStyles.serviceCardTitle}>Portretfotografie</div>
          <div className={homeStyles.serviceCardDesc}>Professionele portretten voor particulieren en zakelijk gebruik.</div>
          <Link href="/fotoshoot/portret" className={homeStyles.serviceCardLink}>Meer over portretfotografie</Link>
        </div>
        <div className={homeStyles.serviceCard}>
          <div className={homeStyles.serviceCardTitle}>Familie fotoshoots</div>
          <div className={homeStyles.serviceCardDesc}>Gezinsfoto&apos;s met een ontspannen sfeer en veel aandacht voor interactie.</div>
          <Link href="/fotoshoot/familie" className={homeStyles.serviceCardLink}>Meer over familieshoots</Link>
        </div>
        <div className={homeStyles.serviceCard}>
          <div className={homeStyles.serviceCardTitle}>Zwangerschapsfotografie</div>
          <div className={homeStyles.serviceCardDesc}>Prachtige zwangerschapsfoto&apos;s op locatie of in de studio, met aandacht voor jouw verhaal.</div>
          <Link href="/fotoshoot/zwangerschap" className={homeStyles.serviceCardLink}>Meer over zwangerschapsfotografie</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={homeStyles.testimonialsSection}>
        <div className={homeStyles.testimonialsTitle}>Wat klanten zeggen</div>
        <div className={homeStyles.testimonialGrid}>
          <div className={homeStyles.testimonialCard}>
            <div className={homeStyles.testimonialText}>“Max weet als geen ander hoe hij mensen op hun gemak stelt. De foto&apos;s zijn prachtig en écht een blijvende herinnering!”</div>
            <div className={homeStyles.testimonialName}>- Sanne, Noordwijk</div>
          </div>
          <div className={homeStyles.testimonialCard}>
            <div className={homeStyles.testimonialText}>“Superfijne ervaring, snelle levering en geweldige foto&apos;s. Zeker een aanrader voor gezinnen!”</div>
            <div className={homeStyles.testimonialName}>- Jeroen, Leiden</div>
          </div>
          <div className={homeStyles.testimonialCard}>
            <div className={homeStyles.testimonialText}>“Voor onze branding shoot kregen we veel creatieve input en het resultaat was boven verwachting.”</div>
            <div className={homeStyles.testimonialName}>- Studio Bloom</div>
          </div>
        </div>
      </section>
    </>
  )
}
