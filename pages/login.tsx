import dynamic from 'next/dynamic'
const LogInPage = dynamic(() => import('@/components/Pages/LogIn'), { ssr: false })

export default function LogIn() {
    return (
        <LogInPage />
    )
}