import dynamic from 'next/dynamic'
const InsurancePage = dynamic(() => import('@/components/Pages/Insurance'), { ssr: false })

export default function Insurance() {
    return (
        <InsurancePage />
    )
}