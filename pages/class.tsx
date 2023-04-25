import dynamic from 'next/dynamic'
const ClassPage = dynamic(() => import('@/components/Pages/Class'), { ssr: false })

export default function OurTeachers() {
    return (
        <ClassPage />
    )
}