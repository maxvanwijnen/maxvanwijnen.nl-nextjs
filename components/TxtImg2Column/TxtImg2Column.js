import Image from "next/image";
import React from "react";
import styles  from './TxtImg2Column.module.scss';

export default function TxtImg2Column ( {children, txtTitle, imgSource, imgWidth, imgHeight} ) {
    return (
        <article className={styles['txtImg2Column']}>
            <div className={styles['text']}>
                <h2>{txtTitle}</h2>
                <p>
                    {children}
                </p>
            </div>
            <div>
                <Image src={imgSource}
                       width={imgWidth}
                       height={imgHeight}
                       alt={txtTitle}
                />
            </div>
        </article>
    );
}