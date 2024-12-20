import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import img1 from '../../../assets/image/collection-img-one.avif'
import img2 from '../../../assets/image/collection_two-img.avif'
import img3 from '../../../assets/image/collection-three-img.avif'
import img4 from '../../../assets/image/collection-four-img.avif'
export default function Collectionzomato() {
    return (
        <div>
            <div className='max-w-[1100px] mx-auto mob:relative'>
                <div className='collection_heading flex justify-between items-end mt-[150px] tab:mx-[24px] tab:items-center mob:mt-[100px]'>
                    <div className='collection_heading_left'>
                        <h1 className='text-[36px] text-[#1c1c1c] font-[400] mob:text-[20px]'>Collections</h1>
                        <p className='text-[18px] text-[#363636] font-[400] tracking-wide mob:text-[12px]'>Explore curated lists of top restaurants, cafes, pubs, and bars in Surat, based on trends</p>
                    </div>
                    <div className='collection_heading_right flex gap-[10px] items-center cursor-pointer mob:absolute mob:bottom-[-6%]'>
                        <p className='text-[#e03463] text-[16px] font-[400] tracking-wide'>All collections in Surat</p>
                        <FaCaretRight className='text-[#e05463]' />
                    </div>
                </div>
                <div className='collection_main grid grid-cols-4 gap-[10px] mt-[20px] mb-[50px] tab:mx-[24px] mob:grid-cols-2  mob:mb-[0px]'>
                    <div className='collection_main_ones relative before:absolute before:bg-[#00000040] before:w-full before:h-full cursor-pointer overflow-hidden '>
                        <div className='collection_main_one_img transform scale-110 hover:scale-100 duration-700 '>
                            <img src={img1} className='w-[267.5px] h-[320px] object-cover rounded-[5px]  tab:w-[172px] mob:w-[166px] mob:rounded-[10px] ' />
                        </div>
                        <div className='collection_main_one_text absolute bottom-[3%] left-[5%] text-[#ffffff]'>
                            <h1 className='text-[18px] font-[400] tracking-wide mob:text-[14px]'>13 Unmissable Gujarati Deli..</h1>
                            <div className='collection_main_one_text_place flex gap-[7px] items-center'>
                                <p className='text-[14px] m-[0] font-[400] tracking-wide mob:text-[12px]'>11 Places</p>
                                <FaCaretRight className='w-[17px] h-[17px]' />
                            </div>
                        </div>

                    </div>
                    <div className='collection_main_two relative before:absolute before:bg-[#00000040] before:w-full before:h-full cursor-pointer overflow-hidden'>
                        <div className='collection_main_two_img transform scale-110 hover:scale-100 duration-700'>
                            <img src={img2} className='w-[267.5px] h-[320px] object-cover rounded-[5px] tab:w-[172px]  mob:w-[166px] mob:rounded-[10px]' />

                        </div>
                        
                        <div className='collection_main_two_text  absolute bottom-[3%] left-[5%] text-[#ffffff]'>
                            <h1 className='text-[18px] font-[400] tracking-wide mob:text-[14px]'>Great Cafes</h1>
                            <div className='collection_main_two_text_place flex gap-[7px] items-center'>
                                <p className='text-[14px] m-[0] font-[400] tracking-wide mob:text-[12px]'>15 Places</p>
                                <FaCaretRight className='w-[17px] h-[17px]' />
                            </div>

                        </div>
                    </div>
                    <div className='collection_main_three relative before:absolute before:bg-[#00000040] before:w-full before:h-full cursor-pointer overflow-hidden'>
                        <div className='collection_main_three_img transform scale-110 hover:scale-100 duration-700'>
                            <img src={img3} className='w-[267.5px] h-[320px] object-cover rounded-[5px] tab:w-[172px] mob:w-[166px] mob:rounded-[10px]' />

                        </div>
                
                        <div className='collection_main_three_text absolute bottom-[3%] left-[5%] text-[#ffffff]'>
                            <h1 className='text-[18px] font-[400] tracking-wide mob:text-[14px]'>Local Favourite Places</h1>
                            <div className='collection_main_three_text_place flex gap-[7px] items-center'>
                                <p className='text-[14px] m-[0] font-[400] tracking-wide mob:text-[12px]'>8 Places</p>
                                <FaCaretRight className='w-[17px] h-[17px]' />
                            </div>
                        </div>
                    </div>
                    <div className='collection_main_four relative before:absolute before:bg-[#00000040] before:w-full before:h-full cursor-pointer overflow-hidden'>
                        <div className='collection_main_four_img transform scale-110 hover:scale-100 duration-700'>
                            <img src={img4} className='w-[267.5px] h-[320px] object-cover rounded-[5px] tab:w-[172px] mob:w-[166px] mob:rounded-[10px]' />
                        </div>
                        <div className='collection_main_four_text absolute bottom-[3%] left-[5%] text-[#ffffff]'>
                            <h1 className='text-[18px] font-[400] tracking-wide mob:text-[14px]'>Serene Rooftop Places</h1>
                            <div className='collection_main_four_text_place flex gap-[7px] items-center'>
                                <p className='text-[14px] m-[0] font-[400] tracking-wide mob:text-[12px]'>5 Places</p>
                                <FaCaretRight className='w-[17px] h-[17px]' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
