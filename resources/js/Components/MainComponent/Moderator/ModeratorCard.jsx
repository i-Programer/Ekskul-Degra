import React from "react";

const ModeratorCard = ({ name, role}) => {
    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="bg-white shadow-md rounded-lg overflow-hidden relative w-full">
                    <div className="bg-gradient-to-r from-yellowStuda to-redStuda h-24 "></div>
                    <div className="p-4">
                        <div className="flex items-center -mt-12">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="User Profile"
                                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                            />
                        </div>
                        <div className="text-center mt-4">
                            <h3 className="sm:text-xl text-lg font-semibold">
                                {name}
                            </h3>
                            <p className="text-gray-600">{role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModeratorCard;
