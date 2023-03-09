import { Banner, SupportBar } from '@/components/Sections'

export default function ProTrainings() {

    const style = {
        Title: 'text-dark text-center md:text-left text-[20px] md:text-[24px] lg:text-[28px]',
        Content: 'text-dark text-[16px] lg:text-[18px]',
    }

    return (
        <div className='pt-[70px] md:pt-[90px] min-h-screen w-full'>
            <Banner title='Professional Trainings' image='/img/banner9.png' />
            <div className='w-full flex justify-center mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                <div className='w-full max-w-[1225px] mx-[20px]'>
                    <div className={style.Title}>Pashut Laledet HypnoBirthing</div>
                    <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px]'>
                        <div className='flex flex-col gap-[16px]'>
                            <div className={style.Content}>
                                Pashut Laledet is a community of like minded professionals who support families throughout the childbearing year with HypnoBirthing tools and philosophy.  We believe that all babies deserve a calm and loving welcome to the world. Their parents should feel supported throughout this amazing time in their lives.
                                <br /><br />
                                Giving birth is a natural process. Yet a burden of anxiety and fear of birth has been passed from generation to generation across western societies. This has resulted in a modern medical system that is led by fear. Even women who believe that birth is normal and natural often get caught up in the fear based approach. In many cultures, for thousands of years women have supported women through pregnancy and birth. This custom serves to reduce fear and allows women to connect to their bodies and their intuition. In this tradition, we invite you to join us.
                            </div>
                        </div>
                        <img draggable='false' src='/img/protraining1.png' alt='' className='w-full h-full max-lg:max-h-[480px] object-cover rounded-[10px] lg:rounded-[15px]' />
                        <img draggable='false' src='/img/protraining2.png' alt='' className='w-full h-full max-lg:max-h-[480px] object-cover rounded-[10px] lg:rounded-[15px]' />
                        <div className='max-lg:row-start-3'>
                            <div className={style.Content}>
                                If you are a birth professional and want to learn and practice skills for gentle birthing, we welcome you to train with us.
                                <br /><br />
                                We currently offer a one day workshop for birth professionals who would like to learn how to support families using HypnoBirthing tools and a 4 day course that prepares you to become a HypnoBirthing educator and teach childbirth education classes. Both are certification trainings which include: in person study, home study, materials, and reviews. The educator training also includes practice teaching and observation.
                                <br /><br />
                                Our trainings combine theoretical concepts with hands-on experiential learning. You will walk away with a large array of tools for relaxation, communication, and knowledge that can help you prepare birthing and postpartum families and support you in nourishing and grounding yourself.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[20px] md:mt-[30px] lg:mt-[40px] mb-[60px] md:mb-[80px] lg:mb-[160px]'>
                <SupportBar />
            </div>
        </div>
    )
}