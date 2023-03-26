import React, {useEffect, useState} from "react";
import ReactPhotoGallery from "../components/ReactPhotoGallery/ReactPhotoGallery";
import TextContent from "../components/TextContent/TextContent";
import axios from "axios";
import Head from "next/head";


export default function Portfolio ({props}){

    const [photos, setPhotos] = useState([]);

    useEffect(()=>{console.log(photos)},[photos])
    useEffect(()=>{getPictures()},[])

    const getPictures = async () => {
        let photoObj = {};
        let error = {};
        try {
            const result = await axios.get('https://www.maxvanwijnen.nl/www/docs/images/gallery/getImages.php');
            setPhotos(result.data);
        }
        catch (e) {
            error = e;
        }


    }




    return (
        <section>
            <Head>
                <title>
                    Portfolio | Bekijk mijn werk | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Als fotograaf heb ik mijn eigen stijl ontwikkeld. Bekijk mijn portfolio en ontdek hoe ik mijn unieke visie en creativiteit inzet om bijzondere momenten vast te leggen."
                    key="desc"
                />
            </Head>
            <TextContent
                title="Mijn portfolio als fotograaf">Op deze pagina vindt je een selectie foto`s van eerdere shoots. Het juiste licht speelt een belangrijke factor bij het behalen van deze resultaten. Ik fotografeer daarom (afhankelijk van de locatie) het liefst ongeveer 2 uur na zonsopkomst / 2 uur voor zonsondergang. De zon staat dan mooi laag, het licht is zachter, en de schaduwen zijn mooi lang. Dat brengt de mooiste rustige achtergronden en zachte lichtval mijn modellen.
            </TextContent>
            {photos && <ReactPhotoGallery photos={photos}/>}
        </section>

    );
}

