import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import Head from "next/head";
import Link from "next/link";

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
            >
                Op zoek naar professionele foto`s in de studio? Ik sta voor je klaar in mijn fotostudio in Leiden! Ik beschik over alle benodigde apparatuur om samen met jou de beste resultaten te behalen. Of je nu op zoek bent naar zakelijke portretfot`s of gewoon een mooie foto van jezelf wilt laten maken, ik help je graag verder. Ook als je een prachtige zwangerschapsfotoshoot wilt doen, ben je bij mij aan het juiste adres. Voel je welkom in mijn studio in Leiden!


            </TextContent>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/content-long/fotostudio-leiden.webp"
                cssClass="Kinderen"
                imgAlt = "Studio fotografie in Leiden"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Studio portretfoto's in Leiden"
                isFirstArticle={false}
            >
               Wil je graag studio portretfoto`s laten maken in leiden? Dat kan! Boek snel je fotoshoot via de <Link href="/fotoshoot/portet#prijzen">pagina portretten</Link>.
            </TxtImg2Column>

        </section>
    )
}

export default Fotostudio;