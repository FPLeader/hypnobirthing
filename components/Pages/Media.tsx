import React from 'react'
import { Banner, PromoteBlogs, ComingChildBirth } from '@/components/Sections'

export default function Media() {
  return (
    <div className='pt-[70px] md:pt-[90px]'>
        <Banner title='Hypnobirthing Media' textStyle='center' />
        <div className='max-w-[1536px] m-auto'>
            <div className='pt-[97px]'>
                <PromoteBlogs />
            </div>
        </div>
        <div className='pt-[40px]'>
            <ComingChildBirth />
        </div>
    </div>
  )
}