import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Jumbotron = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        className: "w-full mb-10",
        prevArrow: <></>, // Custom component that doesn't render anything
        nextArrow: <></>,
    };

    return (
        <>
            <Slider {...settings}>
                <div className="w-100 h-100 flex justify-center items-center w-full">
                    <img
                        src="/assets/img/utility/DummySlider1.jpeg"
                        alt=""
                        className="w-full"
                    />
                </div>
                <div className="w-100 h-100 flex justify-center items-center w-full">
                    <img
                        src="/assets/img/utility/DummySlider1.jpeg"
                        alt=""
                        className="w-full"
                    />
                </div>
                <div className="w-100 h-100 flex justify-center items-center w-full">
                    <img
                        src="/assets/img/utility/DummySlider1.jpeg"
                        alt=""
                        className="w-full"
                    />
                </div>
            </Slider>
        </>
    );
};

export default Jumbotron;
