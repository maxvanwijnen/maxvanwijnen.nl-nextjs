import React from 'react';
import css from './TextImageAbove.module.scss';

const TextImageAbove = ({title,img, children}) => {
    return (
        <section className={css['txt-img-above']}>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}

export default TextImageAbove;