import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {useRouter} from "next/router";
import breadCrumbStyles from '../styles/Breadcrumb.module.css';

import { AiFillHome } from 'react-icons/ai'
import { PhotoshootTileMenu } from './../components/PhotoshootTileMenu/PhotoshootTileMenu';
import WhatsAppChat from './WhatsAppChat/WhatsAppChat';


export default function Layout({ children , page}) {
    const pathName = useRouter().asPath.replaceAll('/','');

    return (
        <>
            <meta name="msvalidate.01" content="6EEF5CFC8BBEDF2585F23959D9F085A0" />
            <Header page={pathName} />
            <main>
                <section>
                    {
                        pathName && pathName != "fotoshoot" && <PhotoshootTileMenu isBookable={false} isBig={false} />
                    }



                </section>
                {children}
                <WhatsAppChat />
            </main>
            <Footer/>

        </>
    )
}