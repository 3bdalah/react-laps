const About = () => {
  return (
    <>
      <section className="section-about  p-4 min-h-screen flex flex-col justify-center items-center text-center">
        <div className="container mx-auto">
          <div className="content-about">
            <h2 className="text-amber-500 text-4xl font-serif mb-4">
              About The Party
            </h2>
            <p className="description-first md:w-3/5 mx-auto text-stone-800 font-mono">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt.
            </p>
            <p className="description-second md:w-3/5 mx-auto text-stone-800 font-mono">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <button className="shadow-md rounded btn-know-more mt-4 px-6 py-2 bg-amber-500 text-slate-100 font-mono font-bold">
              Know More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
