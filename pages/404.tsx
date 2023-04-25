import dynamic from 'next/dynamic'
const NotFoundPage = dynamic(() => import('@/components/Pages/NotFound'), { ssr: false })

export default function aboutus() {
    return (
        <NotFoundPage />
    )
}