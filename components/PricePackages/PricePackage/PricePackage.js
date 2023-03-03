import React from 'react';
import css from './PricePackage.module.scss';
import { HiBadgeCheck } from 'react-icons/hi';

const PricePackage = ({children, type, price, uspList,img}) => {

    return (

            <div className={css['price-package']}>
                <img src={img} alt={type} width={400} />
                <h3>{type}</h3>
                <div className={css['price']}>&euro;{price}</div>
                <ul className={css['uspList']}>
                    {uspList.map((usp)=>{
                        return (
                            <li key={usp}>
                                <HiBadgeCheck /> {usp}
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