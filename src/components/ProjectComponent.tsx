import React from "react";

interface AboutComponentProps {
    isDarkMode: boolean;
}

const AboutComponent: React.FC<AboutComponentProps> = ({ isDarkMode }) => {
    return (
        <div
            className={`flex flex-col font-inter ${isDarkMode ? "bg-[#0F162B] text-[#F8F8FB]" : "bg-[#F8F8FB] text-[#0F162B]"
                }`}
        >
            <div className="mx-96 mt-12">
                {/* Header */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mb-6">Projects</h1>
                </div>
                {/* End of Header */}
            </div>
        </div>
    );
};

export default AboutComponent;