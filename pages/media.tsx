import dynamic from 'next/dynamic'
const MediaPage = dynamic(() => import('@/components/Pages/Media'), { ssr: false })

export default function Media() {
    return (
        <MediaPage />
    )
}