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
                Ben je opzoek naar professionele studiofoto`s? In mijn fotostudio in Leiden help ik je hier graag mee! Hier heb ik alle apparatuur beschikbaar om samen tot de mooiste resultaten te komen. Ben je opzoek naar portretfoto`s, zakelijk of gewoon voor jezelf? Of wil je graag een mooie zwangerschapsfotoshoot doen in mijn studio? Je bent van harte welkom in mijn studio in Leiden!


            </TextContent>
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Studio fotografie in Leiden"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Studio portretfoto's in Leiden"
                isFirstArticle={false}
            >
               Wil je graag studio portretfoto`s laten maken in leiden? Dat kan! Boek snel je fotoshoot via de <Link href="/fotoshoot/portet#prijzen">pagina portretten</Link>.
            </TxtImg2Column>

            <TextImg
                title="De juiste voorbereiding voor een perfecte familieshoot"
                img="https://www.maxvanwijnen.nl/www/docs/images/content-long/familie-fotoshoot.webp"
            >
                <h3>Andere locaties voor een fotoshoot in Noordwijk</h3>
                <p>Voor portretten zijn natuurlijk alle locaties mogelijk. Een groene, bosrijke omgeving biedt een sfeervolle achtergrond, maar ook het strand en de duinen kunnen een mooie locatie zijn. Heb je zelf wensen? Laat het me weten! Ik fotografeer momenteel in de Bollenstreek. Noordwijk, Noordwijkerhout, Voorhout, Katwijk en Leiden. Locaties buiten de Bollenstreek of de Randstad zijn in overleg uiteraard ook mogelijk.
                </p>


            </TextImg>

        </section>
    )
}

export default Fotostudio;