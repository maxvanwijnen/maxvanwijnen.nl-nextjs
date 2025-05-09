import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./ReactPhotoGallery.module.scss";


function ReactPhotoGallery({ photos }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    // Breakpoints voor masonry grid (ca. 500px kolommen)
    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        700: 1
    };

    return (
        <div className={styles.galleryContainer}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {photos.map((photo, idx) => (
                    <div
                        key={photo.src + idx}
                        className={styles.galleryItem}
                        onClick={() => openLightbox(idx)}
                        style={{ cursor: 'pointer' }}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.title ? photo.title.replace(/'/g, "&#39;") : `Foto ${idx+1}`}
                            width={photo.width}
                            height={photo.height}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 12,
                                maxWidth: '100%',
                                maxHeight: 500,
                                objectFit: 'cover',
                                marginBottom: 16
                            }}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            placeholder={photo.blurDataURL ? 'blur' : undefined}
                            blurDataURL={photo.blurDataURL}
                        />
                    </div>
                ))}
            </Masonry>
            <Lightbox
                open={viewerIsOpen}
                close={() => setViewerIsOpen(false)}
                index={currentImage}
                slides={photos.map(photo => ({ src: photo.src, alt: photo.title ? photo.title.replace(/'/g, "&#39;") : '' }))}
                styles={{ container: { backgroundColor: 'rgba(0,0,0,0.95)' } }}
            />
        </div>
    );
}


export default ReactPhotoGallery;
