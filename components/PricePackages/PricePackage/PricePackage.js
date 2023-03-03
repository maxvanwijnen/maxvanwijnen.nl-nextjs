import React from 'react';
import css from './PricePackage.module.scss';

const PricePackage = ({children, type, price, uspList,img}) => {

    return (

            <div className={css['price-package']}>
                <img src={img} alt={type} width={300} />
                <h3>{type}</h3>
                <span className={css['price']}>&euro;{price}</span>
                <ul className={css['uspList']}>
                    {uspList.map((usp)=>{
                        return (
                            <li key={usp.title}>
                                <div className={css['title']}>{usp.title}</div>
                                <div className={css['desc']}>{usp.desc}</div>
                            </li>
                        )
                    })}
                </ul>

                <div className={css['description']}>{children}</div>
                <button>Boek fotoshoot {type}</button>
            </div>

    )
}

export default PricePackage;