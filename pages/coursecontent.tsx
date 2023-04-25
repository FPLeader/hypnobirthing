import dynamic from 'next/dynamic'
const CourseContentPage = dynamic(() => import('@/components/Pages/CourseContent'), { ssr: false })

export default function aboutus() {
    return (
        <CourseContentPage />
    )
}