import React from 'react';
import css from './TextImg.module.scss';
import Image from 'next/image';

const TextImg = ({title,img, children}) => {
    return (
        <>
        <article className={css['text-img']}>
            <h2>{title}</h2>
            <div className={css['text-content']}>{children}</div>
            <Image src={img} alt={title || ""} width={500} height={350} style={{width:'100%',maxWidth:'500px',borderRadius:'8px'}} />
        </article>
        </>
    )
}

export default TextImg;
