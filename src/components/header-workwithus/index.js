import React from 'react'
import logo1 from '../../assets/image/herobaner-workwithus-logo.avif'
import img1 from '../../assets/logo/footer-logo.avif'
import { IoReorderThreeOutline } from "react-icons/io5";


export default function Headerworkwithus() {
    return (
        <div>
            <div className='max-w-[1100px] mx-auto'>
                <div className='header_workwithus_main flex justify-between items-center py-[10px] tab:px-[15px]'>
                    <div className='tab_three_line_logo hidden tab:block'>
                        <IoReorderThreeOutline  className='w-[30px] h-[30px]'/>
                    </div>
                    <div className='herobaner_workwith_left_text'>
                        <img src={img1} className='w-[125px] h-[26px] text-[]' />
                    </div>
                    <div className='hidden tab:block'>

                    </div>
                    <div className='herobaner_workwith_center_text flex items-center gap-[25px] tracking-wider tab:hidden'>
                        <p className='text-[18px] text-[#000] font-[400] p-[8px]'>Home</p>
                        <p className='text-[18px] text-[#000] font-[400] p-[8px]'>Who We Are</p>
                        <p className='text-[18px] text-[#000] font-[400] p-[8px]'>Work with us</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
