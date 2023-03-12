import { useState } from 'react';
import { CategoryInput } from '@/components/Inputs'
import { UploadButton } from '@/components/Buttons'

export default function LogInSecurity() {
    const [checkSend, setCheckSend] = useState<boolean>(false);

    const style = {
        CheckBox: 'bg-white border rounded-[4px] border-Label w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center mr-2',
    }

    return (
        <div className='w-full max-w-[800px]'>
            <div className='grid md:grid-cols-2 gap-[10px]'>
                <CategoryInput category='First name' placeholder='First name' />
                <CategoryInput category='Last name' placeholder='Last name' />
                <CategoryInput category='Phone number' type='number' placeholder='+972' />
                <CategoryInput category='Email' placeholder='user@example.com' />
                <CategoryInput category='New password' type='password' placeholder='Password (8 or more characters)' />
                <CategoryInput category='Confirm New password' type='password' placeholder='' />
            </div>
            <div className='mt-[20px] flex items-center gap-[10px]'>
                <input
                    type='checkbox'
                    id='checkbox-send'
                    onChange={() => setCheckSend(!checkSend)}
                    className='opacity-0 absolute w-[26px] h-[26px]'
                />
                <div className={style.CheckBox}>
                    <svg className='hidden pointer-events-none' width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M14.5 1.125L5.5625 10.0625L1.5 6' stroke='#2B2525' strokeWidth='1.6666' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                </div>
                <label htmlFor='checkbox-send' className='text-dark text-[14px]'>
                    Send me helpful emails to find rewarding work and job leads.
                </label>
            </div>
            <div className='mt-[30px]'>
                <UploadButton text='Save changes' />
            </div>
        </div>
    )
}
