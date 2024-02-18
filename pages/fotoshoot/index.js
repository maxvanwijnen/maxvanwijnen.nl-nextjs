import React from 'react';
import TextContent from "../../components/TextContent/TextContent";
import TxtImg2Column from "../../components/TxtImg2Column/TxtImg2Column";
import Quote from "../../components/Quote/Quote";
import TextImg from "../../components/TextImg/TextImg";
import PhotoshootTileMenu from "../../components/PhotoshootTileMenu/PhotoshootTileMenu";
import Head from "next/head";

const Fotoshoot = () => {
    return (
        <section>
            <Head>
                <title>
                    Fotoshoots op locatie & in de studio | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Stap in de wereld van fotografie en beleef een onvergetelijke ervaring tijdens een fotoshoot op locatie of in mijn studio in Leiden. Boek nu en geniet!"
                    key="desc"
                />
            </Head>
            <PhotoshootTileMenu  isBig={true}/>
            <TextContent
                title="Fotoshoot"
                firstItem={false}
            >De mooiste foto`s maken we samen en voor het maken van die mooie foto`s is een goede planning belangrijk. Factoren als het tijdstip van de dag, de locatie, kledingkeuze en weersomstandigheden hebben allemaal invloed op de de kwaliteit van de foto`s. Op deze pagina deel ik mijn tips en tricks voor het kiezen van de beste tijdstippen en weersomstandigheden, geef ik je kledingadvies en vertel ik je meer over mijn werkwijze. Zo komen we samen tot het beste resultaat!</TextContent>

            
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
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
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
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
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Mijn werkwijze als fotograaf"
                isFirstArticle={false}>
                Als je een fotoshoot bij me boekt dan kijken we samen naar een geschikte datum en een mooie locatie buiten of in de studio in Leiden. Tijdens de shoot gaan we samen op pad naar een mooie plek waar het licht ook goed is. Heb je speciale wensen voor het maken van de foto`s? Laat het dan gerust even weten. Na afloop van de fotoshoot maak ik een voorselectie en zet ik de foto`s in een voorbeeld gallerij. Kies hier zelf de foto`s uit die je graag zou willen hebben. Als ik je keuze ontvangen heb bewerk ik de foto`s en lever ik de digitale bestanden binnen 2 weken op. Het is ook mogelijk achteraf het aantal foto`s te wijzigen, dat is geen enkel probleem.
            </TxtImg2Column>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
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
                De minimale afname is altijd 5 foto`s en het maximale pakket aantal is 15. Losse foto`s buiten pakketten om kosten 15 euro. 
            </TxtImg2Column>








        </section>
    )
}

export default Fotoshoot;