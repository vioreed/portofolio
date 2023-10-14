import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faMoon, faSun, faTrophy, faUser, faUserGear } from "@fortawesome/free-solid-svg-icons";
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
            return "flex gap-x-2 px-2 lg:px-3 py-1.5 font-semibold border-[1.9px] " +
                (isDarkMode ? "border-[#64FFDA] text-[#64FFDA]" : "border-[#0F162B] text-[#0F162B]");
        } else {
            return "flex gap-x-2 px-2 lg:px-3 py-1.5 font-semibold border border-" +
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
                                    <FontAwesomeIcon icon={faHome} size="lg" />
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
                                    <FontAwesomeIcon icon={faUser} size="lg" />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-grid-add astro-EIYD7VOQ w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" className="astro-EIYD7VOQ"></path>
                                        <rect x="4" y="4" width="6" height="6" rx="1" className="astro-EIYD7VOQ"></rect>
                                        <rect x="14" y="4" width="6" height="6" rx="1" className="astro-EIYD7VOQ"></rect>
                                        <rect x="4" y="14" width="6" height="6" rx="1" className="astro-EIYD7VOQ"></rect>
                                        <path d="M14 17h6m-3 -3v6" className="astro-EIYD7VOQ"></path>
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
                                    <FontAwesomeIcon icon={faUserGear} size="lg" />
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
                                    <FontAwesomeIcon icon={faTrophy} size="lg" />
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
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                    <span className="hidden lg:block">Contact</span>
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
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavComponent;