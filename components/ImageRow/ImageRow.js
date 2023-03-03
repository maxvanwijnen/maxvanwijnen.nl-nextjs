import React from "react"
import Masonry from "react-responsive-masonry"

const images = [
    "https://www.maxvanwijnen.nl/www/images/Fotoshoot-kind-noordwijk-001.jpg",
    //...
    "https://www.maxvanwijnen.nl/www/images/kinderen/Fotoshoot-strand-kind.webp",
    "https://www.maxvanwijnen.nl/www/images/898/kinderen/Fotoshoot-kind-noordwijk-898.webp",
    "https://www.maxvanwijnen.nl/www/images//kinderen/kinderfotografie-bollenveld-signed.webp",
    "https://www.maxvanwijnen.nl/www/images/898/kinderen/Fotoshoot-kind-noordwijk-898.webp",
    "https://www.maxvanwijnen.nl/www/images/15.jpg",
    "https://www.maxvanwijnen.nl/www/images/1.jpg"

]

const ImageRow = () => {

        return (
            <section>
            <Masonry columnsCount={3} gutter="10px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />
                ))}
            </Masonry>
            </section>
        )

}

export default ImageRow;