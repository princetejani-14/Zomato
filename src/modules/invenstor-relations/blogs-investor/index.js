import React from 'react'
import img1 from '../../../assets/image/blogs-investor-img1.png'
import img2 from '../../../assets/image/blogs-investor-img2.png'
import img3 from '../../../assets/image/blogs-investor-img3.png'
export default function Blogsinvestor() {
    return (
        <div className='bg-[#f8f8f8]'>
            <div className='max-w-[1100px] mx-auto'>
                <h1 className='text-[40px] text-[#1c1c1c] font-[700] pt-[30px] tab:px-[24px] mob:text-[35px] font-inter'>From our blogs</h1>
                <div className='blogsinvestor_main grid grid-cols-3 gap-[20px] mt-[20px] tab:grid-cols-2 tab:px-[24px] mob:grid-cols-1'>
                    <div className='blogsinvestor_card1 relative'>
                        <div className='blogsinvestor_card1_img'>
                            <img src={img1} className='h-[210px] w-full object-cover rounded-[5px]'/>
                        </div>
                        <div className='w-[110px] h-[32px] absolute bottom-[55%] right-[3%] '>
                            <button className='bg-[#1c1c1c] opacity-[0.75] text-[#fff] text-[16px]  py-[6px] px-[10px] rounded-[7px]'>Restaurants</button>
                        </div>
                        <div className='blogsinvestor_card1_text font-inter'>
                            <p className='text-[#9c9c9c] text-[13px] mt-[20px] mb-[10px]'>Shuvra Saha | 2 December 2024</p>
                            <h1 className='text-[#1c1c1c] text-[20px] font-[400] '>The Big Brand Theory | From Piano...</h1>
                            <p className='text-[#000000] text-[16px] font-[300] my-[16px]'>Read more about the story of Chowman, a brand which is enchanting tastebuds with a flavorful and authentic take on Chinese cuisine</p>
                        </div>

                    </div>
                    <div className='blogsinvestor_card1 relative'>
                        <div className='blogsinvestor_card1_img'>
                        <img src={img2} className='h-[210px] w-full object-cover rounded-[5px]'/>
                        </div>
                        <div className='w-[110px] h-[32px] absolute bottom-[55%] right-[3%]'>
                            <button className='bg-[#1c1c1c] opacity-[0.75] text-[#fff] text-[16px]   py-[6px] px-[10px] rounded-[7px]'>Technology</button>
                        </div>
                        <div className='blogsinvestor_card1_text font-inter'>
                        <p className='text-[#9c9c9c] text-[13px] mt-[20px] mb-[10px]'>Data Platform Team | 18 November 2024</p>
                            <h1 className='text-[#1c1c1c] text-[20px] font-[400] '>Apache Flink Journey @Zomato:...</h1>
                            <p className='text-[#000000] text-[16px] font-[300] my-[16px]'>How we built a self-serve stream processing platform to empower real-time analytics</p>
                        </div>

                    </div>
                    <div className='blogsinvestor_card1 relative'>
                        <div className='blogsinvestor_card1_img'>
                        <img src={img3} className='h-[210px] w-full object-cover rounded-[5px]  '/>
                        </div>
                        <div className='w-[110px] h-[32px] absolute bottom-[55%] right-[3%]'>
                            <button className='bg-[#1c1c1c] opacity-[0.75] text-[#fff] text-[16px]   py-[6px] px-[10px] rounded-[7px]'>Restaurants</button>
                        </div>
                        <div className='blogsinvestor_card1_text font-inter'>
                        <p className='text-[#9c9c9c] text-[13px] mt-[20px] mb-[10px]'>Shuvra Saha | 14 November 2024</p>
                            <h1 className='text-[#1c1c1c] text-[20px] font-[400] '>The Big Brand Theory | How Ma’s R...</h1>
                            <p className='text-[#000000] text-[16px] font-[300] my-[16px]'>Discover how childhood friends Ankit Gupta and Chirag Chhajer brought Burma’s hidden treasures to India through a unique dining experience.</p>
                        </div>

                    </div>


                </div>
                <div className='pb-[60px] tab:px-[24px]'>
                    <button className='text-[16px] w-[150px] h-[44px] text-[#fff] bg-[#ef4f5f] flex items-center justify-center font-inter rounded-[5px]'>Read our blogs</button>
                </div>

            </div>

        </div>
    )
}
