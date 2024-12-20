import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

export default function Announcementsinvestor() {
    return (
        <div>
            <div className='max-w-[1100px] mx-auto'>
                <div className='announcementsinvestor_main tab:px-[24px] '>
                    <div className='announcementsinvestor_main_first border-b mb-[50px] pb-[20px] mt-[35px] '>
                        <h1 className='text-[40px] text-[#1c1c1c] font-[700] font-inter mob:text-[25px]'>Corporate announcements</h1>
                    </div>
                    <div className='announcementsinvestor_main_second font-inter border-b mb-[40px] pb-[40px]'>
                        <p className='text-[16px] text-[#4f4f4f]'>2 December 2024</p>
                        <h1 className='text-[30px] text-[#1c1c1c] my-[10px] mob:text-[20px]'>Zomato - Intimation of schedule of participation in investor conferences</h1>
                        <div className='announcementsinvestor_main_second_flex flex items-center gap-[15px]'>
                            <p className='mx-[0px] text-[#ef4f5f]'>Read more</p>
                            <IoMdArrowDropright  className='text-[#ef4f5f] w-[20px] h-[20px]'/>
                        </div>

                    </div>
                    <div className='announcementsinvestor_main_third'>
                    <p className='text-[16px] text-[#4f4f4f]'>2 December 2024</p>
                    <h1 className='text-[30px] text-[#1c1c1c] my-[10px] mob:text-[20px]'>Zomato - Intimation of allotment of equity shares to Foodie Bay Employees ESOP Trust</h1>
                        <div className='announcementsinvestor_main_second_flex flex items-center gap-[15px]'>
                        <p className='mx-[0px] text-[#ef4f5f]'>Read more</p>
                        <IoMdArrowDropright  className='text-[#ef4f5f] w-[20px] h-[20px]'/>
                        </div>
                        <button className='bg-[#ef4f5f] text-[#fff] my-[40px] w-[207px] h-[44px] rounded-[5px]'>See all announcements</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
