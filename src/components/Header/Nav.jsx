import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Statistics", path: "statistics" },
    { name: "All Jobs", path: "/", hash: "#featured-jobs" },
    { name: "Applied Jobs", path: "applied-jobs" },
    { name: "Blog", path: "blog" },
  ];

  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#featured-jobs") {
      setTimeout(() => {
        const element = document.querySelector("#featured-jobs");
        if (element) {
          const headerOffset = 100; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100); // Small delay to ensure DOM is fully loaded
    }
  }, [location]);

  const handleNavClick = (e, item) => {
    if (item.hash) {
      e.preventDefault();
      navigate(item.path + item.hash);
    }
  };

  return (
    <header className="py-2 border-b bg-violet-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <div className="navbar">
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
              <Link
                to="/"
                className="text-sm md:text-3xl cursor-pointer font-bold uppercase"
              >
                Rayeed Career
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-5">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      onClick={(e) => handleNavClick(e, item)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-end">
              <Link
                to="/applied-jobs"
                className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
              >
                Start Applying
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
