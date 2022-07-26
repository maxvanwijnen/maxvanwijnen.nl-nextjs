import Image from "next/image";
import React from "react";
import txtImg2ColumnCss  from '/styles/TxtImg2Column.module.css';

export default function TxtImg2Column ( props ) {
    return (
        <section className={txtImg2ColumnCss['txtImg2Column']}>
            <article>
                <h2>{props.txtTitle}</h2>
                <p>
                    {props.txtContent}
                </p>
            </article>
            <Image src={props.imgSource}
                   width={props.imgWidth}
                   height={props.imgHeight}
                   alt="Kinder fotografie"
            />


        </section>
    );
}