import dynamic from 'next/dynamic'
const ReviewsPage = dynamic(() => import('@/components/Pages/Reviews'), { ssr: false })

export default function Reviews() {
    return (
        <ReviewsPage />
    )
}