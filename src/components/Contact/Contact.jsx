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
      <section className="section-contact min-h-screen bg-slate-50 flex flex-col justify-center items-center">
        <div className="container mx-auto">
          <div className="content-contact flex flex-col items-center text-center">
            <h2 className="text-center capitalize text-4xl text-slate-700 my-4">
              Signup For Newsletter
            </h2>
            <form className="my-4">
              <input
                type="email"
                name="email_subscribe"
                className="w-full md:w-96 border-red-100 shadow-md bg-purple-800 h-10 rounded-sm text-gray-50 px-3 capitalize mb-4"
                placeholder="Your email address here"
              />
              <button className="submit w-full md:w-56 bg-stone-300 h-10 rounded-sm capitalize shadow-md">
                Subscribe
              </button>
            </form>
            <h4 className="title-icons capitalize text-gray-900 text-3xl my-7">
              Get Updates
            </h4>
            <ul className="flex flex-wrap justify-center">
              {icons.map((icon) => (
                <li
                  className="rounded-full h-10 w-10 md:h-14 md:w-14 p-3 m-1 bg-stone-100 shadow-md flex items-center justify-center text-center"
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
