import React from "react";

import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";
import Head from 'next/head';
import TextImg from './../../components/TextImg/TextImg';
import {prices} from "../../objects/prices";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function Trouwen (){

    const allPackages = prices.find(entry => entry.fotoshoot === 'trouwen').packages;

    return (
        <>
            <Head>
                <title>
                    Trouwreportage | Regio Noordwijk | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Als professionele fotograaf maak ik prachtige portreftfoto's in de studio of buiten op locatie. Boek nu!"
                    key="desc"
                />
                <link rel="preload" as="image" href="https://dev1.maxvanwijnen.nl/docs/images/header/bruidsreportage.webp" />
            </Head>
            <Breadcrumbs />
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/trouwreportage-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Kinderfotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Trouwreportage"
                isFirstArticle={false}
            >
                Kinderfotografie is een van de leukste dingen die er is. Sinds de geboorte van mijn dochter ben ik mij hier meer en meer in gaan specialiseren. Op diverse locaties rond Noordwijk fotografeer ik uw kind in het buitenlicht om deze zo mooi mogelijk op een liefdevolle plaat vast te leggen.
            </TxtImg2Column>
            <Quote>Kinderen groeien zo snel op, maak daarom tijd om hun kostbare momenten vast te leggen</Quote>
            <TextContent
                title="Waarom een loveshoot boeken?"
            >
                Als ouder wil je altijd de beste herinneringen vastleggen van je kinderen. Een professionele fotoshoot is hiervoor de ideale manier. Met professionele apparatuur en ervaring kan een fotograaf de natuurlijke schoonheid van je kind vastleggen, evenals hun unieke persoonlijkheid. Bovendien biedt een fotoshoot de mogelijkheid om fotos te maken die je misschien niet zelf zou bedenken, waardoor je nog meer unieke fotos krijgt om te koesteren.
            </TextContent>



            <TextImg
                title="Voorbereiding"
                img="https://dev1.maxvanwijnen.nl/docs/images/content-long/bruidsreportage.webp"
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
                shootType="Trouwen"
                pricePackages={allPackages}
            />

            <ImageRow
                title="Portfolio trouwfotografie"
                images={[
                  // Voeg hier alleen geldige, werkende afbeeldingen toe:
                  // Voorbeeld:
                  // {url:'https://dev1.maxvanwijnen.nl/docs/images/gallery/bruidsreportage-001.webp', alt:'Trouwfotografie voorbeeld 1'},
                  // {url:'https://dev1.maxvanwijnen.nl/docs/images/gallery/bruidsreportage-002.webp', alt:'Trouwfotografie voorbeeld 2'},
                ]}
            >
                Bekijk enkele voorbeelden van onze kinderfotoshoots in ons portfolio. We hebben een verscheidenheid aan stijlen en poses om uit te kiezen, en we zijn ervan overtuigd dat je iets zult vinden dat je leuk vindt.
            </ImageRow>
        </>

    );
}