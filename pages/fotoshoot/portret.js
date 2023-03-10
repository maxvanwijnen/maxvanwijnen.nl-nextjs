
import React from "react";

import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";

import TextImg from './../../components/TextImg/TextImg';


export default function Portret (){
    return (
        <>
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Portret Fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Portret Fotoshoot"
                isFirstArticle={true}
            >
                Natuurlijk kun je bij mij ook terecht voor mooie portret foto`s. Bijvoorbeeld voor een LinkedIn profielfoto of voor op je website. Zowel zakelijke portretfoto`s als foto`s met een prive uitstraling, alles is mogelijk.
            </TxtImg2Column>
            <Quote>Een portret is een manier om een persoon te laten zien zoals hij of zij echt is, zonder masker</Quote>



            <TextImg
                title="Mooie portret foto`s laten maken"
                img="https://www.maxvanwijnen.nl/www/docs/images/content-long/familie-fotoshoot.webp"
            >
                <h3>Voorbereiding op de fotoshoot</h3>
                <p>Samen bespreken we eerst jouw wensen, zodat we de juiste sfeer over kunnen brengen in de foto. Ben je meer op zoek naar een zakelijke uitstraling voor je portret foto’s of wil je een leuke portretfoto laten maken om cadeau te doen in de familie? Alles is mogelijk. Vervolgens zoeken we samen naar de juiste locatie, misschien heb je zelf al een mooi idee? Het tijdstip van de dag kan bepalend zijn voor het licht op de gekozen locatie, dus houden we hier rekening mee bij het plannen van de fotoshoot. Zo gaan we samen opzoek naar het beste resultaat. Het is natuurlijk ook mogelijk een los portret te maken tijdens een andere shoot, bijvoorbeeld een familieshoot.</p>
            </TextImg>

            <PricePackages
                shootType="Portret"
                pricePackages={
                    [
                        {price:89,
                            type:'basic',
                            usplist:["5 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://www.maxvanwijnen.nl/www/docs/images/price-package/familieshoot-basic-fotoshoot.webp',
                            desc:''
                        },
                        {price:139,
                            type:'deluxe',
                            usplist:["10 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://www.maxvanwijnen.nl/www/docs/images/price-package/familieshoot-deluxe-fotoshoot.webp',
                            desc:''
                        },
                        {price:189,
                            type:'premium',
                            usplist:["15 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://www.maxvanwijnen.nl/www/docs/images/price-package/familieshoot-premium-fotoshoot.webp',
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