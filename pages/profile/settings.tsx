import { EducatorSettingsPage } from '@/components/Pages'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

export default function aboutus() {
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