import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { FaAlignCenter, FaUserAlt, FaWindowClose } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="py-7">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-10" src={logo} alt="site logo" />
          <h2 className="font-semibold text-xl">
            FoodieCrush <span className="text-warning">Hunter</span>
          </h2>
        </div>
        <ul className="hidden lg:flex space-x-4 md:space-x-10">
          <NavLink
            className={({ isActive }) => (isActive ? "text-info" : "default")}
            to="/"
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-info" : "default")}
            to="/login"
          >
            <li>
              {user ? (
                <div className="flex items-center space-x-2">
                  <FaUserAlt
                    title={user.email.slice(0, 5)}
                    className="text-lg"
                  ></FaUserAlt>
                  <img
                    className="w-10"
                    title={user?.displayName}
                    src={user?.photoURL}
                    alt=""
                  />
                  <span onClick={handleLogOut} className="ml-2 cursor-pointer">
                    LogOut
                  </span>
                </div>
              ) : (
                <Link className="" to="/login">
                  Log-In
                </Link>
              )}
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-info" : "default")}
            to="/blog"
          >
            <li>Blog</li>
          </NavLink>
        </ul>
        {/* responsive for Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setMenuOpen(true)}
          >
            <FaAlignCenter className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <img className="w-10" src={logo} alt="site logo" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                        FoodieCrush <br />{" "}
                        <span className="text-warning">Hunter</span>
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FaWindowClose className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    
                    <li>
                      {user ? (
                        <div className="flex items-center space-x-2">
                          <FaUserAlt
                            title={user.email.slice(0, 5)}
                            className="text-lg"
                          ></FaUserAlt>
                          <img
                            className="w-10"
                            title={user?.displayName}
                            src={user?.photoURL}
                            alt=""
                          />
                          <span
                            onClick={handleLogOut}
                            className="ml-2 cursor-pointer font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                          >
                            LogOut
                          </span>
                        </div>
                      ) : (
                        <Link className="" to="/login">
                          Log-In
                        </Link>
                      )}
                    </li>

                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
