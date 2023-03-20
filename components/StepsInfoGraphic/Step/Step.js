import React from 'react';
import css from './step.module.scss';


const Step = ({step, title, icon, children}) => {
    return (
        <article className={css['step']}>
            <div className={css['icon']}>{icon}</div>
            <div>
                <div className={css['step-id']}>{step}</div>
                <h3>{title}</h3>
            </div>

            <p>{children}</p>
        </article>
    )
}

export default Step;