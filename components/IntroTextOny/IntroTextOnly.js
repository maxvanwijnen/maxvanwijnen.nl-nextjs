import React from 'react';
import css from './IntroTextOnly.module.scss';

const IntroTextOnly = ({title, children}) => {
    return (
        <section className={css['intro-text-only']}>
            <h1>{title}</h1>
            <p>{children}</p>
        </section>
    )
}

export default IntroTextOnly;