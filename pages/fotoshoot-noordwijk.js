import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import Head from 'next/head';

const FotoshootNoordwijk = () => {
    return (
        <>
            <Head>
                <title>
                    Fotograaf in Noordwijk | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Op zoek naar een fotograaf in Noordwijk? Als ervaren fotograaf biedt ik rprachtige fotoshoot op het strand en andere unieke locaties. Lees snel meer!"
                    key="desc"
                />
            </Head>
        <section>
            <TextContent
            title="Fotoshoot Noordwijk"
            >Ben je op zoek naar een fotoshoot in of rondom Noordwijk? Dan ben je bij mij aan het juiste adres. Je kunt bij mij terecht voor alle type fotoshoots zoals een zwangerschapsfotoshoot, kinderfotoshoot, familiefotoshoot of een portretfotoshoot. Of heb je zelf een ander goed idee? Laat het me weten! Ik doe al mijn fotoshoots op locatie. Noordwijk kent vele mooie locaties voor fotoshoots, denk daarbij aan het strand, de duinen of het bos.</TextContent>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Fotoshoot locaties in Noordwijk"
                isFirstArticle={false}
            >
                Een mooie locatie voor een fotoshoot in Noordwijk is het Leeuwenhorstbos. Ik kom hier graag vanwege de mooie plekjes en paden. Er is altijd wel een plekje te vinden waar het licht mooi is. Het bos is niet te groot waardoor we niet ver hoeven te lopen, maar toch biedt het alle mogelijkeheden voor een mooie fotoshoot.


            </TxtImg2Column>
            <Quote>Kinderen groeien zo snel op, maak daarom tijd om hun kostbare momenten vast te leggen</Quote>




            <TextImg
                title="De juiste voorbereiding voor een perfecte familieshoot"
                img="https://dev1.maxvanwijnen.nl/docs/images/content-long/familie-fotoshoot.webp"
            >
                <h3>Andere locaties voor een fotoshoot in Noordwijk</h3>
                <p>Voor portretten zijn natuurlijk alle locaties mogelijk. Een groene, bosrijke omgeving biedt een sfeervolle achtergrond, maar ook het strand en de duinen kunnen een mooie locatie zijn. Heb je zelf wensen? Laat het me weten! Ik fotografeer momenteel in de Bollenstreek. Noordwijk, Noordwijkerhout, Voorhout, Katwijk en Leiden. Locaties buiten de Bollenstreek of de Randstad zijn in overleg uiteraard ook mogelijk.
                </p>


            </TextImg>

        </section>
            </>
    )
}

export default FotoshootNoordwijk;