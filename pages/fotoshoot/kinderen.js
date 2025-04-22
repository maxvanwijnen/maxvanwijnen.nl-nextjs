import React from "react";

import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";

import TextImg from './../../components/TextImg/TextImg';
import Head from "next/head";
import {prices} from "../../objects/prices";


export default function Kinderen (){

    const allPackages = prices.find(entry => entry.fotoshoot === 'kinderen').packages;

    return (
        <>
            <Head>
                <title>
                    Kinderfotoshoot | Regio Noordwijk | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Leg de mooiste momenten van je kinderen vast met een professionele fotograaf.
Boek nu een kinderfotoshoot!"
                    key="desc"
                />
            </Head>
            <TxtImg2Column
            imgSource="/img/header/Kinderfotografie-header.webp"
            cssClass="Kinderen"
            imgAlt = "Kinderfotografie"
            imgWidth={573}
            imgHeight={384}
            txtTitle="Kinderfotografie"
            isFirstArticle={false}
            >
            Kinderfotografie is een van de leukste dingen die er is. Sinds de geboorte van mijn dochter ben ik mij hier meer en meer in gaan specialiseren. Op diverse locaties rond Noordwijk fotografeer ik uw kind in het buitenlicht om deze zo mooi mogelijk op een liefdevolle plaat vast te leggen.
            </TxtImg2Column>
        <Quote>Kinderen groeien zo snel op, maak daarom tijd om hun kostbare momenten vast te leggen</Quote>
            <TextContent
                title="Waarom een professionele fotoshoot van uw kinderen?"
            >
                Als ouder wil je altijd de beste herinneringen vastleggen van je kinderen. Een professionele fotoshoot is hiervoor de ideale manier. Met professionele apparatuur en ervaring kan een fotograaf de natuurlijke schoonheid van je kind vastleggen, evenals hun unieke persoonlijkheid. Bovendien biedt een fotoshoot de mogelijkheid om fotos te maken die je misschien niet zelf zou bedenken, waardoor je nog meer unieke fotos krijgt om te koesteren.
            </TextContent>



            <TextImg
                title="Fotoshoot met kinderen: Advies voor kleding en accessoires"
                img="https://dev1.maxvanwijnen.nl/docs/images/content-long/kinder-fotoshoot.webp"
            >
                <h3>Voorbereiding op de fotoshoot</h3>
                <p>Het is belangrijk om je kind voor te bereiden op de fotoshoot om het meeste uit de sessie te halen. Hier zijn enkele tips:
                    Kies kleding die past bij de persoonlijkheid van je kind en comfortabel zit. Vermijd drukke patronen en grote logos die kunnen afleiden van de fotos.
                    Neem een favoriet speeltje of knuffel mee om je kind zich op zijn gemak te laten voelen. Dit kan ook helpen om een ​​natuurlijke glimlach op te roepen.
                    Plan de fotoshoot op een moment waarop je kind uitgerust en alert is. Dit kan betekenen dat je de fotoshoot plant na de middagdut of net na de maaltijd.</p>
                <h3>Wat kun je verwachten tijdens de fotoshoot?</h3>
                <p>Een kinderfotoshoot is een speelse en ontspannen ervaring. We zullen verschillende poses en activiteiten uitproberen om de spontaniteit en vreugde van je kind vast te leggen. Het is ook mogelijk om enkele fotos van het gezin samen te maken, als je dat wilt. We hebben veel ervaring met het werken met kinderen en zullen ons best doen om de fotoshoot leuk en interactief te maken.</p>

            </TextImg>

            <PricePackages
                shootType="Kinderen"
                pricePackages={allPackages}
                />

            <ImageRow
                title="Portfolio kinderfotografie"
                images={[
                    {url:'https://dev1.maxvanwijnen.nl/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'}
                ]}
            >
                Bekijk enkele voorbeelden van familieshoots in mijn portfolio.
            </ImageRow>
        </>

            );
}