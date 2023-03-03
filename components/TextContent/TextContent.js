import React from "react";
import css from './TextContent.module.scss';

const TextContent = ({children, title}) => {
    return (
        <section className={css['text-content']}>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}

export default TextContent;
