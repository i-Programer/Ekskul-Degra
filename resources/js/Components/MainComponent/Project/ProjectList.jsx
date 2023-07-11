import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectList = ({ allProject }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = "hidden"; // Disable scrolling
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = "auto"; // Enable scrolling
    };

    const projectList = [
        {
            id: 1,
            imageUrl: "https://example.com/image1.jpg",
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            imageUrl: "https://example.com/image2.jpg",
            title: "Project 2",
            description:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        },
        // Add more projects here
    ];

    return (
        <>
            <div className="flex flex-row justify-between items-center px-5 mb-5 ">
                <span className="text-4xl font-bold text-slate-400">
                    Project of Us
                </span>
            </div>

            <div className="flex flex-row justify-center items-center flex-wrap gap-x-1 gap-y-4 mb-10">
                {allProject.map((project) => (
                    <div key={project.id} className="h-full flex">
                        <div className="h-full">
                            <ProjectCard
                                file={project.file}
                                authorName={project.author_name}
                                onClick={() => openModal(project)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    isOpen={true}
                    file={selectedProject.file}
                    authorName={selectedProject.author_name}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default ProjectList;
