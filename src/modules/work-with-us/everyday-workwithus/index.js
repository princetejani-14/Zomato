import React from 'react'
import img1 from '../../../assets/image/everyday-workwithus-bg-img.avif'
export default function Everday_workwithus() {
    return (
        <div>
            <div className='everyday_workwithus_main font-inter relative'>
                <div className='everyday_workwithus_bg'>
                    <img src={img1} className='w-full h-[800px] object-cover'/>
                </div>
                <div className='everyday_workwithus_text text-[#fff] absolute bottom-[8%] left-[8%] mob:left-0 mob:px-[20px]'>
                    <h1 className='text-[72px] font-[600] w-[470px] leading-none pb-[40px] tab:text-[64px] mob:text-[30px] mob:w-[350px]'>everyday extraordinary</h1>
                    <p className='text-[22px] font-[300] w-[460px] tracking-wide tab:text-[20px] mob:w-[350px]'>The right people got us here, and we are on the lookout for those who will bring us closer to our vision, and make a difference.</p>
                   <p className='text-[22px] font-[300] w-[460px] pt-[15px] tracking-wide tab:text-[20px] mob:w-[350px]'>If you know someone at Zomato, reach out to them and share why you would be a great fit.</p>

                </div>
            </div>

        </div>
    )
}
