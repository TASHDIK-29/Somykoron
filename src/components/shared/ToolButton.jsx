
const ToolButton = ({text}) => {
    return (
        <button className="hover:bg-teal-400 rounded-lg px-6 py-3 hover:text-white font-bold text-xl bg-gray-950 text-slate-400">
            {text}
        </button>
    );
};

export default ToolButton;