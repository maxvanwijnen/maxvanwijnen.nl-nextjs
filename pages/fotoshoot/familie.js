
import React from "react";

import Quote from "../../components/Quote/Quote";
import TxtImg2Column from "/components/TxtImg2Column/TxtImg2Column";
import ImageRow from "../../components/ImageRow/ImageRow";
import TextContent from "../../components/TextContent/TextContent";
import PricePackages from "../../components/PricePackages/PricePackages";

import TextImg from './../../components/TextImg/TextImg';
import Head from "next/head";


export default function Familie (){


    return (
        <>
            <Head>
                <title>
                    Familiefoto`s | Regio Noordwijk | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Creër blijvende herinneringen met een prachtig familieportret, gemaakt door een proffesionele familiefotograaf. Boek nu!"
                    key="desc"
                />
            </Head>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp"
                cssClass="Kinderen"
                imgAlt = "Familie fotografie"
                imgWidth={573}
                imgHeight={384}
                txtTitle="Familie fotoshoot"
                isFirstArticle={true}
            >
                Wil je mooie familie- of gezinsfoto`s laten maken? Dat is natuurlijk mogelijk. Bij een familie fotoshoot probeer ik vooral de liefde binnen het gezin vast te leggen. Dit doe ik geheel naar jullie eigen wensen. We kiezen voor een setting waarin iedereen zich gemakkelijk voelt. Dat komt ook het meest natuurlijk over op de uiteindelijke foto`s. Uiteraard hoeft een fotoshoot niet geheel te bestaan uit foto`s van de hele familie. We kunnen ook individuele foto`s maken of bijvoorbeeld een combinatie maken met een kinderfotoshoot.
            </TxtImg2Column>
            <Quote>Kinderen groeien zo snel op, maak daarom tijd om hun kostbare momenten vast te leggen</Quote>




            <TextImg
                title="De juiste voorbereiding voor een perfecte familieshoot"
                img="https://dev1.maxvanwijnen.nl/docs/images/content-long/familie-fotoshoot.webp"
            >
                <h3>Voorbereiding op de fotoshoot</h3>
                <p>Zoals bij elk type fotoshoot vind ik het belangrijk naar jullie wensen te luisteren voordat we beginnen. Daarom bespreken we vooraf eerst de plannen. Zo kunnen jullie alvast aangeven hoe groot de groep is en uit welke familieleden de groep bestaat. Zijn er bijvoorbeeld kinderen bij? Of juist ouderen mensen die wellicht slecht ter been zijn? Samen spreken we vervolgens af op een mooie locatie. De fotoshoot duurt ongeveer 1 uur. De fotoshoot is natuurlijk ook goed te combineren met bijvoorbeeld een individuele portretfotoshoot. Behoort dit tot jullie wensen? Laat het dan van te voren even weten dan houd ik hier graag rekening mee..</p>


            </TextImg>

            <PricePackages
                shootType="Familie"
                pricePackages={

                    [
                        {price:159,
                            type:'basic',
                            usplist:["5 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://dev1.maxvanwijnen.nl/docs/images/price-package/familieshoot-basic-fotoshoot.webp',
                            desc:''
                        },
                        {price:229,
                            type:'deluxe',
                            usplist:["10 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://dev1.maxvanwijnen.nl/docs/images/price-package/familieshoot-deluxe-fotoshoot.webp',
                            desc:''
                        },
                        {price:299,
                            type:'premium',
                            usplist:["15 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"],
                            img:'https://dev1.maxvanwijnen.nl/docs/images/price-package/familieshoot-premium-fotoshoot.webp',
                            desc:''
                        }
                    ]
                }
            />

            <ImageRow
                images={[
                    {url:'https://dev1.maxvanwijnen.nl/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'},
                    {url:'https://dev1.maxvanwijnen.nl/images/Fotoshoot-kind-noordwijk-001.jpg', alt:'kinder fotografie'}
                ]}
            >
                Bekijk enkele voorbeelden van onze kinderfotoshoots in ons portfolio. We hebben een verscheidenheid aan stijlen en poses om uit te kiezen, en we zijn ervan overtuigd dat je iets zult vinden dat je leuk vindt.
            </ImageRow>
        </>

    );
}