import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'

export default function Contact() {
    return (
        <div className='pt-[70px] md:pt-[90px]'>
            <Banner title='Contact Us' textStyle='center' />
            <div className='max-w-[1225px] m-auto'>
            </div>
            <div className='pt-[97px]'>
                <PromoteBar />
            </div>
            <div className='pt-[40px]'>
                <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </div>
    )
}
