import dynamic from 'next/dynamic'
const AboutUsPage = dynamic(() => import('@/components/Pages/AboutUs'), { ssr: false })
export default function aboutus() {
    return (
        <AboutUsPage />
    )
}