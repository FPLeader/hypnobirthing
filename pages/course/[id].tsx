import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
const CoursePage = dynamic(() => import('@/components/Pages/Course'), { ssr: false })

export default function Course() {
    const router = useRouter()
    const [courseId, setCourseId] = useState<string>('');
    const { id } = router.query;

    useEffect(() => {
        if (typeof id === 'string') {
            setCourseId(id);
        }
    }, [id]);

    return (
        <CoursePage
            courseId={courseId}
        />
    )
}