import React from 'react'
import logo1 from '../../assets/logo/27130.jpg'
import logo2 from '../../assets/logo/uae-logo.png'
export default function Countrybox() {
    return (
        <div>
            <div className='countrybox_main w-[330px] h-[65px] flex items-center justify-center gap-[20px] shadow-xl transition-all duration-700 ease-in-out px-[16px] bg-white'>
                <div className='countrybox_main_left flex items-center w-[116px]'>
                    <img src={logo1} className='w-[23px] h-[15px]' />
                    <p>India</p>
                </div>
                <div className='countrybox_main_right flex items-center w-[116px]'>
                    <img src={logo2} className='w-[23px] h-[15px]' />
                    <p>UAE</p>
                    <p>fghvsfui</p>
                </div>

            </div>

        </div>
    )
}
