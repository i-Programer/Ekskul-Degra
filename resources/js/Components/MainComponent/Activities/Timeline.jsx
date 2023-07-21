import React, { useState } from "react";
import Collapsible from "react-collapsible";

const Timeline = () => {
    const events = [
        {
            title: "Apa yang akan kamu pelajari",
            description: "Description for Event 1",
        },
        {
            title: "Apa yg akan kamu buat",
            description: "Description for Event 2",
        },
        {
            title: "Event 3",
            description: "Description for Event 3",
        },
        // Add more events here as needed
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCollapse = () => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    };

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="flex flex-row justify-between items-center gap-x-3 gap-y-3">
                    <div className="flex flex-col justify-ceter items-center gap-x-2 gap-y-4">
                        <div className="p-3 rounded-md bg-white flex flex-col justify-center items-start">
                            <Collapsible
                                trigger={
                                    <span className="text-slate-600 font-bold text-lg">
                                        Apa yg akan kamu pelajari
                                    </span>
                                }
                            >
                                <div className="p-4 bg-gray-100">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Placeat, in? Ea,
                                    blanditiis sint. Odio, eum vel incidunt
                                    laborum non in, a quibusdam fuga id
                                    voluptatum dolores iure totam, ut
                                    recusandae.
                                </div>
                            </Collapsible>
                        </div>
                        <div className="p-3 rounded-md bg-white flex flex-col justify-center items-start">
                            <Collapsible
                                trigger={
                                    <span className="text-slate-600 font-bold text-lg">
                                        Apa yg akan kamu pelajari
                                    </span>
                                }
                            >
                                <div className="p-4 bg-gray-100">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Placeat, in? Ea,
                                    blanditiis sint. Odio, eum vel incidunt
                                    laborum non in, a quibusdam fuga id
                                    voluptatum dolores iure totam, ut
                                    recusandae.
                                </div>
                            </Collapsible>
                        </div>
                        <div className="p-3 rounded-md bg-white flex flex-col justify-center items-start">
                            <Collapsible
                                trigger={
                                    <span className="text-slate-600 font-bold text-lg">
                                        Apa yg akan kamu pelajari
                                    </span>
                                }
                            >
                                <div className="p-4 bg-gray-100">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Placeat, in? Ea,
                                    blanditiis sint. Odio, eum vel incidunt
                                    laborum non in, a quibusdam fuga id
                                    voluptatum dolores iure totam, ut
                                    recusandae.
                                </div>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="relative p-4">
                        {events.map((event, index) => (
                            <div
                                key={event.date}
                                className="flex items-center mb-4"
                            >
                                <div className="ml-4">
                                    <p className="font-semibold">
                                        {event.title}
                                    </p>
                                    <p className="text-gray-600">
                                        {event.description}
                                    </p>
                                </div>
                                {index !== 0 && (
                                    <div
                                        className="border-l-2 border-blue-500 absolute top-4 left-0"
                                        style={{ height: "calc(100% - 16px)" }}
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timeline;
