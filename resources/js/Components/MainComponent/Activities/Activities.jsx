import React from "react";
import Timeline from "./Timeline";

const Activities = () => {
    return (
        <>
            <div className="flex flex-row justify-center items-center px-5 mb-5 ">
                <span className="text-4xl font-bold text-slate-400">
                    Activies
                </span>
            </div>

            <Timeline/>
        </>
    );
};

export default Activities;
