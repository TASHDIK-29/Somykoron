import { FaUserPlus, FaTools, FaSmile, FaBookmark } from 'react-icons/fa';


const UseServices = () => {
    return (
        <div className="mt-48">
            <div className="text-center space-y-6 lg:px-10">
                <h1 className="text-3xl lg:text-5xl font-bold text-white">How to Use Services on mona-ai.mn</h1>
                <p className="text-xl font-semibold text-slate-500">MONA Ai services are designed to be user friendly and easy to use for users <br /> of all ages.</p>
            </div>

            <div className=" text-white py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none" class="hidden lg:block"><circle cx="33" cy="33" r="33" fill="#2D9F89"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M29.625 19.8514C21.8585 19.8514 15.5625 26.1474 15.5625 33.9139C15.5625 41.6804 21.8585 47.9764 29.625 47.9764C37.3915 47.9764 43.6875 41.6804 43.6875 33.9139C43.6875 33.6766 43.6815 33.4407 43.6699 33.2063C43.5823 33.2091 43.4945 33.211 43.4062 33.211C42.7137 33.211 42.0413 33.1244 41.3993 32.9619C41.4243 33.276 41.4376 33.5934 41.4376 33.914C41.4376 36.7488 40.4386 39.35 38.7741 41.3858C37.345 37.7291 33.788 35.1383 29.6251 35.1383C25.4631 35.1383 21.906 37.7296 20.4761 41.3859C18.8114 39.35 17.8125 36.7487 17.8125 33.9139C17.8125 27.39 23.1011 22.1014 29.625 22.1014C31.7147 22.1014 33.6772 22.6447 35.3801 23.5968C35.5163 22.8435 35.7584 22.1134 36.0994 21.428C34.1614 20.4211 31.9599 19.8514 29.625 19.8514ZM29.6251 24.5975C32.3673 24.5975 34.5903 26.8205 34.5903 29.5626C34.5903 32.3048 32.3673 34.5278 29.6251 34.5278C26.883 34.5278 24.66 32.3048 24.66 29.5626C24.66 26.8205 26.883 24.5975 29.6251 24.5975ZM43.4062 18.0234C47.2895 18.0234 50.4375 21.1715 50.4375 25.0547C50.4375 28.938 47.2895 32.0859 43.4062 32.0859C39.523 32.0859 36.375 28.938 36.375 25.0547C36.375 21.1715 39.523 18.0234 43.4062 18.0234ZM42.1809 26.28H39.8483C39.1735 26.28 38.623 25.7295 38.623 25.0547C38.623 24.3799 39.1735 23.8294 39.8483 23.8294H42.1809V21.4967C42.1809 20.8219 42.7315 20.2714 43.4062 20.2714C44.081 20.2714 44.6316 20.8219 44.6316 21.4967V23.8294H46.9643C47.6391 23.8294 48.1896 24.38 48.1896 25.0548C48.1896 25.7295 47.6391 26.2801 46.9643 26.2801H44.6316V28.6128C44.6316 29.2876 44.081 29.8381 43.4062 29.8381C42.7315 29.8381 42.1809 29.2876 42.1809 28.6128V26.28Z" fill="white"></path></svg>
                        </div>
                        <h2 className="text-3xl font-bold">Create Account</h2>
                        <p className="text-lg font-semibold text-slate-500 text-start">To create an account on Mazala.AI, the platform for unleashing your creativity and exploring the depths of imagination</p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none" class="hidden lg:block"><circle cx="33" cy="33" r="33" fill="#FFB806"></circle><g clip-path="url(#clip0_4460_1421)"><path d="M48.8499 38.4065C46.998 36.5532 44.4285 35.7681 41.1285 36.6525L29.3611 24.8732L29.5167 24.2851C30.1944 21.7422 29.4621 19.0088 27.6061 17.1528C25.7164 15.2616 23.0299 14.5677 20.4892 15.2656C20.3111 15.3145 20.149 15.4093 20.0191 15.5404C19.8892 15.6716 19.796 15.8346 19.7488 16.0131C19.7018 16.1916 19.7025 16.3793 19.7507 16.5574C19.7989 16.7355 19.8931 16.8979 20.0237 17.0283L22.8571 19.8617C23.6854 20.6921 23.6773 22.022 22.8591 22.8424C22.0474 23.6563 20.6829 23.655 19.8744 22.8444L17.0404 20.0102C16.9098 19.8796 16.7472 19.7856 16.5688 19.7375C16.3905 19.6895 16.2026 19.6892 16.0241 19.7367C15.8457 19.7841 15.6828 19.8776 15.5519 20.0078C15.4209 20.138 15.3265 20.3003 15.278 20.4785C14.5902 22.9914 15.2668 25.6945 17.1656 27.5933C19.0166 29.4457 21.5829 30.2336 24.8849 29.3473L36.6532 41.1266C35.775 44.4256 36.5325 46.9703 38.4092 48.847C40.3013 50.7405 42.9891 51.4293 45.5243 50.7337C45.7024 50.6848 45.8645 50.5901 45.9944 50.4589C46.1244 50.3277 46.2176 50.1647 46.2648 49.9862C46.3119 49.8077 46.3112 49.62 46.263 49.4418C46.2148 49.2637 46.1206 49.1013 45.99 48.9709L43.1572 46.1382C42.3289 45.3078 42.3369 43.9777 43.1552 43.1575C43.9771 42.3398 45.3385 42.3528 46.1399 43.1564L48.9741 45.9898C49.1047 46.1204 49.2673 46.2144 49.4457 46.2624C49.624 46.3104 49.8118 46.3107 49.9903 46.2632C50.1687 46.2158 50.3316 46.1223 50.4625 45.9921C50.5934 45.8619 50.6879 45.6996 50.7364 45.5215C51.4241 43.0091 50.7477 40.3052 48.8499 38.4065Z" fill="white"></path><path d="M26.2882 33.7442L16.234 43.7996C14.5887 45.445 14.5887 48.1206 16.234 49.7659C17.8794 51.4113 20.5551 51.4113 22.2004 49.7659L32.2543 39.7108L26.2882 33.7442ZM21.2096 46.4928C20.7975 46.9049 20.1303 46.9049 19.7182 46.4928C19.3063 46.0809 19.3063 45.4135 19.7182 45.0015L26.1153 38.6033C26.5272 38.1913 27.1947 38.1913 27.6066 38.6033C28.0186 39.0152 28.0186 39.6826 27.6066 40.0946L21.2096 46.4928ZM50.6898 17.1272L48.8716 15.309C48.7053 15.1426 48.4882 15.0367 48.2547 15.0079C48.0213 14.9792 47.785 15.0292 47.5833 15.1502L41.9901 18.5057C41.4016 18.8588 41.3017 19.6707 41.7869 20.1559L42.2321 20.601L35.1319 27.6721L38.1156 30.6558L45.2158 23.5847L45.8429 24.2119C46.3281 24.697 47.1401 24.5972 47.4931 24.0087L50.8486 18.4155C50.9695 18.2138 51.0196 17.9774 50.9908 17.744C50.962 17.5106 50.8561 17.2935 50.6898 17.1272Z" fill="white"></path></g><defs><clipPath id="clip0_4460_1421"><rect width="36" height="36" fill="white" transform="translate(15 15)"></rect></clipPath></defs></svg>
                        </div>
                        <h2 className="text-3xl font-bold">Select Your AI Tool</h2>
                        <p className="text-lg font-semibold text-slate-500 text-start">Discover the perfect AI-powered tool tailored to your specific requirements</p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none" class="hidden lg:block"><circle cx="33" cy="33" r="33" fill="#FF6F06"></circle><g clip-path="url(#clip0_4460_1431)"><path d="M16.4103 47.7063C15.6292 46.9253 15.6292 45.659 16.4103 44.8779L28.7988 32.4893C29.5799 31.7083 30.8462 31.7083 31.6273 32.4893L33.5035 34.3656C34.2846 35.1466 34.2846 36.413 33.5035 37.194L21.115 49.5826C20.334 50.3637 19.0676 50.3637 18.2866 49.5826L16.4103 47.7063ZM39.1411 24.9798C38.36 24.1987 37.0936 24.1987 36.3126 24.9799L33.1334 28.1594C32.3525 28.9405 32.3525 30.2068 33.1335 30.9878L35.0107 32.8649C35.7917 33.6459 37.0579 33.646 37.839 32.865L41.0185 29.6858C41.7997 28.9048 41.7997 27.6384 41.0186 26.8573L39.1411 24.9798ZM24.6852 28.0176C25.0645 28.7112 26.0606 28.7112 26.4399 28.0176L28.1474 24.8957L31.2693 23.1883C31.9628 22.809 31.9628 21.8129 31.2693 21.4336L28.1474 19.7261L26.4399 16.6042C26.0606 15.9107 25.0645 15.9107 24.6852 16.6042L22.9778 19.7261L19.8559 21.4336C19.1623 21.8129 19.1623 22.809 19.8559 23.1883L22.9778 24.8957L24.6852 28.0176ZM44.8203 26.3562L47.0046 23.3623L49.3942 22.0555C50.0877 21.6762 50.0877 20.6801 49.3942 20.3007L47.0046 18.9939L45.6977 16.6042C45.3184 15.9107 44.3223 15.9107 43.9429 16.6042L42.636 18.9939L40.2464 20.3007C39.5529 20.6801 39.5529 21.6762 40.2464 22.0555L42.636 23.3623L44.8203 26.3562ZM45.6977 33.0299C45.3184 32.3364 44.3223 32.3364 43.9429 33.0299L42.636 35.4196L40.2464 36.7265C39.5529 37.1058 39.5529 38.1019 40.2464 38.4812L42.636 39.788L43.9429 42.1777C44.3223 42.8712 45.3184 42.8712 45.6977 42.1777L46.864 40.045C46.9558 39.8772 47.0938 39.7393 47.2616 39.6475L49.3942 38.4812C50.0877 38.1019 50.0877 37.1058 49.3942 36.7265L47.0046 35.4196L45.6977 33.0299Z" fill="white"></path></g><defs><clipPath id="clip0_4460_1431"><rect width="36" height="36" fill="white" transform="translate(15 15)"></rect></clipPath></defs></svg>
                        </div>
                        <h2 className="text-3xl font-bold">Enjoy the Result</h2>
                        <p className="text-lg font-semibold text-slate-500 text-start">From enjoying any video in your native tongue to leveraging our powerful AI research assistant, you can be confident in the quality and effectiveness of our services. We are committed to delivering results that exceed your expectations, regardless of which tool you choose to use.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none" className="hidden lg:block"><circle cx="33" cy="33" r="33" fill="#59CA00"></circle><path d="M43.1699 15H22.8338C21.0416 15 19.5195 16.4455 19.5195 18.3143V48.3845C19.5248 50.7566 22.4221 51.8696 24.0692 50.2045L31.8207 42.4551C32.4419 41.8071 33.5618 41.8071 34.183 42.4551L41.9345 50.2045C43.5824 51.8702 46.4793 50.7555 46.4842 48.3845V18.3143C46.4842 16.4455 44.9621 15 43.1699 15Z" fill="white"></path></svg>
                        </div>
                        <h2 className="text-3xl font-bold">Spread the AI Revolution</h2>
                        <p className="text-lg font-semibold text-slate-500 text-start">Enjoyed our services? Share the power of AI with your network! Help us grow by recommending MONA AI to your friends, family, and colleagues. Your support helps us continue innovating and improving our AI tools for everyone.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseServices;