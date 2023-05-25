import { CourseCard } from '@/components/Cards'

interface locationType {
  label: string,
  place_id: string,
  lat: number,
  lng: number,
}
interface mainbodyType {
  id_lng: number,
  ds_title: string,
  ds_details: string,
}

interface CourseType {
  id_course: string,
  cd_educator: string,
  js_location: locationType,
  dt_lessons: Date[],
  nu_maxcouples: number,
  nu_price: number,
  nu_inventory: number,
  ic_extracourse: boolean,
  nm_user: string[],
  mainbody: mainbodyType[]
  ar_members: string[],
  ar_requestmembers: string[],
  ds_state: string, // 'wait', 'underreview', 'live',
  dt_upload: Date,
  dt_publish: Date,
  dt_update: Date,
}

interface SectionProps {
  lngId: number,
  relatedCourses: CourseType[]
}

export default function RelatedCourses({
  lngId,
  relatedCourses
}: SectionProps) {

  const currentName = (nm_user: string[]) => {
    if (nm_user[lngId] !== '')
      return nm_user[lngId];
    else {
      if (lngId === 0)
        return nm_user[1];
      else if (lngId === 1)
        return nm_user[0];
    }
    return '';
  }


  const currentTitle = (value: mainbodyType[]) => {
    if (value.length === 2) {
      return value[lngId].ds_title;
    } else {
      return value[0].ds_title;
    }
  }

  return (
    <div className='flex flex-col gap-[16px]'>
      <div className='text-[24px] lg:text-[28px] font-medium'>
        Upcoming Sessions ({relatedCourses.length})
      </div>
      <div className='grid md:grid-cols-2 gap-[20px] md:gap-[35px]'>
        {relatedCourses.map((card: CourseType, index: number) => (
          <CourseCard
            key={`related-course-${index}`}
            id_course={card.id_course}
            date={card.dt_lessons[0]}
            title={currentTitle(card.mainbody)}
            location={card.js_location.label}
            teacher={currentName(card.nm_user)}
          />
        ))}
      </div>
    </div>
  )
}
