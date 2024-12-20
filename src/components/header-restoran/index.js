import React from 'react'
import logo1 from '../../assets/logo/header-restoran-zomato.webp'
import { IoReorderThreeOutline } from "react-icons/io5";
export default function Headerrestoran() {
    return (
        <div className='bg-white fixed left-0 top-0 w-full z-50'>
            <div className='max-w-[1100px] mx-auto'>
                <div className='Herobanerrestoran_main flex justify-between font-inter pt-[12px] tab:px-[64px] tab:py-[12px] mob:px-[16px]'>
                    <div className='Herobanerrestoran_left w-[90px]'>
                        <img src={logo1} />
                    </div>
                    <div className='hidden mob:block'>
                        <IoReorderThreeOutline className='w-[36px] h-[36px]'/>

                    </div>
                    <div className='Herobanerrestoran_right flex items-center gap-[20px] cursor-pointer mob:hidden'>
                        <p className='text-[#256fef] text-[16px]'>Need help? Call+91 97-38-38-38-38</p>
                        <button className='py-[8px] px-[24px] border rounded-[19px] border-[#1c1c1c] text-[16px]'>Login</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
