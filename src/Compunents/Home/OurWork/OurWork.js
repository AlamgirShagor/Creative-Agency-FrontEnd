import React from 'react';
import './OurWork.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../../images/carousel-1.png'
import slider2 from '../../../images/carousel-2.png'
import slider4 from '../../../images/carousel-4.png'
import slider5 from '../../../images/carousel-5.png'


const OurWork = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
        };            
        return (
            <div className="bg-color">
                <div className="container  py-5">
                <div className="row text-center mb-5 justify-content-center">
                    <h2 className="our-work">Here are some of <span>our works</span></h2>
                </div>
                <Slider {...settings}>
                    <div className="slid">
                        <img className="img-fluid" src={slider1} alt=""/>
                    </div>
                    <div className="slid">
                    <img className="img-fluid" src={slider2} alt=""/>
                    </div>
                    <div className="slid">
                    <img className="img-fluid" src={slider4} alt=""/>
                    </div>
                    <div className="slid">
                    <img className="img-fluid" src={slider5} alt=""/>
                    </div>
                </Slider>
            </div>
            </div>
          
        );
};
export default OurWork;