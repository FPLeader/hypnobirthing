import { VideoCard } from '../../Cards'

export default function Introduction() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div className='w-full grid md:grid-cols-2 gap-[35px]'>
                    <span className='text-[18px] text-dark max-md:row-start-2'>
                        HypnoBirthing® is a natural approach to a safe, easier, more comfortable birthing. By learning to release fear and consequently releasing physical tension, the birth experience can be gentle and empowering.
                        <br /><br />
                        This is a program of childbirth preparation which gives you practical techniques, exercises, and guidance, to relax your mind in order to let your body do its job.
                        <br /><br />
                        We teach a range of relaxation techniques such as guided imagery, breathing, meditation, birthing positions, and touch. In addition we focus on communication- with yourself, your baby, your family, and with your caregivers.
                    </span>
                    <VideoCard title='What is HypnoBirthing?' code='YGxKPJDzok8' style='w-full' />
                    <div className='flex items-center'>
                        <img draggable='false' src='/img/whathypno2.png' alt='' className='w-full blur-sm' />
                    </div>
                    <span className='text-[18px] text-dark'>
                        You and your partner will learn to focus inwards, to trust your body and your baby. You'll have a chance to work through fears and to reexamine your perception of birth. The result of the course is that participants feel empowered and are ready to handle the excitement of birth and the birth setting while staying focused and present in the moment as the birth unfolds.
                        <br /><br />
                        Our group classes are held all over Israel or live on zoom. The course consists of 5 meetings, 3 hours each, the most comprehensive course offered here in Israel today. The 5 week process gives you the time to bring about change and work towards the birth that you imagine for yourself. You may be eligible for a refund from Kupat Holim.
                        <br /><br />
                        The HypnoBirthing Childbirth Education course will prepare you to welcome your new baby gently and joyfully into the world.
                    </span>
                </div>
            </div>
        </div>
    )
}
