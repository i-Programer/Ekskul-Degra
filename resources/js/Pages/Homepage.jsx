import { AboutUs, Activities, Event, Jumbotron, ModeratorsList, ProjectList } from "@/Components";
import PageLayout from "@/Layouts/PageLayout";
import React from "react";

const Homepage = (props) => {
    const allProject = props.allProject;
    return (
        <>
            <PageLayout>
                <Jumbotron />

                <AboutUs/>
                <ProjectList allProject={allProject}/>
                <Activities/>
                <Event/>
                <ModeratorsList/>
            </PageLayout>
        </>
    );
};

export default Homepage;
