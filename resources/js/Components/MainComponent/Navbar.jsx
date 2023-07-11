import React, { useState } from "react";
import {FaBars} from "react-icons/fa";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className={`site-mobile-menu site-navbar-target ${
                    open ? "translate-x-[0px]  w-full" : "translate-x-[-530px]"
                } fixed `}
            >
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span
                            className="js-menu-toggle cursor-pointer"
                            onClick={() => setOpen(!open)}
                        >
                            x
                        </span>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="site-mobile-menu-body">
                    <ul className="list-none nav-side-menu pb-[100px]">
                        <li className="my-5">
                            <a className="nav-link ml-2 text-white" href="/">
                                <span className="text-md font-base">Home</span>
                            </a>
                        </li>
                        <hr className="nav-hr" />
                        <li className="my-5">
                            <a className="nav-link ml-2 text-white" href="#">
                                <span className="text-md font-base">
                                    Project
                                </span>
                            </a>
                        </li>
                        <hr className="nav-hr" />
                        <li className="my-5">
                            <a className="nav-link ml-2 text-white" href="#">
                                <span className="text-md font-base">
                                    About Us
                                </span>
                            </a>
                        </li>
                        <hr className="nav-hr" />
                        <li className="my-5">
                            <a className="nav-link ml-2 text-white" href="#">
                                <span className="text-md font-base">
                                    Contact
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="flex flex-wrap items-center justify-between px-16 bg-transparent py-3 z-[100] top-0 absolute w-full">
                <div className="w-full px-1 mx-auto items-center justify-between flex flex-row">
                    <button
                        className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setOpen(!open)}
                    >
                        <FaBars />
                    </button>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-row justify-start items-center lg:flex-row list-none w-full">
                            <li className="nav-item">
                                <a
                                    href="/"
                                    className="px-3 py-2 flex items-center text-md leading-snug text-white hover:opacity-75"
                                ></a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/"
                                    className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75 nav-link nav-link-ltr"
                                >
                                    <span className="text-white font-semibold text-lg">
                                        Home
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item relative">
                                <a
                                    href="#"
                                    className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75 nav-link nav-link-ltr cursor-pointer"
                                >
                                    <span className="text-white font-semibold text-lg ">
                                        Project
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item lg:ml-auto">
                                <a
                                    href="#"
                                    className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75 nav-link nav-link-ltr"
                                >
                                    <span className="text-white font-semibold text-lg">
                                        About
                                    </span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75 nav-link nav-link-ltr"
                                >
                                    <span className="text-white font-semibold text-lg">
                                        Contact
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
