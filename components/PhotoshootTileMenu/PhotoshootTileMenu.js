import React from 'react';
import PhotoshootTile from "./PhotoshootTile/PhotoshootTile";
import styles from './photoshoottile-menu.module.scss';

export const PhotoshootTileMenu = ({isBig, isBookable, isPricePage}) => {

    let size = 'small';
    if (isBig){
        size = 'big';
    }

    return (
        <nav className={`${styles['photoshoot-tile-menu']} ${styles[size]} `}>
            {isBig && !isBookable && !isPricePage && <h2>Kies jouw fotoshoot</h2>}
            {isBig && isBookable && !isPricePage &&  <><h2>Kies de fotoshoot die je wilt boeken</h2></>}
            {isBig && !isBookable && isPricePage && <h2>Kies jouw fotoshoot om de prijzen te bekijken</h2>}
            <div className={styles['tile-wrapper']}>
                <PhotoshootTile page="fashion" img="Fashion-fotograaf-mode.webp" size={size} isBookable={isBookable} isPricePage={isPricePage} />
                <PhotoshootTile page="kinderen" img="Familie-fotoshoot-303.webp" size={size} isBookable={isBookable} isPricePage={isPricePage} />
                <PhotoshootTile page="loveshoot" img="Koppel-fotoshoot-303.webp" size={size} isBookable={isBookable} isPricePage={isPricePage} />
                <PhotoshootTile page="portret" img="Portret-fotoshoot-303.webp" size={size} isBookable={isBookable} isPricePage={isPricePage} />
                <PhotoshootTile page="familie" img="Familie-fotoshoot-303.webp" size={size} isBookable={isBookable} isPricePage={isPricePage} />
                <PhotoshootTile page="zwangerschap" img="zwangerschap-fotoshoot2.webp" size={size} isBookable={isBookable} isPricePage={isPricePage} />
                <PhotoshootTile page="trouwen" img="Zwangerschaps-fotoshoot-303.webp" size={size} isBookable={isBookable} isPricePage={isPricePage} />
            </div>
        </nav>
    )
}

export default PhotoshootTileMenu;