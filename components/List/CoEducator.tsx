import { CloseIcon } from '@/assests/Icons'

interface EducatorItemType {
    cd_educator: string,
    nm_user: string[],
    ds_avatar: string,
}

interface PageProps {
    lngId: number,
    members: EducatorItemType[]
    setMembers: any
}

export default function CoEducator({
    lngId,
    members,
    setMembers
}: PageProps) {
    const currentName = (value: string[]) => {
        if (value[lngId] !== '')
            return value[lngId];
        else {
            if (lngId === 0)
                return value[1];
            else if (lngId === 1)
                return value[0];
        }
    }

    const handleDel = (educatorId: string) => {
        setMembers(members.filter(item => item.cd_educator !== educatorId))
    }

    return (
        <div className='w-full border border-beighe bg-white rounded-[10px]'>
            {
                members.length === 0
                    ?
                    <div className='px-[20px] py-[10px]'>
                        No Co Educators.
                    </div>
                    :
                    <div className='grid gap-[10px] p-[10px]'>
                        {members.map((educator: EducatorItemType, index: number) => (
                            <div
                                key={`co-educator-${index}`}
                                className='rounded-[10px] bg-bcg_2 relative py-[11px] px-[12px]'
                            >
                                <div
                                    className={`w-full flex gap-[5px] items-center ${lngId === 0 ? 'pr-[12px]' : 'pl-[12px] flex-row-reverse'}`}
                                >
                                    <img
                                        draggable='false'
                                        src={educator.ds_avatar === ''
                                            ?
                                            '/img/defaultavatar.png'
                                            :
                                            `${process.env.FILE_IMAGE_BASE + educator.ds_avatar}`
                                        }
                                        alt=''
                                        className='w-[30px] h-[30px] object-cover rounded-full overflow-hidden'
                                    />
                                    <div
                                        dir={lngId === 0 ? 'ltr' : 'rtl'}
                                        className='font-[lato] text-[16px] capitalize line-clamp-1'
                                    >
                                        {currentName(educator.nm_user)}
                                    </div>
                                </div>
                                <div className={`absolute inset-y-0 ${lngId === 0 ? 'right-0 pr-[12px]' : 'left-0 pl-[12px]'} flex items-center`}>
                                    <div
                                        className='w-max cursor-pointer'
                                        onClick={() => handleDel(educator.cd_educator)}
                                    >
                                        <CloseIcon width={15} height={15} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            }
        </div>
    )
}
