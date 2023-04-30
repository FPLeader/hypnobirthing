import { useState, useEffect } from 'react'
import { SmallBlogCard, SmallBlogEditCard } from '@/components/Cards'
import { SmallBlogSkeletonCard } from '@/components/Skeletons'
import { toast } from 'react-toastify'
import { UploadButton } from '@/components/Buttons'
import { AddArticleModal } from '@/components/Modals'
import API from '@/services/API'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/services/Hooks'
import { logout } from '@/services/Actions/Auth.action'

export default function MyAritcles() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { currentUser } = useAppSelector((state) => state.auth);

    const style = {
        SubTitle: 'text-[20px] lg:text-[24px] font-medium',
        GridStyle: 'grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[35px]',
    }

    // for modal box
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // values
    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [numberOfTotal, setNumberOfTotal] = useState<number>(0);

    interface mainbodyType {
        id_lng: number,
        ds_title: string,
        ds_content: string,
        ds_readtime: string,
    }

    interface BlogType {
        id_blog: string,
        cd_educator: string,
        ds_state: string,
        dt_upload: Date,
        dt_publish: Date,
        ds_thumbnail: string,
        nm_user: string,
        ds_category: string,
        mainbody: mainbodyType[]
    }
    const [liveBlogs, setLiveBlogs] = useState<BlogType[]>([]);
    const [reviewBlogs, setReviewBlogs] = useState<BlogType[]>([]);
    const [draftBlogs, setDraftBlogs] = useState<BlogType[]>([]);

    const SetBlogsData = (allBlogs: []) => {
        setNumberOfTotal(allBlogs.length);
        let _liveBlogs: BlogType[] = [], _reviewBlogs: BlogType[] = [], _draftBlogs: BlogType[] = [];
        allBlogs.map((blogData: BlogType) => {
            if (blogData.ds_state === 'live') {
                _liveBlogs.push(blogData);
            } else if (blogData.ds_state === 'underreview') {
                _reviewBlogs.push(blogData);
            } else if (blogData.ds_state === 'draft') {
                _draftBlogs.push(blogData);
            }
        })
        setLiveBlogs(_liveBlogs);
        setReviewBlogs(_reviewBlogs);
        setDraftBlogs(_draftBlogs);
        setDomLoaded(1);
    }

    const loadBlogs = () => {
        console.log('loadblogs');
        API.post('blog/getmyblogs', {
            cd_educator: currentUser.cd_educator,
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    console.log(result.data.allBlogs);
                    SetBlogsData(result.data.allBlogs);
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


    useEffect(() => {
        setDomLoaded(0);
    }, [])

    useEffect(() => {
        if (domLoaded === 0) {
            loadBlogs();
        } else if (domLoaded === 2)
            toast.error('please reoload your page');
        else if (domLoaded === 3) {   // jwt expired
            dispatch(logout(router, '/login'));
            toast.error('Your session was expired, Log in again here.');
        }
    }, [domLoaded]);

    return (
        <div className='flex flex-col gap-[16px]'>
            <AddArticleModal
                isOpen={isOpen}
                closeModal={closeModal}
                numberOfTotal={numberOfTotal}
                loadBlogs={loadBlogs}
            />
            <div className='text-[24px] lg:text-[28px] font-medium'>
                {
                    domLoaded === 1 ?
                        `My articles (${numberOfTotal})`
                        :
                        `My articles`
                }
            </div>
            {
                domLoaded === 1 ?
                    liveBlogs.length !== 0 ?
                        <div className={style.SubTitle}>
                            Live ({liveBlogs.length})
                        </div>
                        :
                        <></>
                    :
                    <div className={style.SubTitle}>
                        Live
                    </div>
            }
            {domLoaded === 1 ?
                liveBlogs.length !== 0 ?
                    <div className={style.GridStyle}>
                        {liveBlogs.map((CardData: BlogType, index: number) => (
                            <SmallBlogCard
                                key={'live' + index}
                                id={CardData.id_blog}
                                image={CardData.ds_thumbnail}
                                mainbody={CardData.mainbody}
                                author={CardData.nm_user}
                                ds_category={CardData.ds_category}
                            />
                        ))}
                        <div className='w-full min-h-[137px] flex justify-center items-center border border-beighe rounded-[10px]'>
                            <div className='w-max' onClick={openModal}>
                                <UploadButton text='add article' />
                            </div>
                        </div>
                    </div>
                    :
                    <div className={style.GridStyle}>
                        <div className='w-full min-h-[137px] flex justify-center items-center border border-beighe rounded-[10px]'>
                            <div className='w-max' onClick={openModal}>
                                <UploadButton text='add article' />
                            </div>
                        </div>
                    </div>
                :
                <div className={style.GridStyle}>
                    <SmallBlogSkeletonCard />
                    <SmallBlogSkeletonCard />
                </div>
            }
            {
                domLoaded === 1 ?
                    reviewBlogs.length !== 0 ?
                        <div className={style.SubTitle}>
                            Under Review ({reviewBlogs.length})
                        </div>
                        :
                        <></>
                    :
                    <div className={style.SubTitle}>
                        Under Review
                    </div>
            }
            {domLoaded === 1 ?
                reviewBlogs.length !== 0 ?
                    <div className={style.GridStyle}>
                        {reviewBlogs.map((CardData: BlogType, index: number) => (
                            <SmallBlogEditCard
                                key={'review' + index}
                                cd_educator={currentUser.cd_educator}
                                id={CardData.id_blog}
                                image={CardData.ds_thumbnail}
                                mainbody={CardData.mainbody}
                                author={CardData.nm_user}
                                loadBlogs={loadBlogs}
                                previewIcon={true}
                                ds_category={CardData.ds_category}
                            />
                        ))}
                    </div>
                    :
                    <></>
                :
                <div className={style.GridStyle}>
                    <SmallBlogSkeletonCard />
                    <SmallBlogSkeletonCard />
                </div>
            }
            {
                domLoaded === 1 ?
                    draftBlogs.length !== 0 ?
                        <div className={style.SubTitle}>
                            Draft ({draftBlogs.length})
                        </div>
                        :
                        <></>
                    :
                    <div className={style.SubTitle}>
                        Draft
                    </div>
            }
            {domLoaded === 1 ?
                draftBlogs.length !== 0 ?
                    <div className={style.GridStyle}>
                        {draftBlogs.map((CardData: BlogType, index: number) => (
                            <SmallBlogEditCard
                                key={'draft' + index}
                                cd_educator={currentUser.cd_educator}
                                id={CardData.id_blog}
                                image={CardData.ds_thumbnail}
                                mainbody={CardData.mainbody}
                                author={CardData.nm_user}
                                loadBlogs={loadBlogs}
                                ds_category={CardData.ds_category}
                            />
                        ))}
                    </div>
                    :
                    <></>
                :
                <div className={style.GridStyle}>
                    <SmallBlogSkeletonCard />
                    <SmallBlogSkeletonCard />
                </div>
            }
        </div>
    )
}