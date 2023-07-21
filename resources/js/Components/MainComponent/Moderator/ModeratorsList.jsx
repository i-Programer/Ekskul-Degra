import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModeratorCard from "./ModeratorCard";

const ModeratorsList = () => {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 325,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // Add more breakpoints if needed
        ],
        autoplaySpeed: 3000,
        className:
            "w-full mb-10 flex flex-row justify-center items-center gap-x-3 gap-y-4",
        prevArrow: <></>, // Custom component that doesn't render anything
        nextArrow: <></>,
    };

    const moderatorMember = [
        { name: "Adima Aishasofia Diaz", role: "Ketua" },
        { name: "Khanza Latania Chaidir", role: "Wakil" },
        { name: "Reviana Mulyadi Putri", role: "Sekretaris" },
        { name: "Novianti Aulia", role: "Wakil Sekretaris" },
        { name: "Ashof Zulkarnaen", role: "Bendahara" },
        { name: "Lanna Aisyah", role: "Wakil Bendahara" },
        { name: "Raihan Shaumir", role: "Humas" },
        { name: "Regina Agni Anindya", role: "Wakil Humas" },
    ];

    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-center w-full">
                    <div className="flex flex-row justify-between items-center px-5 mb-5 ">
                        <span className="text-4xl font-bold text-slate-400">
                            Moderator
                        </span>
                    </div>

                    <div className="flex justify-center items-center gap-x-3 w-full px-5">
                        <Slider {...settings}>
                            {moderatorMember.map((member, i) => (
                                <div key={i} className="px-2">
                                    <ModeratorCard
                                        name={member.name}
                                        role={member.role}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModeratorsList;
