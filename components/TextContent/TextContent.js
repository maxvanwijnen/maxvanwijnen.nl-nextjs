import React from "react";
import css from './TextContent.module.scss';

const TextContent = ({children}) => {
    return (
        <section className={css['text-content']}>
            {children}
        </section>
    )
}

export default TextContent;
