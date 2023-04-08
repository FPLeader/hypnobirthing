import { useRouter } from 'next/router'
import { BlogPage } from '@/components/Pages'
import { useState, useEffect } from 'react';

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