
import React from "react";

import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";

import TextImg from './../../components/TextImg/TextImg';


export default function Zwangerschap (){
    return (
        <>
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/zwangerschap-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Zwangerschapsshoot"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Zwangerschaps fotoshoot"
                isFirstArticle={true}
            >
                Gezinsuitbreiding op komst? De eerste herinneringen beginnen al tijdens de zwangerschap, leg deze tijd dan ook vast met mooie foto`s.
            </TxtImg2Column>
            <Quote>Een zwangerschapsshoot is een kans om een prachtige en speciale tijd vast te leggen die voorbij gaat voordat je het weet.</Quote>
            <TextContent
                title="De mooiste zwangerschapsshoot "
            >
                De beste tijd voor een zwangerschapsfotoshoot is zo rond de 33e week van je zwangerschap. Boek je zwangerschapsfotoshoot dus tijdig om zeker te weten dat ik rond die tijd ook een plekje beschikbaar heb. Daarnaast plannen we samen een back-up moment voor het geval dat het weer tegen zit. Met name harde wind of regen kunnen roet in het eten gooien. Is het bewolkt? Geen probleem , dit komt het resultaat vaak alleen maar ten goede. Vergeet niet je partner of kinderen ook mee te nemen, we maken natuurlijk ook graag wat foto`s van het hele gezin.
            </TextContent>



            <TextImg
                title="Zwangerschapshoot op locatie of in de studio in Leiden"
                img="https://www.maxvanwijnen.nl/www/docs/images/content-long/zwangerschap-fotoshoot.webp"
            >
                <h3>De mooiste locatie`s voor een zwangerschapshoot in Noordwijk</h3>
                <p>Ik fotografeer graag in het bos, op het strand of in de duinen maar Noordwijk heeft natuurlijk ook andere mooie plekken te bieden. Locaties zijn ook afhankelijk van het weer en spreken we samen af. Misschien heb je zelf wensen? Op dit moment fotografeer ik in de Bollenstreek. Noordwijk, Noordwijkerhout, Voorhout, Katwijk en Leiden. Locaties buiten de Bollenstreek of de Randstad zijn in overleg uiteraard ook mogelijk.</p>

                <h3>Jouw zwangerschapsshoot in de fotostudio in Leiden</h3>
                <p>Het is ook mogelijk je zwangerschapsshoot in de studio te doen. Hier heb je alle privacy en de mooiste foto`s te maken. Dit geeft weer een totaal ander beeld dan shoots op locatie.
                Beide zijn zijn erg mooi! Mijn fotostudio bevindt zich in Leiden en is goed bereikbaar vanaf de snelweg.</p>
            </TextImg>

            <PricePackages
                pricePackages={
                    [
                        {price:89,
                            type:'basic',
                            usplist:["5 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://www.maxvanwijnen.nl/www/docs/images/price-package/zwangerschap-basic-fotoshoot.webp',
                            desc:''
                        },
                        {price:139,
                            type:'deluxe',
                            usplist:["10 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://www.maxvanwijnen.nl/www/docs/images/price-package/zwangerschap-deluxe-fotoshoot.webp',
                            desc:''
                        },
                        {price:189,
                            type:'premium',
                            usplist:["15 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://www.maxvanwijnen.nl/www/docs/images/price-package/zwangerschap-premium-fotoshoot.webp',
                            desc:''
                        }
                    ]
                }
            />

            <ImageRow
                images={[
                    {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'}
                ]}
            >
                Bekijk enkele voorbeelden van onze kinderfotoshoots in ons portfolio. We hebben een verscheidenheid aan stijlen en poses om uit te kiezen, en we zijn ervan overtuigd dat je iets zult vinden dat je leuk vindt.
            </ImageRow>
        </>

    );
}