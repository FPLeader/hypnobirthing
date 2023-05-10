import { useState, Fragment, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import { CategoryInput, CategoryRuleInput, CategoryDatePicker, Textarea, CategoryCurrencyInput, CategoryLocationInput } from '../../Inputs'
import { CategoryCheckbox } from '../../Checkbox'
import { DateObject, Value } from 'react-multi-date-picker'
import { CategorySelect, CoEducatorSelect } from '@/components/Select'
import { LanguageOptions } from '@/services/Constants/SelectOptions'

import API from '@/services/API'
import useWindowSize from '@/services/Hooks/useWindowSize'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/services/Hooks'
import { logout } from '@/services/Actions/Auth.action'

interface locationType {
    label: string,
    place_id: string,
    lat: number,
    lng: number,
}

interface mainbodyType {
    id_lng: number,
    ds_title: string,
    ds_details: string,
}

interface EducatorItemType {
    cd_educator: string,
    nm_user: string[],
    ds_avatar: string,
}

interface EditSessionProps {
    isOpen: boolean,
    closeModal: () => void,
    id_course: string,
    js_location: locationType,
    dt_lessons: Date[],
    nu_maxcouples: number,
    nu_price: number,
    nu_inventory: number,
    ic_extracourse: boolean,
    mainbody: mainbodyType[],
    ar_members: string[],
    ar_requestmembers: string[],
    educatorsList: EducatorItemType[],
    loadCourses: () => void
}

export default function EditSession({
    isOpen,
    closeModal,
    id_course,
    js_location,
    dt_lessons,
    nu_maxcouples,
    nu_price,
    nu_inventory,
    ic_extracourse,
    mainbody,
    ar_members,
    ar_requestmembers,
    educatorsList,
    loadCourses
}: EditSessionProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { width } = useWindowSize();
    const { currentUser } = useAppSelector((state) => state.auth);

    // values
    const [loadingOpen, setLoadingOpen] = useState<boolean>(false);

    const initialValue = {
        value: '',
        visibility: false,
        errorMessage: '',
        rules: [],
    };

    interface locationType {
        label: string,
        place_id: string,
        lat: number,
        lng: number,
    }

    // values
    const [location, setLocation] = useState<locationType>({
        label: '',
        place_id: '',
        lat: 0,
        lng: 0
    });

    const [lessonDates, setLessonDates] = useState<Value>([]);
    const [maxCouples, setMaxCouples] = useState<number>(1);
    const [price, setPrice] = useState<number>(0);
    const [checkExtra, setCheckExtra] = useState<boolean>(false);
    const [inventory, setInventory] = useState<number>(1);

    const [selectedLangauge, setSelectedLanguage] = useState(LanguageOptions[0]);
    const [titleEn, setTitleEn] = useState({ ...initialValue, rules: ['required'] });
    const [titleHe, setTitleHe] = useState({ ...initialValue, rules: ['required'] });
    const [detailsEn, setDetailsEn] = useState({ ...initialValue, rules: ['required'] });
    const [detailsHe, setDetailsHe] = useState({ ...initialValue, rules: ['required'] });

    const [members, setMembers] = useState<string[]>([]);

    // initialize
    useEffect(() => {
        setLocation(js_location);
        setLessonDates(dt_lessons);
        setMaxCouples(nu_maxcouples);
        setPrice(nu_price);
        setInventory(nu_inventory);
        setCheckExtra(ic_extracourse);
        if (mainbody.length === 2)
            setSelectedLanguage(LanguageOptions[2]);
        else
            setSelectedLanguage(LanguageOptions[mainbody[0].id_lng])
        mainbody.forEach((mainbodyItem: mainbodyType) => {
            if (mainbodyItem.id_lng === 0) {
                setTitleEn({ ...initialValue, value: mainbodyItem.ds_title, rules: ['required'] });
                setDetailsEn({ ...initialValue, value: mainbodyItem.ds_details, rules: ['required'] });
            } else if (mainbodyItem.id_lng === 1) {
                setTitleHe({ ...initialValue, value: mainbodyItem.ds_title, rules: ['required'] });
                setDetailsHe({ ...initialValue, value: mainbodyItem.ds_details, rules: ['required'] });
            }
        })
        setMembers([...ar_members, ...ar_requestmembers]);
    }, [])

    const handleChangeValue = (value: any, setValue: any) => (event: any) => {
        checkValidity({ ...value, value: event.target.value }, setValue);
    };

    const checkValidity = (value: any, setValue: any) => {
        let message = '';
        for (const rule of value.rules) {
            if (rule === 'required') {
                if (value.value.length === 0) {
                    message = 'This field should not be empty.';
                }
            }
        }

        setValue({
            ...value,
            errorMessage: message,
        });
    };

    const isButtonDisabled = (): boolean => {
        if (location.label === '' ||
            //@ts-ignore
            lessonDates?.length === 0 ||
            lessonDates === null ||
            maxCouples < 1 ||
            price <= 0 ||
            inventory <= 0
        )
            return true;

        if (selectedLangauge.id === 0 || selectedLangauge.id === 2) {
            if (titleEn.value.length === 0 || titleEn.errorMessage.length !== 0 ||
                detailsEn.value.length === 0 || detailsEn.errorMessage.length !== 0
            )
                return true;
        }
        if (selectedLangauge.id === 1 || selectedLangauge.id === 2) {
            if (titleHe.value.length === 0 || titleHe.errorMessage.length !== 0 ||
                detailsHe.value.length === 0 || detailsHe.errorMessage.length !== 0
            )
                return true;
        }
        // co educators max number 5 validate
        if (mainbody.length === 2) {
            if (selectedLangauge.id !== 2)
                return false;
        } else {
            if (mainbody[0].id_lng !== selectedLangauge.id)
                return false;
        }

        if (js_location.place_id === location.place_id &&
            dt_lessons.toString() === lessonDates?.toString() &&
            maxCouples === nu_maxcouples &&
            price === nu_price &&
            inventory === nu_inventory &&
            checkExtra === ic_extracourse &&
            (mainbody.length === 2
                ?
                (
                    mainbody[0].ds_title === titleEn.value &&
                    mainbody[0].ds_details === detailsEn.value &&
                    mainbody[1].ds_title === titleHe.value &&
                    mainbody[1].ds_details === detailsHe.value
                )
                :
                mainbody[0].id_lng === 0
                    ?
                    (
                        mainbody[0].ds_title === titleEn.value &&
                        mainbody[0].ds_details === detailsEn.value
                    )
                    :
                    (
                        mainbody[0].ds_title === titleHe.value &&
                        mainbody[0].ds_details === detailsHe.value
                    )
            ) &&
            ar_requestmembers.toString() === members.toString()
        )
            return true;
        return false;
    }

    // upload course
    const handleUpdate = () => {
        if (!loadingOpen) {
            setLoadingOpen(true);
            let formData = new FormData();
            formData.append('cd_educator', currentUser.cd_educator);
            formData.append('id_course', id_course);

            formData.append('js_location', JSON.stringify(location));

            console.log(lessonDates, 'lessonDates');
            // @ts-ignore
            lessonDates?.forEach((lessonDate: DateObject | Date | String) => {
                if (lessonDate instanceof DateObject)
                    formData.append('dt_lessons[]', lessonDate.format());
                else
                    formData.append('dt_lessons[]', lessonDate as string);
            })

            formData.append('nu_maxcouples', maxCouples.toString());
            formData.append('nu_price', price.toString());
            formData.append('nu_inventory', inventory.toString());

            formData.append('ic_extracourse', checkExtra.toString());

            formData.append('nm_user[]', currentUser.nm_user[0]);
            formData.append('nm_user[]', currentUser.nm_user[1]);

            const course_en = {
                id_lng: 0,
                ds_title: titleEn.value,
                ds_details: detailsEn.value,
            }
            const course_he = {
                id_lng: 1,
                ds_title: titleHe.value,
                ds_details: detailsHe.value,
            }
            if (selectedLangauge.id === 0) // English
                formData.append('mainbody', JSON.stringify(course_en));
            else if (selectedLangauge.id === 1) // Hebrew
                formData.append('mainbody', JSON.stringify(course_he));
            else {
                const course_total = [
                    course_en,
                    course_he
                ];
                formData.append('mainbody', JSON.stringify(course_total));
            }

            // ar_members: string[]
            // ar_requestmembers: string[]

            console.log(members);
            members.forEach((member: string) => {
                formData.append('ar_requestmembers[]', member);
            })

            API.post('course/updatecourse', formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            })
                .then((result: any) => {
                    if (result.data.status === 'success') {
                        toast.success('Uploaded course successfully.');
                        setLoadingOpen(false);

                        setLessonDates([]);
                        setMaxCouples(1);
                        setPrice(0);
                        setCheckExtra(false);
                        setInventory(1);
                        setSelectedLanguage(LanguageOptions[0]);
                        // English
                        setTitleEn({ ...initialValue, rules: ['required'] });
                        setTitleHe({ ...initialValue, rules: ['required'] });

                        // Hebrew
                        setDetailsEn({ ...initialValue, rules: ['required'] });
                        setDetailsHe({ ...initialValue, rules: ['required'] });

                        setMembers([]);

                        // close modal
                        closeModal();
                        // important load courses again
                        loadCourses();
                    }
                })
                .catch((err) => {
                    if (err.request?.response === '')
                        toast.error('Something went wrong.');
                    else {
                        try {
                            let errorMessage = JSON.parse(err.request?.response).message;
                            if (errorMessage === 'jwt expired') {
                                dispatch(logout(router, '/login'));
                                toast.error('Your session was expired, Log in again here.');
                            } else
                                toast.error(errorMessage);
                        } catch (error) {
                            console.error('Error parsing response:', err.request?.response);
                            toast.error('Something went wrong.');
                        }
                    }
                    setLoadingOpen(false);
                })
        }
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-[6000]' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-dark bg-opacity-90' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-[800px] transform rounded-[20px] bg-bcg_2 p-[15px] md:p-[20px] lg:p-[30px] text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    className='text-[20px] lg:text-[28px] font-medium leading-normal text-dark pr-[35px]'
                                >
                                    Edit a course
                                </Dialog.Title>
                                <div className='absolute top-[10px] right-[10px]'>
                                    <button
                                        className='bg-[#DFD3BC80] hover:bg-beighe active:bg-bcg_2 p-[10px] rounded-[10px] focus:outline-none transition-all duration-300'
                                        onClick={closeModal}
                                    >
                                        {width >= 768 ? <CloseIcon /> : <CloseIcon width={15} height={15} />}
                                    </button>
                                </div>
                                <div className='mt-[20px] space-y-[10px] font-[lato]'>
                                    <CategoryLocationInput
                                        category='Location/Zoom'
                                        placeholder={js_location.label}
                                        inputValue={location}
                                        handleChange={setLocation}
                                    />
                                    <CategoryDatePicker
                                        category='Dates of each lesson'
                                        title=''
                                        placeholder=''
                                        value={lessonDates}
                                        setValue={setLessonDates}
                                    />
                                    <div className='grid md:grid-cols-2 gap-[10px]'>
                                        <CategoryInput
                                            category='Maximum Number of Couples'
                                            placeholder='1'
                                            type='number'
                                            inputValue={maxCouples}
                                            handleChange={setMaxCouples}
                                        />
                                        <CategoryCurrencyInput
                                            category='Price'
                                            placeholder='₪ 0.00'
                                            inputValue={price}
                                            handleChange={setPrice}
                                        />
                                    </div>

                                    <CategoryInput
                                        category='How much inventory is open on pashut laledet'
                                        placeholder='1'
                                        type='number'
                                        inputValue={inventory}
                                        handleChange={setInventory}
                                    />

                                    <CategoryCheckbox
                                        id='check-extra-course'
                                        text='Extra courses included?'
                                        checkValue={checkExtra}
                                        setCheckValue={setCheckExtra}
                                    />

                                    <div className='grid gap-[10px] border border-beighe rounded-[10px] p-[10px]'>
                                        <CategorySelect
                                            category=''
                                            selectItems={LanguageOptions}
                                            inputValue={selectedLangauge}
                                            handleChange={setSelectedLanguage}
                                        />
                                        {(selectedLangauge.id === 0 || selectedLangauge.id === 2) &&
                                            <CategoryRuleInput
                                                lngId={0}
                                                category='Title'
                                                placeholder='Enter Title text here'
                                                inputValue={titleEn}
                                                handleChange={handleChangeValue(titleEn, setTitleEn)}
                                            />
                                        }
                                        {(selectedLangauge.id === 1 || selectedLangauge.id === 2) &&
                                            <CategoryRuleInput
                                                lngId={1}
                                                category='כותרת'
                                                placeholder='הזן טקסט כותרת כאן'
                                                inputValue={titleHe}
                                                handleChange={handleChangeValue(titleHe, setTitleHe)}
                                            />
                                        }
                                        {(selectedLangauge.id === 0 || selectedLangauge.id === 2) &&
                                            <Textarea
                                                lngId={0}
                                                placeholder='Enter text here'
                                                category='Add details'
                                                inputValue={detailsEn}
                                                handleChange={handleChangeValue(detailsEn, setDetailsEn)}
                                            />
                                        }
                                        {(selectedLangauge.id === 1 || selectedLangauge.id === 2) &&
                                            <Textarea
                                                lngId={1}
                                                placeholder='הזן טקסט כאן'
                                                category='הוסף פרטים'
                                                inputValue={detailsHe}
                                                handleChange={handleChangeValue(detailsHe, setDetailsHe)}
                                            />
                                        }
                                    </div>
                                    <div className=''>
                                        {educatorsList.length === 0
                                            ?
                                            <div>
                                                Co Educators Data Failed to load from server.
                                            </div>
                                            :
                                            <CoEducatorSelect
                                                educatorsList={educatorsList}
                                                coEducators={members}
                                                setCoEducators={setMembers}
                                            />
                                        }
                                    </div>
                                </div>

                                <div className='mt-[20px]'>
                                    <button
                                        className='flex items-center justify-center gap-[5px] md:gap-[10px] whitespace-nowrap w-full md:w-max h-max text-center px-[38px] py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe disabled:bg-disabled disabled:cursor-not-allowed rounded-[500px] select-none cursor-pointer transition-all duration-300'
                                        onClick={handleUpdate}
                                        disabled={isButtonDisabled()}
                                    >
                                        {loadingOpen && <svg aria-hidden='true' className='w-[25px] h-[25px] text-gray-200 animate-spin fill-dark' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                                        </svg>}
                                        {'Update'}
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}