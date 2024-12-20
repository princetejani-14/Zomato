import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
export default function Frequentlyrestoranekle() {
    return (
        <div>
            <div className='max-w-[1128px] mx-auto'>
                <div className='frequently-heading'>
                    <h1 className='text-center text-[36px] mb-[48px] font-[700] tracking-wide mob:text-[24px]'>Frequently asked questions</h1>
                </div>
                <div className='frequently_box_main flex flex-col gap-[32px] mb-[48px] tab:w-[552px] tab:mx-auto mob:w-[358px] font-inter'>
                    <div className='frequently_box border flex justify-between p-[16px] rounded-[20px] border-[#f2f4f7] shadow-md'>
                        <p className='mx-0 text-[14px] text-[#293141] tab:w-[440px] mob:w-[276px]'>What are the documents and details required to start deliveries through Zomato?</p>
                        <IoIosArrowDown className='text-[#afb4c0]' />
                    </div>
                    <div className='frequently_box border flex justify-between p-[16px] rounded-[20px] border-[#f2f4f7] shadow-md'>
                        <p className='mx-0 text-[14px] text-[#293141]'>How long will it take for a restaurant to go live on Zomato after submitting the documents?</p>
                        <IoIosArrowDown className='text-[#afb4c0]' />
                    </div>
                    <div className='frequently_box border flex justify-between p-[16px] rounded-[20px] border-[#f2f4f7] shadow-md'>
                        <p className='mx-0 text-[14px] text-[#293141]'>What is the one-time onboarding fee? Do I have to pay it at the time of registration?</p>
                        <IoIosArrowDown className='text-[#afb4c0]' />
                    </div>
                    <div className='frequently_box border flex justify-between p-[16px] rounded-[20px] border-[#f2f4f7] shadow-md'>
                        <p className='mx-0 text-[14px] text-[#293141]'>How can I get help and support from Zomato if I get stuck?</p>
                        <IoIosArrowDown className='text-[#afb4c0]' />
                    </div>
                    <div className='frequently_box border flex justify-between p-[16px] rounded-[20px] border-[#f2f4f7] shadow-md'>
                        <p className='mx-0 text-[14px] text-[#293141]'>How much commission will I be charged by Zomato?</p>
                        <IoIosArrowDown className='text-[#afb4c0]' />
                    </div>
                    <div className='frequently_box border flex justify-between p-[16px] rounded-[20px] border-[#f2f4f7] shadow-md'>
                        <p className='mx-0 text-[14px] text-[#293141]'>How will I get my payouts?</p>
                        <IoIosArrowDown className='text-[#afb4c0]' />
                    </div>
                </div>

            </div>

        </div>
    )
}
