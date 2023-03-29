import { VideoCard } from '../../Cards'

export default function Founder() {
    return (
        <div className='py-[20px] py-[50px] lg:py-[70px] w-full flex justify-center bg-bcg_2 gap-[30px]'>
            <div className='w-full max-w-[1225px] mx-[20px] flex flex-col gap-[20px] md:gap-[30px]'>
                <div className='text-[30px] md:text-[40px] lg:text-[44px] text-center md:text-left font-light italic'>Marie Mongan — founder of hypnobirthing</div>
                <div className='columns-1 md:columns-2 gap-[35px] text-[18px]'>
                    Marie Mongan published her first book “HypnoBirthing a Celebration of Life” in 1989. The former college Dean and Hypnotherapist birthed her four children with relaxed confidence. She planned and prepared for her births with the idea that birth is normal and natural, during years in which most women in the USA received heavy anesthetics at birth. With the skills of deep relaxation and the natural birth philosophy, she helped prepare her adult children and their partners for the calm births of her eleven grandchildren, and consequently all of them came into the world gently and naturally. Over time, her book became a method that spread around the world and is now taught in 46 countries, and millions of families have benefited from her vision.
                    <br /><br />
                    Marie Mongan&apos;s only complaint about her own births was that the medical caregivers intervened with unnecessary procedures as part of hospital  protocol. She introduced into her program the partner’s role as “protector” of the birthing, so that the mother can be free to focus on working with her body and baby. In this way parents learn tools to work together as a team, maintaining relaxation, communicating with their caregivers, and bonding with their babies.
                    <br /><br />
                    Marie Mongan received many of the highest awards both in the realms of hypnosis, and in the birth field. She was the mentor of Paula Aji who brought HypnoBirthing to Israel in 2007, and she supported Paula Aji, Sharon Peled and Rebecca Rosenstein through the founding of Pashut Laledet HypnoBirthing in Israel and the Hebrew translation of the teaching materials.
                </div>
                <div className='flex justify-center'>
                    <div className='w-full max-w-[800px] min-h-[177px]'>
                        <VideoCard title='Founder of hypnobirthing' videoUrl='YGxKPJDzok8' style='w-full aspect-w-4 aspect-h-3' />
                    </div>
                </div>
            </div>
        </div>
    )
}