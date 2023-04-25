import dynamic from 'next/dynamic'
const OnedayPage = dynamic(() => import('@/components/Pages/Oneday'), { ssr: false })

export default function OneDayTraining() {
    return (
        <OnedayPage />
    )
}