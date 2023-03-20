import React from 'react';
import Step from "./Step/Step";
import css from './StepsInfoGraphic.module.scss';
import { GrGallery, GrStatusGood , GrDownload, GrCamera} from 'react-icons/gr';
import { BsCalendar2Date } from 'react-icons/bs';

const StepsInfoGraphic = ({title}) => {
    return (
        <section className={css['steps-infographic']}>
           <h2>{title}</h2>
           <div className={css['steps-row']}>
               <Step
                   title="Afspraak plannen"
                   step={1}
                   icon={<BsCalendar2Date />}
               >
                   We plannen een afspraak en locatie voor de fotoshoot. Momenteel fotografeer ik in de bollenstreek, maar alle locaties zijn bespreekbaar.
               </Step>
               <Step
                   title="Tips en Trucs"
                   step={2}
                   icon={<GrStatusGood />}
               >
                   Je ontvangt tips en trucs om het beste uit de fotoshoot te halen. Je krijgt tips over kleding, mijn werkwijze en meer.
               </Step>
               <Step
                   title="Fotoshoot"
                   step={3}
                   icon={<GrCamera />}
               >
                   De dag van de fotoshoot is aangebroken. Samen gaan we op zoek naar de mooiste plekjes en maken we de mooiste foto`s
               </Step>
               <Step
                   title="Kies je foto`s"
                   step={4}
                   icon={<GrGallery />}
               >
                   Zo snel mogelijk na de fotoshoot kun je alvast een kijkje nemen in de voorselectie. Kies de foto`s uit die jij mooi vindt.*
               </Step>
               <Step
                   title="Geniet van je foto`s"
                   step={5}
                   icon={<GrDownload />}
               >
                   Binnen 2 weken ontvang je de gekozen foto`s op hoge kwaliteit nabewerkt
               </Step>
           </div>
        </section>
    )
}

export default StepsInfoGraphic;