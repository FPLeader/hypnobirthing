import dynamic from 'next/dynamic'
const ContactPage = dynamic(() => import('@/components/Pages/Contact'), { ssr: false })

export default function aboutus() {
    return (
        <ContactPage />
    )
}