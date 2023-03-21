import React from 'react';
import PhotoshootTile from "./PhotoshootTile/PhotoshootTile";
import styles from './photoshoottile-menu.module.scss';

export const PhotoshootTileMenu = ({isBig, isBookable}) => {

    let size = 'small';
    if (isBig){
        size = 'big';
    }


    return (
        <nav className={`${styles['photoshoot-tile-menu']} ${styles[size]} `}>
            {isBig && !isBookable && <h2>Kies jouw fotoshoot</h2>}
            {isBig && isBookable && <><h2>Kies de fotoshoot die je wilt boeken</h2></>}
            <PhotoshootTile page="kinderen" img="Familie-fotoshoot-303.webp" size={size} isBookable={isBookable} />
            <PhotoshootTile page="loveshoot" img="Koppel-fotoshoot-303.webp" size={size} isBookable={isBookable}/>
            <PhotoshootTile page="portret" img="Portret-fotoshoot-303.webp" size={size} isBookable={isBookable} />
            <PhotoshootTile page="familie" img="Familie-fotoshoot-303.webp" size={size} isBookable={isBookable} />
            <PhotoshootTile page="zwangerschap" img="Zwangerschaps-fotoshoot-303.webp" size={size} isBookable={isBookable} />
            <PhotoshootTile page="trouwen" img="Zwangerschaps-fotoshoot-303.webp" size={size} isBookable={isBookable} />
        </nav>
    )
}

export default PhotoshootTileMenu;