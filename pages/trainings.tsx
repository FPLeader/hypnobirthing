import dynamic from 'next/dynamic'
const TrainingsPage = dynamic(() => import('@/components/Pages/Trainings'), { ssr: false })

export default function Training() {
    return (
        <TrainingsPage />
    )
}