import React from 'react'
import img1 from '../../assets/logo/footer-logo.avif'
import logo1 from '../../assets/logo/27130.jpg'
import icone1 from '../../assets/icone/—Pngtree—earth line icon_9016373.png'
import { FaChevronDown } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import img2 from '../../assets/image/app-store-img.webp'
import img3 from '../../assets/image/play-store-img.webp'
import Countrybox from '../coutrybox';
import Languagebox from '../languagebox';


export default function Footer() {
    return (
        <div className='bg-[#f8f8f8]'>
            <div className='footer_important max-w-[1100px] mx-auto tab:px-[15px]'>
                <div className='footer_top flex justify-between items-center pt-[48px] mb-[40px] tab:px-[24px] mob:flex-col mob:items-start mob:p-[0] mob:pt-[48px] mob:gap-[40px]'>
                    <div className='footer_top_left'>
                        <img src={img1} className='w-[132px] h-[28px]' />
                    </div>
                    <div className='footer_top_right flex items-center gap-[25px]'>
                        <div className='relative group'>
                            <div className='footer_top_right_country flex items-center gap-[10px] border-[1px] p-[5px] rounded-[5px] border-[#b5b5b5] cursor-pointer hover:bg-[#fff]'>
                                <img src={logo1} className='w-[23px] h-[15px]' />
                                <p>India</p>
                                <FaChevronDown className='w-[10px] h-[10px]' />
                            </div>
                            <div className='hidden absolute top-[-220%] left-[-100%] group-hover:block'>
                                <Countrybox />
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='footer_top_right_language flex items-center gap-[10px] border-[1px] p-[5px] rounded-[5px] border-[#b5b5b5] cursor-pointer hover:bg-[#fff]'>
                                <img src={icone1} className='w-[25px] h-[22px]' />
                                <p>English</p>
                                <FaChevronDown className='w-[10px] h-[10px]' />
                            </div>
                            <div className='hidden absolute top-[-1140%] left-[-14%] group-hover:block'>
                                    <Languagebox/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='footer_bottom flex justify-between border-b-[1px] pb-[50px] font-inter tab:px-[24px] mob:grid mob:grid-cols-2 mob:px-[0]'>
                    <div className='footer_bottom_one'>
                        <h3 className='text-[14px] text-[#000000] font-[500] uppercase tracking-widest mb-[12px]	'>About Zomato</h3>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Who We Are</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Blog</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Work With Us</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Work With Us</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Report Fraud</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Press Kit</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Contact Us</p>
                    </div>
                    <div className='footer_bottom_two'>
                        <h3 className='text-[14px] text-[#000000] font-[500] uppercase tracking-widest mb-[12px]'>Zomaverse</h3>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Zomato</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Blinkit</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>District</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Feeding India</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Hyperpure</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Zomato Live</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Zomaland</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Weather Union</p>
                    </div>
                    <div className='footer_bottom_three'>
                        <h3 className='text-[14px] text-[#000000] font-[500] uppercase tracking-widest mb-[12px]'>For Restaurants</h3>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Partner With Us</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Apps For You</p>



                    </div>
                    <div className='footer_bottom_four'>
                        <h3 className='text-[14px] text-[#000000] font-[500] uppercase tracking-widest mb-[12px]'>Learn More</h3>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Privacy</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Security</p>
                        <p className='text-[14px] text-[#696969] font-[400] tracking-wide my-[4px]'>Terms</p>

                    </div>
                    <div className='footer_bottom_five'>
                        <h3 className='text-[14px] text-[#000000] font-[500] uppercase tracking-widest mb-[12px]'>Social links</h3>
                        <div className='footer_bottom_five flex gap-[10px]'>
                            <div className='rounded-full bg-black w-[22px] h-[22px] flex flex-col justify-center items-center'>
                                <FaLinkedinIn className='text-[#ffffff] text-[15px]' />
                            </div>
                            <div className='rounded-full bg-black w-[22px] h-[22px] flex flex-col justify-center items-center'>
                                <FaInstagram className='text-[#ffffff] text-[15px]' />
                            </div>
                            <div className='rounded-full bg-black w-[22px] h-[22px] flex flex-col justify-center items-center'>
                                <FaXTwitter className='text-[#ffffff] text-[15px]' />
                            </div>
                            <div className='rounded-full bg-black w-[22px] h-[22px] flex flex-col justify-center items-center'>
                                <AiOutlineYoutube className='text-[#ffffff] text-[15px]' />
                            </div>
                            <div className='rounded-full bg-black w-[22px] h-[22px] flex flex-col justify-center items-center'>
                                <TiSocialFacebook className='text-[#ffffff] text-[18px]' />
                            </div>
                        </div>
                        <div className='footer_bottom_bottom mt-[20px]'>
                            <img src={img2} className='w-[137px] h-[40px] mb-[20px]' />
                            <img src={img3} className='w-[137px] h-[40px]' />
                        </div>

                    </div>

                </div>
                <div className='foooter_end mt-[23px] pb-[13px] text-[13px] text-[#4f4f4f]  font-[300] font-inter tab:px-[24px] mob:px-[0px]'>
                    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
                </div>

            </div>

        </div>
    )
}
