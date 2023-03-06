import React from 'react';
import Link from 'next/link';
import styles from './photoshoottile.module.scss';
export function PhotoshootTile ({page, img, size}) {
    return (

            <div className={`${styles['tile-wrapper']} ${styles[size]}`}>
                <Link href={`/fotoshoot/${page}`} >
                    <a className={`${styles['photoshoot-tile']} ${styles[page]}`}>
                        <div className={styles['hover-text']}>
                            Naar fotoshoot {page}
                        </div>
                        <div className={styles['background-image']}>

                        </div>

                    </a>
                </Link>
                <div className={styles['title']}>
                    <div className={styles['fotoshoot']}>
                        fotoshoot
                    </div>
                    <div className={styles['text']}>
                        {page}
                        <p>kjfhskdjfhs kjfh skjfh skfhskfjhskfjhs kfjshf kjsh </p>
                    </div>
                </div>

            </div>


    )
}

export default PhotoshootTile;