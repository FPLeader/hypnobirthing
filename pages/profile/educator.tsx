import dynamic from 'next/dynamic'
const EditEducatorPage = dynamic(() => import('@/components/Pages/Profile/Educator/'), { ssr: false })

export default function Educator() {
    return (
        <EditEducatorPage />
    )
}