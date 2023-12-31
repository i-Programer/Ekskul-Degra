import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ProjectModal = ({ isOpen, file, authorName, onClose }) => {
    if (!isOpen) {
        return null;
    }

    // Extract the first name
    let autorFile = authorName.split(",")[0];

    // If the <br/> tag is not present, extract the name without modification
    if (autorFile === authorName) {
        autorFile = authorName;
    } else {
        // Trim any whitespace
        autorFile = autorFile.trim();
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div
                    className="fixed inset-0 bg-rediteStuda opacity-50"
                    onClick={onClose}
                ></div>
                <div className="bg-yeliteStuda rounded-lg p-4 z-[100] relative border-black border-solid border-2 sm:w-[50%] w-[90%]">
                    <button
                        className="text-slate-400 text-lg font-bold absolute right-3 top-3"
                        onClick={onClose}
                    >
                        <AiOutlineClose />
                    </button>
                    <div className="flex md:flex-row flex-col md:justify-center justify-center md:items-start items-center gap-x-6 gap-y-4">
                        <img
                            src={`/assets/img/project/${autorFile}/${file}`}
                            alt={autorFile}
                            className="sm:w-[50%] w-[80%]"
                        />
                        <div className="flex flex-col justify-center items-start text-slate-400">
                            <span className="font-bold lg:text-xl text-xl">
                                Author:
                            </span>
                            <span className="font-bold lg:text-2xl text-3xl">
                                {authorName}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectModal;
