import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { SmallButton } from '@/components/Buttons';
import { CategoryEducatorSelect } from '@/components/Select'
import { CoEducatorList } from '@/components/List';
import i18n from '@/services/i18n'

interface EducatorItemType {
  cd_educator: string,
  nm_user: string[],
  ds_avatar: string,
}

interface PageProps {
  educatorsList: EducatorItemType[],
  coEducators: string[],
  setCoEducators: Dispatch<SetStateAction<string[]>>
}

export default function CoEducator({
  educatorsList,
  coEducators,
  setCoEducators
}: PageProps) {
  // language option
  const lngId: number = i18n.language === 'en' ? 0 : 1;

  const [currentEducator, setCurrentEducator] = useState<EducatorItemType>(educatorsList[0]);
  const [memberList, setMemberList] = useState<EducatorItemType[]>([]);

  useEffect(() => {
    coEducators.forEach((educator: string) => {
      educatorsList.map((educatorItem) => {
        (educatorItem.cd_educator === educator)
        setMemberList([...memberList, educatorItem])
      })
    })
  }, [])

  const handleAdd = () => {
    // max number of members is 5
    if (memberList.length < 5)
      if (!memberList.map(item => item.cd_educator).includes(currentEducator.cd_educator)) {
        setMemberList([...memberList, currentEducator])
      }
  }

  useEffect(() => {
    setCoEducators(memberList.map(item => item.cd_educator));
  }, [JSON.stringify(memberList)])

  return (
    <div className='grid gap-[10px] border border-beighe rounded-[10px] p-[10px]'>
      <div className='w-full flex flex-col md:flex-row items-end gap-[10px]'>
        <div className='w-full'>
          <CategoryEducatorSelect
            lngId={lngId}
            category='Add Co Educator (Optional)'
            selectItems={educatorsList}
            inputValue={currentEducator}
            handleChange={setCurrentEducator}
          />
        </div>
        <div className='md:max-w-[100px] w-full' onClick={handleAdd}>
          <SmallButton
            BgType={1}
            text='add'
          />
        </div>
      </div>
      <CoEducatorList
        lngId={lngId}
        members={memberList}
        setMembers={setMemberList}
      />
    </div>
  )
}