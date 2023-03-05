import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { SmallBlogCard } from '@/components/Cards'
import { SmallBlogsData, SmallBlogType } from '@/services/Constants/Sections/BlogData'
import { RegularTitle } from '../Titles'

interface BlogProps {
    id: number,
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
        <div className='pt-[70px] md:pt-[90px]'>
            <Banner title={blogdata.title} />
            <div className='w-full flex justify-center'>
                <div className='w-full max-w-[1225px] mx-[20px]'>
                    <div className='mt-[20px] md:mt-[30px] lg:mt-[70px] mb-[20px] md:mb-[30px]'>
                        <RegularTitle text={blogdata.header} />
                    </div>
                    <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[60px]'>
                        <div className='w-full lg:w-2/3 flex flex-col gap-[20px] md:gap-[30px] text-dark'>
                            <img draggable='false' src={blogdata.image} alt={blogdata.title} className='w-full rounded-[10px]' />
                            <div className='text-[16px] md:text-[18px] whitespace-pre-line self-stretch'>{blogdata.content}</div>
                            <div className='text-[16px] md:text-[18px] font-normal italic opacity-60 flex justify-between'>
                                <div>—&nbsp;{blogdata.author}</div>
                                <div>{moment(blogdata.date).format('MMMM D, YYYY')}</div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-[20px] md:gap-[25px] lg:w-1/3'>
                            <div className='text-dark text-[30px]'>More Birth Stories</div>
                            <div className='grid gap-[20px]'>
                                {SmallBlogsData.map((CardData: SmallBlogType, index: number) => (
                                    <SmallBlogCard key={index} id={CardData.id} image={CardData.image} header={CardData.header} content={CardData.content} author={CardData.author} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
                <PromoteBar />
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </div>
    )
}
