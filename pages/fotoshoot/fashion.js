
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
                    Fashion Fotograaf | Nederland | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="De beste fashion fotograaf voor uw modebedrijf"
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
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp', alt:'Fashion fotograaf blouses'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-utrecht.webp', alt:'Model fotograaf'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-strand-Noordwijk.webp', alt:'Outdoor fashion fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-blouses.webp', alt:'Modefotograaf blouse'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio-lichte-achtergrond.webp', alt:'Fashion fotografie in de studio'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-soluzione.webp', alt:'Model fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotoshoot-utrecht-gracht.webp', alt:'Fashion foto'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Fashion-fotograaf-studio.webp', alt:'Fashion fotograaf'}
                ]}
            >
                Bekijk hier enkele voorbeelden van eerdere fashionfotoshoots.

            </ImageRow>
        </>

    );
}