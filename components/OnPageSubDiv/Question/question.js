import React, { useState } from "react";
import css from './question.module.scss';
import { HiChevronRight } from "react-icons/hi";

const Question = ({question, answer}) => {

    const [extend,toggleExtend] = useState(false)

    let cssClass = '';
    if(extend){
        cssClass = 'extended';
    }
    else {
        cssClass = 'collapsed';
    }



    return (
        <div className={`${css['question']} ${css[cssClass]}`} onClick={()=>{toggleExtend(!extend)}}>
            <h3>{question} <HiChevronRight className={css['arrow']} /></h3>
            <p className={`${css[cssClass]}`}>{answer}</p>
        </div>
    )
}

export default Question;