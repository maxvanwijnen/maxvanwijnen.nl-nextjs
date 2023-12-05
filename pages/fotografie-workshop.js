import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import Head from "next/head";
import Link from "next/link";

//gittest
const Fotostudio = () => {
    return (
        <section>
            <Head>
                <title>
                    Fotografie workshop | Leer basis en portret fotografie | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Ontdek de wereld van fotografie bij Max van Wijnen Fotografie! Meld je aan voor een van mijn workshops: Leer je camera instellen in de basisfotografie workshop of verbeter je portretfotografie in de workshop portretfotografie."
                    key="desc"
                />
            </Head>
            <TextContent
                title="Leuke en leerzame workshops voor iedereen"
            >
            Heb je ook nog zo&apos;n mooie camera in de kast liggen, maar weet je eigenlijk niet zo goed hoe je deze het best kunt gebruiken? Of gebruik je hem wel, maar zet je hem altijd op de automatische stand? Of misschien wil je gewoon je eigen portretfoto&apos;s naar een nog hoger niveau brengen? Kom gezellig een workshop volgen. De workshops zijn voor elk niveau geschikt, of je nu net begint met fotograferen of je al wat langer fotografeert. Volg bij mij een fotografie workshop en verbeter je vaardigheden. Mijn workshops zijn zowel theoretisch als praktijk gericht en natuurlijk gewoon enorm gezellig.
            </TextContent>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/content-long/fotostudio-leiden.webp"
                cssClass="Kinderen"
                imgAlt = "Studio fotografie in Leiden"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Cursus basis portretfotografie"
                isFirstArticle={false}
            >
               In mijn cursus basis fotografie leer ik je alle basis principes van het fotograferen.
               De workshop bestaat uit 2 delen. Op donderdag avond komen we gezellig samen in mijn studio in Leiden. Hier leer ik je alle basis beginselen van de fotografie.
               Hoewel deze avond de focus heeft op de theorie gaan we het zo praktisch mogelijk insteken. Door middel van live demo&apos;s met mijn eigen camera laat ik alle theorie in de praktijk zien.
               Dat maakt het niet alleen extra leerzaam, maar zo maken we zelfs de theorie erg praktisch. Na afloop van deze avond weet je alles wat je moet weten om los te gaan op de praktijk dag. Op de praktijk dag gaan we samen met een model op pad en maken we de mooiste foto&apos;s waarbij we de zojuist opgedane theorische kennis direct uitvoeren.<br></br>
                <br></br>
                <h3>We kijken onder andere naar:</h3>
               <ul>
                <li>Je camera hoe werkt dat apparaat nu eigenlijk?</li>
                <li>Alles over: Diafragma / Sluitertijd / ISO</li>
                <li>Altijd Scherpe foto&apos;s </li>
                <li>De beste Compositie</li>
                <li>Wat is RAW? Het verschil met JPG</li>
                <li>Apparatuur</li>
                <li>Je eigen Apparatuur</li>
                <li>Een korte introductie in nabewerking met Photoshop  en Lightroom</li>
               </ul>
               <p>
                
               </p>
               <br></br>
               <h3>Volgende workshop:</h3>
               <p>  
                donderdag 11 januari om 19:30 in Leiden  (de praktische theorie in de studio) <br></br>
                zaterdag 13 januari om 14:00 op een  nader te bepalen locatie in de regio Leiden. (de praktijk dag)
               </p>
               <br></br>
               <h3>Wat heb je nodig voor de workshop?:</h3>
               <p>  
                Een camera waarbij je de de belichting zelf in kunt stellen is voldoende.
                Bijvoorbeeld een spiegelreflex of een systeemcamera.
                Mooie portretlenzen zijn bijvoorbeeld de 50mm of de 85mm, maar in feite is elke lens geschikt voor de workshop.
               </p>
               <br></br>
               <h3>Kosten:</h3>
               <p>  
                De kosten voor de cursus bedragen 150 euro per persoon.
               </p>
               <br></br>
               <h3>Meedoen aan de workshop?</h3>
               <p>  
                Neem snel contact op! Omdat ik de groepen graag klein wil houden, zijn er beperkte plekken beschikbaar. (5 personen)
               </p>
            </TxtImg2Column>

        </section>
    )
}

export default Fotostudio;