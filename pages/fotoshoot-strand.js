import React from 'react';
import TextContent from "../components/TextContent/TextContent";
import TxtImg2Column from "../components/TxtImg2Column/TxtImg2Column";
import Quote from "../components/Quote/Quote";
import TextImg from "../components/TextImg/TextImg";
import Head from 'next/head';
import Faq from '../components/FAQ/Faq';

const FotoshootNoordwijk = () => {
    return (
        <>
            <Head>
                <title>
                    Fotoshoot op het strand | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Wil je graag een fotoshoot op het strand doen? Als ervaren fotograaf biedt ik prachtige fotoshoots op het strand en andere unieke locaties. Lees snel meer!"
                    key="desc"
                />
            </Head>
        <section>
            <TextContent
            title="Fotoshoot op het strand"
            firstItem={false}
            multiContent={[
                "Ontdek de ontspannen sfeer van fotoshoots op het strand bij Max van Wijnen Fotografie. Of je nu kiest voor een mooi portret, een gezellige familiebijeenkomst of een stralende zwangerschapsshoot, het strand biedt een natuurlijk decor voor ongedwongen en mooie momenten.",
              ]}
            />

            

            <Faq />

        </section>
            </>
    )
}

export default FotoshootNoordwijk;