import React from 'react'
import img1 from '../../../assets/image/order-one-img.avif'
import img2 from '../../../assets/image/order-two-img.avif'
import img3 from '../../../assets/image/order-three-img.avif'
export default function Orderzomato() {
  return (
    <div>
      <div className='max-w-[1100px] mx-auto'>
        <div className='order_main flex mt-[50px] mb-[100px] gap-[20px] tab:mx-[24px] mob:grid mob:grid-cols-2 mob:gap-y-[70px] mob:mb-[70px] '>


          <div className='order_main_one w-[353px]  relative transform hover:scale-105 duration-700 cursor-pointer mob:w-[161px]'>
            <div className='order_main_one_img '>
              <img src={img1} className='w-full h-[192px] object-cover rounded-[10px] mob:w-[161px] mob:h-[120px]' />
            </div>
            <div className='order_main_one_text pt-[10px] px-[20px] pb-[16px] absolute bottom-[-32%] bg-white w-[353px] border-[1px] border-gray-300 rounded-[10px] tab:w-[226px] tab:pt-[10px] tab:px-[10px] tab:pb-[16px] tab:bottom-[-28%] mob:w-[161px] mob:bottom-[-40%]'>
              <h1 className='text-[20px] text-[#363636] tab:text-[14px]'>Order Online</h1>
              <p className='text-[16px] text-[#4f4f4f] tab:text-[12px] mob:text-[8px]'>Stay home and order to your doorstep</p>
            </div>
          </div>


          <div className='order_main_two w-[353px] relative transform hover:scale-105 duration-700 cursor-pointer mob:w-[161px]'>
            <div className='order_main_two_img'>
              <img src={img2} className='w-full h-[192px] object-cover rounded-[10px] mob:w-[161px] mob:h-[120px]' />
            </div>
            <div className='order_main_two_text pt-[10px] px-[20px] pb-[16px] absolute bottom-[-32%] bg-white w-[353px] border-[1px] border-gray-300 rounded-[10px] tab:w-[226px] tab:pt-[10px] tab:px-[10px] tab:pb-[16px] tab:bottom-[-28%] mob:w-[161px] mob:bottom-[-40%]'>
              <h1 className='text-[20px] text-[#363636] tab:text-[14px]'>Dining</h1>
              <p className='text-[16px] text-[#4f4f4f]  tab:text-[12px] mob:text-[8px]'>View the city's favourite dining venues</p>
            </div>
          </div>


          <div className='order_main_three w-[353px] relative transform hover:scale-105 duration-700 cursor-pointer mob:w-[161px]'>
            <div className='order_main_three_img'>
              <img src={img3} className='w-full h-[192px] object-cover rounded-[10px] mob:w-[161px] mob:h-[120px]' />
            </div>
            <div className='order_main_three_text pt-[10px] px-[20px] pb-[16px] absolute bottom-[-32%] bg-white w-[353px] border-[1px] border-gray-300 rounded-[10px] tab:w-[226px] tab:pt-[10px] tab:px-[10px] tab:pb-[16px] tab:bottom-[-28%] mob:w-[161px] mob:bottom-[-40%]'>
              <h1 className='text-[20px] text-[#363636] tab:text-[14px]'>Nightlife and Clubs</h1>
              <p className='text-[16px] text-[#4f4f4f] tab:text-[12px] mob:text-[8px]'>Explore the city's top nightlife outlets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
