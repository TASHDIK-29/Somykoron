import Button from "./shared/Button";

const YouTubeTranslation = () => {
    return (
        <div className="mt-20">
            <h1 className="text-5xl font-semibold text-white text-center">YouTube Translation: Two Tiers to Suit Your Needs</h1>

            <div className="flex mt-20 px-4">
                <div className="w-3/5 flex flex-col items-start justify-center">
                    <h3 className="text-5xl font-semibold text-white">Best Translation</h3>
                    <p className="text-2xl font-semibold text-slate-400 mt-8 mb-8 w-4/5">Experience top-tier YouTube translation with our Best Translation service. Utilizing advanced AI algorithms, this option delivers highly accurate subtitles and dubbing in Mongolian. Ideal for professional use, academic content, or when precision is paramount.</p>

                    <Button text={"Try Now"} />
                </div>
                <div className="w-2/5">
                    <img src="https://mona-ai.mn/youtube-service-right.png" alt="img" />
                </div>
            </div>
            <div className="flex flex-row-reverse mt-20 px-4">
                <div className="w-3/5 flex flex-col items-center justify-center">
                    <div className="pl-24">
                        <h3 className="text-5xl font-semibold text-white">Standard Translation</h3>
                        <p className="text-2xl font-semibold text-slate-400 mt-8 mb-8 w-4/5">Our Standard Translation service offers a cost-effective way to enjoy YouTube videos in Mongolian. While it may occasionally have minor inaccuracies, it provides a good overall understanding of the content. Perfect for casual viewing and when quick, budget-friendly translation is needed.</p>

                        <Button text={"Try Now"} />
                    </div>
                </div>
                <div className="w-2/5">
                    <img src="https://mona-ai.mn/youtube-service-left.png" alt="img" />
                </div>
            </div>
        </div>
    );
};

export default YouTubeTranslation;