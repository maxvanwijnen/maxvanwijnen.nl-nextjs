import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import PhotoshootTileMenu from "../components/PhotoshootTileMenu/PhotoshootTileMenu";

const Prijzen = () => {
    return (
        <section>
            <TextContent
                title="Prijzen voor een fotoshoot"
            >Als je bij mij een fotoshoot boekt, dan kun je kiezen uit 3 pakketten. Bij het kleinste pakket basic ontvang je 5 foto`s, kies je voor het deluxe pakket dan ontvang je 10 foto`s digitaal. Tenslotte is er het premium pakket waarbij je de mogelijkheid hebt om 15 foto`s te downloaden. Uiteraard maken we tijdens de fotoshoot veel meer foto`s dan dat. Na afsloop van de fotoshoot maak ik een voorselectie van het totaal aantal foto`s. Deze voorselectie stel ik beschikbaar via een speciale link op mijn website. Hier kun je in alle rust even kijken naar de foto`s en je keuze maken. Het is geen enkel probleem als je toch liever meer of minder foto`s afneemt dan vooraf besproken. De minimale afname betreft 5 foto`s. Alle pakketten zijn uitbreidbaar met extra foto`s. Je hoeft dus niet het exacte aantal foto`s van het pakket te kiezen. Extra foto`s buiten het pakket om kosten 15 euro per stuk. De foto`s in de voorselectie hebben een basis nabewerking. Nadat ik je keuze binnen heb ga ik voor je aan de slag met de nabewerking van de foto`s. Deze ontvang je binnen 2 weken als digitale download na het maken van de keuze. Uiteraard is het ook mogelijk om je foto`s bij mij af te laten drukken. Wil je graag afdrukken ontvangen, kijk hier voor meer informatie. Prijzen verschillen per type fotoshoot. Kijk op de specifieke fotoshoot pagina voor de prijzen. Heb je andere wensen of ideeen? Vraag het me gerust even dan bespreken we de mogelijkheden.
            </TextContent>

            <PhotoshootTileMenu isBig={true} />
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Het Beste Tijdstip Van De Dag Voor Een Fotoshoot"
                isFirstArticle={false}
            >
                Een van de belangrijkste factoren voor het maken van een succesvolle fotoshoot is het kiezen van het juiste tijdstip van de dag. Het beste moment voor een fotoshoot is meestal tijdens de vroege ochtend of late namiddag wanneer het licht zacht is.
                Ik fotografeer graag zo rond de 2 uur na zonsopkomst of 2 uur voor zonsondergang voor het mooiste licht. De zon staat dan mooi laag en de schaduwen zijn mooi lang. Uiteraard varieert dit tijdstip met de tijd van het jaar. Voor een goldenhour fotoshoot op het strand spreken we af ongeveer 1 uur voor zonsondergang.
            </TxtImg2Column>
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="De beste weeromstandigheden voor een Fotoshoot"
                isFirstArticle={false}
                isInverted={true}
            >
                Naast het kiezen van het juiste tijdstip van de dag, is het weer ook een belangrijke factor bij een fotoshoot op locatie. Bij slecht weer verplaatsen we de shoot naar een ander tijdstip of dag. Maar wat is nu slecht weer voor een buiten fotoshoot? Bij harde wind en regen zal de fotoshoot niet door kunnen gaan. Bewolking vormt echter geen belemmering, sterker nog voor een fotoshoot op een open locatie zoals het strand is bewolking juist fijn. Het licht wordt er namelijk mooi zacht van wat de foto`s ten goede komt.
            </TxtImg2Column>
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Mijn werkwijze als fotograaf"
                isFirstArticle={false}>
                Als je een fotoshoot bij me boekt dan kijken we samen naar een geschikte datum en een mooie locatie buiten of in de studio in Leiden. Tijdens de shoot gaan we samen op pad naar een mooie plek waar het licht ook goed is. Heb je speciale wensen voor het maken van de foto`s? Laat het dan gerust even weten. Na afloop van de fotoshoot maak ik een voorselectie en zet ik de foto`s in een voorbeeld gallerij. Kies hier zelf de foto`s uit die je graag zou willen hebben. Als ik je keuze ontvangen heb bewerk ik de foto`s en lever ik de digitale bestanden binnen 2 weken op. Het is ook mogelijk achteraf het aantal foto`s te wijzigen, dat is geen enkel probleem.
            </TxtImg2Column>
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Prijzen voor een fotoshoot"
                isFirstArticle={false}
                isInverted={true}
            >
                De prijzen voor fotoshoots kunnen verschillen per type shoot.
                Kijk daarom even op de specieke fotoshoot pagina voor de prijzen.
                De minimale afname is altijd 5 foto`s en het maximale pakket aantal is 15. Losse foto`s buiten pakketten om kosten 20 euro. Zou je toch liever de complete preview gallerij willen ontvangen? Dit is mogelijk tegen een meerprijs van 100 euro boven het premium pakket van 15 foto`s. Je kiest dan nog steeds je 15 favorieten foto`s uit. Deze worden op hoge kwaliteit nabewerkt. De overigens foto`s ontvang je met een basis nabewerking. (Deze is reeds in de preview gallerij gedaan)
            </TxtImg2Column>








        </section>
    )
}

export default Prijzen;