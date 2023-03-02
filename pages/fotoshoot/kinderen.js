import Image from "next/image";
import styles from "../../styles/Header.module.css";
import React from "react";
import ImgTxt2Column from '/components/TxtImg2Column/TxtImg2Column';
import Quote from "../../components/Quote/Quote";

export default function Kinderen (){
    return (
        <>
            <ImgTxt2Column
            imgSource="/img/header/Kinderfotografie-header.webp"
            cssClass="Kinderen"
            imgAlt = "Kinderfotografie"
            imgWidth={573}
            imgHeight={384}
            txtTitle="Kinderfotografie">
            Kinderfotografie is een van de leukste dingen die er is. Sinds de geboorte van mijn dochter ben ik mij hier meer en meer in gaan specialiseren. Op diverse locaties rond Noordwijk fotografeer ik uw kind in het buitenlicht om deze zo mooi mogelijk op een liefdevolle plaat vast te leggen.
            </ImgTxt2Column>
        <Quote>Kinderfotografie is misschien wel het leukste  wat er  is</Quote>
        </>

            );
}