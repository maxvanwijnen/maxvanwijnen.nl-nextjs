import React from 'react';
import Link from 'next/link';
import styles from './photoshoottile.module.css';
export function PhotoshootTile ({page, img}) {
    return (

        <Link href={`/fotoshoot/${page}`} >
            <a className={styles['photoshoot-tile']}>{page}
                <img src={`/img/fotoshoot-tiles/${img}`} alt={page} /></a>

        </Link>
    )
}

export default PhotoshootTile;