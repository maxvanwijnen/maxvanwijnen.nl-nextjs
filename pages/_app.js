import '../styles/globals.css'
import Header from "../components/header.js";
import { useRouter } from 'next/router';
import Layout from '../components/layout';


function MyApp({ Component, pageProps }) {





  return  <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            </>
}

export default MyApp
