import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
        className: "flex flex-row justify-between items-center mb-10",
        prevArrow: <></>, // Custom component that doesn't render anything
        nextArrow: <></>,
    };
    return (
        <>
            <div className="flex flex-row justify-between items-center px-5 flex-wrap">
                <span className="text-4xl font-bold">Project of Us</span>

                {/* <div className="flex flex-row justify-center items-center">
                    <form className="flex items-center mb-4">
                        <select className="mr-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">All</option>
                            <option value="type1">Rune</option>
                        </select>
                    </form>
                </div> */}
            </div>

            <Slider {...settings} edgeFriction={0.1}>
                <div className="h-full flex">
                    <div className="h-full">
                        <ProjectCard />
                    </div>
                </div>
                <div className="h-full flex">
                    <div className="h-full">
                        <ProjectCard />
                    </div>
                </div>
                <div className="h-full flex">
                    <div className="h-full">
                        <ProjectCard />
                    </div>
                </div>
                <div className="h-full flex">
                    <div className="h-full">
                        <ProjectCard />
                    </div>
                </div>
            </Slider>
        </>
    );
};

export default ProjectList;
