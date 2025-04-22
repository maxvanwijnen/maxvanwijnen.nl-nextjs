import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
const ReactPhotoGallery = dynamic(
  () => import("../components/ReactPhotoGallery/ReactPhotoGallery"),
  { ssr: false }
);
import TextContent from "../components/TextContent/TextContent";
import axios from "axios";
import Head from "next/head";


export default function Portfolio ({props}){

    const [photos, setPhotos] = useState([]);

    useEffect(()=>{console.log(photos)},[photos])
    useEffect(()=>{getPictures()},[])

    function randomOrder(a, b) {
        return Math.random() - 0.5;
    }

    

    const getPictures = async () => {
        let photoObj = {};
        let error = {};
        try {
            const result = await axios.get('https://dev1.maxvanwijnen.nl/docs/images/gallery/getImages.php');
            let photos = [];
            photos  = result.data;
            photos.sort(randomOrder);
            setPhotos(photos);
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
                    content="Verken fotografie-magie bij Max van Wijnen: betoverende momenten vastgelegd met vakmanschap en passie. Ontdek mijn diverse portfolio!"
                    key="desc"
                />
            </Head>
            <TextContent
                title="Mijn portfolio als portret fotograaf"
                firstItem={false}>Op deze pagina vindt je een selectie foto`s van eerdere shoots. Het juiste licht speelt een belangrijke factor bij het behalen van deze resultaten. Ik fotografeer daarom (afhankelijk van de locatie) het liefst ongeveer 2 uur na zonsopkomst / 2 uur voor zonsondergang. De zon staat dan mooi laag, het licht is zachter, en de schaduwen zijn mooi lang. Dat brengt de mooiste rustige achtergronden en zachte lichtval mijn modellen.
            </TextContent>
            {photos && <ReactPhotoGallery photos={photos}/>}
        </section>

    );
}
