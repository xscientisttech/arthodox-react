import React, { useState } from "react";
import { useNavigate } from "react-router";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Navigate = useNavigate();

  return (
    <div>
      <div
        className={`hamburger relative ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <i id="menu" className="fa-solid fa-bars text-2xl hover:scale-110"></i>
      </div>
      {menuOpen && (
        <div className="absolute top-14 right-8 w-72 h-0 ">
          <ul className="gap-3 flex flex-col justify-center items-center p-5 font-semibold text-lg bg-[rgba(255,255,255,0.5)] rounded-xl">
            <li className=" cursor-pointer hover:text-orange-600" onClick={() => Navigate("/")}>Home</li>
            <li className=" cursor-pointer hover:text-orange-600" onClick={() => Navigate("/Products")}>Products</li>
            <li className=" cursor-pointer hover:text-orange-600" onClick={() => Navigate("/Category")}>Category</li>
            <li className=" cursor-pointer hover:text-orange-600" onClick={() => Navigate("/About")}>About</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
