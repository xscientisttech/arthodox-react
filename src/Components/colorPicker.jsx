import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import livingImg from "../assets/images/living room.jpg";
const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#b99033');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const [count, setCount] = useState(1);

  const Navigate = useNavigate();

  const increment = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };

  return (
    <section className="w-full flex justify-center items-center p-14">
        <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <div className="w-6/12 flex grow flex-col p-2.5 justify-center">
            <div className="flex justify-center min-w-[50%] min-h-[38rem] items-center" style={{ backgroundColor: selectedColor }}>
              <img className=" w-80 h-96" id="" src={livingImg} alt="" />
            </div>
          </div>
          <div className="w-6/12 h-full flex grow flex-col gap-5 p-2.5">
            <h1 className="text-[2.5rem] font-semibold">Photo Frame</h1>
            <p className="text-[1.2rem] text-[#9F9F9F] p-0">Rs. 1000</p>
            <p className="text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
              atque ducimus! Officiis rerum maxime eaque magnam
            </p>
            <div className="flex flex-col gap-[5px]">
              <p>Size</p>
              <button className="text-white font-bold px-3 py-1 rounded-xl w-28  bg-black border border-solid border-[black] hover:bg-white hover:text-black">
                Frame Size
              </button>
            </div>
            <div>
              <p>Color</p>
              <div className="w-fit h-fit flex gap-2.5 flex-wrap items-center">
                <div className="w-[30px] h-[30px] bg-orange-700 cursor-pointer rounded-[50%]"></div>
                <div className="w-[30px] h-[30px] bg-red-500 cursor-pointer rounded-[50%]"></div>
                <div className="w-[30px] h-[30px] bg-blue-600 cursor-pointer rounded-[50%]"></div>
                <input
                  className="color-picker w-40 rounded-full border border-r-[2.5rem] border-l-[2.5rem]"
                  value="#ffffff"
                  type="color"
                  id="color-picker"
                  // value ={selectedColor}
                  onChange={handleColorChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-5 items-center">
              <div className="flex items-center justify-center bg-white w-[120px] h-10 gap-5 border rounded-[10px] border-solid border-[rgb(175,175,175)]">
                <i
                  className="fa fa-minus cursor-pointer"
                  onClick={decreament}
                ></i>
                <p id="count">{count}</p>
                <i
                  className="fa fa-plus cursor-pointer"
                  onClick={increment}
                ></i>
              </div>
              <div className="flex gap-5 items-center">
                <button className="text-white font-bold px-5 h-10 rounded-xl  bg-black border border-solid border-[black] hover:bg-white hover:text-black">
                  Add To Cart
                </button>

                <button className="text-white font-bold px-5 h-10 rounded-xl  bg-black border border-solid border-[black] hover:bg-white hover:text-black" onClick={() => Navigate("/Checkout")}>
                  BUY
                </button>
              </div>
            </div>
            <div class="flex flex-col gap-2.5">
              <div className="flex items-center gap-5">
                <p className="w-20">SKU</p>
                <p>SS001</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="w-20">Category</p>
                <p>wall Frame</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="w-20">Tags</p>
                <p>Spider, Frame, Home, Shope</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="w-20">Share</p>
                <div class="flex justify-center items-center">
                  <a
                    href="#"
                    className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ColorPicker;
