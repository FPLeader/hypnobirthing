import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
const BlogPage = dynamic(() => import('@/components/Pages/Blog/'), { ssr: false })

export default function Blog() {
    const router = useRouter()
    const [blogId, setBlogId] = useState<string>('');
    const { id } = router.query;

    useEffect(() => {
        if (typeof id === 'string') {
            setBlogId(id);
        }
    }, [id]);

    return (
        <BlogPage
            blogId={blogId}
        />
    )
}