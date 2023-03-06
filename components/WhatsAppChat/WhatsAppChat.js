import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

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
        <div className="whatsapp-button">
            <FaWhatsapp onClick={handleClick} />
            {isActive && (
                <div className="chat-window">
                    <div className="welcome-message">
                        <p>Welkom bij onze website! Hoe kunnen wij u van dienst zijn?</p>
                    </div>
                    <div className="input-field">
                        <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
                        <button onClick={handleSendMessage}>Verzenden</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhatsAppChat;
