import { NavLink } from "react-router-dom";
const Nav = () => {
  const navItems = [
    { name: "Statistics", path: "statistics" },
    { name: "Applied Jobs", path: "applied-jobs" },
    { name: "Blog", path: "blog" },
  ];
  return (
    <header className="py-2 border-b border-gray-200">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center ">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <NavLink to={item.path}>{item.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">Rayeed Career</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-5">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
                Start Applying
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
