import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
const EducatorPage = dynamic(() => import('@/components/Pages/Educator'), { ssr: false })

export default function Educator() {
    const router = useRouter()
    const [educatorId, setEducatorId] = useState<string>('');
    const { id } = router.query;

    useEffect(() => {
        if (typeof id === 'string') {
            setEducatorId(id);
        }
    }, [id]);

    return (
        <EducatorPage
            educatorId={educatorId}
        />
    )
}