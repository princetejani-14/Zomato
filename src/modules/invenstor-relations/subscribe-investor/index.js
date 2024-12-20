import React from 'react'

export default function Subscribeinvestor() {
    return (
        <div>
            <div className='max-w-[1100px] mx-auto'>
                <div className='subscribe_main pt-[30px] grid grid-cols-2 justify-between tab:px-[24px] mob:grid-cols-1'>
                    <div className='subscribe_left font-inter'>
                        <h1 className='text-[30px] text-[#1c1c1c] font-[700] mb-[10px] mob:text-[25px]'>Subscribe to our email alerts</h1>
                        <p className='text-[16px] text-[#1c1c1c] font-[300] mb-[15px]'>Get regular updates through email.</p>
                        <input type='text' placeholder='Email' className='border py-[13px] px-[12px] w-[342px] rounded-[5px] mb-[20px] tab:w-[220px]'></input>
                        <div className='pb-[50px] mob:pb-[30px]'>
                            <button className='text-[16px] w-[150px] h-[44px] text-[#fff] bg-[#ef4f5f] flex items-center justify-center font-inter rounded-[5px]'>Subscribe</button>
                        </div>
                    </div>
                    <div className='subscribe_right font-inter'>
                        <h1 className='text-[30px] text-[#1c1c1c] font-[700] mb-[10px] mob:text-[25px]'>Have questions?</h1>
                        <p className='text-[16px] text-[#1c1c1c] font-[300] mb-[25px]'>Reach out to us by emailing at<a className='text-[#ef4f5f]'>shareholders@zomato.com,</a> and we’ll get back to you.Contact Us</p>
                        <div>
                            <button className='text-[16px] w-[150px] h-[44px] text-[#fff] bg-[#ef4f5f] flex items-center justify-center font-inter rounded-[5px]'>Contact us</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
