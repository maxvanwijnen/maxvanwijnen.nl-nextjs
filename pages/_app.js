import '../styles/globals.css'
import Header from "../components/Header/Header.js";
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import GoogleAnalytics from '../components/GoogleAnalytics';

// import Script from 'next/script'; // VERWIJDERD: Fonts moeten niet via Script geladen worden

function MyApp({ Component, pageProps }) {

  return  <>
            {/* VERWIJDERD: Google Fonts via Script, want dat werkt niet */}
            {/*
            <Script
              src="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&family=Raleway&family=Roboto&family=Nunito:wght@600;900&display=swap"
              strategy="afterInteractive"
            />
            */}
            <GoogleAnalytics />
            <Layout>
                <Component {...pageProps} />
            </Layout>

          </>
}

export default MyApp;
