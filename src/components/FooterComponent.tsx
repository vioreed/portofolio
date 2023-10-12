import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface FooterComponentProps {
    isDarkMode: boolean;
}

const FooterComponent: React.FC<FooterComponentProps> = ({
    isDarkMode,
}) => {
    return (
        <div className={`flex font-inter items-center h-16 bottom-0 left-0 w-full shadow-md ${isDarkMode ? "bg-[#0F162B] text-[#F8F8FB] border-b border-[rgba(255,255,255,.15)]" : "bg-[#F8F8FB] text-[#0F162B]"
            }`}>
            <div className="flex items-center justify-between w-full mx-96">
                <a href="/" className={`justify-start text-base font-semibold cursor-pointer ${isDarkMode ? "text-[#F8F8FB] hover:text-[#64FFDA]" : "text-[#0F162B]"}`}>
                    <p>Vioreed</p>
                </a>
                <p className="text-sm items-center">
                    Made with <FontAwesomeIcon icon={faHeart} className="text-[#FB5253]" size="sm" /> by Reed | Powered by Vite + React + TS + Tailwind
                </p>
            </div>
        </div>
    )
}
export default FooterComponent;