import { Jumbotron, ProjectList } from "@/Components";
import PageLayout from "@/Layouts/PageLayout";
import React from "react";

const Homepage = () => {
    return (
        <>
            <PageLayout>
                <Jumbotron />

                <ProjectList/>
            </PageLayout>
        </>
    );
};

export default Homepage;
