import React from "react";

interface SkillComponentProps {
    isDarkMode: boolean;
}

const SkillComponent: React.FC<SkillComponentProps> = ({ isDarkMode }) => {

    return (
        <div className={`flex flex-col font-inter ${isDarkMode ? "bg-[#0F162B] text-[#F8F8FB]" : "bg-[#F8F8FB] text-[#0F162B]"}`} id="skills">
            <div className="mx-96 mt-24">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mb-6">Skills</h1>
                </div>
            </div>
        </div>
    );
};

export default SkillComponent;