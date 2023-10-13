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
            return "flex lg:gap-x-2 px-3 py-1.5 font-semibold border-[1.9px] " +
                (isDarkMode ? "border-[#64FFDA] text-[#64FFDA]" : "border-[#0F162B] text-[#0F162B]");
        } else {
            return "flex lg:gap-x-2 px-3 py-1.5 font-semibold border border-" +
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
                    className={`justify-start text-base md:text-lg font-semibold cursor-pointer ${isDarkMode
                        ? "text-[#F8F8FB] hover:text-[#64FFDA]"
                        : "text-[#0F162B]"
                        }`}
                >
                    <p>Vioreed</p>
                </a>
                <div className="justify-center hidden lg:block">
                    <nav>
                        <ul className="flex items-center space-x-4 text-base">
                            <li>
                                <a
                                    href="#home"
                                    className={getLinkClass("home")}
                                    style={{ borderRadius: "0.25rem" }}
                                    onClick={() => handleSetActivePage("home")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-grid-add astro-EIYD7VOQ" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" className="astro-EIYD7VOQ"></path>
                                        <rect x="4" y="4" width="6" height="6" rx="1" className="astro-EIYD7VOQ"></rect>
                                        <rect x="14" y="4" width="6" height="6" rx="1" className="astro-EIYD7VOQ"></rect>
                                        <rect x="4" y="14" width="6" height="6" rx="1" className="astro-EIYD7VOQ"></rect>
                                        <path d="M14 17h6m-3 -3v6" className="astro-EIYD7VOQ"></path>
                                    </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                    </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                                    </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
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