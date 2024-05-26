import React, { useState, useEffect } from "react";
import css from "./MinishootBooking.module.scss";
import Link from "next/link";
import axios from "axios";
import Slot from "./Slot/Slot";
import { FiCalendar } from "react-icons/fi";
import Image from 'next/image';

const readableDate = (origineleDatumString) => {
    // Converteer naar een Date-object
    const origineleDatum = new Date(origineleDatumString);

    // Dagen van de week en maanden arrays
    const dagenVanDeWeek = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
    const maanden = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december",
    ];

    // Haal dag, maand en jaar op
    const dag = origineleDatum.getDate();
    const dagVanDeWeek = dagenVanDeWeek[origineleDatum.getDay()];
    const maand = maanden[origineleDatum.getMonth()];
    const jaar = origineleDatum.getFullYear();

    // Bouw het nieuwe datumformaat
    const nieuwDatumFormaat = `${dagVanDeWeek} ${dag}-${maand}`;
    return nieuwDatumFormaat
}

const MinishootBooking = () => {

    const [minishoot, setMinishoot] = useState()
    const [slots,setSlots] = useState()
    const [selectedMini, setSelectedMini] = useState()


    

    console.log(selectedMini)


    useEffect(() => {
        // Functie om gegevens op te halen
        const fetchMiniShoot = async () => {
          try {
            const apiToken = 'bWF4dmFud2lqbmVuOjE3TUB1ZDgxOA==';
            // Maak een Axios-verzoek naar het API-endpoint met Basic Authentication-header
            const response = await axios.get('https://api.maxvanwijnen.nl/minishoot/list', {
              headers: {
                Authorization: `Basic ${apiToken}`
              }
            });
            
            // Sla de klantgegevens op in de staat
            console.log(response.data)
            setMinishoot(response.data);
            setSelectedMini(response.data[0])
          } catch (error) {
            // Behandel fouten indien nodig
            console.error('Fout bij het ophalen van minishoots:', error);
          }
        }
        fetchMiniShoot()
    },[])

    const portraitContentOld = {
        zakelijk: "Voor professionele zakelijke portretfotografie ben je bij Max van Wijnen Fotografie aan het juiste adres. Met oog voor detail en een scherp gevoel voor representatie leg ik de essentie van jouw zakelijke identiteit vast. Of het nu gaat om individuele portretten of groepsfoto's op locatie, mijn doel is om beelden te creëren die de kracht en authenticiteit van jouw onderneming weerspiegelen.",
        model: "Als gepassioneerd fotograaf leg ik graag de unieke schoonheid en persoonlijkheid van modellen vast. Mijn benadering is zowel professioneel als persoonlijk, waarbij ik streef naar het creëren van beelden die de diversiteit en kracht van het individu weergeven. Of je nu een beginnend model bent of ervaren in de industrie, samen creëren we adembenemende foto's die jouw verhaal vertellen.",
        linkedin: "Een krachtige LinkedIn-profielfoto is essentieel in de zakelijke wereld. Bij Max van Wijnen Fotografie begrijp ik het belang van een representatieve en professionele uitstraling op online platforms. Met mijn ervaring in het vastleggen van zakelijke portretten zorg ik ervoor dat je een professionele indruk achterlaat op je LinkedIn-profiel. Investeer in je online presentatie en laat jezelf op de best mogelijke manier zien."
    };

    const portraitContent = {
        zakelijk: {
            title:"Zakelijke portret foto's laten maken",
            content:"Voor bedrijven kan ik op locatie komen om portretfoto’s te maken van de medewerkers. Dat kunnen geposeerde profielfoto’s zijn van individuele medewerkers. Maar het is natuurlijk ook mogelijk om foto’s van de medewerkers op hun werkplek in actie te maken. Indien er voldoende ruimte beschikbaar is kan ik mijn mobiele studio meenemen en kunne de medewerkers in een studio setting gefotografeerd worden. Foto’s kunnen gebruikt voor Microsoft Teams, de website, social media posts, de werken-bij website noem maar op.",
            button:{
                text:"",
                link:""
            }
        },
        model: {
            title:"Model fotografie",
            content:"Ben je model en wil je graag je portfolio uitbreiden? Ik kan je daarbij helpen. Als model fotograaf maken we samen de mooiste foto’s. Heb je een eigen stijl, een bepaald idee, of misschien al een moodboard samengesteld? Laat het me weten dan komen we er samen uit. Natuurlijk kunnen we ook samen een moodboard samenstellen ter voorbereiding op de fotoshoot.",
            button:{
                text:"",
                link:"/portret/model-portfolio"
            }
        },
        linkedin: {
            title:"Linkedin profielfoto's laten maken",
            content:"Met een professionele profielfoto kom je niet alleen veel serieuzer over op social media. Het verhoogt ook de kansen om je online doelen te behalen. Natuurlijk kun je de foto voor meerdere kanalen gebruiken, zoals Linkedin, Microsoft Teams, Facebook, Instagram of X. Mogelijk heb je niet zoveel foto’s nodig, als ik  bij mijn andere pakketten aanbiedt, daarom heb ik speciale pakketten voor profielfoto shoots.",
            button:{
                text:"",
                link:"/portret/linkedin-profielfoto"
            }
        }
    };

    return (
        <section className={css['minishoot-booking']} id="minishoots">
            <h2>Boek je miniportret shoot in de studio in Leiden</h2>
            <div className={css['intro']}>
            <p>Regelmatig organiseer ik miniportret shoots in mijn studio in Leiden. Deze minishoots maken het mogelijk om tegen een klein tarief (€69 euro) proffesionele portret foto&apos;s te laten maken. Tijdens de sessie van maximaal 30 minuten maken we de mooiste foto&apos;s voor bijvoorbeeld Linkedin, Whatsapp of je website. Maar het is natuurlijk niet veplicht om de foto&apos;s voor zakelijke doeleinden te gebruiken. Een mooi portret voor thuis mag natuurlijk ook. Tijdens de shoot kies je direct de foto&apos;s die je graag zou willen hebben. Er zitten 2 digitale foto&apos;s bij de prijs inbegrepen. Let bij het kiezen van het moment op het type achtergrond, je kunt op dit moment kiezen tussen een witte en een zwarte achtergrond. Het type achtergrond staat aangegeven bij het tijdstip.
                Kom je ook gezellig langs voor mooie foto&apos;s? Reserveer dan nu jouw moment door een tijdstip aan te klikken in onderstaande agenda.
            </p>
            <Image src="https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/roos-studio-portret-achtergrond-zwart.webp" width="330" height="450" />
            </div>
            
            <nav className={css['minishoot-buttons']}>
                <h3>Selecteer je fotoshoot datum</h3>
                {
                    minishoot && 
                    <div className={css['minishoot-button']}>
                    {minishoot.map((mini)=>{
                        return (
                            <button key={mini.date} className={css['date-button']} onClick={()=>setSelectedMini(mini)}>
                                {mini.date} <FiCalendar />
                            </button>
                        )
                    })}
                    </div>
                }
                {
                    !minishoot && <div>Minishoots laden...</div>
                }
            </nav>
            <div>
                {selectedMini && <h3>Minishootsessies op {selectedMini.date}</h3>}
            </div>
            <div className={css['minishoot-slots']}>
            {
                selectedMini && selectedMini.slot.length > 0 && selectedMini.slot.map((slot)=>{
                    return (
                        <Slot key={slot.id} minishootId={selectedMini.id} date={readableDate(selectedMini.date)} slot={slot}/>
                    )
                })
            }
            </div>
           
            
        </section>
    )
}

export default MinishootBooking;