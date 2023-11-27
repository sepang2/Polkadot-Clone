import ChevronDown from "../icons/ChevronDown";
import Logo from "../icons/Logo.svg";

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-10">
      <div className="max-w-7xl h-20 mx-auto flex justify-between items-center py-3 pl-6 pr-2">
        <div className="w-40">
          <img src={Logo} />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex px-2 py-4 gap-8 font-inter font-bold text-sm">
            <button className="flex items-center px-2 py-4 hover:text-polkadot-pink">
              Ecosystem
              <span className="ml-2">
                <ChevronDown />
              </span>
            </button>
            <button className="flex items-center px-2 py-4 hover:text-polkadot-pink">
              Features
              <span className="ml-2">
                <ChevronDown />
              </span>
            </button>
            <button className="flex items-center px-2 py-4 hover:text-polkadot-pink">
              Development
              <span className="ml-2">
                <ChevronDown />
              </span>
            </button>
            <button className="flex items-center px-2 py-4 hover:text-polkadot-pink">
              About
              <span className="ml-2">
                <ChevronDown />
              </span>
            </button>
          </div>
        </div>
        <button className="bg-polkadot-pink rounded-full px-4 py-2 hover:bg-[#140523] transition-all duration-300">
          <span className="text-white text-sm font-inter font-bold">
            Use Polkadot
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
