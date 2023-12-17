
import React from "react";

import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";

import TextImg from './../../components/TextImg/TextImg';
import Head from "next/head";
import {prices} from "../../objects/prices";
import StudioContent from "../../components/StudioContent/StudioContent";
import OnPageSubDiv from "../../components/OnPageSubDiv/OnPageSubDiv";


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
                    content="Mijn portretfotoshoots in Leiden en Noordwijk en omgeving zijn op maat gemaakt voor jou. Of je nu op zoek bent naar zakelijke portretten of persoonlijke foto's, ik zorg voor professionele fotografie op maat."
                    key="desc"
                />
            </Head>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/portret-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Portret Fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Portret Fotoshoot"
                isFirstArticle={true}
            >
                Natuurlijk kun je bij mij ook terecht voor mooie portretfoto`s. Bijvoorbeeld voor een LinkedIn profielfoto of voor op je website. Zowel zakelijke portretfoto`s als foto`s met een prive uitstraling, alles is mogelijk.
            </TxtImg2Column>
            <OnPageSubDiv></OnPageSubDiv>
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
                images={[
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/roos-studio-portret-achtergrond-zwart.webp', alt:'Studio Portret met zwarte achtergrond'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/roos-studio-portret-zwart-wit.webp', alt:'Studio portret in zwart wit'},
                    {url:'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/roos-portret-fotostudio-achtergrond-wit.webp', alt:'Studio portret tegen een witte achtergrond'}
                ]}
            >
                Bekijk enkele voorbeelden van mijn portretfotoshoots in mijn portfolio. 
            </ImageRow>
        </>

    );
}