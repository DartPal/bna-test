import type { AppProps } from 'next/app';
import '@styles/global.scss';
import '@locales/i18n';
import GlobalProvider from '@providers/global_provider';
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalProvider className={poppins.className}>
            <Component {...pageProps} />
        </GlobalProvider>
    );
}
