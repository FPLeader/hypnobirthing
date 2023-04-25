import dynamic from 'next/dynamic'
const ArticlePage = dynamic(() => import('@/components/Pages/Article'), { ssr: false })

export default function article() {
    return (
        <ArticlePage />
    )
}