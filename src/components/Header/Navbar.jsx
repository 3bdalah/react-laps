import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      text: "home",
      url: "/",
    },
    {
      id: 2,
      text: "about",
      url: "/about",
    },
    {
      id: 3,
      text: "contact",
      url: "/contact",
    },
    {
      id: 4,
      text: "artist",
      url: "/artist",
    },
  ];

  return (
    <>
      <div className="bg-fuchsia-900">
        <nav className="container mx-auto py-3 flex items-center justify-between">
          <h4 className="logo text-amber-500 text-3xl font-serif">
            <Link to="/">Logo</Link>
          </h4>
          <ul className="hidden md:flex space-x-4">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  activeClassName="active"
                  className="text-slate-100 capitalize hover:bg-yellow-500 rounded-sm flex items-center justify-center content-center  hover:text-slate-100 bg-yellow-600rounded-md p-2 text-center"
                  to={link.url}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="md:hidden bg-yellow-600 text-slate-100 rounded-md p-2 text-center">
            Menu
          </button>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
