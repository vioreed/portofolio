import React from "react";

interface ContactComponentProps {
    isDarkMode: boolean;
}

const ContactComponent: React.FC<ContactComponentProps> = ({ isDarkMode }) => {

    return (
        <div className={`flex flex-col font-inter ${isDarkMode ? "bg-[#0F162B] text-[#F8F8FB]" : "bg-[#F8F8FB] text-[#0F162B]"}`} id="contact">
            <div className="mx-96 mt-24">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mb-6">Contact</h1>
                </div>
                <div className="mt-2 -mx-5 flex items-stretch flex-wrap justify-start">
                    <div className="w-full lg:w-12/12 px-5 py-5">
                        <div className={`h-full shadow-lg border ${isDarkMode ? "bg-[#131d36] text-[#F8F8FB] border-[rgba(255,255,255,.15)]" : "bg-[#F8F8FB] text-[#0F162B]"}`} style={{ borderRadius: '10px' }}>
                            <div className='flex flex-col justify-between h-full'>
                                <div className="px-6 pt-4 pb-2 flex flex-col justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>

                                        <h3 className="font-semibold text-lg">Contact Form</h3>
                                    </div>
                                    <form action="" method="post">
                                        <div className="flex justify-between pt-6 pb-10 gap-x-10">
                                            <div className="lg:w-6/12">
                                                <input type="text"
                                                    placeholder="Your Name"
                                                    className={`w-full p-4 border border-${isDarkMode ? "[rgba(255,255,255,.15)] bg-[#131d36] text-[#F8F8FB]" : "[#ced4da]  text-gray-600 bg-[#F8F8FB]"} `}
                                                    style={{ borderRadius: "0.25rem" }} required />
                                            </div>
                                            <div className="lg:w-6/12">
                                                <input type="email"
                                                    placeholder="Your Email"
                                                    className={`w-full p-4 border border-${isDarkMode ? "[rgba(255,255,255,.15)] bg-[#131d36] text-[#F8F8FB]" : "[#ced4da]  text-gray-600 bg-[#F8F8FB]"} `}
                                                    style={{ borderRadius: "0.25rem" }} required />
                                            </div>
                                        </div>
                                        <div className="flex items-center pb-6">
                                            <textarea
                                                placeholder="Your Message"
                                                className={`w-full p-4 h-48 border border-${isDarkMode ? "[rgba(255,255,255,.15)] bg-[#131d36] text-[#F8F8FB]" : "[#ced4da]  text-gray-600 bg-[#F8F8FB]"}`}
                                                style={{ borderRadius: "0.25rem" }} required />
                                        </div>
                                        <div className="flex items-center justify-end pb-4">

                                            <button className={`flex items-center gap-x-1 px-4 py-2 border border-${isDarkMode ? "[rgba(255,255,255,.15)] text-[#F8F8FB] hover:text-[#64FFDA] hover:border-[#64FFDA]" : "[#ced4da] text-gray-600 hover:text-[#0F162B] hover:border-[#0F162B]"} `}
                                                style={{ borderRadius: "0.25rem" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                                </svg>
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;