import '@/styles/globals.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { HeaderPage, FooterPage } from '@/layouts'
import { Meta } from '@/config'
import { APP } from '@/config/App'
import Router from 'next/router'
import NProgress from 'nprogress'
import i18n from '@/services/i18n'
import LocaleContext from '@/services/LocaleContext'
import { store } from '@/services/Store'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  //Binding events.
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  //i18n
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <>
      <Meta
        title={APP.TITLE}
        preview={APP.META.DESCRIPTION}
        image={APP.URL + APP.META.IMAGE}
        url={APP.URL}
      />
      <Provider store={store}>
        <LocaleContext.Provider value={{ locale }}>
          <div className='font-[lato]' id='main'>
            <link rel='stylesheet' href='https://use.typekit.net/zfz1tfz.css' />
            <HeaderPage />
            <Component {...pageProps} />
            <FooterPage />
            <ToastContainer
              position='bottom-right'
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />
          </div>
        </LocaleContext.Provider>
      </Provider>
      <style>{`
      /* Make clicks pass-through */
      #nprogress {
        pointer-events: none;
      }
            
      #nprogress .bar {
        background: #A3A09E;
      
        position: fixed;
        z-index: 1000;
        top: 90px;
        left: 0;
      
        width: 100%;
        height: 2px;
      }     

      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }

      @media only screen and (max-width: 768px) {
        #nprogress .bar {
          top: 70px;
        }
      }
      `}</style>
    </>
  )
}