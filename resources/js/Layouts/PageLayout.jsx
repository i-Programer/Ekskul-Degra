import React from "react";
import { Jumbotron, Navbar, Footer } from "@/Components";

const PageLayout = ({ children, auth }) => {
    return (
        <>
            <Navbar auth={auth} />
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default PageLayout;
