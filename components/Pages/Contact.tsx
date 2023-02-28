import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'

export default function Contact() {
    return (
        <div className='pt-[70px] md:pt-[90px]'>
            <Banner title='Contact Us' textStyle='center' />
            <div className='max-w-[1225px] m-auto'>
                <div className='pt-[97px]'>
                    <PromoteBar />
                </div>
            </div>
            <div className='pt-[40px]'>
                <UpcomingClassesBar />
            </div>
        </div>
    )
}
