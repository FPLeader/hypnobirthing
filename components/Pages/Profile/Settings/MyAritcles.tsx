import { useState } from 'react';
import { SmallBlogCard } from '@/components/Cards'
import { SmallBlogsData, SmallBlogType } from '@/services/Constants/Sections/BlogData'
import { UploadButton } from '@/components/Buttons'
import { AddArticleModal } from '@/components/Modals';

export default function MyAritcles() {
    const numberOfArticles = 2;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className='flex flex-col gap-[16px]'>
            <AddArticleModal
                isOpen={isOpen}
                closeModal={closeModal}
            />
            <div className='text-[24px] lg:text-[28px] font-medium'>My articles ({numberOfArticles})</div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[35px]'>
                {SmallBlogsData.slice(0, 2).map((CardData: SmallBlogType, index: number) => (
                    <SmallBlogCard disabled={true} key={index} id={CardData.id} image={CardData.image} header={CardData.header} content={CardData.content} author={CardData.author} />
                ))}
                <div
                    className='w-full min-h-[137px] flex justify-center items-center border border-beighe rounded-[10px]'
                    onClick={openModal}
                >
                    <UploadButton text='add article' />
                </div>
            </div>
        </div>
    )
}