import React, { useState, useMemo } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./ReactPhotoGallery.module.scss";

// Helper om de juiste hoogte te berekenen op basis van aspect ratio
const getImageHeight = (width, imgWidth, imgHeight) => {
  return (width * imgHeight) / imgWidth;
};

// Helper om photoshoot type te formatteren voor de button
const formatPhotoshootType = (tag) => {
  const typeMap = {
    'familie': 'Familie',
    'loveshoot': 'Loveshoot',
    'trouwen': 'Bruiloft',
    'zwangerschap': 'Zwangerschap',
    'portret': 'Portret',
    'fashion': 'Fashion'
  };
  
  const formattedType = typeMap[tag] || tag.charAt(0).toUpperCase() + tag.slice(1);
  return `${formattedType} Fotoshoot`;
};

function ReactPhotoGallery({ photos = [] }) {
    const getAltText = (title, idx) => {
        return title || "Foto " + (idx + 1);
    };
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    // Formatteer de afbeeldingen voor de lightbox
    const lightboxSlides = useMemo(() => {
        return photos.map(photo => ({
            src: photo.src, // API geeft nu al volledige URL terug
            width: photo.width,
            height: photo.height,
            alt: photo.title || 'Portfolio afbeelding',
        }));
    }, [photos]);

    // Breakpoints voor masonry grid
    const breakpointColumnsObj = {
        default: 3,     // 3 kolommen voor grote schermen
        1200: 2,        // 2 kolommen voor schermen kleiner dan 1200px
        640: 2,         // 2 kolommen voor tablets en grote mobiele apparaten
        480: 1,         // 1 kolom voor kleine mobiele apparaten
    };
    
    // Marge tussen de kolommen
    const columnGap = '16px';

    if (!photos || photos.length === 0) {
        return <p>Geen foto's beschikbaar</p>;
    }


    return (
        <div className={styles.galleryContainer}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.masonryGrid}
                columnClassName={styles.masonryGridColumn}
                columnGap={columnGap}
            >
                {photos.map((photo, idx) => (
                    <div
                        key={`${photo.src}-${idx}`}
                        className={styles.galleryItem}
                        onClick={() => openLightbox(idx)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
                        aria-label={`Bekijk afbeelding ${idx + 1}`}
                    >
                        <div className={styles.imageWrapper}>
                            <div 
                                className={styles.imageContainer}
                                style={{
                                    paddingBottom: `${(photo.height / photo.width) * 100}%`,
                                    position: 'relative',
                                    width: '100%',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                }}
                            >
                                <Image
                                    src={photo.src}
                                    alt={getAltText(photo.title, idx)}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={styles.galleryImage}
                                    loading="lazy"
                                    unoptimized={true}
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        transition: 'transform 0.3s ease',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                />
                            </div>
                            {(photo.title || photo.tags) && (
                                <div className={styles.imageCaption}>
                                    {photo.title && <p>{photo.title}</p>}
                                    {photo.tags && (
                                        <Link 
                                            href={`/fotoshoot/${photo.tags}`} 
                                            className={styles.viewButton}
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent opening lightbox when clicking the button
                                            }}
                                        >
                                            {formatPhotoshootType(photo.tags)} →
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </Masonry>

            {viewerIsOpen && (
                <Lightbox
                    open={viewerIsOpen}
                    close={() => setViewerIsOpen(false)}
                    slides={lightboxSlides}
                    index={currentImage}
                    carousel={{
                        finite: photos.length <= 1,
                    }}
                    controller={{
                        closeOnBackdropClick: true,
                    }}
                    animation={{ fade: 300 }}
                    on={{ view: ({ index }) => setCurrentImage(index) }}
                    styles={{
                        container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
                    }}
                />
            )}
        </div>
    );
}

export default ReactPhotoGallery;
