import React, { useEffect, useState } from "react";
import Axios from "../libs/axios";

interface SkillComponentProps {
    isDarkMode: boolean;
}

interface ProgrammingLanguageInterface {
    name: string,
    logo: string
}

interface FrameworkInterface {
    name: string,
    logo: string
}

interface DatabaseInterface {
    name: string,
    logo: string
}

interface WebServerInterface {
    name: string,
    logo: string
}

interface LanguangeInterface {
    name: string,
    logo: string
}

const SkillComponent: React.FC<SkillComponentProps> = ({ isDarkMode }) => {

    const [programmingLanguages, setProgrammingLanguages] = useState<Array<ProgrammingLanguageInterface>>([])
    const [frameworks, setFrameworks] = useState<Array<FrameworkInterface>>([])
    const [databases, setDatabases] = useState<Array<DatabaseInterface>>([])
    const [webServers, setWebServers] = useState<Array<WebServerInterface>>([])
    const [languages, setLanguages] = useState<Array<LanguangeInterface>>([])

    // First Load
    useEffect(() => {
        loadProgrammingLanguages()
        loadFrameworks()
        loadDatabases()
        loadWebServers()
        loadLanguages()
    }, [])

    const loadProgrammingLanguages = (): void => {
        Axios.get('./data/skills/programming-languages.json')
            .then((res) => {
                setProgrammingLanguages(res.data)
            })
    }

    const loadFrameworks = (): void => {
        Axios.get('./data/skills/frameworks.json')
            .then((res) => {
                setFrameworks(res.data)
            })
    }

    const loadDatabases = (): void => {
        Axios.get('./data/skills/databases.json')
            .then((res) => {
                setDatabases(res.data)
            })
    }

    const loadWebServers = (): void => {
        Axios.get('./data/skills/web-servers.json')
            .then((res) => {
                setWebServers(res.data)
            })
    }

    const loadLanguages = (): void => {
        Axios.get('./data/skills/languages.json')
            .then((res) => {
                setLanguages(res.data)
            })
    }

    return (
        <div className={`flex flex-col font-inter ${isDarkMode ? "bg-[#0F162B] text-[#F8F8FB]" : "bg-[#F8F8FB] text-[#0F162B]"}`} id="skills">
            <div className="mx-96 mt-24">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mb-6">Skills</h1>
                </div>
                <div className="mt-2 -mx-5 flex items-stretch flex-wrap justify-start">
                    <div className="w-full lg:w-4/12 px-5 py-5">
                        <div className={`h-full shadow-lg border ${isDarkMode ? "bg-[#131d36] text-[#F8F8FB] border-[rgba(255,255,255,.15)]" : "bg-[#F8F8FB] text-[#0F162B]"}`} style={{ borderRadius: '10px' }}>
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <div className="px-6 pt-4 pb-2 flex flex-col justify-between">
                                        <div className="flex items-center gap-x-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                                            </svg>
                                            <h3 className="font-semibold text-lg">Programming Languages / Engines</h3>
                                        </div>
                                        <p className={`mt-4 text-sm ${isDarkMode ? "text-[#95A3B9]" : "text-gray-600"}`}>Languages that i love to speak. The foundation of my work, to create and innovate.</p>
                                    </div>
                                    <div className="px-6 pb-6 flex flex-wrap gap-x-2">
                                        {
                                            programmingLanguages.map((programmingLanguage) => (
                                                <div className="mt-2 flex items-center text-sm">
                                                    <p className={`px-3 py-1.5 font-semibold cursor-default border ${isDarkMode ? "border-[rgba(255,255,255,.15)] text-[#95A3B9] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]"} `}
                                                        style={{ borderRadius: "0.25rem" }}>{programmingLanguage.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-5 py-5">
                        <div className={`h-full shadow-lg border ${isDarkMode ? "bg-[#131d36] text-[#F8F8FB] border-[rgba(255,255,255,.15)]" : "bg-[#F8F8FB] text-[#0F162B]"}`} style={{ borderRadius: '10px' }}>
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <div className="px-6 pt-4 pb-2 flex flex-col justify-between">
                                        <div className="flex items-center gap-x-3">
                                            <img src={`${isDarkMode ? "./assets/images/framework-white.png" : "./assets/images/framework-dark.png"}`} className="w-8 h-8" />
                                            <h3 className="font-semibold text-lg">Frameworks</h3>
                                        </div>
                                        <p className={`mt-4 text-sm ${isDarkMode ? "text-[#95A3B9]" : "text-gray-600"}`}>Beloved frameworks. The ones i passionately use and advocate for.
                                        </p>
                                    </div>
                                    <div className="px-6 pb-6 flex flex-wrap gap-x-2">
                                        {
                                            frameworks.map((framework) => (
                                                <div className="mt-2 flex items-center text-sm">
                                                    <p className={`px-3 py-1.5 font-semibold cursor-default border ${isDarkMode ? "border-[rgba(255,255,255,.15)] text-[#95A3B9] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]"} `}
                                                        style={{ borderRadius: "0.25rem" }}>{framework.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-5 py-5">
                        <div className={`h-full shadow-lg border ${isDarkMode ? "bg-[#131d36] text-[#F8F8FB] border-[rgba(255,255,255,.15)]" : "bg-[#F8F8FB] text-[#0F162B]"}`} style={{ borderRadius: '10px' }}>
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <div className="px-6 pt-4 pb-2 flex flex-col justify-between">
                                        <div className="flex items-center gap-x-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                            </svg>
                                            <h3 className="font-semibold text-lg">Databases</h3>
                                        </div>
                                        <p className={`mt-4 text-sm ${isDarkMode ? "text-[#95A3B9]" : "text-gray-600"}`}>The backbone of my data-driven projects. Ensuring organized storage and unleashing data potential.
                                        </p>
                                    </div>
                                    <div className="px-6 pb-6 flex flex-wrap gap-x-2">
                                        {
                                            databases.map((database) => (
                                                <div className="mt-2 flex items-center text-sm">
                                                    <p className={`px-3 py-1.5 font-semibold cursor-default border ${isDarkMode ? "border-[rgba(255,255,255,.15)] text-[#95A3B9] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]"} `}
                                                        style={{ borderRadius: "0.25rem" }}>{database.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-5 py-5">
                        <div className={`h-full shadow-lg border ${isDarkMode ? "bg-[#131d36] text-[#F8F8FB] border-[rgba(255,255,255,.15)]" : "bg-[#F8F8FB] text-[#0F162B]"}`} style={{ borderRadius: '10px' }}>
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <div className="px-6 pt-4 pb-2 flex flex-col justify-between">
                                        <div className="flex items-center gap-x-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                                            </svg>
                                            <h3 className="font-semibold text-lg">Web Servers</h3>
                                        </div>
                                        <p className={`mt-4 text-sm ${isDarkMode ? "text-[#95A3B9]" : "text-gray-600"}`}>The reliable engines of my online projects, Ensuring seamless delivery, provide efficient online experiences.
                                        </p>
                                    </div>
                                    <div className="px-6 pb-6 flex flex-wrap gap-x-2">
                                        {
                                            webServers.map((webServer) => (
                                                <div className="mt-2 flex items-center text-sm">
                                                    <p className={`px-3 py-1.5 font-semibold cursor-default border ${isDarkMode ? "border-[rgba(255,255,255,.15)] text-[#95A3B9] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]"} `}
                                                        style={{ borderRadius: "0.25rem" }}>{webServer.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-5 py-5">
                        <div className={`h-full shadow-lg border ${isDarkMode ? "bg-[#131d36] text-[#F8F8FB] border-[rgba(255,255,255,.15)]" : "bg-[#F8F8FB] text-[#0F162B]"}`} style={{ borderRadius: '10px' }}>
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <div className="px-6 pt-4 pb-2 flex flex-col justify-between">
                                        <div className="flex items-center gap-x-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                                            </svg>
                                            <h3 className="font-semibold text-lg">Language</h3>
                                        </div>
                                        <p className={`mt-4 text-sm ${isDarkMode ? "text-[#95A3B9]" : "text-gray-600"}`}>Exploring languages beyond code, to understand and connect with the world.
                                        </p>
                                    </div>
                                    <div className="px-6 pb-6 flex flex-wrap gap-x-2">
                                        {
                                            languages.map((language) => (
                                                <div className="mt-2 flex items-center text-sm">
                                                    <p className={`px-3 py-1.5 font-semibold cursor-default border ${isDarkMode ? "border-[rgba(255,255,255,.15)] text-[#95A3B9] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]"} `}
                                                        style={{ borderRadius: "0.25rem" }}>{language.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillComponent;