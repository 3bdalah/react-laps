import BannerImage from "../../assets/Banner.png";

const Home = () => {
  return (
    <>
      <section className="home-section bg-fuchsia-700 h-screen">
        <div className="container mx-auto h-full flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="box-image w-64 md:w-96">
              <img src={BannerImage} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center p-4">
            <h5 className="text-2xl text-slate-200">31th October 2018</h5>
            <h1 className="text-5xl font-mono text-amber-300 capitalize mt-4">
              Main Title
            </h1>
            <p className="text-slate-200 mt-6 text-center">
              Halloween or Halloween (a contraction of All Hallows Evening) also
              known as Allhalloween, All Hallows Eve or All Saints Eve is a
              celebration observed in a number of countries on 31 October.
            </p>
            <button className="btn-explore rounded-2xl font-mono font-bold mt-8 bg-amber-300 p-2">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
