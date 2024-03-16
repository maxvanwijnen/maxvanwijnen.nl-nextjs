import React, { useState, useEffect} from "react";
import css from './Slot.module.scss';
import { HiChevronRight } from "react-icons/hi";
import axios from "axios";
import Confirmation from "./Confimation/Confirmation";
import SlotForm from "./SlotForm/SlotForm";
import { isJsxClosingFragment } from "typescript";


const Slot = ({minishootId, date, slot}) => {

    const [extend,setExtend] = useState(false)
    const [name, setName] = useState()
    const [phone,setPhone] = useState()
    const [email,setEmail] = useState()
    const [bookingSuccess,setBookingSucces] = useState(false)
    const [isBooked,setIsBooked] = useState(slot.is_booked)
    const [isVerified, setIsVerified] = useState('');
    const [error, setError] = useState({
        general:'',
        email:''
    })


    const onVerify = () => {
        setIsVerified(true);
    };

    // useEffect(() => {
    //     console.log('logloglogloglog')
    //     setExtend(false)
    // },[isVerified])


    let cssClass = '';
    if(extend){
        cssClass = 'extended';
    }
    else {
        cssClass = 'collapsed';
    }

    const handleSubmit = async () => {
        if (!isVerified){
            setError({...error, general:'Klik op ik ben geen robot'})
            return false;
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)){
            setError({...error, email:'Voer een geldig emailadres in', general:''})
            console.log('foutief emailadres')
            return false;
        }

        if (!name || !email) {

            setError({...error, general:'Alle velden zijn verplicht'})
            console.log('ajsdhakdhj')
            return false;
        }

        try {
            console.log('handle submit')
            // Definieer gebruikersnaam en wachtwoord voor basisverificatie
            const apiToken = 'bWF4dmFud2lqbmVuOjE3TUB1ZDgxOA==';

            // Verstuur de data naar de API met Axios
            const formContent = {
                'name':name,
                //'phone':phone,
                'email':email,
                'place':'-',
                'address':'-'
            }
            console.log(formContent)
            const cust_response = await axios.post('https://api.maxvanwijnen.nl/customer/list/', formContent, {
            headers: {
                Authorization: `Basic ${apiToken}`,
                'Content-Type': 'application/json'
            }
        });
            console.log(cust_response.data.id); // Doe iets met de response indien nodig

            // Verstuur de data naar de API met Axios
            const slotContent = {
                "available": slot.available,
                "time": slot.time,
                "duration": slot.duration,
                "background_type": slot.background_type,
                "price": slot.price,
                "minishoot": slot.minishoot,
                "customer": cust_response.data.id
            }
            console.log(formContent)
            const slotResp = await axios.put('https://api.maxvanwijnen.nl/minishoot/slot/'+slot.id, slotContent, {
            headers: {
                Authorization: `Basic ${apiToken}`,
                'Content-Type': 'application/json'
            }})

            //colapse 
            setExtend(false)

            console.log(slotContent)
            
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    };

    const closeSlot = () => {
        setIsBooked(true)
        setBookingSucces(false)
        setExtend(false)
    }

    const openForm = () => {
        if(!bookingSuccess && !extend && !isBooked){
            setExtend(true)
        }
    }


    return (
        <>
        <div className={`${css['slot']}`} onClick={()=>openForm()}>
            <div className={css['header']}>
                <div className={`${css['item']} ${css[slot.background_type]}`}><div>{slot.background_type}</div><div className={css['label']}>achtergrondkleur</div></div>
                <div className={css['item']}><div>{slot.duration} minuten</div><div className={css['label']}>Duur</div></div>
                <div className={css['item']}><div>€{slot.price}</div><div className={css['label']}>Prijs</div></div>
            </div>
            <div className={css['datetime']}>
                <div className={css['date']}>{date}</div>
                <div className={css['time']}>{slot.time}</div>
            </div>
            
            {!extend && !bookingSuccess && 
            <div className={css['footer']}>
                {
                    !isBooked && <button className={`${css['call-to-action']}`}>Reserveren</button>
                }
                {
                    isBooked && <button className={`${css['call-to-action']} ${css['is_booked']}`}>Gereserveerd</button>
                }
            </div>}
            

        </div>
        {
            extend &&  <SlotForm 
                            minishootId={minishootId}
                            date={date}
                            slot={slot}
                            setExtend={setExtend}
                            setBookingSuccess={setBookingSucces}
                        />
        }
        {
            !extend && bookingSuccess &&  <Confirmation
                                            closeSlot={closeSlot}
                                            />
        }
        </>
    )
}

export default Slot;