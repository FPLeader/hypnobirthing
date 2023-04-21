import React from 'react'

export default function TwoLine() {
    return (
        <div className='p-4 space-y-4 border border-gray-200 rounded shadow animate-pulse md:p-6'>
            <div>
                <div className='h-2.5 bg-gray-300 rounded-full w-full max-w-[80px] mb-2.5'></div>
                <div className='w-full max-w-[200px] h-2 bg-gray-200 rounded-full'></div>
            </div>
        </div>
    )
}
