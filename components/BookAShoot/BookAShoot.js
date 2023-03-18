import React, {useState} from 'react';
import css from './BookAShoot.module.scss';
import {FiXCircle, FiSend} from 'react-icons/fi';
import axios from 'axios';

const BookAShoot = ({toggle, type, shootType, allPackages}) => {

    const handleInnerDivClick = (event) => {
        event.stopPropagation();
    }

    const [clientName, setClientName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [photoshootType, setPhotoshootType] = useState();
    const [email, setEmail] = useState();
    const [comments, setComments] = useState();

    const sendBooking = async () => {

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
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);

        });


    }
    return (
        <div className={css['book-a-shoot-wrapper']} onClick={toggle}>
            <div className={css['book-a-shoot']}>
                <div onClick={toggle} className={css['close-button']}><FiXCircle /></div>
                <h2>Boek een shoot</h2>
                <div className={css['center-part']} onClick={handleInnerDivClick}>
                    <div>
                        <h3>Wat leuk dat je een fotoshoot bij mij zou willen in plannen</h3>
                        <p>
                            Vul gerust dit formulier in, geen zorgen je zit nergens aan vast. Samen stemmen we nog een geschikt moment en locatie af. Ook het fotoshoot pakket kun je later in alle rust nog aanpassen.
                        </p>
                    </div>
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
                        <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="name">Fotoshoot</label>
                        <select name="" id="" defaultValue={type} onChange={(e)=>{setPhotoshootType(e.target.value)}}>
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
                    <button onClick={()=>sendBooking()}>
                        Boeking afronden
                        <div className={css['send-icon']}>
                            <FiSend/>
                        </div>
                    </button>

                </div>

            </div>

        </div>
    )
}

export default BookAShoot;