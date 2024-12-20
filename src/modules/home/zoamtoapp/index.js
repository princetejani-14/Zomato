import React from 'react'
import img1 from '../../../assets/image/zomato-app-img.avif'
import img2 from '../../../assets/logo/zomatoapp_logo_one.webp'
import img3 from '../../../assets/logo/zomato_logo_two.webp'
export default function Zomatoapp() {
    return (
        <div className='bg-[#fffbf7]'>
            <div className='max-w-[900px] mx-auto tab:max-w-[720px]'>
                <div className='zomatoapp_main flex mt-[120px] pt-[50px] mob:mt-[80px] mob:pb-[40px]'>
                    <div className='zomatoapp_main_left'>
                        <img src={img1} className='w-[410px] h-[450px] object-cover tab:w-[354px] tab:h-[450px] mob:hidden' />
                    </div>
                    <div className='zomatoapp_main_right pl-[20px]'>
                        <div className='zomatoapp_main_right_top'>
                            <h1 className='text-[44px] text-[#1c1c1c] mb-[15px] tab:text-[30px] mob:text-center'>Get the Zomato app</h1>
                            <p className='text-[16px] text-[#363636]  font-[400] mb-[25px] tab:text-[16px] tab:w-[256px] mx-[0] mob:w-[342px] mob:text-center'>We will send you a link, open it on your phone to download the app</p>
                        </div>
                        <div className='zomatoapp_main_right_middle '>
                            <div className='zomatoapp_main_right_middle_top flex gap-[50px]'>
                                <form className='flex items-center'>
                                    <input type='radio' className='w-[22px] h-[22px]'></input>
                                    <label className='text-[16px] pl-[4px]'>Email</label>
                                </form>
                                <form className='flex items-center'>
                                    <input type='radio' className='w-[22px] h-[22px]'></input>
                                    <label className='text-[16px] pl-[4px]'>Phone</label>
                                </form>
                            </div>
                            <div className='zomatoapp_main_right_middle_bottom mt-[20px] '>
                                <form className='flex gap-[5px] h-[48px]'>
                                    <input type='text' placeholder='Email' className='border-[1px] w-[292px] px-[12px] py-[13px] rounded-[5px] tab:w-[221px]' ></input>
                                    <button className='bg-[#ef4f5f] w-[150px] text-[#ffffff] text-[16px] tab:w-[70.15px]'>Share App Link</button>
                                </form>
                            </div>
                        </div>
                        <div className='zomatoapp_main_right_bottom'>
                            <p className='mt-[25px] text-[14px] text-[#9c9c9c] font-[400] tracking-wider mob:text-center'>Download app from</p>
                            <div className='zomatoapp_main_right_bottom_img flex gap-[20px] mt-[15px]'>
                                <img src={img2} className='w-[137px] h-[40px]' />
                                <img src={img3}  className='w-[137px] h-[40px]'/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
