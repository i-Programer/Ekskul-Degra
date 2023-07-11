import React, { useEffect, useState } from "react";

const ProjectCard = ({ file, authorName, onClick }) => {
    let authorFile = authorName.split(",")[0];

    if (authorFile === authorName) {
        authorFile = authorName;
    } else {
        authorFile = authorFile.trim();
    }

    return (
        <>
            <div
                className="lg:w-52 w-24 lg:h-52 h-24 border border-gray-300 overflow-hidden cursor-pointer bg-redStuda flex justify-center items-center"
                onClick={onClick}
            >
                <img
                    className="w-full object-cover"
                    src={`/assets/img/project/${authorFile}/${file}`}
                    alt="Post"
                />
            </div>
        </>
    );
};

export default ProjectCard;
