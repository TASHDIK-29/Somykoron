import { useState, useEffect } from 'react';

const Navbar = () => {
    const [navbarBg, setNavbarBg] = useState('bg-transparent');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavbarBg('bg-opacity-50 bg-gray-800 backdrop-blur-md'); // Change background opacity and color
        } else {
            setNavbarBg('bg-transparent');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full p-8 top-0 z-50 transition-all duration-300 ${navbarBg} text-white`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between ">
                {/* Logo */}
                
                <span className="text-2xl font-semibold">MONA AI</span>

                {/* Menu Links */}
                {/* <ul className="flex space-x-6 items-center"> */}
                    <a className="hover:text-teal-400 cursor-pointer text-xl font-bold">Home</a>
                    <a className="relative group">
                        <span className="hover:text-teal-400 cursor-pointer text-xl font-bold">AI Services</span>
                        
                    </a>
                    <a className="hover:text-teal-400 cursor-pointer text-xl font-bold">About Us</a>
                    <a className="hover:text-teal-400 cursor-pointer text-xl font-bold">Pricing</a>
                    <a className="hover:text-teal-400 cursor-pointer text-xl font-bold">FAQ</a>
                    <a className="hover:text-teal-400 cursor-pointer text-xl font-bold">Contact Us</a>
                {/* </ul> */}

                {/* Right Side: Language Selector and Buttons */}
                {/* <div className="flex items-center space-x-4"> */}
                    {/* Language Selector */}
                    <div className="relative group">
                        <div className="flex items-center cursor-pointer hover:text-teal-400">
                            <img src="language-icon.png" alt="Language" className="h-5 mr-2" /> {/* Language icon */}
                            <span className=' text-xl font-bold'>English</span>
                        </div>
                        {/* Dropdown */}
                        <ul className="absolute hidden group-hover:block bg-gray-700 mt-2 w-24 rounded shadow-lg">
                            <li className="px-4 py-2 hover:bg-teal-500 cursor-pointer">English</li>
                            <li className="px-4 py-2 hover:bg-teal-500 cursor-pointer">French</li>
                        </ul>
                    </div>

                    {/* Login */}
                    <span className="hover:text-teal-400 cursor-pointer text-xl font-bold">Login</span>

                    {/* Sign Up Button */}
                    <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white transition text-xl">
                        Sign Up
                    </button>
                {/* </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
