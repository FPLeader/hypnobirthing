import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
const SignUpPage = dynamic(() => import('@/components/Pages/SignUp'), { ssr: false })

export default function SignUp() {
    const router = useRouter();
    const [typeId, setTypeId] = useState<number>(0);
    const { type } = router.query;

    useEffect(() => {
        if (typeof type === 'string') {
            setTypeId(parseInt(type));
        }
    }, [type]);

    return (
        <SignUpPage typeId={typeId} />
    )
}