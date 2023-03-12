import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderPage, FooterPage } from '@/layouts'
import { Meta } from '@/config'
import { APP } from '@/config/App'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta
        title={APP.TITLE}
        preview={APP.META.DESCRIPTION}
        image={APP.URL + APP.META.IMAGE}
        url={APP.URL}
      />
      <div className='font-[lato]' id='main'>
        <link rel='stylesheet' href='https://use.typekit.net/zfz1tfz.css' />
        <HeaderPage />
        <Component {...pageProps} />
        <FooterPage />
      </div>
    </>
  )
}