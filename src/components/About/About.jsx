export default function About() {
  return (
    <>
      <section className="section-about bg-fuchsia-800 p-4  h-screen  flex col-auto decoration-clone align-middle items-center text-center">
        <div className="container">
          <div className="content-about ">
            <h2 className=" text-amber-500 text-4xl font-serif text-center ">
              {" "}
              About The Party
            </h2>
            <p className="description-first  w-3/5 m-auto text-slate-100 font-mono">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt.
            </p>
            <p className="description-second w-3/5 m-auto text-slate-100 font-mono">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <button className="btn-know-more"></button>
          </div>
        </div>
      </section>
    </>
  );
}
