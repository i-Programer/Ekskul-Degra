import React, { useEffect, useState } from "react";

const ProjectCard = ({ file, authorName, onClick }) => {
    // Extract the first name
    let authorFile = authorName.split("<br/>")[0];

    // If the <br/> tag is not present, extract the name without modification
    if (authorFile === authorName) {
        authorFile = authorName;
    } else {
        // Trim any whitespace
        authorFile = authorFile.trim();
    }

    // Output the first name
    console.log(authorFile);
    return (
        <>
            <div
                className="w-52 h-52 border border-gray-300 overflow-hidden cursor-pointer bg-redStuda flex justify-center items-center"
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
