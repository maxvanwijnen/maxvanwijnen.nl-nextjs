import React from 'react';
import css from './IntroTextImg.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const IntroTextImg = ({title, callToActionTitle = 'Bekijk al mijn fotoshoots', children}) => {


    return (
        <section className={css['intro-text-img']}>
            <div className={css['content-wrapper']}>
                <div className={css['text-wrapper']}>
                    <h2>{title}</h2>
                    {children}
                    <Link href="/fotoshoot" className={css['book-a-shoot-button']}>{callToActionTitle}</Link>
                </div>
                <Image src="https://dev1.maxvanwijnen.nl/docs/images/intro-text/familie-fotoshoot.webp" width={450} height={300} alt={title} />
            </div>
        </section>
    )
}

export default IntroTextImg;