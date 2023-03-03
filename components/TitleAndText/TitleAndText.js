import React from 'react';
import css from './TitleAndText.module.scss';

const TitleAndText = ({title, children}) => {
    return (
        <section>
            <article className={css['title-text']}>
                <h2>{title}</h2>
                <p>{children}</p>
            </article>
        </section>

    )
}

export default TitleAndText;
