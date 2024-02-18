import React from 'react';
import TextContent from '../../components/TextContent/TextContent';
import IntroTextImg from "../../components/IntroTextImg/IntroTextImg";
import TxtImg2Column from "../../components/TxtImg2Column/TxtImg2Column";
import Quote from "../../components/Quote/Quote";
import TextImg from "../../components/TextImg/TextImg";
import Head from 'next/head';
import Faq from '../../components/FAQ/Faq';

const HerfstFotografieWorkshopNatuurlijkLicht = () => {
    return (
        <>
            <Head>
                <title>
                    Natuurlijk licht portret workshop | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="De natuurlijk licht portret fotografie workshop, leuk, interactief en leerzaam. Kom je ook?"
                    key="desc"
                />
            </Head>
        <section>
            <IntroTextImg
            title="Workshop herfst portretten in natuurlijk licht"
            
            >
                <p>Een tweedelige leuke en praktische fotografie workshop</p>
            </IntroTextImg>

            
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
            



            <TextImg
                title="De juiste voorbereiding voor een perfecte familieshoot"
                img="https://dev1.maxvanwijnen.nl/docs/images/content-long/familie-fotoshoot.webp"
            >
                <h3>Andere locaties voor een fotoshoot in Noordwijk</h3>
                <p>Voor portretten zijn natuurlijk alle locaties mogelijk. Een groene, bosrijke omgeving biedt een sfeervolle achtergrond, maar ook het strand en de duinen kunnen een mooie locatie zijn. Heb je zelf wensen? Laat het me weten! Ik fotografeer momenteel in de Bollenstreek. Noordwijk, Noordwijkerhout, Voorhout, Katwijk en Leiden. Locaties buiten de Bollenstreek of de Randstad zijn in overleg uiteraard ook mogelijk.
                </p>


            </TextImg>

            <Faq />

        </section>
            </>
    )
}

export default HerfstFotografieWorkshopNatuurlijkLicht;