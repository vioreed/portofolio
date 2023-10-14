import React, { useEffect, useState } from "react";
import Axios from "../libs/axios";
import Viewer from "react-viewer";

interface AchievementComponentProps {
    isDarkMode: boolean;
}

interface AchievementsInterface {
    thumbnail: string,
    place: string,
    name: string,
    year: string,
}

const AchievementComponent: React.FC<AchievementComponentProps> = ({ isDarkMode }) => {

    const [visible, setVisible] = useState(false);
    const [achievements, setAchievements] = useState<Array<AchievementsInterface>>([])
    const [achievementModal, setPortofolioModal] = useState<AchievementsInterface | { thumbnail: '', name: '' }>({
        thumbnail: '',
        name: ''
    })

    useEffect(() => {
        Axios.get('/data/achievements.json')
            .then((res: any) => {
                setAchievements(res.data)
            })

    }, [])

    const openModalViewerImage = (gallery: AchievementsInterface) => {
        setPortofolioModal(gallery)
        setVisible(true)
    }

    return (
        <div className={`flex flex-col font-inter ${isDarkMode ? "bg-[#0F162B] text-[#F8F8FB]" : "bg-[#F8F8FB] text-[#0F162B]"}`} id="achievements">
            <div className="mx-4 mt-24 lg:mx-96">
                {/* Modal Viewer */}
                <Viewer
                    visible={visible}
                    onClose={() => { setVisible(false); }}
                    images={[{ src: `./assets/images/achievements/${achievementModal.thumbnail}`, alt: achievementModal.name }]}
                />
                {/* End of Modal Viewer */}

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mb-6">Achievements</h1>
                </div>
                <div className="mt-2 -mx-5 flex items-stretch flex-wrap justify-start">
                    {
                        achievements.map((achievement) => (
                            <div className="w-full md:w-6/12 lg:w-6/12 px-5 py-5">
                                <div className={`h-full shadow-lg border ${isDarkMode ? "bg-[#131d36] text-[#F8F8FB] border-[rgba(255,255,255,.15)]" : "bg-[#F8F8FB] text-[#0F162B]"}`} style={{ borderRadius: '10px' }}>
                                    <div className='flex flex-col justify-between h-full'>
                                        <div>
                                            <img onClick={() => {
                                                openModalViewerImage(achievement)
                                            }} src={`/assets/images/achievements/${achievement.thumbnail}`} className={`cursor-pointer h-48 lg:h-72 mx-auto`}
                                                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                            <p className={`border-b ${isDarkMode ? "border-[rgba(255,255,255,.15)]" : "border-[#ced4da]"
                                                }`} />
                                            <div className="px-6 pt-4 pb-2 flex flex-col justify-between">
                                                <div className="flex items-center gap-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                                                    </svg>

                                                    <h3 className="font-semibold text-lg">{achievement.place}</h3>
                                                </div>
                                                <div className="flex justify-between pb-4">
                                                    <p className={`mt-4 text-sm ${isDarkMode ? "text-[#95A3B9]" : "text-gray-600"}`}>{achievement.name}</p>
                                                    <p className={`mt-4 text-sm ${isDarkMode ? "text-[#95A3B9]" : "text-gray-600"}`}>{achievement.year}</p>
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

export default AchievementComponent;