import React from "react";
import css from "./Faq.module.scss";
import Question from './Question/question';

const Faq = () => {
    return (
        <article className={css['faq']}>
            <h2>Veelgestelde vragen over fotoshoots in Noordwijk</h2>
            <div className={css['faq-wrapper']}>
            <Question 
                    question="Wat kost een fotoshoot in Noordwijk"
                    answer="De kosten voor een fotoshoot in Noordwijk varieren per type fotoshoot. De prijzen staan daarom aangegeven op de fotoshoot pagina. Een fotoshoot kan al vanaf 139 euro. "
                />
                <Question 
                    question="Hoelang duurt een fotoshoot in Noordwijk"
                    answer="De duur van een fotoshoot is een beetje afhankelijk van het type fotoshoot en de eventuele grootte van de groep. Maar gemiddeld genomen duurt een fotoshoot ongeveer 30 tot 60 minuten."
                />
                <Question 
                    question="Kan ik ook een fotoshoot in Noordwijk in het weekend boeken?"
                    answer="Jazeker, de meeste fotoshoots die geboekt worden vinden in het weekend plaats. Dat is dus zeker mogelijk."
                />
                <Question 
                    question="Hoe gaat een fotoshoot in zijn werk?"
                    answer="Samen plannen we een datum en locatie in voor de fotoshoot. Na afloop "
                />
                <Question 
                    question="Wat doen we bij slecht weer tijdens de fotoshoot?"
                    answer="In de dagen voor de fotoshoot houden we het weer goed in de gaten. Regen en harde wind kunnen een spelbreker zijn. Bewolking is geen probleem en kan juist een positieve invloed zijn. Als het weer slecht is verplaatsen we de fotoshoot, maar je bent natuurlijk ook van harte welkom in mijn studio in Leiden."
                />
                <Question 
                    question="Hoeveel foto's worden er gemaakt tijdens de fotoshoot?"
                    answer="Ik bied 3 pakketten aan (5, 10, 15 foto's). Uiteraard is het ook mogelijk om meer foto's buiten een pakket af te nemen, deze kosten 15 euro per stuk. Tijdens de fotoshoot maak ik veel meer foto's dan dat. Na afloop van de shoot maak ik een voorselectie aan foto's welke ik plaats op een afgeschermd deel van mijn website. Hier kies je zelf je favorieten foto's uit. Na 2 weken ontvang je de gekozen foto's nabewerkt als digitaal bestand."
                />
                
            </div>
        </article>
    )
}

export default Faq;