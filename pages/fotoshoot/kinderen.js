import Image from "next/image";
import styles from "../../styles/Header.module.css";
import React from "react";
import ImgTxt2Column from '/components/content-section.js';

export default function Kinderen (){
    return (
        <ImgTxt2Column
            imgSource="/img/header/Kinderfotografie-header.webp"
            cssClass="Kinderen"
            imgAlt = "Kinderfotografie"
            imgWidth={573}
            imgHeight={384}
            txtTitle="Kinderfotografie"
            txtContent="Kinderfotografie is een van de leukste dingen die er is. Sinds de geboorte van mijn dochter ben ik mij hier meer en meer in gaan specialiseren. Op diverse locaties rond Noordwijk fotografeer ik uw kind in het buitenlicht om deze zo mooi mogelijk op een liefdevolle plaat vast te leggen."
            />
    );
}