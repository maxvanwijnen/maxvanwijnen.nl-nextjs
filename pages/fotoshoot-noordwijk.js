import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import Head from 'next/head';
import Faq from '../components/FAQ/Faq';

const FotoshootNoordwijk = () => {
    return (
        <>
            <Head>
                <title>
                    Fotograaf in Noordwijk | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Op zoek naar een fotograaf in Noordwijk? Als ervaren fotograaf biedt ik prachtige fotoshoots op het strand en andere unieke locaties. Lees snel meer!"
                    key="desc"
                />
            </Head>
        <section>
            <TextContent
            title="Fotograaf in Noordwijk"
            firstItem={true}
            multiContent={[
                "Ben je op zoek naar een professionele fotograaf in Noordwijk? Als portretfotograaf fotografeer ik op locatie in Noordwijk en omgeving en heb ik een studio in Leiden. Of je nu op zoek bent naar een prachtige zwangerschapsfotoshoot, een leuke familiesessie, een romantische loveshoot of professionele profielfoto's voor LinkedIn, bij mij ben je aan het juiste adres.",
                "Als portretfotograaf werk ik graag op locatie, maar je bent ook van harte welkom in mijn studio in Leiden. Noordwijk en omgeving bieden diverse mooie fotolocaties, zoals het bos en het prachtige strand van Noordwijk met de zee en de duinen. Maar ook de Amsterdamse Waterleiding Duinen zijn in de buurt. Samen vinden we de perfecte locatie voor jouw of jullie fotoshoot",
                "Ik sta altijd open voor nieuwe ideeën en uitdagingen. Dus als je een ander leuk idee hebt voor een fotoshoot dan je terug vind op mijn website, laat het me gerust weten, dan kijken we samen naar de mogelijkheden!",
                "Dus heb je zin in een leuke onstspannen shoot met mooie resultaten? Boek mij als jouw fotograaf in Noordwijk en neem contact met me op."
              ]}
            />
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

export default FotoshootNoordwijk;