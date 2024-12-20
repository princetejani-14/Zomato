import React from 'react'
import logo1 from '../../../assets/logo/offering-investor-card1-logo.avif'
import logo2 from '../../../assets/logo/offering-investor-card2-logo.avif'
import logo3 from '../../../assets/logo/offering-investor-card3-logo.avif'

export default function Offeringsinvestor() {
    return (
        <div className='bg-[#f8f9fc]'>
            <div className='max-w-[1100px] mx-auto tab:px-[24px] pt-[32px]'>
                <h1 className='text-[40px] text-[#1c1c1c] font-[700] pt-[112px] pb-[17px] font-inter tracking-wide tab:p-[0] tab:pb-[17px] mob:text-[25px]'>Our core offerings</h1>
                <div className='offerings_investor_main grid grid-cols-2 gap-[18px] tab:grid-cols-1'>
                    <div className='offerings_investor_main_card1 w-[542px] p-[20px] border bg-[#fff] rounded-[40px] border-[#f2f4f7] shadow-xl tab:w-full'>
                        <div className='offerings_investor_card1_top_part border-b flex'>
                            <div className='child1_investor font-inter'>
                                <h1 className='text-[24px] text-[#1c1c1c] font-[700] tracking-wide'>Food delivery</h1>
                                <p className='text-[16px] text-[#767c8f] font-[500] mt-[16px] h-[128px] tab:text-[14px] tab:h-[70px] mob:h-[140px]'>Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly</p>
                                <p className='text-[16px] text-[#afb4c0]  font-[600] pb-[8px]'>Q2FY25</p>
                            </div>
                            <div className='child2_investor ml-[24px]'>
                                <img src={logo1} className='w-[219px] h-[80px] object-cover tab:w-[150px] mob:w-[380px]' />
                            </div>

                        </div>
                        <div className='offerings_investor_card1_bottom_part font-inter flex justify-between mt-[10px] tab:grid tab:grid-cols-1 gap-[25px]'>
                            <div className='child3_investor'>
                                <h1 className='text-[20px] text-[#1c1c1c] font-[700] tab:text-[16px]'>INR 9,690 crore</h1>
                                <p className=' text-[14px] text-[#767c8f] font-[500]'>Food delivery GOV</p>
                            </div>
                            <div className='child4_investor'>
                                <h1 className='text-[20px] text-[#1c1c1c] font-[700] tab:text-[16px]'>20.7 million</h1>
                                <p className='text-[14px] text-[#767c8f] font-[500]'>Avg. monthly transacting customers</p>
                            </div>

                        </div>

                    </div>
                    <div className='offerings_investor_main_card1 w-[542px] p-[20px] border bg-[#fff] rounded-[40px] border-[#f2f4f7] shadow-xl tab:w-full'>
                        <div className='offerings_investor_card1_top_part border-b flex'>
                            <div className='child1_investor font-inter'>
                                <h1 className='text-[24px] text-[#1c1c1c] font-[700] tracking-wide'>Quick commerce</h1>
                                <p className='text-[16px] text-[#767c8f] font-[500] mt-[16px] h-[128px] tab:text-[14px] tab:h-[70px] mob:h-[140px]'>Quick commerce platform where customers can order everyday needs across thousands of products and have them delivered within minutes
                                </p>
                                <p className='text-[16px] text-[#afb4c0]  font-[600] pb-[8px]'>Q2FY25</p>
                            </div>
                            <div className='child2_investor ml-[24px]'>
                                <img src={logo2} className='w-[219px] h-[80px] object-cover tab:w-[150px] mob:w-[380px]' />
                            </div>

                        </div>
                        <div className='offerings_investor_card1_bottom_part font-inter flex justify-between mt-[10px] tab:grid tab:grid-cols-1 gap-[25px]'>
                            <div className='child3_investor'>
                                <h1 className='text-[20px] text-[#1c1c1c] font-[700] tab:text-[16px]'>INR 1,849 crore</h1>
                                <p className=' text-[14px] text-[#767c8f] font-[500]'>Going-out GOV</p>
                            </div>
                            <div className='child4_investor'>
                                <h1 className='text-[20px] text-[#1c1c1c] font-[700] tab:text-[16px]'>INR 154 crore</h1>
                                <p className='text-[14px] text-[#767c8f] font-[500]'>Revenue</p>
                            </div>

                        </div>

                    </div>
                    <div className='offerings_investor_main_card1 w-[542px] p-[20px] border bg-[#fff] rounded-[40px] border-[#f2f4f7] shadow-xl tab:w-full'>
                        <div className='offerings_investor_card1_top_part border-b flex'>
                            <div className='child1_investor font-inter'>
                                <h1 className='text-[24px] text-[#1c1c1c] font-[700] tracking-wide'>Hyperpure</h1>
                                <p className='text-[16px] text-[#767c8f] font-[500] mt-[16px] h-[128px] tab:text-[14px] tab:h-[70px] mob:h-[100px]'>Hyperpure is a B2B platform supplying high quality food ingredients and other products</p>
                                <p className='text-[16px] text-[#afb4c0]  font-[600] pb-[8px]'>Q2FY25</p>
                            </div>
                            <div className='child2_investor ml-[24px]'>
                                <img src={logo3} className='w-[135px] h-[80px] object-cover tab:w-[90px] mob:w-[240px]' />
                            </div>

                        </div>
                        <div className='offerings_investor_card1_bottom_part font-inter flex justify-between mt-[10px] tab:grid tab:grid-cols-1 gap-[25px]'>
                            <div className='child3_investor'>
                                <h1 className='text-[20px] text-[#1c1c1c] font-[700] tab:text-[16px]'>INR 1,473 crore</h1>
                                <p className=' text-[14px] text-[#767c8f] font-[500]'>Hyperpure revenue</p>
                            </div>
                            <div className='child4_investor'>
                                <h1 className='text-[20px] text-[#1c1c1c] font-[700] tab:text-[16px] '>8</h1>
                                <p className='text-[14px] text-[#767c8f] font-[500]'># of cities present in</p>
                            </div>

                        </div>

                    </div>
                    <div className='offerings_investor_main_card1 w-[542px] p-[20px] border bg-[#fff] rounded-[40px] border-[#f2f4f7] shadow-xl tab:w-full'>
                        <div className='offerings_investor_card1_top_part border-b flex'>
                            <div className='child1_investor font-inter'>
                                <h1 className='text-[24px] text-[#1c1c1c] font-[700] tracking-wide'>Going-out</h1>
                                <p className='text-[16px] text-[#767c8f] font-[500] mt-[16px] h-[128px] tab:text-[14px] tab:h-[70px] mob:h-[120px]'>Going-out enables discovery and ticketing of offline experiences such as in-restaurant dining and live events such as Zomaland</p>
                                <p className='text-[16px] text-[#afb4c0]  font-[600] pb-[8px]'>Q2FY25</p>
                            </div>
                            <div className='child2_investor ml-[24px]'>
                                <img src={logo1} className='w-[219px] h-[80px] object-cover tab:w-[130px] mob:w-[320px]' />
                            </div>

                        </div>
                        <div className='offerings_investor_card1_bottom_part font-inter flex justify-between mt-[10px] tab:grid tab:grid-cols-1 gap-[25px]'>
                            <div className='child3_investor'>
                                <h1 className='text-[20px] text-[#1c1c1c] font-[700]'>INR 1,849 crore</h1>
                                <p className=' text-[14px] text-[#767c8f] font-[500]'>Going-out GOV</p>
                            </div>
                            <div className='child4_investor'>
                                <h1 className='text-[20px] text-[#1c1c1c] font-[700]'>INR 154 crore</h1>
                                <p className='text-[14px] text-[#767c8f] font-[500]'>Revenue</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
