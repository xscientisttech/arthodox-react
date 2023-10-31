import React from "react";
import logo from "../assets/images/Frame 168.png";
import { useLocation, useNavigate } from "react-router";
import HamburgerMenu from "./Hamburger";
import NavCart from "./navCart";
import SearchIcon from "./SearchIcon";

const Header = () => {
  const location = useLocation();
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const Navigate = useNavigate();

  return (
    <div className=" bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-12 mx-auto">
        <div>
          <img
            src={logo}
            alt="Arthodox-logo"
            className=" h-7 cursor-pointer"
            onClick={() => Navigate("/")}
          />
        </div>
        <ul className=" flex justify-center gap-10">
          <li
            className={` cursor-pointer py-3 text-lg text-gray-400 border-b-[3px] border-b-transparent hidden md:block ${
              pathMatchRoute("/") &&
              "font-bold text-gray-900 border-b-orange-500"
            }`}
            onClick={() => Navigate("/")}
          >
            Home
          </li>
          <li
            className={` cursor-pointer py-3 text-lg text-gray-400 border-b-[3px] border-b-transparent hidden md:block ${
              pathMatchRoute("/Products") &&
              "border-b-orange-500 font-bold text-gray-900"
            }`}
            onClick={() => Navigate("/Products")}
          >
            Products
          </li>
          <li
            className={`cursor-pointer py-3 text-lg text-gray-400 border-b-[3px] border-b-transparent hidden md:block ${
              pathMatchRoute("/Category") &&
              "border-b-orange-500 font-bold text-gray-900"
            }`}
            onClick={() => Navigate("/Category")}
          >
            Category
          </li>
          <li
            className={`cursor-pointer py-3 text-lg text-gray-400 border-b-[3px] border-b-transparent hidden md:block ${
              pathMatchRoute("/About") &&
              "border-b-orange-500 font-bold text-gray-900"
            }`}
            onClick={() => Navigate("/About")}
          >
            About
          </li>
        </ul>
        <div className="flex justify-center items-center gap-5 text-2xl">
          <SearchIcon/>
          <NavCart/>
        </div>

          <HamburgerMenu />

      </header>
    </div>
  );
};

export default Header;
