import Image from "next/image";
import React from "react";
import styles  from './TxtImg2Column.module.scss';

export default function TxtImg2Column ( {children, txtTitle, imgSource, imgWidth, imgHeight} ) {
    return (
        <article className={styles['txtImg2Column']}>
            <div className={styles['text']}>
                <h1>{txtTitle}</h1>
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