import React from 'react'
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import img1 from '../../../assets/image/building-zomato-img1.avif'
import img2 from '../../../assets/image/building-zomato-img2.avif'
import img3 from '../../../assets/image/building-zomato-img3.avif'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute bottom-[-14%] right-[4%]  shadow-2xl h-[35px] w-[35px] flex justify-center items-center rounded-[99px]  z-10 bg-[black]  cursor-pointer tab:right-[5%] mob:right-[12%] '

            onClick={onClick}
        >
            <FaArrowRight className='text-[#fff]'/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute bottom-[-14%] right-[10%]  h-[35px] w-[35px] flex justify-center items-center rounded-[99px]  z-10  bg-[black] shadow-2xl cursor-pointer tab:right-[11%] mob:right-[24%] '

            onClick={onClick}
        >
            <FaArrowLeft className='text-[#fff]' />
        </div>
    );
}

export default function Buildingzomato() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className='max-w-[1006px] mx-auto '>
                <div className='building_zomato_heading pb-[36px] pt-[140px] font-inter mob:pt-[80px]'>
                    <p className='text-[54px] text-[#1c1c1c] font-[600] text-center mob:text-[42px]'>building Zomato together</p>
                </div>
                <div className="slider-container ">
                    <Slider {...settings}>
                        <div className='buildingzomato_card1 relative group cursor-pointer mob:mx-[25px]'>
                            <div className='buildingzomato_card1_img '>
                                <img src={img1} className='w-[322px] h-[404px] object-cover rounded-[25.6px] mob:w-[322px]' />
                            </div>
                            <div className='buildingzomato_card1_text_top absolute top-0  transition-all duration-300 h-[404px] opacity-0 group-hover:opacity-100 group-hover:bg-[#e237448c] pt-[50px] pr-[43px] pl-[24px] rounded-[25.6px] mob:w-[322px]'>
                                <p className='text-[18px] text-[#fff] font-[400]'>I started my Zomato journey as an Account Manager. Over the last 7 years, I have had the privilege of being a part of several teams and products, and interacting with many talented individuals, helping me learn most of everything I know today. </p>
                            </div>
                            <div className='buildingzomato_card1_text_bottom absolute bottom-[7%]  pl-[15px] text-[#fff]'>
                                <h1 className='text-[30px] font-[600] font-caveat'>Josline Mendonsa</h1>
                                <p className='text-[16px] font-[400]'>Client Engagement Team</p>
                            </div>

                        </div>
                        <div className='buildingzomato_card1 relative group cursor-pointer mob:mx-[25px] '>
                            <div className='buildingzomato_card1_img '>
                                <img src={img2} className='w-[322px] h-[404px] object-cover rounded-[25.6px]' />
                            </div>
                            <div className='buildingzomato_card1_text_top absolute top-0  transition-all duration-300 h-[404px] opacity-0 group-hover:opacity-100 group-hover:bg-[#e237448c] pt-[50px] pr-[43px] pl-[24px] rounded-[25.6px] mob:w-[322px]'>
                                <p className='text-[18px] text-[#fff] font-[400] pb-[20px]'>I'm Yash Shah, an iOS developer from Vadodara.</p>
                                <p className='text-[18px] text-[#fff] font-[400]'> Since my school days, I've always been fond of problem-solving. This, combined with my fondness for mathematics drove me to software engineering. </p>
                            </div>
                            <div className='buildingzomato_card1_text_bottom absolute bottom-[7%]  pl-[16px] text-[#fff]'>
                                <h1 className='text-[30px] font-[600] font-caveat'>Yash Shah</h1>
                                <p className='text-[16px] font-[400]'>Tech Team</p>
                            </div>

                        </div>
                        <div className='buildingzomato_card1 relative group cursor-pointer mob:mx-[25px]'>
                            <div className='buildingzomato_card1_img '>
                                <img src={img3} className='w-[322px] h-[404px] object-cover rounded-[25.6px]' />
                            </div>
                            <div className='buildingzomato_card1_text_top absolute top-0  transition-all duration-300 h-[404px] opacity-0 group-hover:opacity-100 group-hover:bg-[#e237448c] pt-[50px] pr-[43px] pl-[24px] rounded-[25.6px] mob:w-[322px]'>
                                <p className='text-[18px] text-[#fff] font-[400] pb-[15px]'>Hello, I'm Arun Kannan – a Malayali brought up in Delhi.</p>
                                <p className='text-[18px] text-[#fff] font-[400] pb-[15px]'> No one believes me when I say I'm from Kerala. For them, “mera Hindi acha hai.” </p>
                                <p className='text-[18px] text-[#fff] font-[400]'>  I joined Zomato in 2015 as a media quality analyst. Since...</p>
                            </div>
                            <div className='buildingzomato_card1_text_bottom absolute bottom-[7%]  pl-[15px] text-[#fff]'>
                                <h1 className='text-[30px] font-[600] font-caveat'>Arun Kannan</h1>
                                <p className='text-[16px] font-[400]'>Public Relations Team</p>
                            </div>

                        </div>
                        


                    </Slider>
                </div>

            </div>

        </div>
    )
}
