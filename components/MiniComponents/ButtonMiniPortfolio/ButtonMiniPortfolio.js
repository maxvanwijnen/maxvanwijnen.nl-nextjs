import React from "react";
import styles  from './ButtonMiniPortfolio.module.scss';
import Link from "next/link";
import { FiImage } from "react-icons/fi";


export default function ButtonMiniPortfolio ( {text, link} ) {



    return (
        <Link href={link} className={styles['button-mini-portfolio']}><FiImage />{text}</Link>
    );
}