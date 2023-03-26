import React, {useEffect} from 'react';
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

        if (!isVerified){
            setError({...error, general:'Klik op ik ben geen robot'})
            return false;
        }


        // regex voor het controleren van e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)){
            setError({...error, email:'Voer een geldig emailadres in'})
            console.log('ajsdhakdhj')
            return false;
        }



        if (!clientName || !phoneNumber || !email || !comments) {

            setError({...error, general:'Alle velden zijn verplicht'})
            console.log('ajsdhakdhj')
            return false;
        }



        const data = {
            clientName: clientName,
            phoneNumber: phoneNumber,
            email: email,
            comments: comments
        };


        console.log('send contactForm');
        axios.post('https://www.maxvanwijnen.nl/mail-contactform.php',JSON.stringify(data),{
            'Content-Type': 'application/json'
        })
            .then(response => {
                setEmail(null);
                setPhoneNumber(null);
                setClientName(null);
                setComments(null);

                setSend(true);
            })
            .catch(error => {
                console.log(error);

            });


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
                <button type="submit">Versturen</button>


            </form>
        </section>
    )
}

export default ContactForm;