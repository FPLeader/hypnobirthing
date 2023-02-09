import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderPage, FooterPage } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='font-[Lato]'>
      <HeaderPage />
      <Component {...pageProps} />
      <FooterPage />
    </div>
  )
}