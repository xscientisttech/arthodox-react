import React from "react";
import logo from "../assets/images/Frame 168.png";
import { useNavigate } from "react-router";

const Footer = () => {
  const Navigate = useNavigate();

  return (
    <footer className="bg-[#f4f4f4] mt-20 px-0 py-[70px]">
      <div>
        <img
          src={logo}
          alt="Arthodox-logo"
          className=" h-7 cursor-pointer w-40 flex mt-[-3rem] m-auto"
          onClick={() => Navigate("/")}
        />
      </div>
      <div className="max-w-[1170px] mt-8 m-auto">
        <div className="flex flex-wrap">
          <div className="w-3/12 px-[15px] py-0">
            <h4 className="text-lg text-[black] capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-[black] before:h-0.5 before:box-border before:w-[75px] before:left-0 before:-bottom-2.5">
              Registered Office Address:
            </h4>
            <p>
              xScientist Tech LLP Office, Beed Bypass Rd, Near Jain
              International School, Shiv Krupa Colony, Pwd Colony, Chh Sambhaji
              Nagar, Maharashtra 431005.
            </p>
          </div>
          <div className="w-3/12 px-[15px] py-0">
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
          <div className="w-3/12 px-[15px] py-0">
            <h4 className="text-lg text-[black] capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-[black] before:h-0.5 before:box-border before:w-[75px] before:left-0 before:-bottom-2.5">
              Links
            </h4>
            <ul>
              <li className=" cursor-pointer hover:font-semibold" onClick={() => Navigate("/")}>Home</li>
              <li className=" cursor-pointer hover:font-semibold" onClick={() => Navigate("/Products")}>
                Products
              </li>
              <li className=" cursor-pointer hover:font-semibold" onClick={() => Navigate("/Category")}>
                Category
              </li>
              <li className=" cursor-pointer hover:font-semibold" onClick={() => Navigate("/About")}>
                About
              </li>
            </ul>
          </div>
          <div className="w-3/12 px-[15px] py-0">
            <h4 className="text-lg text-[black] capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-[black] before:h-0.5 before:box-border before:w-[75px] before:left-0 before:-bottom-2.5">
              follow us
            </h4>
            <div class="social-links">
              <a href="#" className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
