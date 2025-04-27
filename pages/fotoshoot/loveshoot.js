import React from "react";

import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

import TextImg from './../../components/TextImg/TextImg';
import Head from "next/head";
import {prices} from "../../objects/prices";

export default function Loveshoot (){

    const allPackages = prices.find(entry => entry.fotoshoot === 'loveshoot').packages;

    return (
        <>
            <Head>
                <title>
                    Een romantische love fotoshoot | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Wil je de liefde tussen jou en je partner vastleggen op een unieke manier? Boek dan nu een love fotoshoot op maat bij Max van Wijnen Fotografie"
                    key="desc"
                />
                <link rel="preload" as="image" href="https://dev1.maxvanwijnen.nl/docs/images/header/loveshoot-fotoshoot.webp" />
            </Head>
            <Breadcrumbs />
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/loveshoot-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Kinderfotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Loveshoot"
                isFirstArticle={false}
            >
                Zin in een leuke fotosessie met je geliefde? Gewoon omdat het leuk is, of misschien wel omdat jullie verloofd zijn of voor de uitnodiging van jullie bruiloft. Alles kan en alles mag! een loveshoot is natuurlijk ook het perfecte cadeau voor valentijnsdag!
            </TxtImg2Column>
            <Quote>Liefde is als een foto: het wordt alleen maar mooier naarmate de tijd verstrijkt</Quote>
            <TextContent
                title="Waarom een loveshoot boeken?"
            >
                Er zijn zoveel redenen waarom je een loveshoot zou kunnen overwegen. Het kan bijvoorbeeld een mooie manier zijn om jullie liefde te vieren en vast te leggen op een unieke manier. Het is ook een leuke ervaring die je samen met je partner kunt delen. Daarnaast kunnen de foto`s worden gebruikt voor save the date kaarten of als decoratie op jullie bruiloft.
            </TextContent>



            <TextImg
                title="Jullie loveshoot"
                img="https://dev1.maxvanwijnen.nl/docs/images/content-long/loveshoot-noordwijk.webp"
            >
                <h3>Hoe verloopt een loveshoot?</h3>
                <p>Het is belangrijk dat jullie je fijn en ontspannen voelen tijdens fotoshoot. Dat geeft niet alleen de mooiste resultaten op de foto, maar maakt ook de hele shoot tot een leuke ervaring. Het is daarom belangrijk om te weten dat tijdens de shoot alles kan en alles mag. Voel je je niet comfortabel op een drukke locatie in de binnenstad van Leiden? Dan kiezen we gewoon voor een rustig plekje op het strand of in een park. Daarnaast zijn jullie ook van harte welkom in mijn studio in Leiden. Uiteraard zijn er verschillende poses te bedenken voor de leukste resultaten, maar ook hierbij is het belangrijk dat deze goed bij jullie passen. Natuurlijk mag je het ook zelf aangeven als je leuke ideeën of wensen hebt.</p>

                <p></p>


            </TextImg>

            <PricePackages
                shootType="Loveshoot"
                pricePackages={allPackages}
            />

            <ImageRow
                title="Portfolio loveshoot fotografie"
                images={[
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/romantische-fotoshoot-duinen.webp', alt:'Fotoshoot verloving'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/verlovingsshoot-strand-duinen.webp', alt:'Fotoshoot verloving'}
                ]}
            >
                Bekijk enkele voorbeelden van loveshoots die ik eerder heb mogen verzorgen. Loveshoots zijn een hele leuke optie voor koppels om unieke fotos te maken voor een trouwkaart.
            </ImageRow>
        </>

    );
}