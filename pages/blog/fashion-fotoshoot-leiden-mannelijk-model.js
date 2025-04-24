import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/BlogPost.module.css';

export default function FashionFotoshootLeidenMannelijkModel() {
  return (
    <>
      <Head>
        <title>Fashion Fotoshoot Leiden in Peaky Blinders Stijl | Max van Wijnen Fotografie</title>
        <meta name="description" content="Bekijk deze unieke fashion fotoshoot in Leiden geïnspireerd op de Peaky Blinders stijl. Sfeervolle fotografie, vintage outfits en karakteristieke locaties door Max van Wijnen." />
        <meta name="keywords" content="fashion fotoshoot, leiden, peaky blinders, vintage, mode fotografie, fashion fotografie, Max van Wijnen, fotoshoot leiden, fashion fotograaf" />
        <meta property="og:title" content="Fashion Fotoshoot Leiden in Peaky Blinders Stijl | Max van Wijnen Fotografie" />
        <meta property="og:description" content="Bekijk deze unieke fashion fotoshoot in Leiden geïnspireerd op de Peaky Blinders stijl. Sfeervolle fotografie, vintage outfits en karakteristieke locaties door Max van Wijnen." />
        <meta property="og:image" content="https://dev1.maxvanwijnen.nl/docs/images/fashion/fashion-fotoshoot-mannelijk-model.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.maxvanwijnen.nl/blog/fashion-fotoshoot-leiden-mannelijk-model" />
        <link rel="canonical" href="https://www.maxvanwijnen.nl/blog/fashion-fotoshoot-leiden-mannelijk-model" />
      </Head>
      <article className={styles.blogPost}>
        <section className={styles.section}>
          <p>
            <Link href="/fotoshoot/fashion">← Terug naar Fashion fotografie overzicht</Link>
          </p>
        </section>
        <header>
          <h1>Fashion Fotoshoot in Leiden – Peaky Blinders Sfeer</h1>
          <p className={styles.intro}>
            Onlangs organiseerde ik een bijzondere fashion fotoshoot in het centrum van Leiden, geïnspireerd op de iconische Peaky Blinders stijl. Denk aan vintage kleding, authentieke accessoires en een sfeer die teruggrijpt naar het begin van de 20e eeuw. De karakteristieke locaties in Leiden vormden het perfecte decor voor deze unieke shoot.
          </p>
        </header>
        <section className={styles.section}>
          <h2>De Locatie: Leiden</h2>
          <p>
            Leiden staat bekend om zijn historische charme, smalle straatjes en prachtige grachten. Voor deze fotoshoot maakten we gebruik van verschillende plekken in de binnenstad, die perfect aansloten bij het vintage thema. Het samenspel van oud-Hollandse architectuur en sfeervol licht zorgde voor een authentiek resultaat.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Outfits & Styling</h2>
          <p>
            Voor deze shoot koos het model voor een klassieke Peaky Blinders look: een driedelig pak, pet, gilet en bijpassende accessoires. De styling was volledig in lijn met het tijdsbeeld, met veel aandacht voor details zoals stoffen, patronen en kleuren. Dit gaf de foto&apos;s een tijdloze, filmische uitstraling.
          </p>
        </section>
        <section className={styles.gallerySection}>
          <h2>Impressie: Peaky Blinders Fashion in Leiden</h2>
          <div className={styles.gallery}>
            <Image src="https://dev1.maxvanwijnen.nl/docs/images/fashion/fashion-fotoshoot-mannelijk-model.webp" alt="Peaky Blinders fashion fotoshoot in Leiden" width={1200} height={800} priority />
            <Image src="https://dev1.maxvanwijnen.nl/docs/images/fashion/fashion-fotografie-pak.webp" alt="Vintage pak tijdens fashion shoot Leiden" width={1200} height={800} />
            <Image src="https://dev1.maxvanwijnen.nl/docs/images/fashion/mode-fotofrafie-leiden.webp" alt="Mode fotografie in Peaky Blinders stijl Leiden" width={1200} height={800} />
            <Image src="https://dev1.maxvanwijnen.nl/docs/images/fashion/fashion-fotoshoot-leiden.webp" alt="Fashion fotoshoot Leiden vintage sfeer" width={1200} height={800} />
            <Image src="https://dev1.maxvanwijnen.nl/docs/images/fashion/fashion-fotografie-leiden.webp" alt="Fashion fotografie Leiden close-up" width={1200} height={800} />
            <Image src="https://dev1.maxvanwijnen.nl/docs/images/fashion/fashion-foto.webp" alt="Fashion foto Peaky Blinders Leiden" width={1200} height={800} />
          </div>
        </section>
        <section className={styles.section}>
          <h2>Ook een unieke fashion shoot boeken?</h2>
          <p>
            Wil je ook een fashion fotoshoot boeken in Leiden of elders, met een bijzonder thema of styling? Neem vrijblijvend <Link href="/contact">contact</Link> op of bekijk mijn <Link href="/portfolio">portfolio</Link> voor meer inspiratie!
          </p>
        </section>
      </article>
    </>
  );
}
