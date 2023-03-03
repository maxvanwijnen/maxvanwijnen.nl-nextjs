import Header from "./Header/Header";
import Footer from './footer';
import {useRouter} from "next/router";
import breadCrumbStyles from '../styles/Breadcrumb.module.css';
import Breadcrumbs from "nextjs-breadcrumbs";
import { AiFillHome } from 'react-icons/ai'
import { PhotoshootTileMenu } from './../components/PhotoshootTileMenu/PhotoshootTileMenu';


export default function Layout({ children , page}) {
    const pathName = useRouter().asPath.replaceAll('/','');



    return (
        <>
            <Header page={pathName} />
            <main>
                <section>
                    <PhotoshootTileMenu />
                    <Breadcrumbs containerClassName={breadCrumbStyles['breadcrumb-wrapper']} rootLabel="" />
                </section>
                {children}
            </main>
            <Footer />
        </>
    )
}