import React from "react";

import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";

import TextImg from './../../components/TextImg/TextImg';
import Head from "next/head";
import {prices} from "../../objects/prices";


export default function Familie (){

    const allPackages = prices.find(entry => entry.fotoshoot === 'familie').packages;


    return (
        <>
            <Head>
                <title>
                    Fashion Fotoshoot | Regio Noordwijk | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Premium fashion foto's voor uw webshop, brochure of publicatie. Boek nu een fashion fotoshoot voor uw fashion bedrijf."
                    key="desc"
                />
                <meta
                    name="keywords"
                    content="fashion fotografie, fashion fotoshoot, professionele fashion fotograaf, mode fotografie, mode fotoshoot, fashionfotografie, fashionfotograaf"
                    key="keywords"
                />
                <meta
                    name="author"
                    content="Max van Wijnen Fotografie"
                    key="author"
                />
                <link rel="preload" as="image" href="/img/header/familiefotografie_header.webp" />
            </Head>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Familie fotoshoot"
                isFirstArticle={false}
            >
                Wil je mooie familie- of gezinsfoto`s laten maken? Dat is natuurlijk mogelijk. Bij een familie fotoshoot probeer ik vooral de liefde binnen het gezin vast te leggen. Dit doe ik geheel naar jullie eigen wensen. We kiezen voor een setting waarin iedereen zich gemakkelijk voelt. Dat komt ook het meest natuurlijk over op de uiteindelijke foto`s. Uiteraard hoeft een fotoshoot niet geheel te bestaan uit foto`s van de hele familie. We kunnen ook individuele foto`s maken of bijvoorbeeld een combinatie maken met een kinderfotoshoot.
            </TxtImg2Column>
            <Quote>Kinderen groeien zo snel op, maak daarom tijd om hun kostbare momenten vast te leggen</Quote>




            <TextImg
                title="De juiste voorbereiding voor een perfecte familieshoot"
                img="https://dev1.maxvanwijnen.nl/docs/images/content-long/familie-fotoshoot.webp"
            >
                <h3>Voorbereiding op de fotoshoot</h3>
                <p>Zoals bij elk type fotoshoot vind ik het belangrijk naar jullie wensen te luisteren voordat we beginnen. Daarom bespreken we vooraf eerst de plannen. Zo kunnen jullie alvast aangeven hoe groot de groep is en uit welke familieleden de groep bestaat. Zijn er bijvoorbeeld kinderen bij? Of juist ouderen mensen die wellicht slecht ter been zijn? Samen spreken we vervolgens af op een mooie locatie. De fotoshoot duurt ongeveer 1 uur. De fotoshoot is natuurlijk ook goed te combineren met bijvoorbeeld een individuele portretfotoshoot. Behoort dit tot jullie wensen? Laat het dan van te voren even weten dan houd ik hier graag rekening mee..</p>


            </TextImg>

            <PricePackages
                shootType="Familie"
                pricePackages={allPackages}
            />

            <ImageRow
                title="Portfolio gezinsfotografie"
                images={[
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Familie-fotograaf-bos.webp', alt:'Familie fotoshoot'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Familie-fotograaf-bollenstreek.webp', alt:'Familie fotoshoot'}
                ]}
            >
                Bekijk enkele voorbeelden van eerdere familiefotoshoots in de bollenstreek.
            </ImageRow>
        </>

    );
}