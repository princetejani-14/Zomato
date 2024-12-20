import React from 'react'
import { FaCaretDown } from "react-icons/fa";
export default function Addresscontactus() {
    return (
        <div>
            <div className='max-w-[1100px] mx-auto'>
                <div className='address_contacus_main mt-[45px] font-inter flex justify-between tab:mx-[24px] mob:flex-col-reverse mob:gap-[40px] mob:mt-[35px]'>
                    <div className='address_contacus_left w-[653px] tab:w-[416px] mob:w-[342px]'>
                        <div className='address_contacus_left_box1 flex justify-between items-center border border-[#cfcfcf] px-[20px] h-[48px] rounded-[9.6px] cursor-pointer'>
                            <div>
                                <input type='text' placeholder='Sana nasıl yardımcı olabiliriz?' className='mx-0 text-[#9c9c9c] text-[18px] font-[300]'></input>
                                <sup className='text-[#EF4F5F]'>*</sup>
                            </div>
                            <div>
                                <FaCaretDown className='text-[#b5b5b5]' />
                            </div>
                        </div>
                        <div className='address_contacus_left_box1 mt-[40px] border flex items-center border-[#cfcfcf] px-[20px] h-[48px] rounded-[9.6px]'>
                            <input type='text' placeholder='Full Name' className='mx-0 text-[#9c9c9c] text-[18px] font-[300] w-[85px]'></input>
                            <sup className='text-[#EF4F5F]'>*</sup>
                        </div>
                        <div className='address_contacus_left_box1 mt-[40px] border flex items-center border-[#cfcfcf] px-[20px] h-[48px] rounded-[9.6px]'>
                            <input type='text' placeholder='Email Address' className='mx-0 text-[#9c9c9c] text-[18px] font-[300] w-[120px]'></input>
                            <sup className='text-[#EF4F5F]'>*</sup>
                        </div>
                        <p className='text-[#9c9c9c] text-[18px] font-[300] mt-[40px] pl-[20px]'>Cep numarası (opsiyonel)</p>
                        <div className='address_contacus_left_box1 mt-[40px] border border-[#cfcfcf] px-[20px] h-[195px] rounded-[9.6px]'>
                            <input type='text' placeholder='Type Text' className='mx-0 text-[#9c9c9c] text-[18px] font-[300] w-[85px] mt-[13px]'></input>
                            <sup className='text-[#EF4F5F]'>*</sup>
                        </div>

                    </div>
                    <div className='address_contactus_right w-[378px] tab:w-[236px] mob:w-[342px]'>
                        <div className='address_contactus_right_box1 border p-[24px] border-[#E8E8E8] rounded-[19.2px] shadow-lg'>
                            <h1 className='text-[24px] text-[#1c1c1c] font-[500]'>Acil Durum Bildir</h1>
                            <p className='text-[18px] text-[#4f4f4f] font-[300] mt-[5px]'>Zomato'yu kullanan herkesin güvenliği ile ilgiliyiz.</p>
                            <p className='text-[16px] text-[#ef4f5f] mt-[27px]'>Buraya bildir</p>

                        </div>
                        <div className='address_contactus_right_box1 border p-[24px] border-[#E8E8E8] rounded-[19.2px] shadow-lg mt-[24px] tracking-wide'>
                        <h1 className='text-[24px] text-[#1c1c1c] font-[500]'>Issue with your live order?</h1>
                        <p className='text-[18px] text-[#4f4f4f] font-[300] mt-[5px]'>Click on the 'Support' or 'Online ordering help' section in your app to connect to our customer support team.</p>
                        </div>

                    </div>
                </div>
                <div className='address_bottom_button mt-[30px] mb-[30px] tab:mx-[24px]'>
                    <button className='w-[159px] h-[44px] text-[#fff] text-[16px] bg-[#ef4f5f] rounded-[9.6px] tracking-wide shadow-xl'>Submit feedback</button>
                </div>

            </div>
        </div>
    )
}
