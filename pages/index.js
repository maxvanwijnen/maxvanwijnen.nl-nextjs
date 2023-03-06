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
      <h1>Professionele portretfotografie & fotoshoots</h1>
       <PhotoshootTileMenu isBig={true} />


    </section>
  )
}

