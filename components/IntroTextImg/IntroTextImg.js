import React from 'react';
import css from './IntroTextImg.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const IntroTextImg = ({title, children}) => {
    return (
        <section className={css['intro-text-img']}>
            <div className={css['content-wrapper']}>
                <div className={css['text-wrapper']}>
                    <h1>{title}</h1>
                    {children}
                    <Link href="" className={css['book-a-shoot-button']}>Boek nu je familie fotoshoot</Link>
                </div>
                <Image src="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp" width="450" height="300" />
            </div>
        </section>
    )
}

export default IntroTextImg;