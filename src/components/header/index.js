import React from 'react'
import logo1 from '../../assets/logo/herobaner-zomato-logo.webp'
import { FaChevronDown } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
export default function Havellsheader() {
  return (
    <div className='bg-[#e23744] fixed left-0 top-0 w-full z-50'>
      <div className='max-w-[1100px] mx-auto'>
        <div className='header_main  flex justify-between items-center py-[14px] cursor-pointer'>
          <div className='hidden tab:block'>
            <IoReorderThreeOutline  className='w-[36px] h-[36px] text-[#fff]'/>
          </div>
          <div className='header_left flex items-center'>
            <img src={logo1} className='w-[100px] h-[21px]' />
            <h2 className='text-[#fff] w-[20px] h-[21px]'></h2>
            <p className='text-[20px] text-[#fff] font-inter'>Investor Relations</p>
          </div>
          <div>

          </div>

          <div className='header_right flex items-center text-[18px] text-[#fff] gap-[15px] cursor-pointer font-[300] font-inter tab:hidden'>
            <p className='m-[8px] hover:font-[500]'>Home</p>
            <p className='m-[8px] hover:font-[500]'>Financials</p>
            <p className='m-[8px] hover:font-[500]'>Announcements</p>
            <p className='m-[8px] hover:font-[500]'>Blog</p>
            <p className='m-[8px] hover:font-[500]'>Governance</p>
            <p className='m-[8px] hover:font-[500]'>ESG</p>
            <FaChevronDown className='w-[13px] h-[13px] text-[#fff]' />
            <p className='m-[8px] hover:font-[500]'>Resources</p>

          </div>

        </div>
      </div>

    </div>
  )
}
