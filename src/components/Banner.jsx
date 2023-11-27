import CloseIcon from "../icons/CloseIcon";
import RightArrow from "../icons/RightArrow.svg";

const Banner = () => {
  return (
    <div className="bg-[#E6EAF6]">
      <div className="mb-0 font-inter text-sm text-gray-900 opacity-100">
        Have you received DOT back from crowdloans? Stake them easily and
        trustlessly in a native nomination pool.
        <span>
          Find out more
          <svg>{RightArrow}</svg>
        </span>
      </div>
      <button>
        <CloseIcon />
      </button>
    </div>
  );
};

export default Banner;
