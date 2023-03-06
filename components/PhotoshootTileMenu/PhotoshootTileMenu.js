import React from 'react';
import PhotoshootTile from "./PhotoshootTile/PhotoshootTile";
import styles from './photoshoottile-menu.module.scss';

export const PhotoshootTileMenu = ({isBig}) => {

    let size = 'small';
    if (isBig){
        size = 'big';
    }


    return (
        <nav className={`${styles['photoshoot-tile-menu']} ${styles[size]} `}>
            <PhotoshootTile page="kinderen" img="Familie-fotoshoot-303.webp" size={size} />
            <PhotoshootTile page="loveshoot" img="Koppel-fotoshoot-303.webp" size={size}/>
            <PhotoshootTile page="portret" img="Portret-fotoshoot-303.webp" size={size}/>
            <PhotoshootTile page="familie" img="Familie-fotoshoot-303.webp" size={size}/>
            <PhotoshootTile page="zwangerschap" img="Zwangerschaps-fotoshoot-303.webp" size={size}/>
            {/*<PhotoshootTile page="trouwen" img="Zwangerschaps-fotoshoot-303.webp "/>*/}
        </nav>
    )
}

export default PhotoshootTileMenu;