// import dynamic from 'next/dynamic'
// const AboutUsPage = dynamic(() => import('@/components/Pages/AboutUs'), { ssr: false })
import { AboutUsPage } from "@/components/Pages"

export default function aboutus() {
    return (
        <AboutUsPage />
    )
}