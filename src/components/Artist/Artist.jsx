import ArtistImage from "../../assets/artist-image.png";

const Artist = () => {
  return (
    <>
      <div className="section-artist min-h-screen bg-fuchsia-800 flex flex-col justify-center items-center">
        <h2 className="text-center text-3xl text-amber-400 font-mono font-bold">
          Our Halloween Artist
        </h2>
        <div className="sides mx-4 md:mx-24 lg:mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="side-left flex flex-col md:flex-row items-center justify-center   p-4 rounded-md">
            <div className="box-img w-48 md:w-64">
              <img src={ArtistImage} alt="" className="w-full h-auto" />
            </div>
            <div className="text-artist mt-4 md:mt-0 md:w-96 text-center md:text-left">
              <h3 className="title-artist text-gray-100 font-mono text-xl">
                DJ Remerson Huke - Lead DJ On Deadpoll
              </h3>
              <p className="text-gray-200 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                explicabo alias, exercitationem deserunt quisquam nisi fugit
                iusto sed libero at totam culpa vitae nemo eligendi impedit
                corporis quibusdam modi. Tempora.
              </p>
              <ul className="list-social mt-4">
                {/* Add your social links here */}
              </ul>
            </div>
          </div>
          <div className="side-right flex flex-col md:flex-row items-center justify-center  p-4 rounded-md">
            <div className="box-img w-48 md:w-64">
              <img src={ArtistImage} alt="" className="w-full h-auto" />
            </div>
            <div className="text-artist mt-4 md:mt-0 md:w-96 text-center md:text-left">
              <h3 className="title-artist text-gray-100 font-mono text-xl">
                DJ Remerson Huke - Lead DJ On Deadpoll
              </h3>
              <p className="text-gray-200 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                explicabo alias, exercitationem deserunt quisquam nisi fugit
                iusto sed libero at totam culpa vitae nemo eligendi impedit
                corporis quibusdam modi. Tempora.
              </p>
              <ul className="list-social mt-4">
                {/* Add your social links here */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;
