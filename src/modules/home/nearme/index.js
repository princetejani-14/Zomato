import React from 'react'
import { FaChevronDown } from "react-icons/fa6";

export default function Nearmezomato() {
    return (
        <div>
            <div className='nearme_main max-w-[1100px] mx-auto'>
                <div className='nearme_heading text-[30px] text-[#363636] font-[500] tracking-wider mb-[20px] pt-[50px] tab:mx-[24px] mob:text-[22px]'>
                    <h1>Explore options near me</h1>
                </div>
                <div className='nearme_data flex flex-col gap-[20px] cursor-pointer mb-[40px] tab:mx-[24px]'>
                    <div className='nearme_data_box1 flex justify-between items-center border-[1px] px-[24px] py-[20px] text-[20px] text-[#1c1c1c] rounded-[10px]'>
                        <p className='m-[0px]'>Popular Cuisines Near Me</p>
                        <FaChevronDown className='w-[15px] h-[15px]' />
                    </div>
                    <div className='nearme_data_box1 flex justify-between items-center border-[1px] px-[24px] py-[20px] text-[20px] text-[#1c1c1c] rounded-[10px]'>
                        <p className='m-[0px]'>Popular Restaurant Types Near me</p>
                        <FaChevronDown className='w-[15px] h-[15px]' />
                    </div>
                    <div className='nearme_data_box1 flex justify-between items-center border-[1px] px-[24px] py-[20px] text-[20px] text-[#1c1c1c] rounded-[10px]'>
                        <p className='m-[0px]'>Top Restaurant Chains</p>
                        <FaChevronDown className='w-[15px] h-[15px]' />
                    </div>
                    <div className='nearme_data_box1 flex justify-between items-center border-[1px] px-[24px] py-[20px] text-[20px] text-[#1c1c1c] rounded-[10px]'>
                        <p className='m-[0px]'>Cities We Deliver To</p>
                        <FaChevronDown className='w-[15px] h-[15px]' />
                    </div>
                </div>

            </div>

        </div>
    )
}
