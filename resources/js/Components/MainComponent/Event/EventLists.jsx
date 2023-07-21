import React from "react";

const EventLists = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center px-5 mb-5 ">
                <span className="text-4xl font-bold text-slate-400">
                   Event 
                </span>
            </div>

            <div className="flex flex-row justify-center items-center flex-wrap md:gap-x-1 md:gap-y-4 gap-y-2 mb-10">
                <div className="flex justify-center items-center w-full h-full">
                  <p className="text-slate-400 text-lg font-bold">No event yet</p>
                </div>
            </div>
        </>
    );
};

export default EventLists;
