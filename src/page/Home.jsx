import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";
import Chatroom from "../components/Chatroom";
import Navbar from "../components/Navbar";
import Tools from "../components/Tools";
import UseServices from "../components/UseServices";
import YouTubeTranslation from "../components/YouTubeTranslation";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="size-full bg-slate-900 min-h-screen px-4">
                {/* <Navbar /> */}

                <div className="min-h-[70vh] inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_120%_at_50%_0%,#000_70%,transparent_100%)] 
                md:[mask-image:radial-gradient(ellipse_80%_90%_at_50%_0%,#000_70%,transparent_100%)] ">
                    <Banner />
                </div>
                <BannerImg />
                <Tools />
                <Chatroom />
                <UseServices />
                <YouTubeTranslation />
            </div>
        </>
    );
};

export default Home;