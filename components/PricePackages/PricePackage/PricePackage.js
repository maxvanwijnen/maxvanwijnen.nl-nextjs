import React, {useState} from 'react';
import css from './PricePackage.module.scss';
import { HiBadgeCheck } from 'react-icons/hi';
import BookAShoot from "../../BookAShoot/BookAShoot";
import Image from 'next/image';

const PricePackage = ({children, type, price, uspList,img, shootType, allPackages}) => {

    const [showBookingWindow, toggleShowBookingWindow] = useState(false);


    const toggle = () => {
        toggleShowBookingWindow(!showBookingWindow);
    }

    return (
        <>
            <div className={css['price-package']}>
                {/* <img src={img} alt={type} width={400} /> vervangen door next/image */}
                <Image src={img} alt={type} width={400} height={280} style={{width:'100%',height:'auto',display:'block'}} />
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
                <button onClick={()=>toggleShowBookingWindow(!showBookingWindow)}>Boek fotoshoot {type}</button>
            </div>

        {showBookingWindow &&
            <BookAShoot
            toggle={toggle}
            type={type}
            shootType={shootType}
            allPackages={allPackages}
            />}
    </>

    )
}

export default PricePackage;