import dynamic from 'next/dynamic'
const PashutTrainingPage = dynamic(() => import('@/components/Pages/PashutTraining'), { ssr: false })

export default function PashutTraining() {
    return (
        <PashutTrainingPage />
    )
}