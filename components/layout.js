import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {useRouter} from "next/router";
import breadCrumbStyles from '../styles/Breadcrumb.module.css';
import { GoogleTagManager } from '@next/third-parties/google';
import { AiFillHome } from 'react-icons/ai'
import { PhotoshootTileMenu } from './../components/PhotoshootTileMenu/PhotoshootTileMenu';
import WhatsAppChat from './WhatsAppChat/WhatsAppChat';
import CampaignPopUp from './CampaignPopUp/CampaignPopUp';


export default function Layout({ children , page}) {
    const pathName = useRouter().asPath.replaceAll('/','');

    return (
        <>
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
     
            <GoogleTagManager gtmId="GTM-WW67V52" />
            
        </>
    )
}