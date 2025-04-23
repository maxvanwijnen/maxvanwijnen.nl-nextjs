import React from "react";

import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import TxtImgShort2 from "/components/TxtImgShort2/TxtImgShort2";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";
import RelatedPages from "../../components/RelatedPages/RelatedPages";
import Head from 'next/head';
import TextImg from './../../components/TextImg/TextImg';
import {prices} from "../../objects/prices";
import TextImageAbove from "../../components/TextImgAbove/TextImageAbove";


export default function Zwangerschap (){

    const relatedPages = [
        {text : "Portretfotoshoots",link : "/fotoshoot/portret"},
        {text : "Fotostudio in Leiden",link : "/fotostudio"},
        {text : "Fotograaf in Leiden",link : "/fotoshoot-leiden"},
        {text : "Fotograaf in Noordwijk",link : "/fotoshoot-noordwijk"},
        {text : "Fotografie workshops in Leiden",link : "/fotografie-workshop"}
    ]

    const allPackages = prices.find(entry => entry.fotoshoot === 'zwangerschap').packages;

    const short = {
        "column1":{
            img:"https://dev1.maxvanwijnen.nl/docs/images/txt-image-short/Zwangerschapsfotografie-fotostudio.webp",
            imgAlt:"Zwangerschapsfotoshoot in de studio",
            h2:"Zwangerschaps fotoshoot in mijn studio in Leiden",
            p:"De mooiste zwangerschapsfoto's maken we in de studio. In de fotostudio hebben we alle apparatuur, ruimte en privacy om jouw zangerschap prachtig vast te leggen. In de studio zijn de mogelijkheden eindeloos, zo kunnen we varieren met achtergrond kleuren, belichting en is er een ruimte aanwezig waar je je om kunt kleden.",
            callToAction:{
                text:"bekijk meer",
                link:"/fotoshoot/zwangerschap#fotoshoot-in-studio",
                photoLink:"/fotoshoot/zwangerschap#photo-portfolio"

            }
        },
        "column2":{
            img:"https://dev1.maxvanwijnen.nl/docs/images/content-long/zwangerschap-fotoshoot.webp",
            imgAlt:"Zwangerschapsfotoshoot op locatie",
            h2:"Zwangerschaps fotoshoot op locatie",
            p:"Kies je liever voor een buiten locatie? Dat kan natuurlijk ook! Ook buiten zijn er veel mogelijkheden om een mooie zwangerschapsfotoshoot te doen. Denk aan zonsondergang op het strand, het bos of misschien wel gewoon in je eigen huis. Alles is mogelijk.",
            callToAction:{
                text:"bekijk meer",
                link:"/fotoshoot/zwangerschap#fotoshoot-op-locatie",
                photoLink:"/fotoshoot/zwangerschap#photo-portfolio"
            }
        }
    }

    

    return (
        <>
            <Head>
                <title>
                    Zwangerschapsshoot | Fotostudio Leiden of op locatie
                </title>
                <meta
                    name="description"
                    content="Leg de mooiste momenten van je zwangerschap vast met een zwangerschapsfotoshoot. Kies voor een prachtige buitenlocatie of voor prachtige studio foto&apos;s"
                    key="desc"
                />
                <link rel="preload" as="image" href="https://dev1.maxvanwijnen.nl/docs/images/header/zwangerschapsfotografie.webp" />
            </Head>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/zwangerschap-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Zwangerschapsshoot"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Zwangerschaps fotoshoot"
                isFirstArticle={false}
            >
                Ben je zwanger en wil je graag mooie zwangerschapsfoto&apos;s laten maken? Ik help je er graag bij! Je bent van harte welkom in mijn fotostudio in Leiden of op een willekeurige andere locatie. Zwangerschapsfotografie is heel persoonlijk en iedereen heeft zo zijn eigen wensen. Daarom vind ik het belangrijk om voorafgaand aan de fotoshoot alvast een contact moment te hebben om je wensen te bespreken. Zo weet jij wat je kunt verwachten en weet ik wat ik voor je kan betekenen.
            </TxtImg2Column>
            <TxtImgShort2
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/zwangerschap-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Zwangerschapsshoot"
                imgWidth={230}
                imgHeight={304}
                txtTitle="Zwangerschaps fotoshoot"
                isFirstArticle={true}
            >
            {short}
            </TxtImgShort2>
            <TextContent
                title="De mooiste zwangerschapsfoto&apos;s laten maken "
            >
                De beste tijd voor een zwangerschapsfotoshoot is zo rond de 33e week van je zwangerschap. Boek je zwangerschapsfotoshoot dus tijdig om zeker te weten dat ik rond die tijd ook een plekje beschikbaar heb. Vergeet niet je partner of kinderen ook mee te nemen, we maken natuurlijk ook graag wat foto`s van het hele gezin.
            </TextContent>
            <TextImageAbove
                img="https://dev1.maxvanwijnen.nl/docs/images/txt-image-above/Zwangerschapsfotoshoot-studio-leiden.jpg"
                title="Jouw zwangerschaps fotoshoot in de fotostudio in Leiden"
                id="fotoshoot-in-studio"
                callToAction={{text:"Bekijk de fotos",link:"/fotoshoot/zwangerschap#photo-portfolio"}}
            >
                Voel je welkom in mijn studio in Leiden. Na ons eerste contact moment weet ik wat jouw wensen zijn en wat ik voor je kan betekenen. Zo bereid ik alvast de studio voor met de juiste achtergrondkleur en het licht zo goed mogelijk afgesteld. Afhankelijk van het pakket dat je kiest is het mogelijk meerdere keren kleding te wisselen. Hier is een ruimte voor aanwezig in de studio. Afhankelijk van jouw wensen kunnen we ook de achtergrond wijzigen. Het leuke van de studio is dat alles mogelijk is voor wat betreft licht, achtergronden en creativieit. Heb je ergens een foto gezien zoals je hem graag zou willen hebben of heb je andeere specifieke wensen? Laat het me even weten, alles kan! 
                De fotostudio bevindt zich in Leiden en heeft voldoende parkeergelegenheid. 
            </TextImageAbove>
            <TextImageAbove
                img="https://dev1.maxvanwijnen.nl/docs/images/txt-image-above/Zwangerschapsfotoshoot-op-locatie-buiten.webp"
                title="Zwangerschaps fotografie op locatie"
                id="fotoshoot-op-locatie"
                callToAction={{text:"Bekijk de fotos",link:"/fotoshoot/zwangerschap#photo-portfolio"}}
            >
                Ik fotografeer graag in het bos, op het strand of in de duinen maar Noordwijk heeft natuurlijk ook andere mooie plekken te bieden. Locaties zijn ook afhankelijk van het weer en spreken we samen af. Misschien heb je zelf wensen? Op dit moment fotografeer ik in de Bollenstreek. Noordwijk, Noordwijkerhout, Voorhout, Katwijk en Leiden. Locaties buiten de Bollenstreek of de Randstad zijn in overleg uiteraard ook mogelijk.
            </TextImageAbove>

            <PricePackages
                shootType="Zwangerschap"
                pricePackages={allPackages}
            />
            {/*<PricePackages
                shootType="Zwangerschap"
                pricePackages={
                    [
                        {price:89,
                            type:'basic',
                            usplist:["5 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://dev1.maxvanwijnen.nl/docs/images/price-package/zwangerschap-basic-fotoshoot.webp',
                            desc:''
                        },
                        {price:139,
                            type:'deluxe',
                            usplist:["10 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://dev1.maxvanwijnen.nl/docs/images/price-package/zwangerschap-deluxe-fotoshoot.webp',
                            desc:''
                        },
                        {price:189,
                            type:'premium',
                            usplist:["15 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://maxvanwijnen.nl/docs/images/price-package/zwangerschap-premium-fotoshoot.webp',
                            desc:''
                        }
                    ]
                }
            />*/}

            <ImageRow
                title="Portfolio zwangerschapsfotografie"
                images={[
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/zwangerschapsfotoshoot-zwart-wit.webp', alt:'Zwart wit zwangerschapsfoto'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/zwangerschaps-fotoshoot-studio.webp', alt:'Zwangerschapsfotoshoot in de studio in Leiden'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/zwangerschaps-foto-samen-met partner.webp', alt:'Zwanger Fotoshoot met gezin'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/zwangerschaps-fotografie-in-leiden.webp', alt:'Zwangerschapsfotografie in Leiden'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/zwangerschaps-fotograaf.webp', alt:'Zwangerschapsfotoshoot Fotograaf in Leiden'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/zwangerschapsshoot-in-Leiden.webp', alt:'Zwangerschapsfotoshoot in Leiden'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/zwangerschap-fotoshoot-leiden-studio.webp', alt:'Zwangerschapsfotoshoot in Leiden'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/zwangerschap-fotoshoot-leiden-noordwijk.webp', alt:'Zwangerschapsfotoshoot in Leiden'}

                    
                ]}
            >
                Bekijk enkele voorbeelden van zwangerschapsfotoshoots in mijn portfolio. Zwangerschapsfotoshoot zijn natuurlijk heel persoonlijk. In de studio is vrijwel alles mogelijk. Heb je voorkeuren die je niet zo zeer op mijn website tegenkomt? Laat het gerust weten, er is van alles mogelijk!
            </ImageRow>
            <RelatedPages  
                relatedTo = 'Zwangerschaps fotografie in de studio en op locatie'
                relatedPages = {relatedPages}
            />
        </>

    );
}