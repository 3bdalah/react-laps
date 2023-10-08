import BannerImage from "../../assets/Banner.png";
const Home = () => {
  return (
    <>
      <section className="home-section bg-fuchsia-700 bg h-screen">
        <div className="container  ">
          <div className="content-home  h-screen flex align-middle items-center justify-center">
            <div className="image">
              <div className="box-image  w-96">
                <img src={BannerImage} alt="" />
              </div>
            </div>
            <div className="info  w-96 text-center">
              <h5 className="text-2xl text-slate-200">31th octobar 2018</h5>
              <h1 className="text-5xl  font-mono text-amber-300  capitalize">
                main title
              </h1>
              <p className="text-slate-200 mt-10">
                Halloween or Halloween (a contraction of All Hallows Evening)
                also known as Allhalloween, All Hallows Eve or All Saints Eve is
                a celebration observed in a number of countries on 31 October.
              </p>
              <button className="btn-explore  rounded-2xl font-mono font-bold mt-10 bg-amber-300 p-2">
                {" "}
                explore more{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
