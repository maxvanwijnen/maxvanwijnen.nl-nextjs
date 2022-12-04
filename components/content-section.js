import Image from "next/image";
import React from "react";
import styles  from '/styles/TxtImg2Column.module.css';

export default function TxtImg2Column ( props ) {
    return (
        <article className={styles['txtImg2Column']}>
        <div className={styles['text']}>
            <h2>{props.txtTitle}</h2>
            <p>
                {props.txtContent}
            </p>
        </div>
        <div>
            <Image src={props.imgSource}
                   width={props.imgWidth}
                   height={props.imgHeight}
                   alt="Kinder fotografie"
            />
        </div>
    </article>
    );
}