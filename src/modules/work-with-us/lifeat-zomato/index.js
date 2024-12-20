import React from 'react'
import vid1 from '../../../assets/video/life-at-zoamto-vid1.mp4'
import img1 from '../../../assets/image/life-at-zomato-img1.avif'
import img2 from '../../../assets/image/life-at-zomato-img2.avif'
import img3 from '../../../assets/image/life-at-zomato-img3.avif'
import img4 from '../../../assets/image/life-at-zomato-img4.avif'
import img5 from '../../../assets/image/life-at-zomato-img5.avif'
import img6 from '../../../assets/image/life-at-zomato-img6.avif'
export default function Lifeat_zoamto() {
    return (
        <div>
            <div className='max-w-[1006px] mx-[auto]'>
                <div className='mx-[24px] mb-[60px]'>
                    <div className='lifeat_zomato_heading mt-[150px] font-inter mob:mt-[90px]'>
                        <p className='text-[54px] text-[#1c1c1c] font-[600] text-center '>glimpses of life at Zomato</p>
                    </div>
                    <div className='lifeat_zomato_video mt-[34px]'>
                        <video src={vid1} controls alt='zomato-life' className='rounded-[10px]' />
                    </div>
                    <div className='lifeat_zomato_img_main flex gap-[10px] mt-[10px]'>
                        <div className='w-[665px]'>
                            <img src={img1} className='w-full h-[390px] object-cover mob:h-[240px]' />
                        </div>
                        <div className='w-[330px] flex flex-col gap-[10px] mob:hidden'>
                            <img src={img2} className='w-full h-[190px] object-cover' />
                            <img src={img3} className='w-full h-[190px] object-cover' />
                        </div>
                    </div>
                    <div className='lifeat_zomato_img_main flex gap-[10px] mt-[10px] flex-row-reverse'>
                        <div className='w-[665px] mob:w-[166px]'>
                            <img src={img6} className='w-full h-[390px] object-cover mob:w-[166px] mob:h-[250px]' />
                        </div>
                        <div className='w-[330px] flex flex-col gap-[10px] mob:w-[166px]'>
                            <img src={img4} className='w-full h-[190px] object-cover mob:w-[166px] mob:h-[120px]' />
                            <img src={img5} className='w-full h-[190px] object-cover mob:w-[166px] mob:h-[120px]' />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
