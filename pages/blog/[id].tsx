import { useRouter } from 'next/router'
import { BlogPage } from '@/components/Pages'

export default function Blog() {
    const router = useRouter()
    // const { id } = router.query

    return (
        // <BlogPage id={id} />
        <BlogPage />
    )
}