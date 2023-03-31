import TextContent from "../components/TextContent/TextContent";
import React from "react";
import ContactForm from '/components/ContactForm/ContactForm';
import Head from 'next/head';
export default function Contact (){
    return (
        <>
            <Head>
                <title>
                    Neem contact met me op | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Een bijzondere fotoshoot boeken of vragen over mijn diensten? Ik sta je graag te woord. Bekijk mijn contactpagina voor meer informatie."
                    key="desc"
                />
            </Head>
        <section>
            <TextContent
                title="Contact">
                Wil je een fotoshoot boeken of heb je andere vragen of wensen? Neem gerust even contact met me op via onderstaand formulier. Ik neem zo snel mogelijk contact met op je. Het is ook mogelijk via WhatsApp contact op te nemen. Gebruik daarvoor de groene knop rechtsonderin je scherm.
            </TextContent>
            <ContactForm />
        </section>
            </>
    );
}