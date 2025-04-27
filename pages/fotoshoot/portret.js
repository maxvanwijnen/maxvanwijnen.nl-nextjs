import React from "react";
import { useEffect , useState} from "react";
import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";
import axios from "axios"
import TextImg from './../../components/TextImg/TextImg';
import Head from "next/head";
import {prices} from "../../objects/prices";
import StudioContent from "../../components/StudioContent/StudioContent";
import OnPageSubDiv from "../../components/OnPageSubDiv/OnPageSubDiv";
import MinishootBooking from "../../components/MinishootBooking/MinishootBooking";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function Portret (){
    
    const allPackages = prices.find(entry => entry.fotoshoot === 'portret').packages;

    return (
        <>
            <Head>
                <title>
                    Een portretfotoshoot op maat | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Ontvang op maat gemaakte portretfotoshoots in Leiden en Noordwijk. Of het nu zakelijk of persoonlijk is, ervaar professionele fotografie op z'n best."
                    key="desc"
                />
                <link rel="preload" as="image" href="https://dev1.maxvanwijnen.nl/docs/images/header/portretfotografie.webp" />
            </Head>
            <Breadcrumbs />
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/portret-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Portret Fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Portret Fotoshoot"
                isFirstArticle={false}
            >
                Natuurlijk kun je bij mij ook terecht voor mooie portretfoto`s. Bijvoorbeeld voor een LinkedIn profielfoto of voor op je website. Zowel zakelijke portretfoto`s als foto`s met een prive uitstraling, alles is mogelijk.
            </TxtImg2Column>
            
            <OnPageSubDiv></OnPageSubDiv>
            <MinishootBooking></MinishootBooking>
            <StudioContent
                title="Jouw portret in de fotostudio in Leiden">
                Voel je welkom in mijn fotostudio in Leiden. Naast fotoshoots op locatie is het ook mogelijk je portretfoto in mijn studio in Leiden te maken. Een studioportret heeft weer een andere uitstraling dan portretfoto’s gemaakt op een buitenlocatie. Beiden zijn mooi, en beiden hebben zo z’n eigen voordelen. In de studio kies je gemakkelijk zelf je achtergrondkleur, kunnen we meer spelen met het licht en zijn we natuurlijk onafhankelijk van het weer. Wat natuurlijk erg fijn is. Daarnaast biedt de fotostudio meer privacy en is er een aparte ruimte aanwezig waar je je om kunt kleden indien je meerdere setjes kleding meebrengt.</StudioContent>



            <TextImg
                title="Mooie portret foto`s laten maken"
                img="https://dev1.maxvanwijnen.nl/docs/images/content-long/portret-fotoshoot.webp"
            >
                <h3>Voorbereiding op de fotoshoot</h3>
                <p>Samen bespreken we eerst jouw wensen, zodat we de juiste sfeer over kunnen brengen in de foto. Ben je meer op zoek naar een zakelijke uitstraling voor je portret foto’s of wil je een leuke portretfoto laten maken om cadeau te doen in de familie? Alles is mogelijk. Vervolgens zoeken we samen naar de juiste locatie, misschien heb je zelf al een mooi idee? Het tijdstip van de dag kan bepalend zijn voor het licht op de gekozen locatie, dus houden we hier rekening mee bij het plannen van de fotoshoot. Zo gaan we samen opzoek naar het beste resultaat. Het is natuurlijk ook mogelijk een los portret te maken tijdens een andere shoot, bijvoorbeeld een familieshoot.</p>
            </TextImg>

            <PricePackages
                shootType="Portret"
                pricePackages={allPackages}
            />

            <ImageRow
                title="Portfolio portretfotografie"
                images={[
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/roos-portret-fotostudio-achtergrond-wit.webp', alt:'Studio portret tegen een witte achtergrond'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/studio-fashion-portret-aisha-witte-achtergrond.jpg', alt:'Studio portret fashion witte achtergrond'}
                    
                ]}
            >
                Bekijk enkele voorbeelden van mijn portretfotoshoots in mijn portfolio. 
            </ImageRow>
        </>

    );
}