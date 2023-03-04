import { useState } from 'react'
// import Modal from 'react-modal'
import { IntroductionSection, OurGoalsSectioin, TeamSection } from './Sections'
import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { MemberCards } from '@/services/Constants/CardsData'

// Modal.setAppElement('#main');

export default function AboutUsPage() {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    const [id, setId] = useState<number>(-1)

    function openModal() {
        // document.body.style.overflow = 'hidden';
        // setIsOpen(true);
    }

    // function closeModal() {
    //     document.body.style.overflow = 'visible';
    //     setId(-1);
    //     setIsOpen(false);
    // }
    return (
        <>
            {/* {id >= 0 &&
            <div className='w-full h-screen flex justify-center items-center'>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel='Team Modal'
                    className='w-full max-w-[800px] border-[2px] border-beighe bg-bcg_2'
                    // overlayClassName='bg-dark'
                >
                    <button onClick={closeModal}>close</button>
                    <img src={MemberCards[id].image} alt='' className='w-full max-w-[230px] rounded-[20px]' />
                </Modal>
            } */}
            <div className='pt-[70px] md:pt-[90px]'>
                <div className='mt-[20px] md:mt-[30px] lg:mt-[70px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[70px]'>
                    <IntroductionSection />
                    <OurGoalsSectioin />
                    <TeamSection openModal={openModal} setId={setId} />
                </div>
            </div>
            <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
                <PromoteBar />
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </>
    )
}