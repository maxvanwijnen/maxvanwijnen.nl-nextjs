import React from "react"
import Masonry from "react-responsive-masonry"
import Image from 'next/image';
import css from './ImageRow.module.scss';
import TextContent from "../TextContent/TextContent";

const defaultImages = [
    {
        url: "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/Fotoshoot-kind-noordwijk-001.jpg",
        alt: "Fotoshoot kind Noordwijk"
    },
    //...
    {
        url: "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/kinderen/Fotoshoot-strand-kind.webp",
        alt: "Fotoshoot strand kind"
    },
    {
        url: "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/898/kinderen/Fotoshoot-kind-noordwijk-898.webp",
        alt: "Fotoshoot kind Noordwijk 898"
    },
    {
        url: "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images//kinderen/kinderfotografie-bollenveld-signed.webp",
        alt: "Kinderfotografie bollenveld"
    },
    {
        url: "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/898/kinderen/Fotoshoot-kind-noordwijk-898.webp",
        alt: "Fotoshoot kind Noordwijk 898"
    },
    {
        url: "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/15.jpg",
        alt: "Voorbeeldfoto 15"
    },
    {
        url: "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/1.jpg",
        alt: "Voorbeeldfoto 1"
    }

]

const ImageRow = ({images,children,title}) => {

        
        if(!images) {
            images = defaultImages;
        }

        return (
            <section className={css['image-row']} id="photo-portfolio">
                <TextContent
                title={title || "Portfolio foto's"}
                >{children}</TextContent>
            <Masonry columnsCount={3} gutter="4px">
                {images.map((image, i) => (
                    <Image
                        key={i}
                        src={image.url}
                        alt={image.alt || `Voorbeeldfoto ${i+1}`}
                        width={400}
                        height={270}
                        style={{width: "100%", height: "auto", display: "block"}}
                        sizes="(max-width: 600px) 100vw, 400px"
                        loading="lazy"
                    />
                ))}
            </Masonry>

            </section>
        )

}

export default ImageRow;