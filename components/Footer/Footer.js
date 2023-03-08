import React from 'react';
import css from './Footer.module.scss';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={css['footer']}>
            <Image
                src="https://www.maxvanwijnen.nl/www/images/logo-maxvanwijnen-fotografie.png"
                alt="Logo"
                width={250}
                height={76}
            />
        </footer>
    )
}

export default Footer;