import React from 'react';
import css from './BookAShoot.module.scss';
import {FiXCircle, FiSend} from 'react-icons/fi'

const BookAShoot = ({toggle, type, shootType, allPackages}) => {

    const handleInnerDivClick = (event) => {
        event.stopPropagation();
    }

    const sendBooking = () => {
        console.log('send booking')
    }
    return (
        <div className={css['book-a-shoot-wrapper']} onClick={toggle}>
            <div className={css['book-a-shoot']}>
                <div onClick={toggle} className={css['close-button']}><FiXCircle /></div>
                <h2>Boek een shoot</h2>
                <div className={css['center-part']} onClick={handleInnerDivClick}>
                    <div>
                        <label htmlFor="name">Naam</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label htmlFor="name">Telefoonnummer</label>
                        <input type="text" name="phone" />
                    </div>
                    <div>
                        <label htmlFor="name">Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div>
                        <label htmlFor="name">Fotoshoot</label>
                        <select name="" id="" defaultValue={type}>
                            {
                                allPackages.map((pricePackage)=>{
                                    return (
                                        <option key={pricePackage.type} name={pricePackage.type} value={pricePackage.type}>{`${shootType} - ${pricePackage.type} €${pricePackage.price}`}</option>
                                    )
                                })
                            }
                        </select>

                    </div>





                </div>
                <div className={css['bottom-part']}>
                    <button className={css['cancel']} onClick={toggle}>
                        Annuleren
                        <div className={css['send-icon']}>
                            <FiXCircle/>
                        </div>
                    </button>
                    <button>
                        Boeking afronden
                        <div className={css['send-icon']} onClick={()=>sendBooking}>
                            <FiSend/>
                        </div>
                    </button>

                </div>

            </div>

        </div>
    )
}

export default BookAShoot;