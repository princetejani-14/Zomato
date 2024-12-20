import React from 'react'
import img1 from '../../../assets/image/beyondbuissnes-img1.avif'
import logo1 from '../../../assets/image/success-restoran-ekle-dp1.webp'
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import logo2 from '../../../assets/logo/resturant-sucess-stories-logo2.webp'
import logo3 from '../../../assets/logo/resturant-sucess-stories-logo3.webp'
// import icone4 from '../../assets/icone/icone4 (1).png'
// import icone5 from '../../assets/icone/icone5.png'
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute top-[47%] right-[-5%] bg-gray-50 opacity-80 h-[35px] w-[35px] flex justify-center items-center rounded-[99px]  z-10 bg-white shadow-lg cursor-pointer tab:right-[-7%] mob:hidden'

            onClick={onClick}
        >
            <FaAngleRight className='h-[15px] w-[15px] text-[#256fef] rounded-[99px]'/>


        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute top-[47%] left-[-5%] bg-gray-50 opacity-80 h-[35px] w-[35px] flex justify-center items-center rounded-[99px]  z-10  bg-white shadow-lg cursor-pointer tab:left-[-7%] mob:hidden'

            onClick={onClick}
        >
            <FaChevronLeft className='h-[15px] w-[15px] text-[#256fef] rounded-[99px]'/>

        </div>
    );
}


export default function Successrestoranekle() {
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
          slidesToShow: 3,
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
        <div className='bg-[#edf4ff] pb-[50px]'>
            <div className='pt-[64px] pb-[64px]'>
                <h1 className='text-[#1c1c1c] text-[24px] font-[700] text-center'>Restaurant success stories</h1>
            </div>
            <div className="slider-container max-w-[1100px] mx-auto tab:max-w-[604px] tab:mx-auto ">
                <Slider {...settings}>
                    <div className='success_box1 p-[16px] w-[334px] h-[283px]  bg-white rounded-[15px]'>
                        <div className='success_box1_text border-b pb-[16px] tracking-wider '>
                            <p className='text-[14px] text-=[#596738] font-[400] '>Zomato enabled me to restart my operations post-COVID when I had no hope of doing my business again. I'm grateful to the platform for helping me thrive - my online ordering business has done so well, it has even taken over my dining business!</p>
                        </div>
                        <div className='success_box1_dp mt-[16px] flex gap-[10px]'>
                            <div>
                                <img src={logo1} className='w-[48px] h-[48px]'/>
                            </div>
                            <div>
                                <h1 className='text-[16px] text-[#293142] font-[600]'>Arshad Khan</h1>
                                <p className='text-[12px] text-[#9197a6] font-[400] w-[153px]'>Owner - Khushboo biryani,
                                    Shillong</p>
                            </div>

                        </div>
                    </div>
                    <div className='success_box1 p-[16px] w-[334px] h-[283px] bg-white rounded-[15px]'>
                        <div className='success_box1_text border-b pb-[16px] tracking-wider'>
                            <p className='text-[14px] text-=[#596738] font-[400]'>Thanks to Zomato's invaluable support, our startup cloud kitchen has been doing wonders in the competitive food industry landscape. Their dedication to promoting local businesses and powerful reporting tools have been instrumental in our success, and we look forward to a long-term partnership.</p>
                        </div>
                        <div className='success_box1_dp mt-[16px] flex gap-[10px]'>
                            <div>
                                <img src={logo2} className='w-[48px] h-[48px]' />
                            </div>
                            <div>
                                <h1 className='text-[16px] text-[#293142] font-[600]'>Vijay</h1>
                                <p className='text-[12px] text-[#9197a6] font-[400] w-[153px]'>Owner - Birgo,
                                Coimbatore</p>
                            </div>

                        </div>
                    </div>
                    <div className='success_box1 p-[16px] w-[334px] h-[283px] bg-white rounded-[15px]'>
                        <div className='success_box1_text border-b pb-[16px] tracking-wider'>
                            <p className='text-[14px] text-=[#596738] font-[400]'>Zomato enabled me to restart my operations post-COVID when I had no hope of doing my business again. I'm grateful to the platform for helping me thrive - my online ordering business has done so well, it has even taken over my dining business!</p>
                        </div>
                        <div className='success_box1_dp mt-[16px] flex gap-[10px]'>
                            <div>
                                <img src={logo3} className='w-[48px] h-[48px]' />
                            </div>
                            <div>
                                <h1 className='text-[16px] text-[#293142] font-[600]'>Sandeep K Mohan</h1>
                                <p className='text-[12px] text-[#9197a6] font-[400] w-[153px]'>Owner - Mysore Raman Idli,
                                Kerala</p>
                            </div>

                        </div>
                    </div>
                    

                </Slider>
            </div>
        </div>
    )
}
