import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/HomeModern.module.scss';
import Link from "next/link";
import Layout from './../components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Fotograaf in Noordwijk | Unieke fotoshoots op locatie
        </title>
        <meta
          name="description"
          content="Wil je graag mooie en professionele foto's laten maken? Ik sta voor je klaar als ervaren fotograaf uit Noordwijk. Neem nu contact op voor meer informatie."
          key="desc"
        />
        <meta name="google-site-verification" content="VRuaMHZTJKhR_HKYhUWEgmSLOvLt_kMQKt0zYVpw_mw" />
        <meta name="msvalidate.01" content="6EEF5CFC8BBEDF2585F23959D9F085A0" />
        <link rel="preload" as="image" href="/img/header/Kinderfotografie-header.webp" />
      </Head>
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
          <img src="https://dev1.maxvanwijnen.nl/docs/images/intro-text/Max-van-Wijnen-Profielfoto.webp" alt="Max van Wijnen fotograaf" />
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
