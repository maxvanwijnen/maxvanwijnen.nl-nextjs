
import React from "react";

import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";

import TextImg from '../../components/TextImg/TextImg';
import Head from "next/head";
import {prices} from "../../objects/prices";


export default function Familie (){

    const allPackages = prices.find(entry => entry.fotoshoot === 'familie').packages;


    return (
        <>
            <Head>
                <title>
                    Fashion / Mode Fotografie | Nederland | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Creër blijvende herinneringen met een prachtig familieportret, gemaakt door een proffesionele familiefotograaf. Boek nu!"
                    key="desc"
                />
            </Head>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/fashion-fotoshoot-met-model.webp"
                cssClass="Kinderen"
                imgAlt = "Fashion fotoshoot"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Fashion fotoshoot"
                isFirstArticle={false}
            >
                Op zoek naar een fashion fotograaf voor uw modebedrijf? Ik kan u helpen om professionele content te maken voor uw website, webshop, brochure of elke andere vorm van publicatie. Uiteraard kunnen we hiebrij samenwerken met een model die u zelf aandraagt, maar het is ook mogelijk te werken met modellen uit mijn eigen netwerk. Samen vinden we een model die het beste bij uw bedrijf past.
            </TxtImg2Column>
            <ImageRow
                images={[
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-strand-Noordwijk.webp', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-blouses.webp', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-soluzione.webp', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-utrecht.webp', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-met-model-utrecht.webp', alt:'kinder fotografie'}
                ]}
            >
                Bekijk hier enkele voorbeelden van eerdere fashionfotoshoots.

            </ImageRow>
        </>

    );
}