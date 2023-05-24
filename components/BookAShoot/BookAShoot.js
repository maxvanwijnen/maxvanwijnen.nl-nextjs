import React, {useEffect, useState} from 'react';
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
    const [studioLocation, setStudioLocation] = useState();
    const [comments, setComments] = useState();
    const [error, setError] = useState({
        general:'',
        email:''
    })

    const [send, setSend] = useState(false);
    const [isVerified, setIsVerified] = useState('');

    console.log(photoshootType)

    const onVerify = () => {
        setIsVerified(true);
    };

    useEffect(()=>{
        console.log('testtest');
    },[send])

    

    const sendBooking = async (e) => {
        e.preventDefault();

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



        if (!clientName || !phoneNumber || !email || !comments) {

            setError({...error, general:'Alle velden zijn verplicht'})
            console.log('ajsdhakdhj')
            return false;
        }

        const data = {
            clientName: clientName,
            phoneNumber: phoneNumber,
            photoshootType: photoshootType,
            studioLocation:studioLocation,
            email: email,
            comments: comments
        };

        

        try {
            const response = await fetch('/api/sendBookingForm', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
          
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
          
            const result = await response.json();
            if (!result.success) {
              throw new Error('Error sending booking form');
            }
          
            setEmail(null);
            setPhotoshootType(null);
            setPhoneNumber(null);
            setClientName(null);
            setStudioLocation(null);
            setComments(null);
            setSend(true);
          } catch (error) {
            console.error('Error:', error);
            // Handle error here, e.g. show error message to user
          }
          
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
            <form className={css['book-a-shoot']} onSubmit={(e)=>{sendBooking(e)}}>
                <div onClick={toggle} className={css['close-button']}><FiXCircle /></div>
                <h2>Boek een shoot</h2>
                <div className={css['center-part']} onClick={handleInnerDivClick}>
                    <div className={css['form-intro-text']}>
                        <h3>Wat leuk dat je een fotoshoot bij mij zou willen in plannen</h3>
                        <p>
                            Vul gerust dit formulier in, geen zorgen je zit nergens aan vast. Samen stemmen we nog een geschikt moment en locatie af. Ook het fotoshoot pakket kun je later in alle rust nog aanpassen.
                        </p>
                    </div>
                    {error.general && <div className={css['general-error']}>{error.general}</div>}
                    <div className={css['form-part']}>
                        <div className={css['form-column']}>
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
                        </div>
                        <div className={css['form-column']}>
                            <div>
                                <label htmlFor="photoshootType">Fotoshoot</label>
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
                                <label htmlFor="studio-location">Studio of Locatie</label>
                                <select name="studio-location" id="" onChange={(e)=>{setStudioLocation(e.target.value)}}>
                                    <option value="Studio">Studio</option>
                                    <option value="Buiten op locatie">Buiten op locatie</option>
                                    <option value="Nader te bepalen">Nader te bepalen</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="name">Bericht:</label>
                                <textarea type="text" name="comments" onChange={(e)=>{setComments(e.target.value)}}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <ReCAPTCHA sitekey="6Lf1hi8lAAAAAMSK3961bx-eqnUI3MUlw2INdG09" onChange={onVerify} />
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