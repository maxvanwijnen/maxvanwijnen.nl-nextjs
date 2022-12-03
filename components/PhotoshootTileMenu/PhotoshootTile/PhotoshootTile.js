import React from 'react';
import Link from 'next/link';
import styles from './photoshoottile.module.css';
export function PhotoshootTile ({page, img}) {
    return (

            <div>
                <Link href={`/fotoshoot/${page}`} >
                    <a className={`${styles['photoshoot-tile']} ${styles[page]}`}>

                        <div className={styles['background-image']}>

                        </div>
                        <div className={styles['hover-text']}>
                            Naar Fotoshoot {page}
                        </div>
                    </a>
                </Link>
                <div className={styles['title']}>
                    <div className={styles['fotoshoot']}>
                        fotoshoot
                    </div>
                    <div className={styles['text']}>
                        {page}
                    </div>
                </div>
            </div>


    )
}

export default PhotoshootTile;