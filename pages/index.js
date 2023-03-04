import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PhotoshootTileMenu }from '../components/PhotoshootTileMenu/PhotoshootTileMenu';
import ImgTxt2Column from "../components/TxtImg2Column/TxtImg2Column";
import React from "react";
import Link from "next/link";
import Layout from './../components/layout';

export default function Home() {


  return (
    <section className={styles.container}>
      <h1>Professionele portretfotografie & fotoshoots</h1>

        <ImgTxt2Column
            imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/kinder-fotoshoot.webp"
            cssClass="Kinderen"
            imgAlt = "Kinderfotografie"
            imgWidth={573}
            imgHeight={384}
            txtTitle="Kinderfotografie"

        >
            Ben jij op zoek naar professionele fotografie in de regio Leiden, Noordwijk of de bollenstreek? Samen bespreken wij jouw wensen en denk ik met je mee zodat je trots kan zijn op het eindresultaat. Hierbij heb ik mij gespecialiseerd in <Link href="/fotoshoot/kinderfotografie" ><a >kinderfotografie</a></Link> , portretfotografie, famillieportretten en zwangersschapsfoto&apos;s
        </ImgTxt2Column>


    </section>
  )
}

