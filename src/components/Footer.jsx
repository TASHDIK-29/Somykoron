import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className="bg-gray-900 pt-20 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-2">
                    <div className="space-y-5 lg:col-span-2 px-6">
                        <img src="https://mona-ai.mn/footer-logo.png" alt="img" />

                        <p className="text-lg font-semibold text-slate-400">We harness the power of artificial intelligence to break down language barriers, making worldwide information and educational content accessible to all Mongolians. Our suite of AI-powered tools is designed to empower Mongolian learners, researchers, and curious minds, opening doors to a world of knowledge previously hindered by language constraints.</p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between px-6">
                        <div className="space-y-5 lg:space-y-10">
                            <h3 className="text-2xl font-semibold text-slate-300">Quick links</h3>

                            <div className="flex flex-col gap-3">
                                <a className="text-xl font-semibold text-slate-400">Home</a>
                                <a className="text-xl font-semibold text-slate-400">About us</a>
                                <a className="text-xl font-semibold text-slate-400">Pricing</a>
                                <a className="text-xl font-semibold text-slate-400">FAQ</a>
                                <a className="text-xl font-semibold text-slate-400">Contact</a>
                                <a className="text-xl font-semibold text-slate-400">Terms and Policy</a>
                            </div>
                        </div>
                        <div className="space-y-5 lg:space-y-10">
                            <h3 className="text-2xl font-semibold text-slate-300">Tools</h3>

                            <div className="flex flex-col gap-3">
                                <a className="text-xl font-semibold text-slate-400">AI Video Subtitles</a>
                                <a className="text-xl font-semibold text-slate-400">Youtube Transition</a>
                                <a className="text-xl font-semibold text-slate-400">Youtube Watch</a>
                                <a className="text-xl font-semibold text-slate-400">Image Generation</a>
                                <a className="text-xl font-semibold text-slate-400">AI Assistant</a>
                            </div>
                        </div>
                        <div className="space-y-5 lg:space-y-10">
                            <h3 className="text-2xl font-semibold text-slate-300">Get in touch</h3>

                            <div className="flex flex-col gap-3">
                                <h3 className="flex items-center gap-2 text-xl text-slate-400"><FaLocationDot />Times Square Office Building</h3>
                                <h3 className="flex items-center gap-2 text-xl text-slate-400"><MdEmail />info@mona-ai.mn</h3>
                                <h3 className="flex items-center gap-2 text-xl text-slate-400"><FaPhoneAlt />+9760000000000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-3 justify-between items-center px-5 py-6 bg-gray-950 border-t border-slate-400">
                <h3 className="text-xl font-semibold text-slate-300">Copyright © 2024 MAZAL.AI . All rights reserved.</h3>

                <img src="https://mona-ai.mn/card.png" alt="img" />
            </div>
        </>
    );
};

export default Footer;