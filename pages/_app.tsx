import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderPage, FooterPage } from '@/layouts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='font-[lato]' id='main'>
      <link rel='stylesheet' href='https://use.typekit.net/zfz1tfz.css' />
      <HeaderPage />
      <Component {...pageProps} />
      <FooterPage />
    </div>
  )
}