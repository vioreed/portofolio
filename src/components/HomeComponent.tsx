import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import profile from "./../assets/vioreed.jpg";

interface HomeComponentProps {
    isDarkMode: boolean;
}

const HomeComponent: React.FC<HomeComponentProps> = ({ isDarkMode }) => {
    return (
        <div
            className={`flex flex-col h-1/2 font-inter border-b ${isDarkMode ? "bg-[#0F162B] text-[#F8F8FB] border-[rgba(255,255,255,.15)]" : "bg-[#F8F8FB] text-[#0F162B] border-[#ced4da]"
                }`}
        >
            <div className="mx-96 mt-28 mb-12">
                {/* Profile */}
                <div className="flex items-center justify-center mb-4">
                    <img src={profile} className="h-40 rounded-full" alt="profile" />
                </div>
                {/* End of Profile */}

                {/* Introduction */}
                <div className="flex flex-col items-center justify-center my-4">
                    <h1 className="text-4xl font-semibold mb-2">Predi Molana</h1>
                    <p className="text-2xl font-regular">Full-Stack Developer</p>
                </div>
                {/* End of Introduction */}

                {/* Social Media */}
                <div className={`flex items-center justify-center ${isDarkMode ? "text-[#95A3B9]" : "text-[rgb(15,22,43,0.25)]"}`}>
                    <a title="Send Email"
                        href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=predimolanaz23@gmail.com" target="_blank"
                        className={`mx-2 ${isDarkMode ? "hover:text-[#F8F8FB]" : "hover:text-[#0F162B]"}`}>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                    <a title="My Whatsapp Number"
                        href="https://wa.me/6287817903012" target="_blank"
                        className={`mx-2 ${isDarkMode ? "hover:text-[#F8F8FB]" : "hover:text-[#0F162B]"}`}>
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                    <a title="My Github Account"
                        href="https://github.com/vioreed" target="_blank"
                        className={`mx-2 ${isDarkMode ? "hover:text-[#F8F8FB]" : "hover:text-[#0F162B]"}`}>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a title="My Instagram Account"
                        href="https://instagram.com/predimolana" target="_blank"
                        className={`mx-2 ${isDarkMode ? "hover:text-[#F8F8FB]" : "hover:text-[#0F162B]"}`}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a title="My Linkedin Account"
                        href="https://www.linkedin.com/in/vioreed" target="_blank"
                        className={`mx-2 ${isDarkMode ? "hover:text-[#F8F8FB]" : "hover:text-[#0F162B]"}`}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
                {/* End of Social Media */}
            </div>
        </div>
    );
};

export default HomeComponent;