import React from 'react'
import img1 from '../../../assets/image/herobaner-home-img.webp'
import logo1 from '../../../assets/logo/herobaner-zomato-logo.webp'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
export default function Herobanerhome() {
    return (
        <div>
            <div className='herobaner_main relative'>
                <div className='herobaner_bg  '>
                    <img src={img1} className='h-[462px] w-[100%] object-cover tab:h-[627px] tab:w-full mob:w-full mob:h-[598px]' />
                </div>
                <div className='herobaner_text_left absolute top-[5%] left-[10%] text-[#ffffff] cursor-pointer text-[14px] font-[500] font-inter tab:hidden'>
                    <p>Get the app</p>
                </div>
                <div className='tab_icone absolute top-[3%] left-[3%] hidden tab:block'>
                    <IoReorderThreeOutline className='w-[40px] h-[35px] text-[#ffffff]'/>
                </div>
                <div className='herobaner_text_right absolute top-[5%] right-[15%] cursor-pointer text-[#ffffff] flex justify-between gap-[50px] text-[18px] font-[300] font-inter tab:hidden'>
                    <p>Investor Relations</p>
                    <p>Add restaurant</p>
                    <p>Log in</p>
                    <p>Sign up</p>
                    <p>drfhfdcbfh</p>
                </div>
                <div className='herobaner_text_center text-center'>
                    <div className='herobaner_text_center_top'>
                        <img src={logo1} className='w-[300px] h-[60px] absolute top-[30%] left-[37%] tab:left-[28%] mob:left-[11%]' />
                        <h1 className='text-[36px] font-[400]  absolute top-[45%] left-[25%] leading-[1.2] tracking-wide text-[#ffffff] font-inter tab:left-[5%] mob:text-[20px] mob:left-[6%] mob:w-[335px] '>Discover the best food & drinks in Surat</h1>
                    </div>
                    <div className='herobaner_text_center_bottom absolute top-[57%] left-[22%] w-[779px] h-[52px] bg-white rounded-[10px] flex tab:left-[3%] tab:w-[723px] mob:flex-col mob:w-[350px] mob:bg-transparent'>
                        <div className='herobaner_text_center_bottom_left flex justify-between w-[243px] items-center mob:bg-white mob:ml-[60px] p-[5px] mob:rounded-[15px]'>
                            <div className='herobaner_text_center_bottom_left_map flex items-center mob:bg-white '>
                                <FaMapMarkerAlt className='map w-[20px] h-[20px] ml-[10px] mob:ml-[0]' />
                                <input className='ml-[10px]' type='text' placeholder='surat'></input>
                            </div>
                            <div className='herobaner_text_center_bottom_left_dropdown'>
                                <FaCaretDown />
                            </div>
                        </div>
                        <div className='herobaner_text_center_bottom_right flex items-center mob:mt-[20px] mob:bg-white mob:ml-[15px] mob:p-[5px] mob:rounded-[15px]'>
                            <IoSearchOutline className='w-[18px] h-[18px] ml-[10px] mr-[10px] mob:w-[20px] mob:h-[20px]' />
                            <input className='w-[482px] tab:w-[426px]' type='text' placeholder='Search for restaurant, cuisine or a dish'></input>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
