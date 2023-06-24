import React from "react";

const ProjectCard = () => {
    return (
        <>
            <a href="#" className="h-full flex">
                <div className="flex flex-col bg-white rounded-lg shadow-md h-full mx-3 p-3 my-3 flex-grow">
                    <img
                        src="/assets/img/project/Project5.jpeg"
                        alt=""
                        className="w-full h-full object-cover mb-4 rounded-md"
                    />
                    <h3 className="text-lg font-bold mx-auto">
                        Poster Hari Kemerdekaan
                    </h3>
                    <div className="flex flex-col items-center justify-between">
                        <span className="text-gray-700 font-bold text-sm">
                            Author: <span className="font-bold">Raihan Shaumir</span>
                        </span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Details
                        </button>
                    </div>
                </div>
            </a>
        </>
    );
};

export default ProjectCard;
