import '../styles/globals.css'
import Header from "../components/Header/Header.js";
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  return  <>
            <Script
              src="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&family=Raleway&family=Roboto&family=Nunito:wght@600;900&display=swap"
              strategy="afterInteractive"
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Analytics/>


            </>
}

export default MyApp
