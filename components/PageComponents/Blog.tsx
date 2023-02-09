import { Banner, PromoteBlogs, ComingChildBirth, MoreBirthStories } from '@/components/Sections'
import React from 'react';

interface BlogProps {
    id: number;
}

// export default function Blog({
//     id
// }: BlogProps) {
export default function Blog() {
    const moment = require('moment');

    const blogdata = {
        id: 1,
        image: '/img/blogBirth.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: `Hi, Joe Valley here. I'll tell you a bit about my son, Kai, and his birth on December 10, 2013.

        It was lunch on Tuesday at Jack Stack's BBQ here in Kansas City where the birth became imminent. Well, really, it was before that, in February when were were in Brisbane just after we signed the lease for our house in the leafy suburb of Bardon. If you know about the Western suburbs of Brisbane, then you know they are lovely. Anyways, that's where this baby adventure begins. In a campervan in a caravan park, to be specific. If you have been following along on this wild ride since then, then you'll remember the dramatic intensity of that time. Those pictures are already on another hard drive.
        
        It's a new day now. The plans have changed a few times. “Maybe we'll live in Sydney. Maybe Castlemaine. Maybe Lorne. Can we make Gold Coast work? OK, maybe not Australia.
        
        It's crazy to track back through all of that. It feels epic.

        Soooo, the birth. It was fast. 2.5 hours. We were literally at the BBQ restaurant hours before the birth. Then went to the natural grocer to get the capsules and peppers for the placenta encapsulation. Oh, if you saw the cashier's face when I told her we were having a baby. “Like right now?” She asked. I pointed to Andrea having a full on contraction ten feet away on a bench. “Ohhhhhhh!” After we got home, we called our midwife, Sarah Wallbaum, and 2.5 hours later we had a baby.
        
        Sacha was there and kept asking Andrea, “Mom, are you doing OK? Can I get you something?” Even when she was howling like a ferocious wolf, Sacha was right there. “Mom, you want some water?”
        
        Through the ring of fire, Andrea paused in the moment, which allowed for a most miraculous spectacle. Kai's head was out. With one more contraction, his arms came out, waving like sea snakes. I realized then that he was birthing himself while Andrea refrained from pushing. Kai was mostly sunny side up, and with his arms waving, he opened his eyes there under the water and peered back towards us above the surface. Sarah, the midwife, gasped, “Oh, my god. His eyes are open,” which I first thought meant that he was in trouble. The room seemed to gasp. With a silent room, this little baby wiggled out, and swam into the water. I reached out to pull him back from the darkness around Andrea's left leg where he had disappeared from our view.

        Then up into the air, still silent.

        My days are completely filled with postpartum duties: making Andrea baths, preparing warming foods, feeding Sacha, cleaning the house, the dishes, the car. Andrea actually won't get to the car for a bit; she will stay in for 40 days as part of taking it easy. It's a sweet life.

        This is my first night in my office without the whole family, who has all slept in here together since Kai was born. It felt right to be close to the physical location where Kai was born, just behind me to the right about five feet.`,
        author: 'Sharon Peled',
        date: Date.now()
    }

    return (
        <>
            <Banner title={blogdata.title} />
            <div className='max-w-[1536px] m-auto'>
                <div className='text-dark font-light italic text-[60px] pt-[69px] pb-[30px]'>{blogdata.header}</div>
                <div className='md:flex grid gap-y-[60px]'>
                    <div className='w-full md:w-8/12 pr-[60px] grid gap-y-[30px] text-dark'>
                        <img src={blogdata.image} alt={blogdata.title} className='w-full max-w-[780px] rounded-[10px]' />
                        {/* <img src='/img/blogBirth.png' /> */}
                        <div className='text-lg whitespace-pre-line self-stretch'>{blogdata.content}</div>
                        <div className='text-lg font-normal italic opacity-60 flex justify-between'>
                            <div>—&nbsp;{blogdata.author}</div>
                            <div>{moment(blogdata.date).format('MMMM D, YYYY')}</div>
                        </div>
                    </div>
                    <div className='w-full md:w-4/12'>
                        <MoreBirthStories />
                    </div>
                </div>
                <div className='pt-[97px]'>
                    <PromoteBlogs />
                </div>
            </div>
            <div className='pt-[40px]'>
                <ComingChildBirth />
            </div>
        </>
    )
}
