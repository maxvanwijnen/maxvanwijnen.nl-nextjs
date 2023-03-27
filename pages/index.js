import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PhotoshootTileMenu }from '../components/PhotoshootTileMenu/PhotoshootTileMenu';
import ImgTxt2Column from "../components/TxtImg2Column/TxtImg2Column";
import React from "react";
import Link from "next/link";
import Layout from './../components/layout';
import IntroTextOnly from "../components/IntroTextOny/IntroTextOnly";
import TextImageAbove from "../components/TextImgAbove/TextImageAbove";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";

export default function Home() {


  return (

    <section className={styles.container}>
        <Head>
            <title>
                Fotograaf in Noordwijk | Unieke fotoshoots op locatie
            </title>
            <meta
                name="description"
                content="Wil je graag mooie en professionele foto's laten maken? Ik sta voor je klaar als ervaren fotograaf uit Noordwijk. Neem nu contact op voor meer informatie."
                key="desc"
            />
        </Head>
        <IntroTextOnly title="Professionele portretfotografie & fotoshoots">
            Ben jij op zoek naar professionele fotografie in de regio Leiden, Noordwijk of de bollenstreek? Samen bespreken we jouw wensen en denk ik met je mee voor het mooiste eindresultaat. Hierbij heb ik mij gespecialiseerd in <Link href="/fotoshoot/kinderen">kinderfotoshoots</Link>, <Link href="/fotoshoot/portret">portretfotografie</Link>, <Link href="/fotoshoot/familie">familie fotoshoots</Link>, <Link href="/fotoshoot/zwangerschap">zwangerschapshoots</Link>, <Link href="/fotoshoot/loveshoot">loveshoots</Link> en <Link href="/fotoshoot/trouwen">zwangerschapsshoots</Link>.
        </IntroTextOnly>


       <PhotoshootTileMenu isBig={true} />


        <TxtImg2Column
            imgSource="https://www.maxvanwijnen.nl/www/images/diverse/Max-van-Wijnen-Profielfoto.webp"
            cssClass="Kinderen"
            imgAlt = "Kinderfotografie"
            imgWidth={573}
            imgHeight={802}
            txtTitle="Over mij als fotograaf"
            isFirstArticle={true}
        >
            Al sinds ik oud genoeg was om met de spiegelreflex camera van mijn vader te spelen ben ik stukje bij beetje verslaafd geraakt aan fotografie. Toen ik voor mijn 21ste verjaardag mijn eigen camera kreeg was ik verkocht. In de loop der jaren en na de geboorte van mijn dochter Maud ben ik mij meer en meer gaan focussen op portret fotografie.

            Bij elke fotoshoot ga ik de uitdaging aan. Ben jij of zijn jullie de volgende die ik vast mag leggen? Ik heb er zin in!
        </TxtImg2Column>


    </section>
  )
}

