import ArtistImage from "../../assets/artist-image.png";
const Artist = () => {
  return (
    <>
      <div className="section-artist h-screen  grid grid-cols-1 content-center bg-fuchsia-800">
        <h2 className="text-center text-3xl text-amber-400 font-mono font-bold">
          {" "}
          Our Halloween s Artist
        </h2>
        <div className="sides mx-96 flex justify-center items-center  place-items-stretch ">
          <div className="side-left flex flex-row items-center justify-center">
            <div className="box-img w-64">
              <img src={ArtistImage} alt="" />
            </div>
            <div className="text-artist  w-96">
              <h3 className="title-artist text-gray-50 font-mono text-xl">
                DJ Remerson Huke Lead DJ On Deadpoll
              </h3>
              <p className=" text-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                explicabo alias, exercitationem deserunt quisquam nisi fugit
                iusto sed libero at totam culpa vitae nemo eligendi impedit
                corporis quibusdam modi. Tempora.
              </p>
              <ul className="list-social ">
                <li></li>
              </ul>
            </div>
          </div>
          <div className="side-right flex flex-row items-center justify-center">
            <div className="box-img w-64">
              <img src={ArtistImage} alt="" />
            </div>
            <div className="text-artist  w-96">
              <h3 className="title-artist text-gray-50 font-mono text-xl">
                DJ Remerson Huke Lead DJ On Deadpoll
              </h3>
              <p className=" text-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                explicabo alias, exercitationem deserunt quisquam nisi fugit
                iusto sed libero at totam culpa vitae nemo eligendi impedit
                corporis quibusdam modi. Tempora.
              </p>
              <ul className="list-social ">
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;
