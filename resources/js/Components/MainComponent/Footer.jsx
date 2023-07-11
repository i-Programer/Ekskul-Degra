import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="bg-yellowStuda text-slate-100 py-4">
                <div className="container mx-auto px-4 lg:px-1">
                    <div className="flex flex-wrap justify-between w-full">
                        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                            <h4 className="text-xl mb-2">About Us</h4>
                            <p className="text-sm">
                                Kami adalah eksksul yang bergerak di bidang media editing seperti poster dan banner.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                            <h4 className="text-xl mb-2">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 2v20L12 16 2 22V2l10 6 10-6z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 2v20L12 16 2 22V2l10 6 10-6z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 2v20L12 16 2 22V2l10 6 10-6z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <h4 className="text-xl mb-2">Contact</h4>
                            <p className="text-sm">123 Main Street, City</p>
                            <p className="text-sm">contact@example.com</p>
                            <p className="text-sm">+1 123-456-7890</p>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            &copy; 2023 Javakoding. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
