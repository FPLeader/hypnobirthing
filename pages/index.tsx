import Head from 'next/head'
import dynamic from 'next/dynamic'
const HomePage = dynamic(() => import('@/components/Pages/Home'), { ssr: false })

export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>Hypnobirthing</title>
        <meta name='description' content='Hypnobirthing' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePage />
    </div>
  )
}