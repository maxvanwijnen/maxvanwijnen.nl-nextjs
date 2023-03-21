import React from "react";
import ReactPhotoGallery from "../components/ReactPhotoGallery/ReactPhotoGallery";
import TextContent from "../components/TextContent/TextContent";

export default function Portfolio (){
    return (
        <section>
            <TextContent
                title="Mijn portfolio als fotograaf">Op deze pagina vindt je een selectie foto`s van eerdere shoots. Het juiste licht speelt een belangrijke factor bij het behalen van deze resultaten. Ik fotografeer daarom (afhankelijk van de locatie) het liefst ongeveer 2 uur na zonsopkomst / 2 uur voor zonsondergang. De zon staat dan mooi laag, het licht is zachter, en de schaduwen zijn mooi lang. Dat brengt de mooiste rustige achtergronden en zachte lichtval mijn modellen.
            </TextContent>
            <ReactPhotoGallery />
        </section>

    );
}