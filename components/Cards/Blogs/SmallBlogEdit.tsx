import { useRouter } from 'next/router'
import { Icon } from '@iconify/react'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'
import API from '@/services/API'
import { useState, useEffect } from 'react'
import { PreviewArticleModal, EditArticleModal, DeleteArticleModal } from '@/components/Modals'
import { toast } from 'react-toastify'

interface mainbodyType {
    id_lng: number,
    ds_title: string,
    ds_content: string,
    ds_readtime: string,
}

interface BlogCardProps {
    cd_educator: string,
    id: string,
    image: string,
    mainbody: mainbodyType[],
    author: string,
    loadBlogs: () => void,
    previewIcon?: boolean,
    ds_category: string,
}

export default function SmallBlogEditCard({
    cd_educator,
    id,
    image,
    mainbody,
    author,
    loadBlogs,
    previewIcon = false,
    ds_category
}: BlogCardProps) {
    const router = useRouter();
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    // for modal box
    const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

    function closePreviewModal() {
        setIsPreviewOpen(false)
    }

    function openPreviewModal() {
        setIsPreviewOpen(true)
    }

    function closeEditModal() {
        setIsEditOpen(false)
    }

    function openEditModal() {
        setIsEditOpen(true)
    }

    function closeDeleteModal() {
        setIsDeleteOpen(false)
    }

    function openDeleteModal() {
        setIsDeleteOpen(true)
    }

    const getTextFromTitle = () => {
        let title;
        if (mainbody.length === 2) {
            title = mainbody[lngId].ds_title;
        } else {
            title = mainbody[0].ds_title;
        }
        if (title === '')
            return 'No Title';
        return title;
    }

    const getTextFromContent = () => {
        let text;
        if (mainbody.length === 2) {
            text = mainbody[lngId].ds_content;
        } else {
            text = mainbody[0].ds_content;
        }
        let cleanedText = text.replace(/<\/[^>]+>/g, '\n') // Replace ending tags with newline
            .replace(/<[^>]+>/g, ''); // Remove all HTML tags
        if (cleanedText === '')
            return 'No Content';
        return cleanedText;
    }

    const currentLngId = () => {
        if (mainbody.length === 2) {
            return lngId;
        } else {
            return mainbody[0].id_lng;
        }
    }

    const handleDelete = () => {
        API.post('blog/deleteblog', {
            cd_educator: cd_educator,
            id_blog: id,
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    console.log('successfully deleted blog ', id);
                    // delete content images
                    let _ds_images: string[] = [];
                    mainbody.map((blogData: mainbodyType) => {
                        let regex = /images\/(.+?)"/g;
                        let text = blogData.ds_content;
                        const matches = [...text.matchAll(regex)];
                        matches.map((match) => {
                            _ds_images.push(match[1]);
                        })
                    })
                    // thumbnail picture
                    if (image !== '')
                        _ds_images.push(image);
                    if (_ds_images.length !== 0) {
                        let formData = new FormData();
                        formData.append('cd_educator', cd_educator);
                        formData.append('ds_images', JSON.stringify(_ds_images));
                        API.post('blog/deletecontentimages', formData, {
                            headers: {
                                'content-type': 'multipart/form-data',
                            },
                        })
                            .then((result: any) => {
                                if (result.data.status === 'success') {
                                    console.log('successfully deleted file', _ds_images);
                                    toast.success('Deleted blog successfully.');
                                    // reload get my blogs function
                                    loadBlogs();
                                }
                            })
                            .catch((err) => {
                                toast.error('Something went wrong.');
                                console.log(err);
                            })
                    } else {
                        toast.success('Deleted blog successfully.');
                        // reload get my blogs function
                        loadBlogs();
                    }
                }
            })
            .catch((err) => {
                toast.error('Something went wrong.');
                console.log(err);
            })
    }

    return (
        <div
            dir={currentLngId() === 0 ? 'ltr' : 'rtl'}
            className='min-h-[155px] flex items-center gap-[15px] select-none overflow-hidden border-[2px] border-beighe rounded-[10px] relative'
        >
            <PreviewArticleModal
                isOpen={isPreviewOpen}
                closeModal={closePreviewModal}
                ds_thumbnail={image}
                mainbody={mainbody}
                nm_user={author}
                ds_category={ds_category}
            />
            <EditArticleModal
                isOpen={isEditOpen}
                closeModal={closeEditModal}
                cd_educator={cd_educator}
                id_blog={id}
                ds_thumbnail={image}
                mainbody={mainbody}
                ds_category={ds_category}
                loadBlogs={loadBlogs}
            />
            <DeleteArticleModal
                isOpen={isDeleteOpen}
                closeModal={closeDeleteModal}
                handleDelete={handleDelete}
            />
            <div className='w-full h-full max-w-[100px]'>
                {image !== '' ?
                    <img draggable={false} src={process.env.FILE_IMAGE_BASE + image} alt='' className={`object-cover w-full h-full`} />
                    :
                    <div className='flex items-center justify-center w-full h-full bg-gray-300'>
                        <svg className='w-12 h-12 text-gray-200'
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 640 512'>
                            <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
                        </svg>
                    </div>
                }
            </div>
            <div className='w-full text-dark grid gap-[5px] pr-[15px]'>
                <div dir={currentLngId() === 0 ? 'ltr' : 'rtl'} className='text-[16px] md:text-[20px] font-medium line-clamp-1 px-[5px]'>
                    {getTextFromTitle()}
                </div>
                <div dir={currentLngId() === 0 ? 'ltr' : 'rtl'} className='whitespace-pre-line line-clamp-2 text-[14px] md:text-[16px] px-[5px]'>
                    {getTextFromContent()}
                </div>
                <div dir={currentLngId() === 0 ? 'ltr' : 'rtl'} className='text-[14px] md:text-[16px] opacity-60 capitalize line-clamp-1'>
                    —&nbsp;{author}
                </div>
            </div>
            <div className={`absolute top-[5px] ${currentLngId() === 0 ? 'right-[10px]' : 'left-[10px]'} flex gap-[10px]`}>
                {previewIcon &&
                    <button
                        className='hover:bg-beighe hover:ring-beighe hover:ring-4 hover:rounded-full active:bg-transparent active:ring-0 duration-200 transaction-all'
                        onClick={openPreviewModal}
                    >
                        <Icon icon='icon-park-outline:preview-open' width={20} height={20} color='#252525' />
                    </button>
                }
                <button
                    className='hover:bg-beighe hover:ring-beighe hover:ring-4 hover:rounded-full active:bg-transparent active:ring-0 duration-200 transaction-all'
                    onClick={openEditModal}
                >
                    <Icon icon='mingcute:pencil-fill' width={20} height={20} color='#252525' />
                </button>
                <button
                    className='hover:bg-beighe hover:ring-beighe hover:ring-4 hover:rounded-full active:bg-transparent active:ring-0 duration-200 transaction-all'
                    onClick={openDeleteModal}
                >
                    <Icon icon='ic:baseline-delete' width={20} height={20} color='#252525' />
                </button>
            </div>
        </div>
    )
}