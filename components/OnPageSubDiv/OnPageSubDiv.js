import React, { useState } from "react";
import css from "./on-page-sub-div.module.scss";
import Link from "next/link";


const OnPageSubDiv = () => {

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

    const [activeButton, setActiveButton] = useState("zakelijk");
    const [content,setContent] = useState('Zakelijk');
    
    const changeSubject = (subject) => {
        setContent(portraitContent[subject])
        setActiveButton(subject)
    }

    
    


    return (
        <section className={css['on-page-sub-div']}>
            <nav className={css['nav-bar']}>
                <button 
                    className={activeButton === "linkedin" ? css.active : ""}
                    onClick={()=>changeSubject('linkedin')}>Linkedin / profiel foto</button>
                <button 
                    className={activeButton === "model" ? css.active : ""}
                    onClick={()=>changeSubject('model')}>Model fotografie</button>
                <button 
                className={activeButton === "zakelijk" ? css.active : ""}
                onClick={()=>changeSubject('zakelijk')}>Zakelijke portretten</button>
            </nav>
            <div className={css['on-page-sub-div-content']}>
                <h2>{portraitContent[activeButton].title}</h2>
                <p>{portraitContent[activeButton].content}</p>
                {portraitContent[activeButton].button.text && <Link href={portraitContent[activeButton].button.link} className={css['call-to-action']}>Bekijk meer {portraitContent[activeButton].button.text}</Link>}
            </div>
        </section>
    )
}

export default OnPageSubDiv;