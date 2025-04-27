import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './photoshoottile.module.scss';
import BookAShoot from "../../BookAShoot/BookAShoot";
import { prices } from "../../../objects/prices";

export function PhotoshootTile ({page, img, size, isBookable, isPricePage}) {

    const [isExpanded, toggleIsExpanded] = useState(false);
    let gotoId = '';

    const toggle = () => {
        toggleIsExpanded(!isExpanded);
    }

    const allPackages = prices.find(entry => entry.fotoshoot === page).packages;

    if (isPricePage) {
        gotoId = '#prijzen';
    }

    return (
            <>
                {isExpanded && <BookAShoot
                    toggle={toggle}
                    type="kinderen"
                    shootType={page}
                    allPackages={allPackages}
                />}
            <div className={`${styles['tile-wrapper']} ${styles[size]}`}>    
                {
                    !isBookable
                        ?
                        <Link href={`/fotoshoot/${page}${gotoId}`} legacyBehavior>
                            <a className={`${styles['photoshoot-tile']} ${styles[page]}`}>
                                <div className={styles['hover-text']}>
                                    {!isBookable && `Naar fotoshoot ${page}`}
                                    {isBookable && `${page} fotoshoot boeken`}
                                </div>
                                <Image src={`https://dev1.maxvanwijnen.nl/docs/images/fotoshoot-tiles/${img}`} alt={page} width={198} height={132} style={{width:'100%',height:'100%',borderRadius:'10px',objectFit:'cover'}} />
                            </a>
                        </Link>
                        :
                        <div onClick={()=>toggleIsExpanded(!isExpanded)} >
                            <a className={`${styles['photoshoot-tile']} ${styles[page]}`}>
                                <div className={styles['hover-text']}>
                                    {!isBookable && `Naar fotoshoot ${page}`}
                                    {isBookable && `${page} fotoshoot boeken`}
                                </div>
                                <Image src={`https://dev1.maxvanwijnen.nl/docs/images/fotoshoot-tiles/${img}`} alt={page} width={198} height={132} style={{width:'100%',height:'100%',borderRadius:'10px',objectFit:'cover'}} />
                            </a>
                        </div>
                }
                <div className={styles['title']}>
                    <div className={styles['fotoshoot']}>
                        {isBookable && "Nu boeken"}
                        {!isBookable && "Fotoshoot"}
                    </div>
                    <div className={styles['text']}>
                        {isBookable && `Fotoshoot ${page}`}
                        {!isBookable && page}
                    </div>
                </div>
            </div>
            </>
    )
}

export default PhotoshootTile;