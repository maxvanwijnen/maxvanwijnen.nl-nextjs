import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import PhotoshootTileMenu from "../components/PhotoshootTileMenu/PhotoshootTileMenu";
import StepsInfoGraphic from "../components/StepsInfoGraphic/StepsInfoGraphic";
import Head from 'next/head';
import BookingForm from "../components/BookingForm/BookingForm";

const BoekEenShoot = () => {
    return (
        <>
            <Head>
                <title>
                    Fotoshoot boeken | Noordwijk Leiden | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Wil je graag een mooie fotoshoot boeken in de omgeving Noordwijk, Leiden? Neem vrijblijvend contact op!"
                    key="desc"
                />
                <link rel="preload" as="image" href="https://dev1.maxvanwijnen.nl/docs/images/header/fotoshoot-op-het-strand.webp" />
            </Head>
        <section>
            <TextContent
                title="Boek een fotoshoot"
                firstItem={false}
            >Boek je bij mij een fotoshoot? Dan kies je voor kwaliteit. Want niet alleen tijdens de fotoshoot ben ik gedreven om het beste resultaat te behalen. Ook de tijd voorafgaand aan de fotoshoot is bepalend voor de kwaliteit. Zo bespreken we samen de locatie, het tijdstip en krijg je tips over kledingkeuze en meer. Ook besteed ik veel tijd en aandacht aan de nabewerking. Bekijk voor meer informatie de pagina’s Kinder foto`s, Portret foto`s, Familie foto`s, Zwangerschaps foto`s,
            </TextContent>

            <BookingForm />

            <PhotoshootTileMenu isBig={true} isBookable={true}/>

            <StepsInfoGraphic
                title="Mijn werkwijze na het boeken van een fotoshoot"
            />


        </section>
    </>
    )
}

export default BoekEenShoot;