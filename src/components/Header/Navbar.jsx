import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
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
      <div className=" p-3  bg-fuchsia-900 fixed w-screen">
        <nav className="nav flex items-center justify-around content-center">
          <h4 className="logo text-amber-500 text-3xl font-serif ">
            <Link to="/">Logo</Link>
          </h4>
          <ul className="flex align-items content-center justify-between">
            {links.map((link) => (
              <li key={link.id} className="m-1">
                <NavLink
                  activeClassName="active"
                  className="bg-slate-300 rounded-md p-2"
                  to={link.url} // Use link.url instead of link.to
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="  bg-yellow-600 text-slate-100 rounded-md p-2 text-center">
            <Link to="login">Login</Link>
          </button>
        </nav>
      </div>
    </>
  );
}
