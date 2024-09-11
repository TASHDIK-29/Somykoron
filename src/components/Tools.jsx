import Button from "./shared/Button";
import ToolButton from "./shared/ToolButton";

const Tools = () => {
    return (
        <div className="space-y-12 mt-10">
            <h1 className="text-2xl lg:text-5xl font-semibold text-white text-center">MONA AI: Unleashing 5 Groundbreaking AI Tools</h1>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <Button text={"Chatroom"} />
                <ToolButton text={"Youtube Translation"} />
                <ToolButton text={"Ai Video Subtitles"} />
                <ToolButton text={"Image Generation"} />
                <ToolButton text={"Ai Assistant"} />
            </div>
        </div>
    );
};

export default Tools;