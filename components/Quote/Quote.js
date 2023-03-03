import React from 'react';
import css from './Quote.module.scss';
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const Quote = ({children}) =>  {
    return   (
        <section className={css['quote']}>
            <FaQuoteLeft />
                 <span>{children}</span>
            <FaQuoteRight />
        </section>
    )
}

export default Quote;