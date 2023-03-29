
export default function Introduction() {
    return (
        <div className='flex flex-col gap-[16px]'>
            <div className='text-[30px] md:text-[40px] lg:text-[44px] font-light italic'>
                The Fourth Trimester
            </div>
            <div className='grid lg:grid-cols-2 gap-[15px] lg:gap-[35px]'>
                <div className='text-dark text-[16px] md:text-[18px] lg:text-[20px] md:tracking-wide lg:leading-loose'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </div>
                <div className='w-full'>
                    <img draggable='false' src='\img\after1.png' alt='' className={`w-full h-full max-lg:max-h-[480px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`} />
                </div>
            </div>
        </div>
    )
}