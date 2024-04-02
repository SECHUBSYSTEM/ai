import Link from "next/link";

const Button = () => {
  return (
    <>
      <div className="flex items-center justify-center text-center">
        <Link
          className="group bg-transparent border-2 border-secondary py-2 px-5 font-rubik rounded-xl transition-all duration-300 text-black font-bold hover:text-gray-50 hover:bg-secondary"
          href="/"
        >
          <button>Get Started</button>
          <span className="inline-block ml-3 font-extrabold transition-transform duration-300 group-hover:translate-x-2 motion-reduce:transform-none">
            &rArr;
          </span>
        </Link>
      </div>
    </>
  );
};

export default Button;
