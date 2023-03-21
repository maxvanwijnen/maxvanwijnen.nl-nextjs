import TextContent from "../components/TextContent/TextContent";
import React from "react";
import ContactForm from '/components/ContactForm/ContactForm';

export default function Contact (){
    return (
        <section>
            <TextContent
                title="Contact">
                Wil je een fotoshoot boeken of heb je andere vragen of wensen? Neem gerust even contact met me op via onderstaand formulier. Ik neem zo snel mogelijk contact met op je. Het is ook mogelijk via WhatsApp contact op te nemen. Gebruik daarvoor de groene knop rechtsonderin je scherm.
            </TextContent>
            <ContactForm />
        </section>
    );
}