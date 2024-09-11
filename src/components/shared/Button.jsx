
const Button = ({text}) => {
    return (
        <button className="bg-teal-400 border border-teal-400 rounded-lg px-8 py-3 text-white font-bold text-xl hover:bg-transparent hover:text-teal-400">
            {text}
        </button>
    );
};

export default Button;