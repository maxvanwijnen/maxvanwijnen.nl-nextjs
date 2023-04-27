import '../styles/globals.css'
import Header from "../components/Header/Header.js";
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {

  return  <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Analytics/>


            </>
}

export default MyApp


