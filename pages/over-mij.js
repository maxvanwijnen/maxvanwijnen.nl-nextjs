import React, {useEffect, useState} from "react";
import ReactPhotoGallery from "../components/ReactPhotoGallery/ReactPhotoGallery";
import TextContent from "../components/TextContent/TextContent";
import axios from "axios";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Head from "next/head";


export default function OverMij ({props}){





    return (
        <section>
            <Head>
                <title>
                    Over Mij | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Hoe ben ik van hobbyist naar professionele fotograaf gegroeid? Lees mijn 'Over Mij'-pagina en ontdek mijn persoonlijke reis in de wereld van fotografie."
                    key="desc"
                />
            </Head>
            <TxtImg2Column
                imgSource="https://dev1.maxvanwijnen.nl/docs/images/intro-text/Max-van-Wijnen-Profielfoto.webp"
                cssClass="Kinderen"
                imgAlt = "Kinderfotografie"
                imgWidth={573}
                imgHeight={802}
                txtTitle="Over mij als fotograaf"
                isFirstArticle={true}
            >
                Al sinds ik oud genoeg was om met de spiegelreflex camera van mijn vader te spelen ben ik stukje bij beetje verslaafd geraakt aan fotografie. Toen ik voor mijn 21ste verjaardag mijn eigen camera kreeg was ik verkocht. In de loop der jaren en na de geboorte van mijn dochter Maud ben ik mij meer en meer gaan focussen op portret fotografie.

                Bij elke fotoshoot ga ik de uitdaging aan. Ben jij of zijn jullie de volgende die ik vast mag leggen? Ik heb er zin in!
            </TxtImg2Column>

        </section>

    );
}

