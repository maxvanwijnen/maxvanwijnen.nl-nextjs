import React from "react"
import Masonry from "react-responsive-masonry"
import css from './ImageRow.module.scss';
import TextContent from "../TextContent/TextContent";

const defaultImages = [
    "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/Fotoshoot-kind-noordwijk-001.jpg",
    //...
    "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/kinderen/Fotoshoot-strand-kind.webp",
    "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/898/kinderen/Fotoshoot-kind-noordwijk-898.webp",
    "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images//kinderen/kinderfotografie-bollenveld-signed.webp",
    "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/898/kinderen/Fotoshoot-kind-noordwijk-898.webp",
    "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/15.jpg",
    "https://dev1.maxvanwijnen.nl/docs/miniportfolio/images/1.jpg"

]

const ImageRow = ({images,children}) => {

        
        if(!images) {
            images = defaultImages;
        }
        console.log("adadas");
        console.log(images);
        return (
            <section className={css['image-row']} id="photo-portfolio">
                <TextContent
                title="Voorbeeldfoto's"
                >{children}</TextContent>
            <Masonry columnsCount={3} gutter="10px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image.url}
                        style={{width: "100%", display: "block"}}
                    />
                ))}
            </Masonry>

            </section>
        )

}

export default ImageRow;