import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AboutComponentProps {
    isDarkMode: boolean;
}

const AboutComponent: React.FC<AboutComponentProps> = ({ isDarkMode }) => {
    return (
        <div className={`flex flex-col font-inter ${isDarkMode ? "bg-[#0F162B] text-[#F8F8FB]" : "bg-[#F8F8FB] text-[#0F162B]"
            }`}
            id="about"
        >
            <div className="mt-12">
                <p className={`mb-12 border-b ${isDarkMode ? "border-[rgba(255,255,255,.15)]" : "border-[#ced4da]"
                    }`} />
                <div className="mx-4 lg:mx-96">
                    {/* Header */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-semibold mb-6">About Me</h1>
                    </div>
                    {/* End of Header */}

                    {/* Content */}
                    <div
                        className={`flex flex-col items-start justify-center text-justify ${isDarkMode ? "text-[#95A3B9]" : "text-gray-600"
                            }`}
                    >
                        <p className="text-base md:text-lg mb-4">
                            Hello, I'm{" "}
                            <span
                                className={`font-semibold ${isDarkMode ? "text-[#F1F1F1]" : "text-[#0F162B]"
                                    }`}
                            >
                                Predi Molana.
                            </span>
                        </p>
                        <p className="text-base md:text-lg mb-4">
                            I'm a{" "}
                            <span
                                className={`font-semibold ${isDarkMode ? "text-[#F1F1F1]" : "text-[#0F162B]"
                                    }`}
                            >
                                Full-Stack Developer
                            </span>{" "}
                            with 1 year of experience in the professional industry. I'm 20
                            years old from Central Java,{" "}
                            <span
                                className={`font-semibold ${isDarkMode ? "text-[#F1F1F1]" : "text-[#0F162B]"
                                    }`}
                            >
                                Indonesia.
                            </span>
                        </p>
                        <p className="text-base md:text-lg mb-4">
                            Over the past year, I've had the privilege of working on both the{" "}
                            <span
                                className={`font-semibold ${isDarkMode ? "text-[#F1F1F1]" : "text-[#0F162B]"
                                    }`}
                            >
                                frontend
                            </span>{" "}
                            and{" "}
                            <span
                                className={`font-semibold ${isDarkMode ? "text-[#F1F1F1]" : "text-[#0F162B]"
                                    }`}
                            >
                                backend
                            </span>{" "}
                            aspects of{" "}
                            <span
                                className={`font-semibold ${isDarkMode ? "text-[#F1F1F1]" : "text-[#0F162B]"
                                    }`}
                            >
                                web development.
                            </span>{" "}
                            This experience has equipped me with a comprehensive skill set
                            that spans from creating user-friendly interfaces to architecting
                            robust server-side solutions.
                        </p>
                        <p className="text-base md:text-lg mb-4">
                            I'm also interested in web technology, game development, and
                            technology in general.
                        </p>
                        <p className="text-base md:text-lg">
                            I Love{" "}
                            <span
                                className={`font-semibold ${isDarkMode ? "text-[#F1F1F1]" : "text-[#0F162B]"
                                    }`}
                            >
                                Arch <FontAwesomeIcon icon={faHeart} size="1x" />
                            </span>
                        </p>
                    </div>
                    {/* End of Content */}
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;