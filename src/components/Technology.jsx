import TechnologyCard from "./TechnologyCard";

const Technology = () => {
  return (
    <section className="bg-white text-black">
      Technology
      <div className="max-w-7xl pb-18 mx-auto px-6">
        <div className="bg-[#E6EAF6] grid grid-cols-3 mb-10 gap-4">
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
        </div>
      </div>
      <div className="bg-blue-100 mx-auto max-w-xl text-center min-h-screen">
        <h2 className="text-4xl mb-4 font-unbounded font-bold">
          Learn more about Polkadot's technology
        </h2>
        <button className="bg-black text-white mt-4 font-semibold rounded-full px-5 py-4 hover:bg-polkadot-pink transition-all duration-300">
          Discover Polkadot
        </button>
      </div>
    </section>
  );
};

export default Technology;
