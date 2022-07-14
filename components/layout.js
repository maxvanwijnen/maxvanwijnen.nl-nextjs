import Header from "./header";
import Footer from './footer';
import {useRouter} from "next/router";
import breadCrumbStyles from '../styles/Breadcrumb.module.css';
import Breadcrumbs from "nextjs-breadcrumbs";
import { AiFillHome } from 'react-icons/ai'


export default function Layout({ children }) {
    const pathName = useRouter().asPath.replaceAll('/','');


    return (
        <>
            <Header page={pathName} />
            <main>
                <section><AiFillHome />
                    <Breadcrumbs containerClassName={breadCrumbStyles['breadcrumb-wrapper']} rootLabel={<AiFillHome />} />
                </section>
                {children}
            </main>
            <Footer />
        </>
    )
}