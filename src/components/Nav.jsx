
import { useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {


    const [isOpen, setIsOpen] = useState(false);

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
        <nav className={`fixed w-full p-8 top-0 z-50 transition-all duration-300 ${navbarBg} text-white`}>
            {/* <div className="container px-6 py-4 mx-auto"> */}
                <div className="lg:flex lg:items-center">
                    <div className="flex items-center justify-between">
                            <svg className="h-[32px] w-[170px]" viewBox="0 0 184 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.7997 7.09375L56.0612 18.7506L54.2888 22.9254H54.0492L52.2148 18.7506L46.4184 7.09375H42.002V27.2221H45.2451V14.8753L45.1253 11.9627H45.3649L46.6044 14.8753L52.1611 26.0302H56.0674L61.6242 14.8753L62.8636 11.9627H63.1032L62.9834 14.8753V27.2221H66.2162V7.09375H61.7997Z" fill="white"></path><path d="M166.311 9.0102C165.594 7.74185 164.003 6.92383 162.249 6.92383C160.496 6.92383 158.903 7.75011 158.188 9.0102L148.015 27.0522H152.559L155.482 21.8259H155.493L160.568 12.7822L162.051 9.92739H162.355L163.838 12.7822L168.913 21.8259L171.836 27.0522H176.466L166.311 9.0102Z" fill="#2D9F89"></path><path d="M130.848 23.4893H127.03L125.101 26.8668H141.502L131.841 9.0438C131.122 7.70935 130.286 7.09375 129.203 7.09375C128.121 7.09375 127.259 7.71347 126.503 9.05825L116.588 26.8668H120.699L129.104 11.7148L133.064 19.1513C133.574 20.0892 134.149 21.1592 134.533 21.8079L135.644 23.6959L137.03 23.5472C136.26 23.4893 131.868 23.4893 130.848 23.4893Z" fill="white"></path><path d="M178.595 7.44531V26.8631H183.098V7.44531H178.595Z" fill="#2D9F89"></path><path d="M82.5234 7.49902V10.486C85.4877 11.333 87.4811 13.9358 87.4811 17.2905C87.4811 21.4033 84.4961 24.3883 80.3833 24.3883C76.2704 24.3883 73.2855 21.4033 73.2855 17.2905C73.2855 13.816 75.4173 11.145 78.5593 10.3993V7.44531C73.4631 8.1993 69.9287 12.1076 69.9287 17.2905C69.9287 23.0745 74.3245 27.2679 80.3833 27.2679C86.442 27.2679 90.8379 23.0724 90.8379 17.2905C90.8296 12.2192 87.446 8.36662 82.5234 7.49902Z" fill="white"></path><path d="M108.941 7.59605V21.2525L97.8208 7.59605H95.0507V26.9849H98.3559V13.3243L109.476 26.9787H112.246V7.58984L108.941 7.59605Z" fill="white"></path><path d="M18.1944 10.9341V14.3901C18.1933 15.4986 17.7525 16.5614 16.9686 17.3453C16.1848 18.1291 15.1219 18.57 14.0134 18.5711C13.0688 18.5714 12.1601 18.2096 11.4742 17.5602C10.7883 16.9108 10.3774 16.0232 10.3261 15.08L10.1815 12.4421H10.9045C11.0708 12.4421 11.2302 12.376 11.3478 12.2584C11.4654 12.1409 11.5314 11.9814 11.5314 11.8151C11.5314 11.6489 11.4654 11.4894 11.3478 11.3718C11.2302 11.2542 11.0708 11.1882 10.9045 11.1882H10.1113L10.0947 10.8845C10.0606 10.3386 10.1384 9.79144 10.3235 9.2767C10.5086 8.76196 10.797 8.29051 11.171 7.89132C11.5841 7.45658 12.0916 7.12261 12.6543 6.91522C13.217 6.70784 13.8198 6.63258 14.4162 6.69526C15.4588 6.80922 16.4221 7.30563 17.12 8.08856C17.8178 8.87149 18.2006 9.88534 18.1944 10.9341Z" fill="#2D9F89"></path><path d="M25.0708 0.0585938H0.0509033V31.9553H31.9455V10.0071L25.0708 0.0585938ZM9.02229 15.1528L8.78887 10.8892C8.78887 10.7941 8.78887 10.697 8.78887 10.6C8.78887 10.5029 8.78887 10.412 8.78887 10.319C8.2551 11.3487 7.98739 12.4956 8.0101 13.6552C8.0101 15.3718 8.48934 17.2619 9.23093 19.2718L9.27431 19.3855V20.8315C9.50707 20.9785 9.68575 21.1972 9.78345 21.4546C9.88116 21.712 9.8926 21.9942 9.81605 22.2587C9.7395 22.5231 9.5791 22.7556 9.35901 22.921C9.13892 23.0864 8.87105 23.1759 8.59572 23.1759C8.3204 23.1759 8.05253 23.0864 7.83244 22.921C7.61235 22.7556 7.45195 22.5231 7.3754 22.2587C7.29885 21.9942 7.31029 21.712 7.40799 21.4546C7.5057 21.1972 7.68438 20.9785 7.91714 20.8315V19.6333C7.32841 18.0159 6.6302 15.915 6.6302 13.713C6.61073 12.2846 6.95553 10.8748 7.63207 9.61667C8.00832 8.92776 8.46833 8.28805 9.00164 7.71208C9.63402 5.94848 10.8686 4.46468 12.4878 3.52212C14.1069 2.57957 16.0069 2.23874 17.8527 2.55972C19.6985 2.88069 21.3719 3.84285 22.5778 5.27667C23.7838 6.71049 24.445 8.52397 24.4449 10.3975V20.2613C24.6777 20.4084 24.8563 20.6271 24.9541 20.8845C25.0518 21.1419 25.0632 21.4241 24.9866 21.6885C24.9101 21.953 24.7497 22.1854 24.5296 22.3509C24.3095 22.5163 24.0416 22.6057 23.7663 22.6057C23.491 22.6057 23.2231 22.5163 23.003 22.3509C22.7829 22.1854 22.6225 21.953 22.546 21.6885C22.4694 21.4241 22.4809 21.1419 22.5786 20.8845C22.6763 20.6271 22.855 20.4084 23.0877 20.2613V10.3975C23.0869 9.06528 22.6828 7.7645 21.9288 6.66621C21.1747 5.56792 20.1059 4.72353 18.863 4.24409C17.62 3.76465 16.261 3.6726 14.9648 3.98003C13.6685 4.28746 12.4956 4.97998 11.6003 5.96654C12.3475 5.57618 13.1783 5.37343 14.0213 5.37575C15.4736 5.37902 16.8654 5.95753 17.8922 6.98464C18.9189 8.01176 19.4969 9.40382 19.4996 10.8561V23.5148C19.7317 23.6618 19.9098 23.8802 20.0071 24.1372C20.1045 24.3941 20.1157 24.6757 20.0392 24.9396C19.9626 25.2035 19.8025 25.4354 19.5828 25.6005C19.3631 25.7655 19.0958 25.8547 18.821 25.8547C18.5462 25.8547 18.2789 25.7655 18.0592 25.6005C17.8395 25.4354 17.6794 25.2035 17.6028 24.9396C17.5263 24.6757 17.5376 24.3941 17.6349 24.1372C17.7322 23.8802 17.9103 23.6618 18.1424 23.5148V17.9932C17.6589 18.5507 17.0672 19.0042 16.4032 19.3262C15.7392 19.6483 15.0167 19.8322 14.2795 19.8668V22.3952L13.7817 22.5315C13.6412 22.5708 10.4084 23.5313 8.74962 27.5533C8.9256 27.7738 9.02106 28.0478 9.02023 28.33C9.01983 28.5688 8.95202 28.8027 8.82461 29.0046C8.69719 29.2066 8.51535 29.3685 8.29999 29.4717C8.08463 29.5749 7.84452 29.6152 7.60727 29.588C7.37003 29.5607 7.14529 29.4671 6.95891 29.3178C6.77253 29.1685 6.63209 28.9696 6.55374 28.744C6.47539 28.5184 6.46232 28.2753 6.51603 28.0426C6.56974 27.8099 6.68805 27.5971 6.85735 27.4287C7.02664 27.2603 7.24005 27.1431 7.47301 27.0906C9.00164 23.3206 11.7862 21.854 12.9224 21.3995V19.747C11.861 19.5096 10.9061 18.9327 10.2022 18.1036C9.49842 17.2745 9.08417 16.2386 9.02229 15.1528ZM24.951 25.5516C24.9507 25.6604 24.9269 25.7678 24.8813 25.8666C24.8356 25.9653 24.7692 26.0531 24.6866 26.1238L21.2265 29.1129H15.2174C15.0553 29.3545 14.8198 29.5377 14.5458 29.6353C14.2717 29.733 13.9735 29.7399 13.6951 29.6552C13.4168 29.5705 13.173 29.3986 12.9998 29.1648C12.8266 28.931 12.7331 28.6478 12.7331 28.3568C12.7331 28.0659 12.8266 27.7826 12.9998 27.5489C13.173 27.3151 13.4168 27.1432 13.6951 27.0585C13.9735 26.9738 14.2717 26.9807 14.5458 27.0784C14.8198 27.176 15.0553 27.3592 15.2174 27.6008H20.6647L23.6992 24.9773C23.8355 24.8587 24.0101 24.7933 24.1908 24.7935C24.3 24.7935 24.4078 24.8171 24.5069 24.8628C24.6061 24.9084 24.6941 24.975 24.7651 25.0579C24.8851 25.1943 24.9513 25.3699 24.951 25.5516Z" fill="#2D9F89"></path><path d="M25.0984 0H0V32H32.0082V9.98567L25.0984 0ZM31.8946 31.8967H0.103286V0.107421H25.0447L31.8946 10.0229V31.8967Z" fill="#2D9F89"></path><path d="M13.9245 12.4347H15.6887C15.853 12.4347 16.0106 12.3695 16.1269 12.2532C16.2431 12.137 16.3084 11.9794 16.3084 11.815C16.3084 11.6507 16.2431 11.4931 16.1269 11.3768C16.0106 11.2606 15.853 11.1953 15.6887 11.1953H12.6707V14.5335C12.6707 14.6979 12.7359 14.8555 12.8522 14.9717C12.9684 15.0879 13.126 15.1532 13.2904 15.1532C13.4547 15.1532 13.6124 15.0879 13.7286 14.9717C13.8448 14.8555 13.9101 14.6979 13.9101 14.5335L13.9245 12.4347Z" fill="#000D2D" stroke="black" stroke-width="0.154929" stroke-miterlimit="10"></path><path d="M165.253 23.0938H151.586V27.0434H167.482L165.253 23.0938Z" fill="#2D9F89"></path></svg>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=" text-gray-200 hover:text-gray-400 focus:outline-none  focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 8h16M4 16h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        className={` absolute inset-x-0 z-20 flex-1 w-full transition-all duration-300 ease-in-out bg-black opacity-90 mt-4 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="w-full flex flex-col gap-3 lg:gap-0 lg:flex-row items-start lg:items-center justify-between pl-10">
                            <a className="hover:text-teal-400 cursor-pointer text-xl font-bold">Home</a>
                            <a className="relative group">
                                <span className="hover:text-teal-400 text-slate-300 cursor-pointer text-xl font-bold flex items-center gap-2">AI Services <FaAngleDown /></span>

                            </a>
                            <a className="hover:text-teal-400 text-slate-300 cursor-pointer text-xl font-bold">About Us</a>
                            <a className="hover:text-teal-400 cursor-pointer text-xl font-bold">Pricing</a>
                            <a className="hover:text-teal-400 text-slate-300 cursor-pointer text-xl font-bold">FAQ</a>
                            <a className="hover:text-teal-400 text-slate-300 cursor-pointer text-xl font-bold">Contact Us</a>

                            <div className="relative group">
                                <div className="flex items-center gap-2 cursor-pointer hover:text-teal-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-[24px]" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_4460_1382)"><path d="M6.50197 6.42188H6.20103L5.63867 9.23438H7.06433L6.50197 6.42188ZM17.8768 12.0469C18.1805 12.8625 18.5843 13.5226 19.0312 14.0844C19.4781 13.5226 19.9288 12.8624 20.2324 12.0469H17.8768Z" fill="white" fill-opacity="0.6"></path><path d="M21.8906 4.26562H13.1585L14.9793 18.8756C15.0115 19.4731 14.8481 20.0357 14.4581 20.4762L11.3748 24H21.8906C23.0537 24 23.9999 23.0538 23.9999 21.8906V6.42188C23.9999 5.25872 23.0537 4.26562 21.8906 4.26562ZM21.8906 12.0469H21.7028C21.3027 13.3305 20.6682 14.3348 20.0089 15.1267C20.5254 15.5989 21.0777 15.9862 21.6269 16.4201C21.9297 16.6625 21.9791 17.1047 21.7361 17.4082C21.4941 17.7113 21.0502 17.7604 20.748 17.5174C20.1513 17.0464 19.5912 16.6522 19.0312 16.1383C18.4711 16.6522 17.9579 17.0464 17.3613 17.5174C17.0591 17.7604 16.6151 17.7113 16.3732 17.4082C16.1301 17.1047 16.1795 16.6625 16.4823 16.4201C17.0315 15.9862 17.5369 15.5989 18.0535 15.1267C17.3941 14.3349 16.8065 13.3305 16.4065 12.0469H16.2187C15.83 12.0469 15.5156 11.7324 15.5156 11.3438C15.5156 10.9551 15.83 10.6406 16.2187 10.6406H18.3281V9.9375C18.3281 9.54886 18.6425 9.23438 19.0312 9.23438C19.4198 9.23438 19.7343 9.54886 19.7343 9.9375V10.6406H21.8906C22.2792 10.6406 22.5937 10.9551 22.5937 11.3438C22.5937 11.7324 22.2792 12.0469 21.8906 12.0469Z" fill="white" fill-opacity="0.6"></path><path d="M11.4452 1.84777C11.314 0.794437 10.4138 0 9.35231 0H2.10938C0.946219 0 0 0.946219 0 2.10938V17.6719C0 18.835 0.946219 19.7812 2.10938 19.7812H13.1977C13.4028 19.5468 13.5748 19.4 13.582 19.0939C13.5838 19.0172 11.4547 1.92389 11.4452 1.84777ZM8.62238 13.4394C8.24953 13.5161 7.87186 13.2741 7.79498 12.888L7.34559 10.6406H5.35758L4.90819 12.888C4.83267 13.2684 4.46597 13.5183 4.0808 13.4394C3.70041 13.3632 3.45319 12.9931 3.52941 12.612L4.93561 5.58075C5.00152 5.25253 5.28994 5.01562 5.625 5.01562H7.07812C7.41319 5.01562 7.70161 5.25253 7.76752 5.58075L9.17377 12.612C9.24998 12.9931 9.00281 13.3632 8.62238 13.4394ZM8.21536 21.1875L8.33602 22.1522C8.41645 22.7983 8.84573 23.4571 9.55186 23.7861L11.9124 21.1875H8.21536Z" fill="white" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_4460_1382"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                                    <span className=' text-xl font-bold text-slate-300 flex items-center gap-2'>English <FaAngleDown /></span>
                                </div>

                                <ul className="absolute hidden group-hover:block bg-gray-700 mt-2 w-24 rounded shadow-lg">
                                    <li className="px-4 py-2 hover:bg-teal-500 text-slate-300 cursor-pointer">English</li>
                                    <li className="px-4 py-2 hover:bg-teal-500 text-slate-300 cursor-pointer">French</li>
                                </ul>
                            </div>

                            <span className="hover:text-teal-400 cursor-pointer text-xl font-bold text-slate-300">Login</span>

                            <button className="px-5 py-3 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition text-xl">
                                Sign Up
                            </button>



                        </div>
                    </div>
                </div>
            {/* </div> */}
        </nav>
    );
};

export default Nav;
