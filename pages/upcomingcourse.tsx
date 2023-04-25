import dynamic from 'next/dynamic'
const UpcomingCoursePage = dynamic(() => import('@/components/Pages/UpcomingCourse'), { ssr: false })

export default function UpcomingCourse() {
    return (
        <UpcomingCoursePage />
    )
}