import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderPage, FooterPage } from '@/layouts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='font-[lato]'>
      {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' rel='stylesheet' /> */}
      <link rel='stylesheet' href='https://use.typekit.net/zfz1tfz.css' />
      <HeaderPage />
      <Component {...pageProps} />
      <FooterPage />
    </div>
  )
}