import { BannerSection, QuoteSection, UpcomingSection, WhatHypnoSection, BlogsSection, FeedbackSection, CommunitySection, ProductsSection, SubmitSection, InstagramSection, AboveFold } from './Sections'

export default function Home() {
    return (
        <div className='pt-[70px] md:pt-[90px]'>
            <BannerSection />
            <QuoteSection />
            <UpcomingSection />
            <WhatHypnoSection />
            <BlogsSection />
            <FeedbackSection />
            <CommunitySection />
            <ProductsSection />
            <SubmitSection />
            <InstagramSection />
        </div>
    )
}