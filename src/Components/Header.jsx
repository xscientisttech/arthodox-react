import React from "react";
import logo from "../assets/images/Frame 168.png";
import { useLocation, useNavigate } from "react-router";
import HamburgerMenu from "./Hamburger";
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
            className={` cursor-pointer py-3 text-lg text-gray-400 border-b-[3px] border-b-transparent ${
              pathMatchRoute("/") && "border-b-orange-400 font-bold text-gray-900"
            }`}
            onClick={() => Navigate("/")}
          >
            Home
          </li>
          <li
            className={` cursor-pointer py-3 text-lg text-gray-400 border-b-[3px] border-b-transparent ${
              pathMatchRoute("/Products") && "border-b-orange-400 font-bold text-gray-900"
            }`}
            onClick={() => Navigate("/Products")}
          >
            Products
          </li>
          <li
            className={`cursor-pointer py-3 text-lg text-gray-400 border-b-[3px] border-b-transparent ${
              pathMatchRoute("/Category") && "border-b-orange-400 font-bold text-gray-900"
            }`}
            onClick={() => Navigate("/Category")}
          >
            Category
          </li>
          <li
            className={`cursor-pointer py-3 text-lg text-gray-400 border-b-[3px] border-b-transparent ${
              pathMatchRoute("/About") &&  "border-b-orange-400 font-bold text-gray-900"
            }`}
            onClick={() => Navigate("/About")}
          >
            About
          </li>
        </ul>
        <div className="flex justify-center items-center gap-10 text-2xl">
          <i className="fa-solid fa-magnifying-glass hover:scale-110"></i>
          <i id="cart" className="fa-solid fa-cart-shopping hover:scale-110"></i>
          {/* <div className="toggle-btn" onClick={Hamburger}>
              <i id="menu" className="fa-solid fa-bars"></i>
            </div> */}

        </div>
        <HamburgerMenu/>
      </header>
    </div>
  );
};

export default Header;
