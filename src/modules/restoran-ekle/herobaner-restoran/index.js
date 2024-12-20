import React from 'react'
import img1 from '../../../assets/logo/herobaner-restoran-bg-img.avif'
import vid1 from '../../../assets/video/5835a67ef0191da3b505988b3ff9a0141720502359.mp4'
import { IoIosCheckmark } from "react-icons/io";


export default function Herobanerrestoran() {
    return (
        <div>
            <div className='Herobanerrestoran_main relative mb-[50px]'>
                <div className='Herobanerrestoran_bg '>
                    <img src={img1} className=' w-full h-[607px] object-cover mob:h-[781px]' />
                </div>
                <div className='Herobanerrestoran_text text-center absolute top-[10%] left-[25%] tab:left-[4%] tab:top-[12%] mob:w-[294px] mob:top-[8%] mob:left-[11%]'>
                    <h1 className='text-[40px] text-dblack font-[700] w-[466px] leading-[1.5] tab:text-[24px] mob:text-[22px] mob:w-[294px]'>Partner with Zomato and grow your business</h1>
                    <p className='text-[20px] text-[#41445d] font-[500] mt-[10px] mob:text-[14px]'>0% commission for the 1st month for new restaurant partners in selected cities</p>
                    <button className='bg-[#256fef] text-[#fff] w-[300px] text-[14px] p-[12px] rounded-[10px] mt-[32px] '>Register your  restaurant</button>
                </div>
                <div className='Herobanerrestoran_card_main  absolute bottom-[0%] left-[16%] w-[1000px] mx-auto p-[32px] shadow-xl rounded-[14px] border-[0px] font-inter flex justify-between bg-white tab:w-[700px] tab:left-[5%]  tab:bottom-[10%] tab:p-[8px] mob:flex-col-reverse mob:w-[358px] mob:p-[12px] mob:bottom-0'>
                    <div className='Herobanerrestoran_card_left w-[561px] mob:w-[332px]'>
                        <div className='Herobanerrestoran_heading tracking-wide mb-[28px] mob:mb-[25px]'>
                            <h1 className='text-[22px] text-dblack font-[600] tab:text-[14px] mob:text-[20px]'>Get Started - It only takes 10 minutes</h1>
                            <p className='text-[16px] text-sgray tab:text-[12px] mob:text-[14px]'>Please be ready with the following for a smooth registration</p>
                        </div>
                        <div className='Herobanerrestoran_data grid grid-cols-2 gap-[12px] mob:grid-cols-1'>
                            <div className='Herobanerrestoran_data_flex flex gap-[10px]'>
                                <IoIosCheckmark className='text-white bg-[#3ab757] rounded-[100px] w-[18px] h-[18px]' />
                                <p className='text-[14px] text-black font-[500] mx-[0] tab:text-[12px]'>PAN card</p>
                            </div>
                            <div className='Herobanerrestoran_data_flex flex gap-[10px]'>
                                <IoIosCheckmark className='text-white bg-[#3ab757] rounded-[100px] w-[18px] h-[18px]' />
                                <p className='text-[14px] text-black font-[500] mx-[0] tab:text-[12px]'>Menu details and one dish image</p>
                            </div>
                            <div className='Herobanerrestoran_data_flex flex gap-[10px]'>
                                <IoIosCheckmark className='text-white bg-[#3ab757] rounded-[100px] w-[18px] h-[18px]' />
                                <p className='text-[14px] text-black font-[500] mx-[0] w-[220px] tab:text-[12px]'>GST number, if applicable
                                    <br></br>
                                <a className='text-[13px] text-dgray tab:text-[12px]'>Require a GST?</a><a className='text-[#156fef] text-[13px] tab:text-[12px]'>  Apply here</a></p>
                            </div>
                            <div className='Herobanerrestoran_data_flex flex gap-[10px]'>
                                <IoIosCheckmark className='text-white bg-[#3ab757] rounded-[100px] w-[18px] h-[18px]' />
                                <p className='text-[14px] text-black font-[500] mx-[0] tab:text-[12px]'>FSSAI license
                                <br></br>
                                <a className='text-[13px] text-dgray tab:text-[12px]'>Don't have a FSSAI license? </a>
                                <a className='text-[#156fef] text-[13px] tab:text-[12px]'>  Apply here</a></p>
                            </div>
                            <div className='Herobanerrestoran_data_flex flex gap-[10px]'>
                                <IoIosCheckmark className='text-white bg-[#3ab757] rounded-[100px] w-[18px] h-[18px]' />
                                <p className='text-[14px] text-black font-[500] mx-[0] tab:text-[12px]'>Bank account details</p>
                            </div>

                        </div>

                    </div>
                    <div className='Herobanerrestoran_card_right'>
                        <video src={vid1} className='w-[320px] h-[180px] mob:w-[332px]' controls ></video>

                    </div>
                </div>

            </div>

        </div>
    )
}
