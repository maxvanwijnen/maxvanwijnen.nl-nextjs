import React from 'react';
import css from './TextImg.module.scss';

const TextImg = ({title, children}) => {
    return (
        <>
        <article className={css['text-img']}>
            <h2>{title}</h2>
            <div className={css['text-content']}>{children}</div>
            <img src="https://www.maxvanwijnen.nl/www/images/898/kinderen/Fotoshoot-kind-noordwijk-898.webp" alt="" />
        </article>
        </>
    )
}

export default TextImg;
