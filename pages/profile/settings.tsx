import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
const EducatorSettingsPage = dynamic(() => import('@/components/Pages/Profile/Settings/'), { ssr: false })

export default function Settings() {
    const router = useRouter();
    const [settingId, setSettingId] = useState<number>(0);
    const { setting } = router.query;

    useEffect(() => {
        if (typeof setting === 'string') {
            setSettingId(parseInt(setting));
        }
    }, [setting]);

    return (
        <EducatorSettingsPage settingId={settingId} />
    )
}