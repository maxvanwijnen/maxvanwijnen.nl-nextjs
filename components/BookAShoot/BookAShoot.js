import React, {useState} from 'react';
import css from './BookAShoot.module.scss';
import {FiXCircle, FiSend} from 'react-icons/fi';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const BookAShoot = ({toggle, type, shootType, allPackages}) => {

    const handleInnerDivClick = (event) => {
        event.stopPropagation();
    }

    const [clientName, setClientName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [photoshootType, setPhotoshootType] = useState();
    const [email, setEmail] = useState();
    const [comments, setComments] = useState();
    const [error, setError] = useState({
        general:'',
        email:''
    })

    const [send, setSend] = useState(false);

    console.log(photoshootType)

    const sendBooking = async () => {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)){
            setError({...error, email:'Voer een geldig emailadres in'})
            console.log('foutief emailadres')
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
            photoshootType: photoshootType,
            email: email,
            comments: comments
        };


        console.log('send booking');
        axios.post('https://www.maxvanwijnen.nl/mail.php',JSON.stringify(data),{
            'Content-Type': 'application/json'
        })
        .then(response => {
            setEmail(null);
            setPhotoshootType(null)
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
        return (
            <>
                <div className={css['book-a-shoot-bg']} onClick={toggle}>
                </div>
                <div className={css['book-a-shoot-wrapper']}>
                    <div className={css['send-success']}>
                        <h2>Bedankt voor het boeken van de fotoshoot</h2>
                        <p>Het formulier is successvol verzonden</p>
                        <p>Je ontvangt zo spoedig mogelijk een reactie</p>
                        <button onClick={toggle}><FiXCircle /> Sluiten</button>

                    </div>
                </div>
            </>

        )

    }
    return (
        <>
            <div className={css['book-a-shoot-bg']} onClick={toggle}>
            </div>
            <div className={css['book-a-shoot-wrapper']}>
            <form className={css['book-a-shoot']} onSubmit={()=>{sendBooking()}}>
                <div onClick={toggle} className={css['close-button']}><FiXCircle /></div>
                <h2>Boek een shoot</h2>
                <div className={css['center-part']} onClick={handleInnerDivClick}>
                    <div>
                        <h3>Wat leuk dat je een fotoshoot bij mij zou willen in plannen</h3>
                        <p>
                            Vul gerust dit formulier in, geen zorgen je zit nergens aan vast. Samen stemmen we nog een geschikt moment en locatie af. Ook het fotoshoot pakket kun je later in alle rust nog aanpassen.
                        </p>
                    </div>
                    {error.general && <div className={css['general-error']}>{error.general}</div>}
                    <div>
                        <label htmlFor="name">Naam</label>
                        <input type="text" name="name" onChange={(e)=>{setClientName(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="name">Telefoonnummer</label>
                        <input type="text" name="phone" onChange={(e)=>{setPhoneNumber(e.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="name">Email</label>
                        {error.email && <div className={css['field-error']}>{error.email}</div>}
                        <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="name">Fotoshoot</label>
                        <select name="photoshootType" id="" defaultValue={type} onChange={(e)=>{setPhotoshootType(e.target.value)}}>
                            {
                                allPackages.map((pricePackage)=>{
                                    return (
                                        <option key={pricePackage.type} name={pricePackage.type} value={`${shootType} - ${pricePackage.type} €${pricePackage.price}`}>{`${shootType} - ${pricePackage.type} €${pricePackage.price}`}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="name">Bericht:</label>
                        <textarea type="text" name="comments" onChange={(e)=>{setComments(e.target.value)}}></textarea>
                    </div>






                </div>
                <ReCAPTCHA sitekey="6LevfsAZAAAAAAy5Y2oZYVFs6Mnmk2rE1tac8flH" />
                <div className={css['bottom-part']}>
                    <button className={css['cancel']} onClick={toggle}>
                        Annuleren
                        <div className={css['send-icon']}>
                            <FiXCircle/>
                        </div>
                    </button>
                    <button type="submit">
                        Boeking afronden
                        <div className={css['send-icon']}>
                            <FiSend/>
                        </div>
                    </button>

                </div>

            </form>
            </div>
            </>


    )
}

export default BookAShoot;