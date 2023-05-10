import dynamic from 'next/dynamic'
const NotificationPage = dynamic(() => import('@/components/Pages/Notification'), { ssr: false })

export default function Notification() {
    return (
        <NotificationPage />
    )
}