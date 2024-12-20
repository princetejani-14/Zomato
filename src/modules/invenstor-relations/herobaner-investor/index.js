import React from 'react'
import logo1 from '../../../assets/logo/herobaner-zomato-logo.webp'
import logo2 from '../../../assets/logo/hyper-zomato-logo.webp'
import logo3 from '../../../assets/logo/blinkit-zomato-logo.webp'
import logo4 from '../../../assets/logo/feeding-zomato-logo.webp'
import logo5 from '../../../assets/logo/investor-calender-logo.webp'
import logo6 from '../../../assets/logo/herobaner-investor-letter-logo.webp'
import logo7 from '../../../assets/logo/herobaner-investor-music-logo.webp'
import logo8 from '../../../assets/logo/herobaner-investor-transcript-logo.webp'
import { FaCircleArrowRight } from "react-icons/fa6";


export default function Herobanerinvestor() {
    return (
        <div className='bg-[#e23744] pt-[50px]'>
            <div className='max-w-[1140px] mx-[auto]'>
                <div className='herobaner_investor_main flex justify-around items-center pt-[60px] flex-wrap'>
                    <div className='herobaner_investor_left w-[592px] mob:mx-[30px]'>
                        <div className='herobaner_investor_left_first pb-[25px] border-b border-[#fff]'>
                            <h1 className='text-[26px] text-[#fff] font-[500] mb-[10px]'>Better food for more people</h1>
                            <div className='herobaner_investor_left_first_img flex gap-[25px] items-start'>
                                <img src={logo1} className='w-[104px] h-[22px]' />
                                <img src={logo2} className='w-[129px] h-[34px]' />
                            </div>
                        </div>
                        <div className='herobaner_investor_left_second pb-[25px] pt-[32px] border-b border-[#fff]'>
                            <h1 className='text-[26px] text-[#fff] font-[500] mb-[10px]'>Instant commerce indistinguishable from magic</h1>
                            <div className='herobaner_investor_left_first_img flex gap-[25px] items-start'>
                                <img src={logo3} className='w-[84px] h-[22px]' />
                            </div>
                        </div>
                        <div className='herobaner_investor_left_third pb-[25px] pt-[32px] border-b border-[#fff]'>
                            <h1 className='text-[26px] text-[#fff] font-[500] mb-[10px]'>Make India malnutrition free</h1>
                            <div className='herobaner_investor_left_first_img flex gap-[25px] items-start'>
                                <img src={logo4} className='w-[84px] h-[22px]' />
                            </div>
                        </div>

                    </div>
                    <div className='herobaner_investor_right w-[446px] bg-white rounded-[50px] p-[20px] mb-[30px] tab:w-[368px] tab:mt-[70px]'>
                        <div>
                        <h1 className='text-[24px] text-[#000] font-[800] font-inter mb-[15px]'>Company overview</h1>
                        </div>
                        <div className='herobaner_investor_right_top h-[88px] border border-[#f2f4f7] flex items-center justify-between rounded-[20px]'>
                            <div className='flex items-center'>
                                <div className='herobaner_investor_right_top_left flex justify-center items-center w-[88px] h-[88px] bg-[#fff5f6] rounded-s-[20px]'>
                                    <img src={logo5} className='w-[36px] h-[36px] ' />
                                </div>
                                <div className='herobaner_investor_right_top_center text-[18px] text-[#293142] font-[600] pl-[16px]'>
                                    <p>presentation</p>
                                </div>
                            </div>
                            <div className='herobaner_investor_right_top_right mr-[20px]'>
                                <FaCircleArrowRight className='w-[22px] h-[22px]' />
                            </div>

                        </div>
                        <div className='herobaner_investor_right_bottom mt-[50px]'>
                            <div className='flex justify-between items-start '>
                            <h1 className='text-[24px] text-[#000] font-[800] font-inter mb-[15px] mx-[0]'>Q2FY25 results</h1>
                            <p className='text-[#ef4f5f] text-[16px] font-[600] mx-[0]'>see all</p>
                            </div>
                            <div className='herobaner_investor_right_bottom_first h-[88px] border border-[#f2f4f7] flex items-center justify-between rounded-[20px] mb-[17px]'>
                                <div className='flex items-center'>
                                    <div className='herobaner_investor_right_top_left flex justify-center items-center w-[88px] h-[88px] bg-[#fff5f6] rounded-s-[20px]'>
                                        <img src={logo6} className='w-[36px] h-[36px] ' />
                                    </div>
                                    <div className='herobaner_investor_right_top_center text-[18px] text-[#293142] font-[600] pl-[16px]'>
                                        <p>Shareholders' Letter</p>
                                    </div>
                                </div>
                                <div className='herobaner_investor_right_top_right mr-[20px]'>
                                    <FaCircleArrowRight className='w-[22px] h-[22px]' />
                                </div>
                            </div>
                            <div className='herobaner_investor_right_bottom_first h-[88px] border border-[#f2f4f7] flex items-center justify-between rounded-[20px] mb-[17px]'>
                                <div className='flex items-center'>
                                    <div className='herobaner_investor_right_top_left flex justify-center items-center w-[88px] h-[88px] bg-[#fff5f6] rounded-s-[20px]'>
                                        <img src={logo7} className='w-[36px] h-[36px] ' />
                                    </div>
                                    <div className='herobaner_investor_right_top_center text-[18px] text-[#293142] font-[600] pl-[16px]'>
                                        <p>Earnings Call Replay</p>
                                    </div>
                                </div>
                                <div className='herobaner_investor_right_top_right mr-[20px]'>
                                    <FaCircleArrowRight className='w-[22px] h-[22px]' />
                                </div>
                            </div>
                            <div className='herobaner_investor_right_bottom_first h-[88px] border border-[#f2f4f7] flex items-center justify-between rounded-[20px]'>
                                <div className='flex items-center'>
                                    <div className='herobaner_investor_right_top_left flex justify-center items-center w-[88px] h-[88px] bg-[#fff5f6] rounded-s-[20px]'>
                                        <img src={logo8} className='w-[36px] h-[36px] ' />
                                    </div>
                                    <div className='herobaner_investor_right_top_center text-[18px] text-[#293142] font-[600] pl-[16px]'>
                                        <p>Earnings Call Transcript</p>
                                    </div>
                                </div>
                                <div className='herobaner_investor_right_top_right mr-[20px]'>
                                    <FaCircleArrowRight className='w-[22px] h-[22px]' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
