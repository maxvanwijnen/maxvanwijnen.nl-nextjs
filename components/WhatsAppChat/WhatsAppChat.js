import React, { useState } from 'react';
import { FaWhatsapp, FaWindowClose } from 'react-icons/fa';
import css from './WhatsAppChat.module.scss';

const WhatsAppChat = () => {
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            // Open chat window
        }
    };

    const handleSendMessage = () => {
        // Send message to WhatsApp API
        window.open(`https://wa.me/31628812008?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className={css['whatsapp-button']}>
            <FaWhatsapp onClick={handleClick} />
            {isActive && (
                <div className={css['chat-window']}>
                    <div className={css['top']}>
                        Max van Wijnen Fotografie
                        <FaWindowClose onClick={()=>{setIsActive(!isActive)}} />
                    </div>
                    <div className={css['chat']}>
                        <div className={css['welcome-message']}>
                            <p>Welkom op mijn website! Waarmee kan ik je van dienst zijn?</p>
                        </div>
                    </div>
                    <div className={css['input-field']}>
                        <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
                        <button onClick={handleSendMessage}>Verzenden</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhatsAppChat;
