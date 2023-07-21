import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

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
                                    href="https://www.instagram.com/grafis_studa/"
                                    className="text-gray-400 hover:text-white text-xl font-bold"
                                >
                                   <AiOutlineInstagram/>
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <h4 className="text-xl mb-2">Contact</h4>
                            <p className="text-sm">Adima +62 859-3033-3429</p>
                            <p className="text-sm">Khanza +62 851-6170-7073</p>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            &copy; 2023 Redash. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
