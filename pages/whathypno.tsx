import dynamic from 'next/dynamic'
const WhatHypnoBirthingPage = dynamic(() => import('@/components/Pages/WhatHypnoBirthing'), { ssr: false })

export default function WhatHypno() {
    return (
        <WhatHypnoBirthingPage />
    )
}