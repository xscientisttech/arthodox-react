import React from "react";
import { useNavigate } from "react-router";
import DummyData from "../assets/data/DummyData";
import logo from "../assets/images/Arth-Logo.png";
import {FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  const Navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <footer className="bg-[#f4f4f4] mt-20 px-0 py-[70px] font-Poppins">
      <div>
        {/* <img
          src={DummyData.ArthLogo}
          alt="Arthodox-logo"
          className=" h-7 cursor-pointer w-40 flex mt-[-3rem] m-auto"
          onClick={scrollToTop}
        /> */}
        <div className="flex items-center justify-center mt-[-3rem]">
          <img
            src={logo}
            alt='Arthodox-Logo'
            className="w-10 cursor-pointer "
            onClick={scrollToTop}
          />
          <h1
            className="text-2xl font-bold cursor-pointer"
            onClick={scrollToTop}
          >
            Arthodox
          </h1>
        </div>
      </div>
      <div className="max-w-[1170px] mt-8 m-auto flex">
        <div className=" px-10 gap-10 flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className=" min-w-3/12 px-[15px] py-0">
            <h4 className="text-lg text-[black] capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-[black] before:h-0.5 before:box-border before:w-[75px] before:left-0 before:-bottom-2.5">
              Registered Office Address:
            </h4>
            <p>
              xScientist Tech LLP Office, Beed Bypass Rd, Near Jain
              International School, Shiv Krupa Colony, Pwd Colony, Chh Sambhaji
              Nagar, Maharashtra 431005.
            </p>
          </div>
          <div className=" min-w-3/12 px-[15px] py-0">
            <h4 className="text-lg text-[black] capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-[black] before:h-0.5 before:box-border before:w-[75px] before:left-0 before:-bottom-2.5">
              Customer Service
            </h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className=" min-w-3/12 px-[15px] py-0">
            <h4 className="text-lg text-[black] capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-[black] before:h-0.5 before:box-border before:w-[75px] before:left-0 before:-bottom-2.5">
              Links
            </h4>
            <ul>
              <li
                className=" cursor-pointer hover:font-semibold"
                onClick={() => Navigate("/")}
              >
                Home
              </li>
              <li
                className=" cursor-pointer hover:font-semibold"
                onClick={() => Navigate("/Products")}
              >
                Products
              </li>
              <li
                className=" cursor-pointer hover:font-semibold"
                onClick={() => Navigate("/Category")}
              >
                Category
              </li>
              <li
                className=" cursor-pointer hover:font-semibold"
                onClick={() => Navigate("/About")}
              >
                About
              </li>
            </ul>
          </div>
          <div className=" min-w-3/12 px-[15px] py-0">
            <h4 className="text-lg text-[black] capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-[black] before:h-0.5 before:box-border before:w-[75px] before:left-0 before:-bottom-2.5">
              follow us
            </h4>
            <div class="social-links flex mt-10">
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
              >
                <FaFacebookF className="text-xl"/>
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
              >
                <FaTwitter className="text-xl"/>
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
              >
                <FaInstagram className="text-xl"/>
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
              >
                <FaLinkedinIn className="text-xl"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
