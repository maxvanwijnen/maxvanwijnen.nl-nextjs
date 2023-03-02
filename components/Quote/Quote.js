import React from 'react';
import css from './Quote.module.scss';

const Quote = ({children}) =>  {
    return   (
        <section className={css['quote']}>{children}</section>
    )
}

export default Quote;