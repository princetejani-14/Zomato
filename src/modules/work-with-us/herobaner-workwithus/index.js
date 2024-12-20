import React from 'react'
import img1 from '../../../assets/image/herobaner-workwithus-bg-img.avif'
export default function Herobanerworkwithus() {
    return (
        <div>
            <div className='herobaner_workwith_main font-inter relative'>
                <div className='herobaner_workwith_bg_img'>
                    <img src={img1} className='w-full h-[720px] object-cover'/>
                </div>
                <div className='herobaner_workwith_right_text absolute top-[40%] left-[10%] tab:left-[3%] tab:top-[15%] mob:top-[25%] mob:left-[7%]'>
                    <h1 className='text-[72px] text-[#fff] font-[600] w-[646px] tab:w-[720px] tab:text-[64px] tab:leading-tight mob:text-[42px] mob:w-[342px]'>we listen more when people root for you</h1>
                    <p className='text-[24px] text-white font-[300] tab:mt-[25px] mob:text-[18px] mob:w-[342px]'>We only accept applications through employee referrals.</p>

                </div>

            </div>

        </div>
    )
}
