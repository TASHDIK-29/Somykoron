import Button from "./shared/Button";

const BannerImg = () => {
    return (
        <div className="">
            <img className="w-full rounded-lg" src="https://mona-ai.mn/banner.png" alt="img" />
            <div className="mt-16 flex flex-col items-center">
                <Button text={'Try it for free'} />
            </div>
        </div>
    );
};

export default BannerImg;