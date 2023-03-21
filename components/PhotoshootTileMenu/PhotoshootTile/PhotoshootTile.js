import React, {useState} from 'react';
import Link from 'next/link';
import styles from './photoshoottile.module.scss';
import BookAShoot from "../../BookAShoot/BookAShoot";
import { prices } from "../../../objects/prices";
export function PhotoshootTile ({page, img, size, isBookable}) {

    const [isExpanded, toggleIsExpanded] = useState(false);

    const toggle = () => {
        toggleIsExpanded(!isExpanded);
    }

    const allPackages = prices.find(entry => entry.fotoshoot === page).packages;






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
                            <Link href={`/fotoshoot/${page}`} >
                                <a className={`${styles['photoshoot-tile']} ${styles[page]}`}>
                                    <div className={styles['hover-text']}>
                                        {!isBookable && `Naar fotoshoot ${page}`}
                                        {isBookable && `${page} fotoshoot boeken`}
                                    </div>
                                    <div className={styles['background-image']}>

                                    </div>

                                </a>
                            </Link>
                            :
                            <div onClick={()=>toggleIsExpanded(!isExpanded)} >
                                <a className={`${styles['photoshoot-tile']} ${styles[page]}`}>
                                    <div className={styles['hover-text']}>
                                        {!isBookable && `Naar fotoshoot ${page}`}
                                        {isBookable && `${page} fotoshoot boeken`}
                                    </div>
                                    <div className={styles['background-image']}>

                                    </div>

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

                       {/* { size === 'big' && <p>kjfhskdjfhs kjfh skjfh skfhskfjhskfjhs kfjshf kjsh </p>}*/}
                    </div>
                </div>

            </div>
            </>


    )
}

export default PhotoshootTile;