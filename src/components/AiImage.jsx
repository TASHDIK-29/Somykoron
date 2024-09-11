
const AiImage = () => {
    return (
        <div className="mt-28">
            <div>
                <h1 className="text-3xl lg:text-5xl font-semibold text-white text-center">Uniquely Mongolian: AI-Generated Faces</h1>
                <p className="lg:w-1/2 mx-auto text-center text-xl font-semibold text-slate-400 mt-8">Experience the power of AI tailored specifically for Mongolia with our innovative image generation model. Trained on thousands of Mongolian faces, this tool creates stunningly realistic and diverse portraits that truly represent the unique features of our people.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-3 gap-8 mt-10">
                <img className="rounded-3xl lg:col-span-2 lg:row-span-2" src="https://mona-ai.mn/rec-1.jpg" alt="img" />
                <img className="rounded-3xl" src="https://mona-ai.mn/rec-3.jpg" alt="img" />
                <img className="rounded-3xl" src="https://mona-ai.mn/rec-4.jpg" alt="img" />
                <img className="rounded-3xl lg:col-span-2 lg:row-span-2" src="https://mona-ai.mn/rec-6.jpg" alt="img" />
                <img className="rounded-3xl lg:col-span-2 lg:row-span-2" src="https://mona-ai.mn/rec-5.jpg" alt="img" />
                <img className="rounded-3xl lg:col-span-2" src="https://mona-ai.mn/rec-2.jpg" alt="img" />
                <img className="rounded-3xl" src="https://mona-ai.mn/rec-7.jpg" alt="img" />
                <img className="rounded-3xl" src="https://mona-ai.mn/rec-8.jpg" alt="img" />
            </div>

            <div className="h-32"></div>
        </div>
    );
};

export default AiImage;