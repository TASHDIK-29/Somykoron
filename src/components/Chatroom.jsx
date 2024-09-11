import Button from "./shared/Button";

const Chatroom = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row mt-28">
            <div className="lg:w-3/5 flex justify-center items-center">
                <div className="flex flex-col items-start justify-start space-y-12 lg:w-3/4 mx-auto">
                    <h1 className="text-3xl lg:text-5xl font-semibold text-white">Connect Globally with <br /> AI-Powered Chatroom</h1>
                    <p className="text-xl lg:text-2xl font-semibold text-slate-500">Connect globally with our Chatroom feature, using <br /> AI translation for seamless and meaningful <br /> conversations.</p>

                    <div className="space-y-7">
                        <div className="flex gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M11.759 0.25C10.1354 9.0693 8.81923 10.3854 0 12.009C8.8193 13.6327 10.1354 14.9488 11.759 23.7681C13.3827 14.9488 14.6988 13.6327 23.5181 12.009C14.6988 10.3854 13.3826 9.0693 11.759 0.25ZM24.5217 16.7945C23.4893 22.4032 22.6521 23.2403 17.0434 24.2728C22.6521 25.3053 23.4893 26.1424 24.5217 31.7511C25.5542 26.1424 26.3914 25.3052 31.9999 24.2728C26.3912 23.2403 25.5542 22.4032 24.5217 16.7945Z" fill="#5AC2AC"></path></svg>
                            <h3 className="text-white font-semibold text-xl">Chat with people worldwide in your native <br /> language.</h3>
                        </div>
                        <div className="flex gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M11.759 0.25C10.1354 9.0693 8.81923 10.3854 0 12.009C8.8193 13.6327 10.1354 14.9488 11.759 23.7681C13.3827 14.9488 14.6988 13.6327 23.5181 12.009C14.6988 10.3854 13.3826 9.0693 11.759 0.25ZM24.5217 16.7945C23.4893 22.4032 22.6521 23.2403 17.0434 24.2728C22.6521 25.3053 23.4893 26.1424 24.5217 31.7511C25.5542 26.1424 26.3914 25.3052 31.9999 24.2728C26.3912 23.2403 25.5542 22.4032 24.5217 16.7945Z" fill="#5AC2AC"></path></svg>
                            <h3 className="text-white font-semibold text-xl">Utilize AI-powered translation for smooth <br /> communication.</h3>
                        </div>
                    </div>

                    <Button text={"Try it for free"} />
                </div>
            </div>
            <div className="lg:w-2/5">
                <img src="https://mona-ai.mn/chatroom.png" alt="img" />
            </div>
        </div>
    );
};

export default Chatroom;