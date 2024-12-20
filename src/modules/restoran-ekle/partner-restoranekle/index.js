import React from 'react'
import img1 from '../../../assets/image/partner-restoranekle-left-img.avif'
import img2 from '../../../assets/image/partner-restoranekle-center-img.avif'
import img3 from '../../../assets/image/partner-restoranekle-right-img.avif'
export default function Partnerrestoranekle() {
    return (
        <div>
            <div className='max-w-[1228px] mx-auto'>
                <div className='partner_heading flex items-center justify-between gap-[20px] mt-[80px] tab:mx-[64px] mob:mx-0 mob:gap-0 mob:justify-center'>
                    <div className='partner_heading_left border-[0.05px] border-dgray h-[0px] w-full mob:hidden'>

                    </div>
                    <div className='partner_heading_center font-inter'>
                        <h1 className='text-[36px] text-black w-[635px] font-[700] tab:w-[280px] tab:text-[24px] tab:text-center mob:w-[380px]'>Why should you partner with Zomato?</h1>
                    </div>
                    <div className='partner_heading_right border-[1px] border-dgray h-[0px] w-full mob:hidden'>

                    </div>

                </div>
            </div>
            <div className='max-w-[1152px] mx-auto'>
                <div className='partner_main grid grid-cols-3 gap-[160px] font-inter mt-[44px] tab:mx-[96px] tab:gap-[64px] mob:grid-cols-1 mob:mx-[40px] mob:gap-[30px] mb-[40px]'>
                    <div className='partner_left flex flex-col items-center text-center'>
                        <img src={img1}  className='w-[80px] h-[79.66px]'/>
                        <h1 className='text-[22px] text-[#41445d] font-[600] w-[200px] mt-[32px] tab:w-[127px] mob:w-[244px]'>Attract new customers</h1>
                        <p className='text-[16px] text-gray font-[300] tracking-wide mt-[12px]'>Reach the millions of people ordering on Zomato</p>
                    </div>
                    <div className='partner_center flex flex-col items-center text-center'>
                        <img src={img2}  className='w-[80px] h-[79.66px]'/>
                        <h1 className='text-[22px] text-[#41445d] font-[600] mt-[32px]'>Doorstep delivery convenience</h1>
                        <p className='text-[16px] text-gray font-[300] tracking-wide mt-[12px]'>Easily get your orders delivered through our trained delivery partners</p>
                    </div>
                    <div className='partner_right flex flex-col items-center text-center'>
                        <img src={img3}  className='w-[80px] h-[79.66px]'/>
                        <h1 className='text-[22px] text-[#41445d] font-[600] mt-[32px]'>Hotline support</h1>
                        <p className='text-[16px] text-gray font-[300] tracking-wide mt-[12px]'>On-call support for any issues or growth consultations</p>
                    </div>


                </div>

            </div>

        </div>
    )
}
