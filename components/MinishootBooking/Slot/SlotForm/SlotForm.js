import React, { useState, useEffect} from "react";
import css from './SlotForm.module.scss';
import { HiChevronRight } from "react-icons/hi";
import axios from "axios";
import {FiXCircle, FiSend} from 'react-icons/fi';
import ReCAPTCHA from 'react-google-recaptcha';

const SlotForm = ({minishootId, date, slot, setExtend, setBookingSuccess}) => {

    const [name, setName] = useState()
    const [phone,setPhone] = useState()
    const [email,setEmail] = useState()
    const [isBooked,setIsBooked] = useState(slot.is_booked)
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState({
        general:'',
        email:''
    })



    const handleSubmit = async () => {
        console.log(isVerified)
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
            setBookingSuccess(true)

            console.log(slotContent)
            
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    };




    return (
        <>
        <div className={css['slot-form-background']}></div>
        <div  className={css['slot-form-wrapper']}>
            <div  className={css['slot-form']}>
                <form>
                    <h3>Reserveer je minishoot sessie</h3>
                    <p>Reserveer hier je minishoot sessie voor <strong>{date}</strong> om <strong>{slot.time}</strong></p>
                    {error.general && <div className={css['general-error']}>{error.general}</div>}
                    <div className={css['input']}>
                        <label>Naam:</label>
                        <input type="text" name="name" onChange={(event)=>setName(event.target.value)}/>
                    </div>
                    <div className={css['input']}>
                        <label>Email:</label>
                        <input type="text" name="email" onChange={(event)=>setEmail(event.target.value)}/>
                    </div>
                    <div className={css['input']}>
                        <label>Telefoon:</label>
                        <input type="text" name="phone" onChange={(event)=>setPhone(event.target.value)}/>
                    </div>
                    <ReCAPTCHA sitekey="6Lf1hi8lAAAAAMSK3961bx-eqnUI3MUlw2INdG09" onChange={()=>setIsVerified(true)} />
                </form>
                    <div className={css['bottom-part']}>
                            {/* <button className={css['cancel']} onClick={()=>{setExtend(false)}}>
                            Terug
                            </button>              
                            <button className={css['call-to-action']} onClick={()=>handleSubmit()}>
                                Reservering bevestigen
                            </button> */}

                            <button className={css['cancel']} onClick={()=>{setExtend(false)}}>
                                Annuleren
                                <div className={css['send-icon']}>
                                    <FiXCircle/>
                                </div>
                            </button>
                            <button className={css['call-to-action']} onClick={()=>handleSubmit()}>
                            Reservering bevestigen
                                <div className={css['send-icon']}>
                                    <FiSend/>
                                </div>
                            </button>
                            
                    </div>
            </div>
        </div>
        </>
    )
}

export default SlotForm;