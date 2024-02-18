import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import Head from "next/head";
import Link from "next/link";
import TxtImgShort2 from './../components/TxtImgShort2/TxtImgShort2'
import RelatedPages from '../components/RelatedPages/RelatedPages';

const relatedPages = [
    {text : "Zwangerschapsfotoshoot in Leiden",link : "/fotoshoot/zwangerschap"},
    {text : "Fotograaf in Leiden",link : "/fotoshoot-leiden"},
    {text : "Fotografie workshop in Leiden",link : "/fotografie-workshop"},
    {text : "Fotoshoot",link : "/fotoshoot"},
    {text : "Fotoshoot op het strand",link : "/fotoshoot-strand"}
]



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
        img:"https://dev1.maxvanwijnen.nl/docs/images/txt-image-short/studio-fashion-portret-aisha.webp",
        imgAlt:"Portretfoto in de studio",
        h2:"Portret fotoshoot in de studio",
        p:"Laat mooie portretten maken in mijn fotostudio in Leiden.",
        callToAction:{
            text:"bekijk meer",
            link:"/fotoshoot/portret",
            photoLink:"/fotoshoot/portret#photo-portfolio"
        }
    }
}

//gittest
const Fotostudio = () => {
    return (
        <section>
            <Head>
                <title>
                    Fotostudio | Bezoek mijn studio in Leiden | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="In mijn fotostudio in Leiden zorg ik voor professionele foto's van idee tot resultaat. Laat je verrassen door de mogelijkheden en ontdek wat ik voor jou kan betekenen."
                    key="desc"
                />
            </Head>
            <TextContent
                title="Welkom in mijn fotostudio in Leiden"
                firstItem={false}
            >
                Op zoek naar professionele foto`s in de studio? Ik sta voor je klaar in mijn fotostudio in Leiden! Ik beschik over alle benodigde apparatuur om samen met jou de beste resultaten te behalen. Of je nu op zoek bent naar zakelijke portretfot`s of gewoon een mooie foto van jezelf wilt laten maken, ik help je graag verder. Ook als je een prachtige zwangerschapsfotoshoot wilt doen, ben je bij mij aan het juiste adres. Voel je welkom in mijn studio in Leiden!


            </TextContent>
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
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/content-long/fotostudio-leiden.webp"
                cssClass="Kinderen"
                imgAlt = "Studio fotografie in Leiden"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Studio portretfoto's in Leiden"
                isFirstArticle={false}
            >
               Wil je graag studio portretfoto`s laten maken in leiden? Dat kan! Boek snel je fotoshoot via de <Link href="/fotoshoot/portret#prijzen">pagina portretten</Link>.
            </TxtImg2Column>
            <RelatedPages  
                relatedTo = 'Fotostudio in Leiden'
                relatedPages = {relatedPages}
            />

        </section>
    )
}

export default Fotostudio;