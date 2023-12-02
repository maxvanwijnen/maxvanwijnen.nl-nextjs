import Image from "next/image";
import React from "react";
import styles  from './TxtImg2Column.module.scss';

export default function TxtImg2Column ( {children, txtTitle, imgSource, imgWidth, imgHeight, isFirstArticle, isInverted} ) {

    const varStyles = {
        flexDirection: isInverted ? 'row-reverse' : 'row'
    }



    return (
        <article className={styles['txtImg2Column']} style={varStyles}>
            <div className={styles['text']}>

                {isFirstArticle ? <h1>{txtTitle}</h1> : <h2>{txtTitle}</h2> }
                <div>
                    {children}
                </div>
            </div>
            <div className={styles['img-wrapper']}>
                <Image src={imgSource}
                       width={imgWidth}
                       height={imgHeight}
                       alt={txtTitle}
                />
            </div>
        </article>
    );
}