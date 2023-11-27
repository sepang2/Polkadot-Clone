const Blockspace = () => {
  return (
    <section className="bg-white text-black max-w-7xl mx-auto pt-14 pb-8">
      <div className="relative flex col-start-1">
        <h1 className="mb-6 font-unbounded text-[56px] font-bold">
          The blockspace ecosystem for boundless innovation
        </h1>
        <p className="font-inter text-lg max-w-xl mx-auto mb-10">
          Get your Web3 ideas to market fast with economics that work for you
        </p>
        <div>
          <div>
            <button className="font-inter bg-black text-white mt-4 font-bold rounded-full px-5 py-4 hover:bg-polkadot-pink transition-all duration-300 ">
              Learn about blockspace
            </button>
          </div>
          <div>
            <img src="./images/hero.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blockspace;
