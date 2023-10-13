import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

interface NavComponentProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const NavComponent: React.FC<NavComponentProps> = ({
    isDarkMode,
    toggleDarkMode,
}) => {
    const [activePage, setActivePage] = useState<string>("home");

    useEffect(() => {
        const handleScroll = () => {
            const home = document.getElementById("home");
            const about = document.getElementById("about");
            const projects = document.getElementById("projects");
            const skills = document.getElementById("skills");
            const achievements = document.getElementById("achievements");
            const contact = document.getElementById("contact");

            const elements = [home, about, projects, skills, achievements, contact];
            let activeElement = null;

            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (
                    element &&
                    element.getBoundingClientRect().top >= 0 &&
                    element.getBoundingClientRect().top <= window.innerHeight / 2 &&
                    (!activeElement || element.offsetTop < activeElement.offsetTop)
                ) {
                    activeElement = element;
                }
            }

            if (activeElement) {
                setActivePage(activeElement.id);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSetActivePage = (pageId: string) => {
        setActivePage(pageId);
    };

    const getLinkClass = (pageId: string) => {
        if (pageId === activePage) {
            return "px-4 py-2 font-semibold border-[1.9px] " +
                (isDarkMode ? "border-[#64FFDA] text-[#64FFDA]" : "border-[#0F162B] text-[#0F162B]");
        } else {
            return "px-4 py-2 font-semibold border border-" +
                (isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "[#ced4da] text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]");
        }
    };

    return (
        <div
            className={`flex items-center h-16 fixed top-0 left-0 w-full shadow-md ${isDarkMode
                ? "bg-[#0F162B] text-[#F8F8FB] border-b border-[rgba(255,255,255,.15)]"
                : "bg-[#F8F8FB] text-[#0F162B]"
                }`}
        >
            <div className="flex items-center justify-between w-full mx-96">
                <a
                    href="/"
                    className={`justify-start text-lg font-semibold cursor-pointer ${isDarkMode
                        ? "text-[#F8F8FB] hover:text-[#64FFDA]"
                        : "text-[#0F162B]"
                        }`}
                >
                    <p>Vioreed</p>
                </a>
                <div className="justify-center">
                    <nav>
                        <ul className="flex items-center space-x-4 text-base">
                            <li>
                                <a
                                    href="#home"
                                    className={getLinkClass("home")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("home")}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className={getLinkClass("about")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("about")}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className={getLinkClass("projects")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("projects")}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className={getLinkClass("skills")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("skills")}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#achievements"
                                    className={getLinkClass("achievements")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("achievements")}
                                >
                                    Achievements
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className={getLinkClass("contact")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("contact")}
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
        </div>
    );
};

export default NavComponent;