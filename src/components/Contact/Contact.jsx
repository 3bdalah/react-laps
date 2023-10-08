const Contact = () => {
  const icons = [
    {
      id: 1,
      text: "fa fa-facebook",
    },
    {
      id: 2,
      text: "fa fa-linkedin",
    },
    {
      id: 3,
      text: "fa fa-google",
    },
    {
      id: 4,
      text: "fa fa-twitter",
    },
  ];
  return (
    <>
      <section className="section-contact h-screen flex flex-col justify-center items-center align-middle bg-slate-50">
        <div className="container">
          <div className="content-contact flex  items-center flex-col  content-around ">
            <h2 className="text-center capitalize text-4xl text-slate-700">
              Signup For Newsletter
            </h2>
            <form>
              <input
                type="email"
                name="email_subscribe"
                className="my-10 w-96 border-red-100  shadow-md  bg-purple-800 h-10 rounded-sm text-gray-50 ps-3 capitalize"
                placeholder="your email address here"
              />
              <button className="submit w-56 bg-stone-300 h-10 rounded-sm capitalize shadow-md ">
                subscribe
              </button>
            </form>
            <h4 className="title-icons capitalize text-gray-900 text-3xl my-7">
              get update
            </h4>
            <ul className="flex  content-center items-center place-items-center justify-items-center justify-center">
              {icons.map((icon) => (
                <li
                  className=" rounded-md h-10 p-3 m-1 bg-slate-300 flex content-center text-center "
                  key={icon.id}
                >
                  <i className={icon.text}></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
