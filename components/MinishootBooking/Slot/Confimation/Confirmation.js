import React, { useState, useEffect} from "react";
import css from './Confirmation.module.scss';
import {FiXCircle} from 'react-icons/fi';


const Confirmation = ({minishootId, date, slot,closeSlot}) => {

    console.log(closeSlot)

    return (
        <>
        <div className={css['confirm-background']}></div>
        <div className={css['confirmation']}>
            <h3>Reservering voltooid</h3>
            Bedankt voor je reservering. Ik neem spoedig contact op.
            <div className={css['bottom-part']}>
                <button className={css['call-to-action']} onClick={closeSlot}>
                    Sluiten
                        <div className={css['send-icon']}>
                            <FiXCircle/>
                        </div>
                </button>
            </div>
            
        </div>
        </>
    )
}

export default Confirmation;