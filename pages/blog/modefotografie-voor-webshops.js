import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './blog.module.scss';

export default function ModefotografieVoorWebshops() {
  return (
    <>
      <Head>
        <title>Modefotografie voor webshops | Professionele kledingfotografie</title>
        <meta name="description" content="Professionele modefotografie voor webshops. Laat je kledingcollectie verkopen met krachtige beelden. Fashion fotograaf voor merken, e-commerce en designers." />
        <meta name="keywords" content="modefotografie voor webshops, kleding fotografie, fashion fotograaf, productfotografie webshop, kleding webshop fotografie, e-commerce fotografie, lookbook fotograaf" />
        <link rel="canonical" href="https://www.maxvanwijnen.nl/blog/modefotografie-voor-webshops" />
      </Head>
      <main className={styles.blogPage}>
        <Breadcrumbs />
        <header style={{textAlign:'center', marginBottom:32}}>
          <Image src="/img/shoots/fashion/soluzione/model-soluzione-kleding.jpg" alt="Professionele modefotografie voor webshops" width={800} height={360} style={{borderRadius:12, maxWidth:'100%', height:'auto', marginBottom:24, objectFit:'cover'}} />
          <h1>Modefotografie voor webshops: professionele beelden die je kleding laten verkopen</h1>
        </header>
        <section>
          <p>
            Ben je op zoek naar een ervaren fotograaf voor je kledingwebshop? Als fashion fotograaf help ik merken en webshops om hun collectie professioneel en aantrekkelijk vast te leggen. Met een sterk oog voor stijl, detail en merkbeleving lever ik beelden die niet alleen mooi zijn, maar ook converteren.
          </p>
        </section>
        <section>
          <h2>Waarom goede modefotografie essentieel is voor jouw webshop</h2>
          <ul>
            <li>Laat je kleding beter tot zijn recht komen</li>
            <li>Versterkt het imago van je merk</li>
            <li>Zorgt voor meer vertrouwen en conversie</li>
            <li>Past perfect in je branding op je webshop én socials</li>
          </ul>
        </section>
        <section>
          <h2>Wat ik bied</h2>
          <ul>
            <li><strong>High-end productfotografie met model:</strong> Voor kleding die gedragen wordt, ideaal voor lookbooks, banners of productpagina’s.</li>
            <li><strong>Detail shots en sfeerbeelden:</strong> Laat texturen, pasvorm en unieke kenmerken spreken.</li>
            <li><strong>Studio of locatie:</strong> Ik fotografeer in een professionele setting of op een locatie die past bij jouw merk.</li>
            <li><strong>Korte levertijden & scherpe nabewerking:</strong> Zodat jij snel live kunt met je collectie.</li>
          </ul>
        </section>
        <section>
          <h2>Voor wie?</h2>
          <p>Ik werk onder andere voor:</p>
          <ul>
            <li>Startende kledingmerken</li>
            <li>E-commerce shops die hun fotografie willen verbeteren</li>
            <li>Agencies en ontwerpers met nieuwe collecties</li>
            <li>Duurzame merken die een visueel sterk verhaal willen vertellen</li>
          </ul>
        </section>
        <section>
          <h2>Locatie</h2>
          <p>
            Ik werk vanuit Nederland en fotografeer onder andere in: <br/>
            <strong>Amsterdam • Rotterdam • Utrecht • Den Haag</strong> <br/>
            en op locatie binnen en buiten de Randstad.
          </p>
        </section>
        <section>
          <h2>Klaar om jouw webshop visueel te versterken?</h2>
          <p>
            Wil je weten wat ik voor jouw merk of webshop kan betekenen? Neem vrijblijvend contact op voor een voorstel of een kennismaking.
          </p>
          <div style={{display:'flex', gap:16, flexWrap:'wrap', justifyContent:'center', margin:'24px 0'}}>
            <Link href="/contact" className={styles.bookButton} style={{minWidth:180, textAlign:'center'}}>Contact opnemen</Link>
            <Link href="/portfolio" className={styles.bookButton} style={{minWidth:180, textAlign:'center', background:'#e0e0e0', color:'#333'}}>Portfolio bekijken</Link>
          </div>
        </section>
        <div style={{ marginTop: 32, marginBottom: 32, textAlign: 'center' }}>
          <Link href="/blog" legacyBehavior>
            <a style={{ display: 'inline-block', background: '#263159', color: '#fff', padding: '10px 22px', borderRadius: '7px', fontWeight: 600, fontFamily: 'Raleway, Arial, sans-serif', textDecoration: 'none', fontSize: 16 }}>
              &larr; Terug naar blog overzicht
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
