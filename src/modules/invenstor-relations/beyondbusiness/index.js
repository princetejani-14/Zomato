import React from 'react'
import img1 from '../../../assets/image/beyondbuissnes-img1.avif'
import img2 from '../../../assets/image/beyondbuissnes-img2.avif'
import img3 from '../../../assets/image/beyondbuissnes-img3.avif'
export default function Beyondbusinessinvestor() {
    return (
        <div className='bg-[#f8f9fc]'>
            <div className='max-w-[1100px] mx-auto'>
                <div className='beyondbusiness_heading pt-[40px] tracking-wide font-inter tab:px-[24px]'>
                    <h1 className='text-[40px] text-[#1c1c1c] font-[700] mb-[10px] mob:text-[25px]'>Beyond business</h1>
                    <p className='text-[20px] text-[#767c8f] font-[500] tab:text-[15px]'>At Zomato, our business approach is guided by our commitment to responsible and sustainable growth. Our ESG update outlines the many ways in which we make the impact of our business more sustainable and help make the world a better place for everyone. Some of our key sustainability initiatives include:</p>
                </div>
                <div className='beyondbusiness_main grid grid-cols-3 gap-[28px] mt-[30px] pb-[25px] tab:grid-cols-2 tab:px-[24px] mob:grid-cols-1'>
                    <div className='beyondbusiness_card1 border border-[#f2f4f7] rounded-[40px] shadow-lg cursor-pointer'>
                        <div className='beyondbusiness_card1_img group relative'>
                            <img src={img1} className='rounded-t-[40px] w-full h-full absolute  opacity-100 group-hover:opacity-0 transition-all ease-in-out duration-500' />
                            <img src={img2} className='rounded-t-[40px] w-full h-full opacity-0 group-hover:opacity-100' />
                        </div>
                        <div className='beyondbusiness_card1_data bg-white font-inter rounded-b-[40px]'>
                            <h1 className='text-[22px] text-[#000] font-[600] px-[16.5px] pt-[16.5px]'>Feeding India</h1>
                            <p className='text-[16px] text-[#767c8f] px-[16px] pt-[8px] pb-[16px] font-[500]'>A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India</p>
                        </div>

                    </div>
                    <div className='beyondbusiness_card1 border border-[#f2f4f7] rounded-[40px] shadow-lg cursor-pointer'>
                        <div className='beyondbusiness_card1_img group relative'>
                            <img src={img2} className='rounded-t-[40px] w-full h-full absolute  opacity-100 group-hover:opacity-0 transition-all ease-in-out duration-500' />
                            <img src={img3} className='rounded-t-[40px] w-full h-full opacity-0 group-hover:opacity-100' />
                        </div>
                        <div className='beyondbusiness_card1_data bg-white font-inter rounded-b-[40px]'>
                            <h1 className='text-[22px] text-[#000] font-[600] px-[16.5px] pt-[16.5px]'>Net zero emissions</h1>
                            <p className='text-[16px] text-[#767c8f] px-[16px] pt-[8px] pb-[16px] font-[500]'>Starting FY24, we have taken on a goal to achieve Net Zero emissions across Zomato’s food delivery value chain by 2033</p>
                        </div>

                    </div>
                    <div className='beyondbusiness_card1 border border-[#f2f4f7] rounded-[40px] shadow-lg cursor-pointer'>
                        <div className='beyondbusiness_card1_img group relative'>
                            <img src={img3} className='rounded-t-[40px] w-full h-full absolute  opacity-100 group-hover:opacity-0 transition-all ease-in-out duration-500' />
                            <img src={img1} className='rounded-t-[40px] w-full h-full opacity-0 group-hover:opacity-100' />
                        </div>
                        <div className='beyondbusiness_card1_data'>
                            <h1 className='text-[22px] text-[#000] font-[600] px-[16.5px] pt-[16.5px]'>Reducing plastic waste</h1>
                            <p className='text-[16px] text-[#767c8f] px-[16px] pt-[8px] pb-[16px] font-[500]'>Trying to reduce Zomato’s plastic waste by ensuring completely plastic neutral deliveries since April 2022</p>
                        </div>
                    </div>

                </div>
                <div className='pb-[50px] px-[24px]'>
                    <p className='text-[18px] text-[#ef4f5f] font-[500]'>See the latest ESG update</p>
                </div>

            </div>

        </div>
    )
}
