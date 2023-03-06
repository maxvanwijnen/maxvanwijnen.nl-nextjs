

import React from "react";

import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";

import TextImg from './../../components/TextImg/TextImg';


export default function Loveshoot (){
    return (
        <>
            <TxtImg2Column
                imgSource="https://www.maxvanwijnen.nl/www/docs/images/intro-text/loveshoot-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Kinderfotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Loveshoot">
                Zin in een leuke fotosessie met je geliefde? Gewoon omdat het leuk is, of misschien wel omdat jullie verloofd zijn of voor de uitnodiging van jullie bruiloft. Alles kan en alles mag! een loveshoot is natuurlijk ook het perfecte cadeau voor valentijnsdag!
            </TxtImg2Column>
            <Quote>Liefde is als een foto: het wordt alleen maar mooier naarmate de tijd verstrijkt</Quote>
            <TextContent
                title="Waarom een loveshoot boeken?"
            >
                Er zijn zoveel redenen waarom je een loveshoot zou kunnen overwegen. Het kan bijvoorbeeld een mooie manier zijn om jullie liefde te vieren en vast te leggen op een unieke manier. Het is ook een leuke ervaring die je samen met je partner kunt delen. Daarnaast kunnen de foto's worden gebruikt voor save the date kaarten of als decoratie op jullie bruiloft.
            </TextContent>



            <TextImg
                title="Jullie loveshoot"
                img="https://www.maxvanwijnen.nl/www/images/1200/loveshoot/Loveshoot-strand-scheveningen-001.webp"
            >
                <h3>Hoe verloopt een loveshoot?</h3>
                <p>Het is belangrijk dat jullie je fijn en ontspannen voelen tijdens fotoshoot. Dat geeft niet alleen de mooiste resultaten op de foto, maar maakt ook de hele shoot tot een leuke ervaring. Het is daarom belangrijk om te weten dat tijdens de shoot alles kan en alles mag. Voel je je niet comfortabel op een drukke locatie in de binnenstad van Leiden? Dan kiezen we gewoon voor een rustig plekje op het strand of in een park. Daarnaast zijn jullie ook van harte welkom in mijn studio in Leiden. Uiteraard zijn er verschillende poses te bedenken voor de leukste resultaten, maar ook hierbij is het belangrijk dat deze goed bij jullie passen. Natuurlijk mag je het ook zelf aangeven als je leuke ideeën of wensen hebt.</p>

                <p></p>


            </TextImg>

            <PricePackages
                pricePackages={
                    [
                        {price:89,
                            type:'basic',
                            usplist:["5 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://www.maxvanwijnen.nl/www/docs/images/price-package/loveshoot-basic-fotoshoot.webp',
                            desc:''
                        },
                        {price:139,
                            type:'deluxe',
                            usplist:["10 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://www.maxvanwijnen.nl/www/docs/images/price-package/loveshoot-deluxe-fotoshoot.webp',
                            desc:''
                        },
                        {price:189,
                            type:'premium',
                            usplist:["15 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://www.maxvanwijnen.nl/www/docs/images/price-package/loveshoot-premium-fotoshoot.webp',
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