import type { AppProps } from 'next/app';
import '@styles/global.scss';
import '@locales/i18n';
import GlobalProvider from '@providers/global_provider';
import { Poppins } from 'next/font/google';
import { UserContextProvider } from '../context/user_context';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '@const/index';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
    const { i18n } = useTranslation();
    useEffect(() => {
        if (
            localStorage.getItem('language') &&
            supportedLanguages.includes(
                localStorage.getItem('language') || 'en',
            )
        ) {
            i18n.changeLanguage(localStorage.getItem('language') || 'en');
        }
    }, []);

    return (
        <UserContextProvider>
            <GlobalProvider className={poppins.className}>
                <Component {...pageProps} />
            </GlobalProvider>
        </UserContextProvider>
    );
}
