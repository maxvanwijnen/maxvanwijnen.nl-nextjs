import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {useRouter} from "next/router";
import { AiFillHome } from 'react-icons/ai'
import { PhotoshootTileMenu } from './../components/PhotoshootTileMenu/PhotoshootTileMenu';
import WhatsAppChat from './WhatsAppChat/WhatsAppChat';
import CampaignPopUp from './CampaignPopUp/CampaignPopUp';
import Script from 'next/script';

export default function Layout({ children , page}) {
    const pathName = useRouter().asPath.replaceAll('/','');

    return (
        <>
                <Header page={pathName} />
                <main>
                    <section>
                        {/* {
                            pathName && pathName != "fotoshoot" && <PhotoshootTileMenu isBookable={false} isBig={false} />
                        } */}



                    </section>
                    {children}
                    <WhatsAppChat />
                </main>
                <Footer/>
     
            <Script
              src={`https://www.googletagmanager.com/gtm.js?id=GTM-WW67V52`}
              strategy="afterInteractive"
            />
            
        </>
    )
}