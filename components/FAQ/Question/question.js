import React from "react";
import css from './question.module.scss';

const Question = ({question, answer}) => {
    return (
        <div className={css['question']}>
            <h3>{question}</h3>
            <p>{answer}</p>
        </div>
    )
}

export default Question;