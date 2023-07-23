import React from 'react';
import css from './CampaignPopUp.module.scss'

const CampaignPopUp = () => {
    return (
        <div className={css['campaign-popup']}>
            <h3>Zomer aanbieding!</h3>
            <p>Boek nu een fotoshoot voor de maand augustus en ontvang: <br></br><span className={css['discount']}>15 euro korting</span> op een basic shoot<br></br> <span className={css['discount']}>30 euro korting</span> op een deluxe shoot<br></br><span className={css['discount']}>45 euro korting</span> op een premium shoot</p>
        </div>
    )
}

export default CampaignPopUp;