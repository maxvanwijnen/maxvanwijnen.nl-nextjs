import Image from "next/image";
import styles from "../../styles/Header.module.css";
import React from "react";
import ImgTxt2Column from '/components/TxtImg2Column/TxtImg2Column';
import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";

export default function Kinderen (){
    return (
        <>
            <TxtImg2Column
            imgSource="/img/header/Kinderfotografie-header.webp"
            cssClass="Kinderen"
            imgAlt = "Kinderfotografie"
            imgWidth={573}
            imgHeight={384}
            txtTitle="Kinderfotografie">
            Kinderfotografie is een van de leukste dingen die er is. Sinds de geboorte van mijn dochter ben ik mij hier meer en meer in gaan specialiseren. Op diverse locaties rond Noordwijk fotografeer ik uw kind in het buitenlicht om deze zo mooi mogelijk op een liefdevolle plaat vast te leggen.
            </TxtImg2Column>
        <Quote>Kinderen groeien zo snel op, maak daarom tijd om hun kostbare momenten vast te leggen</Quote>
            <TextContent>
                <TextContent
                    title="Waarom een professionele fotoshoot van uw kinderen?"
                >
                    Als ouder wil je altijd de beste herinneringen vastleggen van je kinderen. Een professionele fotoshoot is hiervoor de ideale manier. Met professionele apparatuur en ervaring kan een fotograaf de natuurlijke schoonheid van je kind vastleggen, evenals hun unieke persoonlijkheid. Bovendien biedt een fotoshoot de mogelijkheid om fotos te maken die je misschien niet zelf zou bedenken, waardoor je nog meer unieke fotos krijgt om te koesteren.
                </TextContent>
                <TextContent
                    title="Voorbereiding op de fotoshoot"
                >
                    Het is belangrijk om je kind voor te bereiden op de fotoshoot om het meeste uit de sessie te halen. Hier zijn enkele tips:
                    Kies kleding die past bij de persoonlijkheid van je kind en comfortabel zit. Vermijd drukke patronen en grote logos die kunnen afleiden van de fotos.
                    Neem een favoriet speeltje of knuffel mee om je kind zich op zijn gemak te laten voelen. Dit kan ook helpen om een ​​natuurlijke glimlach op te roepen.
                    Plan de fotoshoot op een moment waarop je kind uitgerust en alert is. Dit kan betekenen dat je de fotoshoot plant na de middagdut of net na de maaltijd.
                </TextContent>
                <TextContent
                    title="Wat kun je verwachten tijdens de fotoshoot?"
                >
                    Een kinderfotoshoot is een speelse en ontspannen ervaring. We zullen verschillende poses en activiteiten uitproberen om de spontaniteit en vreugde van je kind vast te leggen. Het is ook mogelijk om enkele fotos van het gezin samen te maken, als je dat wilt. We hebben veel ervaring met het werken met kinderen en zullen ons best doen om de fotoshoot leuk en interactief te maken.
                </TextContent>
                <TextContent
                    title="De beste leeftijd voor een kinderfotoshoot?"
                >
                    Er is geen specifieke leeftijd waarop een kinderfotoshoot het beste is. Elke leeftijd biedt unieke mogelijkheden voor creatieve en unieke fotos. Voor pasgeboren babys worden de beste fotos meestal gemaakt binnen de eerste twee weken na de geboorte. Voor oudere kinderen kunnen we een fotoshoot op maat maken op basis van hun leeftijd en persoonlijkheid.
                </TextContent>
                <TextContent
                    title="Pakketten en prijzen"
                >
                    We bieden verschillende pakketten voor onze kinderfotoshoots, variërend van korte sessies tot uitgebreide fotoshoots. Neem contact met ons op voor meer informatie over onze pakketten en prijzen. We zullen graag uw vragen beantwoorden en u helpen bij het kiezen van het beste pakket voor uw behoeften.
                </TextContent>

            </TextContent>
            <PricePackages />

            <ImageRow
            images={[
                {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'}
            ]}
            >
                Bekijk enkele voorbeelden van onze kinderfotoshoots in ons portfolio. We hebben een verscheidenheid aan stijlen en poses om uit te kiezen, en we zijn ervan overtuigd dat je iets zult vinden dat je leuk vindt.
            </ImageRow>
        </>

            );
}