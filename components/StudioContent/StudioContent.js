import React, {useState} from 'react';
import css from './StudioContent.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { CgLivePhoto } from 'react-icons/cg';
import { MdOutlineColorLens } from 'react-icons/md';
import { BsLaptop } from 'react-icons/bs';


const StudioContent = ({title, children}) => {

    const[miniItem,setMiniItem] = useState("exposure");

    let miniInfo = null;
    let miniTitle = null;

    if (miniItem === "exposure") {
        miniTitle = <h3>De mooiste belichting</h3>
        miniInfo = <p>Dit is informatie over belichting.</p>;
    } else if (miniItem === "background") {
        miniTitle = <h3>Kies zelf je achtergrond kleur</h3>
        miniInfo = <p>Dit is informatie over achtergrondkleur.</p>;
    } else if (miniItem === "props") {
        miniTitle = <h3>Shooten met props</h3>
        miniInfo = <p>Dit is informatie over props.</p>;
    }

    return (
        <section className={css['studio-content']}>
            <div className={css['content-wrapper']}>
                <div className={css['intro-part']}>
                    <div className={css['text-wrapper']}>
                        <h2>{title}</h2>
                        <p>{children}</p>
                        <Link href="" className={css['book-a-shoot-button']}>Boek nu je portret fotoshoot in de studio</Link>
                    </div>
                    <Image src="https://dev1.maxvanwijnen.nl/docs/images/intro-text/portret-fotoshoot-studio.webp" width="330" height="450"/>
                </div>
                <div className={css['studio-content-mini-info-box']}>
                    <nav className={css['mini-menu']}>
                        <button onClick={()=>setMiniItem("exposure")}>
                            <CgLivePhoto className={css['mini-icon']}/>
                            De mooiste belichting
                        </button>
                        <button onClick={()=>setMiniItem("background")}>
                            <MdOutlineColorLens className={css['mini-icon']}/>
                            Kies je achtergrond kleur
                        </button>
                        <button onClick={()=>setMiniItem("background")}>
                            <BsLaptop className={css['mini-icon']}/>
                            Direct bekijken op de laptop
                        </button>
                        
                    </nav>
                </div>

                <div>
                {
                    miniTitle
                }
                {
                    miniInfo
                }</div>
                
            </div>
        </section>
    )
}

export default StudioContent;