import React from 'react'
import Slider from "react-slick";
import logo1 from '../../../assets/logo/obsession-box1-logo1.avif'
import logo2 from '../../../assets/logo/obsession-box1-logo2.avif'
import logo3 from '../../../assets/logo/obsession-box1-logo3.avif'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute bottom-[-14%] right-[3%] bg-gray-50 opacity-80 h-[35px] w-[35px] flex justify-center items-center rounded-[99px]  z-10 bg-white shadow-lg cursor-pointer tab:right-[5%] mob:right-[13%]'

            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute bottom-[-14%] right-[8%] bg-gray-50 opacity-80 h-[35px] w-[35px] flex justify-center items-center rounded-[99px]  z-10  bg-white shadow-lg cursor-pointer tab:right-[11%] mob:right-[28%] '

            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
}
export default function Obsessionworkwithus() {
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
              breakpoint: 600,
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
        <div className='bg-[#fff6f7]'>
            <div className='max-w-[1006px] mx-auto pb-[120px] mob:mx-[30px]'>
                <div className='obsession_heading pt-[100px] pb-[36px] font-inter'>
                    <h1 className='text-[#1c1c1c] text-[54px] font-[600] text-center mob:text-[35px]'>what makes us who we are</h1>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='obsession_box1  p-[20px]  bg-[#fff] rounded-[40px]  shadow-md '>
                            <div className='h-[360px] flex justify-around flex-col'>
                                <div className='obsession_img flex justify-end'>
                                    <img src={logo1} className='w-[60px] h-[60px] ' />
                                </div>
                                <div className='obsession_text '>
                                    <h1 className='text-[42px] text-[#1c1c1c] font-[500] border-b leading-10 pb-[34px]'>customer obsession</h1>
                                    <p className='text-[18px] text-[#1c1c1c] pt-[34px]'>always start with the customer and do what’s best for them</p>

                                </div>
                            </div>
                        </div>
                        <div className='obsession_box1  p-[20px]  bg-[#fff] rounded-[40px] shadow-[#63636333] shadow-md'>
                            <div className='h-[360px] flex justify-around flex-col'>
                                <div className='obsession_img flex justify-end'>
                                    <img src={logo2} className='w-[60px] h-[60px] ' />
                                </div>
                                <div className='obsession_text '>
                                    <h1 className='text-[42px] text-[#1c1c1c] font-[500] border-b leading-10 pb-[34px]'>start with why</h1>
                                    <p className='text-[18px] text-[#1c1c1c] pt-[34px]'>before we do anything, always ask “why are we doing this?”</p>

                                </div>
                            </div>
                        </div>
                        <div className='obsession_box1  p-[20px]  bg-[#fff] rounded-[40px] shadow-[#63636333] shadow-md'>
                            <div className='h-[360px] flex justify-around flex-col'>
                                <div className='obsession_img flex justify-end'>
                                    <img src={logo3} className='w-[60px] h-[60px] ' />
                                </div>
                                <div className='obsession_text'>
                                    <h1 className='text-[42px] text-[#1c1c1c] font-[500] leading-10 pb-[34px]'>grit</h1>
                                    <p className='text-[18px] text-[#1c1c1c] border-t pt-[34px]'>focus on the goals you set out to achieve and have the courage to see them through</p>

                                </div>
                            </div>
                        </div>


                    </Slider>
                </div>

            </div>

        </div>
    )
}
