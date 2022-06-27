import '../styles/globals.css';
import type { AppProps } from 'next/app'
import AccountContext from '../components/panel/AccountContext';



function MyApp({ Component, pageProps }: AppProps) {
  return <AccountContext>
            <Component {...pageProps} />
        </AccountContext>;
}

export default MyApp
