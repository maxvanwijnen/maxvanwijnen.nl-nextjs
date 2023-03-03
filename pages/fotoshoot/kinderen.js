import Image from "next/image";
import styles from "../../styles/Header.module.css";
import React from "react";
import ImgTxt2Column from '/components/TxtImg2Column/TxtImg2Column';
import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";

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
            <ImageRow
            images={[
                {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'}
            ]}
            />
        </>

            );
}