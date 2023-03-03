import React from 'react';
import css from './PricePackage.module.scss';

const PricePackage = ({children, type, price, uspList,img}) => {

    return (

            <div className={css['price-package']}>
                <img src={img} alt={type} width={250} />
                <h3>{type}</h3>
                <span>{price}</span>
                <ul className={css['uspList']}>
                    {uspList.map((usp)=>{
                        return (
                            <li key={usp.title}>
                                <div>{usp.title}</div>
                                <div>{usp.desc}</div>
                            </li>
                        )
                    })}
                </ul>

                <div>{children}</div>
            </div>

    )
}

export default PricePackage;