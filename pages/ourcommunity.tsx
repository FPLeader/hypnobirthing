import dynamic from 'next/dynamic'
const OurCommunityPage = dynamic(() => import('@/components/Pages/OurCommunity'), { ssr: false })

export default function OurTeachers() {
    return (
        <OurCommunityPage />
    )
}