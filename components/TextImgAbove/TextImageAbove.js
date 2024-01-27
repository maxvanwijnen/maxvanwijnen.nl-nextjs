import React from 'react';
import Image from 'next/image';
import css from './TextImageAbove.module.scss';
import ButtonMiniPortfolio from '../MiniComponents/ButtonMiniPortfolio/ButtonMiniPortfolio';
import Link from 'next/link';
import { FiImage } from "react-icons/fi";

const TextImageAbove = ({title,img, children,id="",callToAction={}}) => {
    return (
        <section className={css['txt-img-above']} id={id}>
            <Image src={img} alt={title} width={900} height={642} />
            <h2>{title}</h2>
            <p>{children}</p>
            {callToAction && <ButtonMiniPortfolio text={callToAction.text} link={callToAction.link}/>}
        </section>
    )
}

export default TextImageAbove;