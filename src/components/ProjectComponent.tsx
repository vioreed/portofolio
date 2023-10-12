import React, { useEffect, useState } from "react";
import Axios from "../libs/axios";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Viewer from "react-viewer";

interface ProjectComponentProps {
    isDarkMode: boolean;
}

interface TechStackInterface {
    type: 'BE' | 'FE' | 'DB' | 'Mobile',
    stacks: Array<string>
}

interface PortofolioInterface {
    thumbnail: string,
    logo: string,
    name: string,
    description: string,
    tect_stacks: Array<TechStackInterface>,
    demo_link?: string,
    github_link?: string
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ isDarkMode }) => {

    const [visible, setVisible] = useState(false);
    const [portofolios, setPortofolios] = useState<Array<PortofolioInterface>>([])
    const [portofolioModal, setPortofolioModal] = useState<PortofolioInterface | { thumbnail: '', name: '' }>({
        thumbnail: '',
        name: ''
    })

    useEffect(() => {
        Axios.get('/data/projects.json')
            .then((res: any) => {
                setPortofolios(res.data)
            })

    }, [])

    const openModalViewerImage = (gallery: PortofolioInterface) => {
        setPortofolioModal(gallery)
        setVisible(true)
    }

    return (
        <div className={`flex flex-col font-inter ${isDarkMode ? "bg-[#0F162B] text-[#F8F8FB]" : "bg-[#F8F8FB] text-[#0F162B]"}`} id="projects">
            <div className="mx-96 mt-24">
                {/* Modal Viewer */}
                <Viewer
                    visible={visible}
                    onClose={() => { setVisible(false); }}
                    images={[{ src: `./assets/images/portofolios/${portofolioModal.thumbnail}`, alt: portofolioModal.name }]}
                />
                {/* End of Modal Viewer */}

                {/* Header */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mb-6">Projects</h1>
                </div>
                {/* End of Header */}

                <div className="-mx-5 flex items-stretch flex-wrap justify-start">
                    {
                        portofolios.map((portofolio) => (
                            <div className="w-full lg:w-4/12 px-5 py-5">
                                <div className={`h-full shadow-lg border ${isDarkMode ? "bg-[#131d36] text-[#F8F8FB] border-[rgba(255,255,255,.15)]" : "bg-[#F8F8FB] text-[#0F162B]"}`} style={{ borderRadius: '10px' }}>
                                    <div className='flex flex-col justify-between h-full'>
                                        <div>
                                            <img onClick={() => {
                                                openModalViewerImage(portofolio)
                                            }} src={`/assets/images/portofolios/${portofolio.thumbnail}`} className={`cursor-pointer h-48 ${portofolio.name != 'BOTOT' ? 'w-full object-cover object-center' : 'mx-auto'}`}
                                                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                                                alt={portofolio.name} />
                                            <p className={`border-b ${isDarkMode ? "border-[rgba(255,255,255,.15)]" : "border-[#ced4da]"
                                                }`} />
                                            <div className="px-6 pt-4 flex flex-col justify-between">
                                                <div className="flex items-center gap-x-3">
                                                    <img className="w-8" src={`./assets/images/portofolio-logos/${portofolio.logo}`} alt={portofolio.name} />
                                                    <h3 className="font-semibold text-lg">{portofolio.name}</h3>
                                                </div>
                                                <p className={`mt-5 text-sm ${isDarkMode ? "text-[#95A3B9]" : "text-gray-600"}`}>{portofolio.description}</p>
                                            </div>
                                        </div>
                                        <div className="px-6 pb-6">
                                            <div className="mt-7 flex items-end justify-between">
                                                <div className="flex items-center gap-x-2">
                                                    <table>
                                                        {
                                                            portofolio.tect_stacks.map((techStack) => (
                                                                <tr>
                                                                    <td className='pt-2 font-semibold text-sm'>{techStack.type}</td>
                                                                    <td className='pt-2 px-2 text-sm'>:</td>
                                                                    <td>
                                                                        <div className='pt-2 flex items-center gap-x-2'>
                                                                            {
                                                                                techStack.stacks.map((stack) => (
                                                                                    <img src={`./assets/images/stacks/${stack}`} className="w-7 rounded-lg" alt={stack} />
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </table>
                                                </div>
                                                <div className={`flex items-center gap-x-0 ${isDarkMode ? "text-[#95A3B9]" : "text-[rgb(15,22,43,0.5)]"}`}>
                                                    {
                                                        portofolio.github_link ?
                                                            <a href={portofolio.github_link} target='_blank' title={portofolio.name + " Github link"}>
                                                                <FontAwesomeIcon icon={faGithub} size="xl" className={`mx-2 ${isDarkMode ? "hover:text-[#F8F8FB]" : "hover:text-[#0F162B]"}`} />
                                                            </a> : <></>
                                                    }
                                                    {
                                                        portofolio.demo_link ?
                                                            <a href={portofolio.demo_link} target='_blank' title={portofolio.name}>
                                                                <FontAwesomeIcon icon={faLink} size="xl" className={`mx-2 ${isDarkMode ? "hover:text-[#F8F8FB]" : "hover:text-[#0F162B]"}`} />
                                                            </a> : <></>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;