import dynamic from 'next/dynamic'
const EducatorPage = dynamic(() => import('@/components/Pages/Educator'), { ssr: false })

export default function Support() {
    return (
        <EducatorPage />
    )
}