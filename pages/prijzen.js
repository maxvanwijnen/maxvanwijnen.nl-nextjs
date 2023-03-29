import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import PhotoshootTileMenu from "../components/PhotoshootTileMenu/PhotoshootTileMenu";

const Prijzen = () => {
    return (
        <section>
            <TextContent
                title="Boek nu jouw fotoshoot met keuze uit 3 pakketten!"
            >Als je op zoek bent naar een professionele fotoshoot, dan ben je bij mij aan het juiste adres. Ik bied 3 verschillende pakketten aan waar je uit kunt kiezen: basic, deluxe en premium. Op deze pagina zal ik je meer vertellen over deze pakketten en de mogelijkheden die je hebt als je bij mij een fotoshoot boekt. Prijzen kunnen verschillen per fotoshoot en zijn te vinden op pagina van de specifieke fotoshoot. Staat jouw keuze er niet bij? Neem gerust even contact op, dan kijken we samen naar de mogelijkheden.
            </TextContent>

            <PhotoshootTileMenu isBig={true} isPricePage={true}  />
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Pakketten en mogelijkheden"
                isFirstArticle={false}
            >
                Bij het basic pakket ontvang je 5 digitale foto`s. Wil je meer foto`s ontvangen? Kies dan voor het deluxe pakket, hierbij ontvang je 10 digitale foto`s. En tot slot is er het premium pakket, waarbij je 15 digitale foto`s kunt downloaden. Uiteraard maak ik tijdens de fotoshoot veel meer foto`s dan dat. Na afloop maak ik een voorselectie van het totaal aantal fotozs. Deze voorselectie stel ik beschikbaar via een speciale link op mijn website. Hier kun je rustig kijken naar de foto`s en je keuze maken. Het is geen enkel probleem als je toch liever meer of minder foto`s afneemt dan vooraf besproken. De minimale afname betreft 5 foto`s.

            </TxtImg2Column>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Uitbreidingsmogelijkheden"
                isFirstArticle={false}
                isInverted={true}
            >
                Alle pakketten zijn uitbreidbaar met extra foto`s. Je hoeft dus niet het exacte aantal foto`s van het pakket te kiezen. Extra foto`s kosten 15 euro per stuk. De foto`s in de voorselectie hebben een basis nabewerking. Nadat ik je keuze binnen heb ga ik voor je aan de slag met de nabewerking van de foto`s. Deze ontvang je binnen 2 weken als digitale download na het maken van de keuze. Wil je graag afdrukken ontvangen? Ook dat is uiteraard mogelijk. Kijk op de specifieke fotoshoot pagina voor meer informatie over de prijzen van de fotoshoots.
            </TxtImg2Column>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Andere wensen?"
                isFirstArticle={false}>
                Heb je andere wensen of ideeën? Vraag het me gerust, ik bespreek graag met jou de mogelijkheden. Ik ben een ervaren fotograaf die gespecialiseerd is in verschillende soorten fotoshoots. Of het nu gaat om een zakelijke fotoshoot, een familiefotoshoot of een fotoshoot voor je portfolio, bij mij ben je aan het juiste adres.
            </TxtImg2Column>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Boek nu jouw fotoshoot"
                isFirstArticle={false}
                isInverted={true}
            >
                Wil je meer informatie over mijn fotoshoots of wil je direct een fotoshoot boeken? Neem dan gerust contact met mij op via de contactpagina op mijn website. Ik kijk er naar uit om samen met jou de perfecte fotoshoot te creëren!
            </TxtImg2Column>








        </section>
    )
}

export default Prijzen;