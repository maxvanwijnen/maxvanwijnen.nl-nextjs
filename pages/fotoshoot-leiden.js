import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import Link from "next/link";

const FotoshootLeiden = () => {
    return (
        <section>
            <TextContent
                title="Fotoshoot Leiden"
            >Ben je op zoek naar een fotograaf voor een mooie fotoshoot in of rondom Leiden? Dan ben je bij mij aan het juiste adres. Je kunt bij mij terecht voor alle type fotoshoots zoals een <Link href="/fotoshoot/zwangerschap">zwangerschapsfotoshoot</Link>, <Link href="/fotoshoot/kinderen">kinderfotoshoot</Link>, <Link href="/fotoshoot/familie">familiefotoshoot</Link> of een <Link href="/fotoshoot/portret">portretfotoshoot</Link>. Of heb je zelf een ander goed idee? Laat het me weten! Ik doe al mijn fotoshoots op locatie. Leiden kent vele mooie locaties voor fotoshoots, lees er hier meer over.</TextContent>
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Mijn fotostudio in Leiden"
                isFirstArticle={false}
                isInverted={false}
            >
                Wil je graag mooie studio foto`s laten maken? In mijn studio in Leiden ben je van harte welkom.
            </TxtImg2Column>
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Fotoshoot locaties in Leiden"
                isFirstArticle={false}
                isInverted={true}
            >
                Het centrum van Leiden is natuurlijk prachtig voor foto`s met een stedelijke sfeer. Die typische leidsche sfeer met de prachtige grachten, bruggetjes en straatjes zijn fantastisch voor een mooie fotoshoot. Maar binnen loopafstand bevinden zich ook genoeg parken waar we prachtige plekjes gaan vinden voor een mooie foto. Kortom ben je op zoek naar een mooie plek voor portretfoto`s? Leiden heeft het allemaal.
            </TxtImg2Column>
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Zwangerschaps fotoshoot in Leiden"
                isFirstArticle={false}
                isInverted={false}
            >
                Ben je zwanger en wil je dit graag vast laten leggen tijdens een mooie fotoshoot in Leiden? Je bent bij mij aan het juiste adres! Als fotograaf werk ik het liefst buiten in natuurlijk licht. We vinden altijd wel een plekje waar we geweldig licht hebben om zo de mooiste foto`s van jouw zwangerschap te maken. Een stad als Leiden is een ideale locatie voor mooie zwangerschapsfotografie. Natuurlijk is de rest van het gezin ook van harte welkom voor de fotoshoot. Wil je foto`s met een meer stedelijke uitstraling, kies je een van de prachtige hofjes, of gaan we richting een van de vele stadsparken in Leiden? Jij mag het zeggen!
            </TxtImg2Column>
            <TextContent
                title="Portretfotografie buiten in Leiden">
                Heb je een portretfoto nodig voor je social media kanalen of website? Of vind je het gewoon leuk om mooie foto's te laten maken? Ook een portretfotoshoot kan uitstekend buiten in Leiden gedaan worden.
            </TextContent>
            <TextContent
                title="Familiefotografie in Leiden">
                Met het hele gezin een mooie fotoshoot doen in Leiden, dat staat garant voor de mooiste resultaten. Het leuke van Leiden is dat we van de karakteristieke straatjes, zo ineens in een park belanden of bij de Leidsche grachten zijn. Een totaal andere familiefoto binnen enkele meter lopen.
            </TextContent>
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Andere locaties voor een fotoshoot in de bollenstreek"
                isFirstArticle={false}
                isInverted={true}
            >
                Voor portretten zijn natuurlijk alle locaties mogelijk. Een groene, bosrijke omgeving biedt een sfeervolle achtergrond, maar ook het strand en de duinen kunnen een mooie locatie zijn. Heb je zelf wensen? Laat het me weten! Ik fotografeer momenteel in de Bollenstreek. Noordwijk, Noordwijkerhout, Voorhout, Katwijk en Leiden. Locaties buiten de Bollenstreek of de Randstad zijn in overleg uiteraard ook mogelijk.
            </TxtImg2Column>


        </section>
    )
}

export default FotoshootLeiden;