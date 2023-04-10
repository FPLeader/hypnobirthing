import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { SmallBlogCard, SmallBlogSkeletonCard } from '@/components/Cards'
import { RegularTitle } from '../Titles'
import { useState, useEffect } from 'react'
import API from '@/services/API'
import { useAppDispatch, useAppSelector } from '@/services/Hooks'
import { toast } from 'react-toastify'
import dynamic from 'next/dynamic'
// @ts-ignore
dynamic(import('react-quill/dist/quill.snow.css'), { ssr: false, loading: () => <p>Loading ...</p> })
// import ReactMarkdown from 'react-markdown/with-html';


interface BlogProps {
    blogId: string,
}

export default function Blog({
    blogId = ''
}: BlogProps) {
    const moment = require('moment');
    const dispatch = useAppDispatch();
    const { currentUser } = useAppSelector((state) => state.auth);

    interface mainbodyType {
        id_lng: number,
        ds_title: string,
        ds_content: string,
        ds_readtime: string,
        ds_category: string,
    }

    interface BlogType {
        id_blog: string,
        cd_educator: string,
        ds_state: string,
        dt_upload: Date,
        dt_publish: Date,
        ds_thumbnail: string,
        nm_user: string,
        mainbody: mainbodyType[]
    }

    // values
    const [domLoaded, setDomLoaded] = useState<number>(0);
    const [latestBlog, setLatestBlogs] = useState<BlogType[]>([]);
    const [currentBlog, setCurrentBlog] = useState<BlogType>();


    // initalize
    useEffect(() => {
        if (blogId !== '')
            loadCurrentBlog();
    }, [blogId]);

    const loadCurrentBlog = () => {
        API.post('blog/getcurrentblog', {
            cd_educator: currentUser.cd_educator,
            id_blog: blogId
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    console.log(result.data.currentBlog);
                    setCurrentBlog(result.data.currentBlog);
                    setDomLoaded(1);
                }
            })
            .catch((err) => {
                if (err.request?.response === '')
                    toast.error('Something went wrong.');
                else {
                    try {
                        let errorMessage = JSON.parse(err.request?.response).message;
                        if (errorMessage === 'jwt expired') {
                            setDomLoaded(3);
                        } else
                            setDomLoaded(2);
                    } catch (error) {
                        console.error('Error parsing response:', err.request?.response);
                        setDomLoaded(2);
                    }
                }
            })
    }

    return (
        <div className='pt-[70px] min-h-screen md:pt-[90px]'>
            {
                domLoaded === 0 ?
                    <>
                        <Banner title={'Blog'} image='/img/banner1.png' />
                        <div className='w-full flex justify-center'>
                            <div className='animate-pulse w-full max-w-[1225px] mx-[20px]'>
                                <div className='mt-[20px] md:mt-[30px] lg:mt-[70px] mb-[20px] md:mb-[30px]'>
                                    <div className='h-3 md:h-4 w-3/5 bg-gray-300 rounded-full' />
                                </div>
                                <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[60px]'>
                                    <div className='w-full lg:w-2/3 flex flex-col gap-[20px] md:gap-[30px] text-dark'>
                                        <div className='w-full h-[300px] rounded-[15px] overflow-hidden'>
                                            <div className='flex items-center justify-center w-full h-full bg-gray-300'>
                                                <svg className='w-12 h-12 text-gray-200'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    aria-hidden='true'
                                                    fill='currentColor'
                                                    viewBox='0 0 640 512'>
                                                    <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='grid gap-[15px]'>
                                            <div className='h-2 md:h-2.5 w-4/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-3/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-4/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-2/5 bg-gray-300 rounded-full' />
                                        </div>
                                        <div className='grid gap-[15px]'>
                                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-3/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-4/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-4/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-3/5 bg-gray-300 rounded-full' />
                                        </div>
                                        <div className='grid gap-[15px]'>
                                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-3/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-4/5 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-3/5 bg-gray-300 rounded-full' />
                                        </div>
                                        <div className='mt-[40px] flex justify-between'>
                                            <div className='h-2 md:h-2.5 w-1/6 bg-gray-300 rounded-full' />
                                            <div className='h-2 md:h-2.5 w-2/6 bg-gray-300 rounded-full' />
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col gap-[20px] md:gap-[25px] lg:w-1/3'>
                                        <div className='text-dark text-[30px]'>More Birth Stories</div>
                                        <div className='grid gap-[20px]'>
                                            <SmallBlogSkeletonCard />
                                            <SmallBlogSkeletonCard />
                                            <SmallBlogSkeletonCard />
                                            <SmallBlogSkeletonCard />
                                            <SmallBlogSkeletonCard />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='w-full'>
                            <img draggable='false' src={process.env.FILE_IMAGE_BASE + (currentBlog?.ds_thumbnail ?? '')} alt='' className={`w-full h-[205px] md:h-[300px] object-cover`} />
                        </div>
                        <div className='w-full flex justify-center'>
                            <div className='w-full max-w-[1225px] mx-[20px]'>
                                <div className='mt-[20px] md:mt-[30px] lg:mt-[70px] mb-[20px] md:mb-[30px]'>
                                    <RegularTitle text={currentBlog?.mainbody[0].ds_title ?? ''} />
                                </div>
                                <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[60px]'>
                                    <div className='w-full lg:w-2/3 flex flex-col gap-[20px] md:gap-[30px] text-dark'>
                                        <div className='font-[lato] ql-editor !p-0' dangerouslySetInnerHTML={{ __html: currentBlog?.mainbody[0].ds_content ?? '' }} />
                                        <div className='text-[16px] md:text-[18px] font-normal italic opacity-60 flex flex-col items-center md:flex-row md:justify-between'>
                                            <div className='capitalize'>—&nbsp;{currentBlog?.nm_user}</div>
                                            <div>{moment(currentBlog?.dt_upload).format('MMMM D, YYYY')}</div>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col gap-[20px] md:gap-[25px] lg:w-1/3'>
                                        <div className='text-dark text-[30px]'>More Birth Stories</div>
                                        <div className='grid gap-[20px]'>
                                            {/* {SmallBlogsData.map((CardData: SmallBlogType, index: number) => (
                                                <SmallBlogCard key={index} id={CardData.id} image={CardData.image} header={CardData.header} content={CardData.content} author={CardData.author} />
                                            ))} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
            <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
                <PromoteBar />
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </div>
    )
}
