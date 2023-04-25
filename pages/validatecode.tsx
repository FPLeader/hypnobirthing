import dynamic from 'next/dynamic'
const ValidateCodePage = dynamic(() => import('@/components/Pages/ValidateCode'), { ssr: false })

export default function UpcomingCourse() {
    return (
        <ValidateCodePage />
    )
}