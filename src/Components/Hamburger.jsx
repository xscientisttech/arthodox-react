import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { FaXmark, FaBars } from "react-icons/fa6";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Navigate = useNavigate();
  

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target) && menuOpen) {
        toggleMenu();
        // console.log(menuRef.current.contains(e.target));
      }
    }
    document.addEventListener("mousedown", handler);
  });

  return (
    <div ref={menuRef} className="md:hidden font-Poppins">
      <div
        className={`hamburger relative text-2xl hover:scale-110`}
        onClick={toggleMenu}
      >
        <FaBars
          id="menu"
          className={menuOpen ? <FaXmark/> : <FaBars/>}
        />
      </div>
      {menuOpen && (
        <div  className="absolute top-14 right-8 w-72 h-0 ">
          <ul className="gap-3 flex flex-col justify-center items-center p-5 font-semibold text-lg bg-white rounded-xl">
            <li
              className=" cursor-pointer hover:text-orange-600"
              onClick={() => Navigate("/")}
            >
              Home
            </li>
            <li
              className=" cursor-pointer hover:text-orange-600"
              onClick={() => Navigate("/Products")}
            >
              Products
            </li>
            <li
              className=" cursor-pointer hover:text-orange-600"
              onClick={() => Navigate("/Category")}
            >
              Category
            </li>
            <li
              className=" cursor-pointer hover:text-orange-600"
              onClick={() => Navigate("/About")}
            >
              About
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
