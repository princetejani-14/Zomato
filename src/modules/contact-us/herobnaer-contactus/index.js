import React from 'react'
import img1 from '../../../assets/image/herobaner-contactus.avif'
export default function Herobanercontactus() {
    return (
        <div>
            <div className='herobaner_contactus_main relative mt-[73px]'>
                <div className='herobaner_contactus_bg'>
                    <img src={img1} className='w-full h-[316px] object-cover mob:h-[140px]' />
                </div>
                <div className='herobaner_contactus_text absolute  w-[854px] top-[26%] left-[21%] tab:w-[768px] tab:left-0 mob:w-[390px] mob:top-[17%]'>
                    <p className='text-[54px] text-white text-center font-[500] mob:text-[32px]'>Sizden haber aldığımıza çok sevindik!</p>
                </div>
            </div>

        </div>
    )
}
