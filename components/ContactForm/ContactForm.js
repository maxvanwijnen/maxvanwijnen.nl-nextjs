import React, {useEffect, useState} from 'react';
import css from './ContactForm.module.scss';
import axios from "axios";
import {useState} from "react";
import {FiXCircle} from "react-icons/fi";
import ReCAPTCHA from 'react-google-recaptcha';



const ContactForm = () => {

    const [clientName, setClientName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [comments, setComments] = useState();
    const [error, setError] = useState({
        general:'',
        email:''
    });
    const [send, setSend] = useState(false);
    const [isVerified, setIsVerified] = useState('');
    const [loading, setLoading] = useState(false);

    const onVerify = () => {
        setIsVerified(true);
    };

    useEffect(()=> {
        if (clientName && phoneNumber && email && comments) {

            setError({
                general:'',
                email:''
            });
        }
    },[clientName, phoneNumber, email, comments])

    const sendContactForm = async (e) => {
        e.preventDefault();
        if (loading) return; // voorkom dubbele submits
        setLoading(true);

        if (!isVerified) {
            setError({...error, general: 'Klik op ik ben geen robot'});
            setLoading(false);
            return false;
        }

        // regex voor het controleren van e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            setError({...error, email: 'Voer een geldig emailadres in'});
            setLoading(false);
            return false;
        }

        if (!clientName || !phoneNumber || !email || !comments) {
            setError({...error, general: 'Alle velden zijn verplicht'});
            setLoading(false);
            return false;
        }

        const data = {
            clientName: clientName,
            phoneNumber: phoneNumber,
            email: email,
            comments: comments
        };

        try {
            const response = await fetch('/api/sendContactForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                setEmail(null);
                setPhoneNumber(null);
                setClientName(null);
                setComments(null);
                setSend(true);
            } else {
                setError({...error, general: 'Er ging iets mis. Probeer het later opnieuw.'});
            }
        } catch (err) {
            setError({...error, general: 'Er ging iets mis. Probeer het later opnieuw.'});
        }
        setLoading(false);
    }



    if (send) {
        console.log(send)
        return (
            <>
                <div className={css['book-a-shoot-wrapper']}>
                    <div className={css['send-success']}>
                        <h2>Bedankt voor het invullen van het contactformulier</h2>
                        <p>Het formulier is successvol verzonden</p>
                        <p>Je ontvangt zo spoedig mogelijk een reactie</p>
                        <button onClick={()=>setSend(false)}><FiXCircle /> Sluiten</button>

                    </div>
                </div>
            </>

        )

    }

    return (
        <section className={css['contact-form']}>

            <form onSubmit={(e)=>sendContactForm(e)}>
                {error.general && <div className={css['general-error']}>{error.general}</div>}
                <label htmlFor="name">
                    Naam:
                    <input type="text" name="name" onChange={(e)=>setClientName(e.target.value)} />
                </label>
                <label htmlFor="email">

                    Email:
                    {error.email && <div className={css['field-error']}>{error.email}</div>}
                    <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label htmlFor="phone">
                    Telefoon:
                    <input type="text" name="phone" onChange={(e)=>setPhoneNumber(e.target.value)} />
                </label>
                <label htmlFor="comment">
                    Vraag of opmerking:
                    <textarea name="comment" onChange={(e)=>setComments(e.target.value)}></textarea>
                </label>
                <ReCAPTCHA sitekey="6Lf1hi8lAAAAAMSK3961bx-eqnUI3MUlw2INdG09" onChange={onVerify}/>
                <button type="submit" disabled={loading}>{loading ? "Versturen..." : "Versturen"}</button>


            </form>
        </section>
    )
}

export default ContactForm;