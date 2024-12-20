import React from 'react'
import img1 from '../../assets/logo/footer-logo.avif'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";

export default function Headercontactus() {
    return (
        <div className='fixed left-0 top-0 w-full z-50 bg-[#fff]'>
            <div className='max-w-[1100px] mx-auto'>
                <div className='header_contactus_main flex justify-between items-center py-[10px] bg-white tab:px-[15px]'>
                    <div className='threeline_tab_icone hidden tab:block'>
                        <IoReorderThreeOutline className='w-[30px] h-[30px]'/>
                    </div>

                    <div className='header_contactus_left'>
                        <img src={img1} className='w-[124px] h-[26px]' />
                    </div>
                    <div className='header_contactus_center tab:hidden'>
                        <div className='herobaner_text_center_bottom  w-[730px] h-[54px] bg-white rounded-[10px] flex tab:left-[3%] tab:w-[723px] mob:flex-col mob:w-[350px] mob:bg-transparent border border-[#CFCFCF]'>
                            <div className='herobaner_text_center_bottom_left flex justify-between w-[243px] items-center mob:bg-white mob:ml-[60px] p-[5px] mob:rounded-[15px]'>
                                <div className='herobaner_text_center_bottom_left_map flex items-center mob:bg-white '>
                                    <FaMapMarkerAlt className='map w-[20px] h-[20px] ml-[10px] mob:ml-[0] text-[#FF7E8B]' />
                                    <input className='ml-[10px]' type='text' placeholder='Fatakdawadi, Industrial Area, Katargam, Surat'></input>
                                </div>
                                <div className='herobaner_text_center_bottom_left_dropdown pl-[10px]'>
                                    <FaCaretDown />
                                </div>
                            </div>
                            <div className='herobaner_text_center_bottom_right flex items-center mob:mt-[20px] mob:bg-white mob:ml-[15px] mob:p-[5px] mob:rounded-[15px] pl-[10px]'>
                                <IoSearchOutline className='w-[18px] h-[18px] ml-[10px] mr-[10px] mob:w-[20px] mob:h-[20px]' />
                                <input className='w-[430px] tab:w-[426px]' type='text' placeholder='Search for restaurant, cuisine or a dish'></input>
                            </div>
                        </div>
                    </div>
                    <div className='header_contactus_right flex gap-[20px] tab:hidden'>
                        <p className='p-[8px] text-[18px] text-[#696969] hover:text-[#000] cursor-pointer'>Giriş yap</p>
                        <p className='p-[8px] text-[18px] text-[#696969] hover:text-[#000] cursor-pointer'>Kaydol</p>

                    </div>

                </div>
            </div>

        </div>
    )
}
