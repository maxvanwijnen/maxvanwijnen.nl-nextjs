import React from 'react';
import PhotoshootTile from "./PhotoshootTile/PhotoshootTile";
import styles from './photoshoottile-menu.module.css';

export const PhotoshootTileMenu = () => {
    return (
        <nav className={styles['photoshoot-tile-menu']}>
            <PhotoshootTile page="kinderen" img="Familie-fotoshoot-303.webp" />
            <PhotoshootTile page="loveshoot" img="Koppel-fotoshoot-303.webp"/>
            <PhotoshootTile page="portret" img="Portret-fotoshoot-303.webp"/>
            <PhotoshootTile page="familie" img="Familie-fotoshoot-303.webp"/>
            <PhotoshootTile page="zwangerschap" img="Zwangerschaps-fotoshoot-303.webp"/>
            {/*<PhotoshootTile page="trouwen" img="Zwangerschaps-fotoshoot-303.webp"/>*/}
        </nav>
    )
}

export default PhotoshootTileMenu;