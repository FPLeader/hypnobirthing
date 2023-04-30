import { useState, useEffect } from 'react';
import { CategorySelect } from '@/components/Select'
import { SearchInput, CategoryInput } from '@/components/Inputs'
import { SearchButton } from '@/components/Buttons'
import { RegularTitle } from '@/components/Titles'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

interface PageProps {
    title: string,
    text: string,
}

export default function OurBlogPosts({
    title,
    text,
}: PageProps) {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    const categoryOptions = [
        { id: 0, value: 'Article' },
        { id: 1, value: 'Birth Story' },
        { id: 2, value: 'Recipe' },
    ]
    const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
    const [selectedAuthor, setSelectedAuthor] = useState<string>('');
    const [selectedSubject, setSelectedSubject] = useState<string>('');

    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div className='pt-[50px] relative'>
                    <RegularTitle lngId={lngId} text={title} />
                    <div className='whitespace-pre-line text-base max-w-[800px] mt-[20px]'>
                        {text}
                    </div>
                </div>
                <div className='pt-[60px] flex flex-col md:flex-row gap-2.5 items-end'>
                    <div className='w-full flex flex-col md:flex-row md:w-8/12 gap-2.5 items-end'>
                        <CategorySelect
                            category='Category'
                            selectItems={categoryOptions}
                            inputValue={selectedCategory}
                            handleChange={setSelectedCategory}
                            className={'w-full'}
                        />
                        <CategoryInput
                            category='Author'
                            placeholder='Rebecca'
                            inputValue={selectedAuthor}
                            handleChange={setSelectedAuthor}
                            className={'w-full'}
                        />
                        <CategoryInput
                            category='Subject'
                            placeholder='subject'
                            inputValue={selectedSubject}
                            handleChange={setSelectedSubject}
                            className={'w-full'}
                        />
                    </div>
                    <div className='w-full flex flex-col md:flex-row gap-[10px] items-center md:w-4/12'>
                        <SearchInput />
                        <SearchButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
