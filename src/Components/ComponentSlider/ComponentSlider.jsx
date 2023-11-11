import React from 'react'
import './ComponentSlider.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from './../../assets/img/carousol-1.webp'
import img2 from './../../assets/img/carousol-2.webp'
import img3 from './../../assets/img/carousol-3.webp'
import img4 from './../../assets/img/carousol-4.webp'

function ComponentSlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div className='BA-react-slider'>
            <h1 className='mt-5 text-dark '>FIND YOUR PERFECT MATCH</h1>
            <h6 className=' mb-5 '>EXPLORE AND FIND RIGHT ONE</h6>
            <Slider {...settings}>
                <div className='box'>
                    <img src={img1} alt="" />
                </div>
                <div className='box'>
                    <img src={img2} alt="" />
                </div>
                <div className='box'>
                    <img src={img3} alt="" />
                </div>
                <div className='box'>
                    <img src={img4} alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default ComponentSlider