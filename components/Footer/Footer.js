import React from 'react';
import css from './Footer.module.scss';
import Image from "next/image";
import {FiInstagram, FiFacebook} from "react-icons/fi";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={css['footer']}>
            <Image
                src="https://dev1.maxvanwijnen.nl/docs/images/logo/logo-maxvanwijnen-fotografie-white.webp"
                alt="Logo"
                width={300}
                height={200}
            />
            <section className={css['main-content']}>
                <div>
                    <h3>
                       Fotoshoots
                    </h3>
                    <div className={css['footer-columns']}>
                      <ul>
                        <li>
                            <Link href="/fotoshoot/familie">Familie</Link>
                        </li>
                        <li>
                            <Link href="/fotoshoot/loveshoot">Loveshoot</Link>
                        </li>
                        <li>
                            <Link href="/fotoshoot/portret">Portret</Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                            <Link href="/fotoshoot/zwangerschap">Zwangerschap</Link>
                        </li>
                        <li>
                            <Link href="/fotoshoot/fashion">Fashion</Link>
                        </li>
                        <li>
                            <Link href="/fotoshoot/trouwen">Bruidsraportage</Link>
                        </li>
                      </ul>
                    </div>
                </div>

                <div>
                    <h3>
                        Pagina`s
                    </h3>
                    <div className={css['footer-columns']}>
                      <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/fotoshoot">Fotoshoots</Link>
                        </li>
                        <li>
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                            <Link href="/over-mij">Over Mij</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                </div>


            </section>

            <section className={css['social-media-wrapper']}>
                <h3>volg max van wijnen fotografie op:</h3>
                <Link
                    href="https://www.instragram.com/maxvanwijnenfotografie"
                    >
                    <div className={css['social-link']}>
                        <FiInstagram/>
                        <div className={css['label']}>Instagram</div>
                    </div>
                </Link>
                <Link href="https://www.instragram.com/maxvanwijnenfotografie" className={css['social-media']}>
                    <div className={css['social-link']}>
                        <FiFacebook/>
                        <div className={css['label']}>Facebook</div>
                    </div>
                </Link>
                <div className={css['social-link']}>
                    <div className={css['label']}>
                        <Link href="https://www.top-fotografen.nl/fotograaf/max-van-wijnen-fotografie" target="_blank" rel="noopener noreferrer">
                            Top-fotografen
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;