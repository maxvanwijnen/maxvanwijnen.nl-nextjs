import React from 'react';
import css from './TextImg.module.scss';

const TextImg = ({title,img, children}) => {
    return (
        <>
        <article className={css['text-img']}>
            <h2>{title}</h2>
            <div className={css['text-content']}>{children}</div>
            <img src={img} alt="" />
        </article>
        </>
    )
}

export default TextImg;
