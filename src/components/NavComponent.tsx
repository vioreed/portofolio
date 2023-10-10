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
                <div className="justify-start text-lg font-semibold">
                    <p>Vioreed</p>
                </div>
                <div className="justify-center">
                    <nav>
                        <ul className="flex items-center space-x-4 text-md">
                            <li>
                                <a
                                    href="#home"
                                    className={`px-4 py-2 font-semibold border ${isDarkMode ? "border-[#ced4da] text-[#F8F8FB] hover:bg-[#131d36]" : "border-[#0F162B] text-[#0F162B] hover:bg-[#F0F2F5]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className={`px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB]" : "[#ced4da] text-[#0F162B]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className={`px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB]" : "[#ced4da] text-[#0F162B]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className={`px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB]" : "[#ced4da] text-[#0F162B]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#achievements"
                                    className={`px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB]" : "[#ced4da] text-[#0F162B]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    Achievements
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contacts"
                                    className={`px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB]" : "[#ced4da] text-[#0F162B]"} `}
                                    style={{ borderRadius: "0.25rem" }}
                                >
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="justify-end">
                    <button
                        className={`px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB]" : "[#ced4da] text-[#0F162B]"} `}
                        style={{ borderRadius: "0.25rem" }}
                        onClick={toggleDarkMode}
                    >
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default NavComponent;