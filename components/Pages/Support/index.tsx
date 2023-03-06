import { IntroductionSection, OurBenefitsSection, ReviewsSection, PhilosophySection, TeachersSection } from './Sections'
import { MiddleButton } from '@/components/Buttons'

export default function index() {
    return (
        <div className='w-full flex justify-center pt-[70px] md:pt-[90px] pb-[20px] md:pb-[30px] lg:pb-[90px]'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div className='w-full mt-[20px] md:mt-[30px] lg:mt-[70px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[70px]'>
                    <IntroductionSection />
                    <OurBenefitsSection />
                    <ReviewsSection />
                    <PhilosophySection />
                    <TeachersSection />
                    <div className='flex flex-col md:flex-row gap-[15px] md:gap-[20px]'>
                        <MiddleButton text='to register' link='/register' paddingType={1} />
                        <MiddleButton text='contact us' type={1} link='/contact' paddingType={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}