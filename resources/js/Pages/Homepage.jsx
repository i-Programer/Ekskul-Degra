import { Jumbotron, ProjectList } from "@/Components";
import PageLayout from "@/Layouts/PageLayout";
import React from "react";

const Homepage = (props) => {
    const allProject = props.allProject;
    return (
        <>
            <PageLayout>
                <Jumbotron />

                <ProjectList allProject={allProject}/>
            </PageLayout>
        </>
    );
};

export default Homepage;
