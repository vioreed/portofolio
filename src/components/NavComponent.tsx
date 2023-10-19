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
            return "flex gap-x-2 px-1.5 lg:px-3 py-1.5 font-semibold border-[1.9px] " +
                (isDarkMode ? "border-[#64FFDA] text-[#64FFDA]" : "border-[#0F162B] text-[#0F162B]");
        } else {
            return "flex gap-x-2 px-1.5 lg:px-3 py-1.5 font-semibold border border-" +
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
            <div className="flex items-center justify-between w-full mx-4 lg:mx-96">
                <a
                    href="/"
                    className={`justify-start text-base hidden md:block md:text-lg font-semibold cursor-pointer ${isDarkMode
                        ? "text-[#F8F8FB] hover:text-[#64FFDA]"
                        : "text-[#0F162B]"
                        }`}
                >
                    <p>Vioreed</p>
                </a>
                <div className="justify-center">
                    <nav>
                        <ul className="flex items-center space-x-2 lg:space-x-4 text-base">
                            <li>
                                <a
                                    href="#home"
                                    className={getLinkClass("home")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("home")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-heart w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6" />
                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304" />
                                        <path d="M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z" />
                                    </svg>
                                    <span className="hidden lg:block">Home</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className={getLinkClass("about")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("about")}
                                >
                                   <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-heart w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
                                        <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
                                    </svg>
                                    <span className="hidden lg:block">About</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className={getLinkClass("projects")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("projects")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-grid-add w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M14 17h6m-3 -3v6" />
                                    </svg>
                                    <span className="hidden lg:block">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className={getLinkClass("skills")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("skills")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-cog w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h2.5" />
                                        <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M19.001 15.5v1.5" />
                                        <path d="M19.001 21v1.5" />
                                        <path d="M22.032 17.25l-1.299 .75" />
                                        <path d="M17.27 20l-1.3 .75" />
                                        <path d="M15.97 17.25l1.3 .75" />
                                        <path d="M20.733 20l1.3 .75" />
                                    </svg>
                                    <span className="hidden lg:block">Skills</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#achievements"
                                    className={getLinkClass("achievements")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("achievements")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trophy w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M8 21l8 0" />
                                        <path d="M12 17l0 4" />
                                        <path d="M7 4l10 0" />
                                        <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                                        <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    </svg>
                                    <span className="hidden lg:block">Achievements</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className={getLinkClass("contact")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("contact")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                        <path d="M3 7l9 6l9 -6" />
                                    </svg>
                                    <span className="hidden lg:block">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="justify-end">
                    <button
                        className={`border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB] hover:text-[#64FFDA] hover:border-[#64FFDA] px-1.5 lg:px-2 py-1" : "[#ced4da] text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B] px-2 lg:px-[0.7rem] py-1 lg:py-[0.3rem]"} `}
                        style={{ borderRadius: "0.25rem" }}
                        onClick={toggleDarkMode}
                    >
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavComponent;