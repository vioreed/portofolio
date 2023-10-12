import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface NavComponentProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const NavComponent: React.FC<NavComponentProps> = ({
    isDarkMode,
    toggleDarkMode,
}) => {
    return (
        <div className={`flex items-center h-16 fixed top-0 left-0 w-full shadow-md ${isDarkMode ? "bg-[#0F162B] text-[#F8F8FB] border-b border-[rgba(255,255,255,.15)]" : "bg-[#F8F8FB] text-[#0F162B]"
            }`}>
            <div className="flex items-center justify-between w-full mx-96">
                <a href="/" className={`justify-start text-lg font-semibold cursor-pointer ${isDarkMode ? "text-[#F8F8FB] hover:text-[#64FFDA]" : "text-[#0F162B]"}`}>
                    <p>Vioreed</p>
                </a>
                <div className="justify-center">
                    <nav>
                        <ul className="flex items-center space-x-4 text-base">
                            <li>
                                <a
                                    href="#home"
                                    className={`px-4 py-2 font-semibold border-[1.5px] ${isDarkMode ? "border-[#64FFDA] text-[#64FFDA]" : "border-[#0F162B] text-[#0F162B]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className={`px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "[#ced4da] text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className={`px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "[#ced4da] text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className={`px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "[#ced4da] text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#achievements"
                                    className={`px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "[#ced4da] text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    Achievements
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className={`px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "[#ced4da] text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="justify-end">
                    <button
                        className={`border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB] hover:text-[#64FFDA] hover:border-[#64FFDA] px-2 py-1" : "[#ced4da] text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B] px-[0.7rem] py-[0.3rem]"} `}
                        style={{ borderRadius: "0.25rem" }}
                        onClick={toggleDarkMode}
                    >
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="sm" />
                    </button>
                </div>
            </div>

        </div >
    );
};

export default NavComponent;