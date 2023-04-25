import dynamic from 'next/dynamic'
const FaqPage = dynamic(() => import('@/components/Pages/Faq'), { ssr: false })

export default function aboutus() {
    return (
        <FaqPage />
    )
}