import dynamic from 'next/dynamic'
const AfterTheBirthPage = dynamic(() => import('@/components/Pages/AfterTheBirth'), { ssr: false })

export default function aboutus() {
    return (
        <AfterTheBirthPage />
    )
}