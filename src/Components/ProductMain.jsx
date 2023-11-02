import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import livingImg from "../assets/images/living room.jpg";
import img1 from "../assets/images/image 1.png"
import img2 from "../assets/images/image 9.png"
import img3 from "../assets/images/image 81.png"
import img4 from "../assets/images/image 8.png"


const ProductMain = () => {
    const [selectedColor, setSelectedColor] = useState('#b99033');

    const frames = [img1, img2, img3, img4];

    const [selectedImage, setSelectedImage] = useState(frames[0]);

    const changeImage = (frame) => {
        setSelectedImage(frame);
        // setBackgroundMain(frame);
        console.log(frame);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
        // setBackgroundMain(event.target.value);
    };

    const handleColorPallate = (color) => {
        setSelectedColor(color);
        // setBackgroundMain(color);
    }

    const [count, setCount] = useState(1);

    const Navigate = useNavigate();

    const increment = () => {
        setCount(count + 1);
    };
    const decreament = () => {
        setCount(count - 1);
    };

    return (
        <section className="p-5 mt-14  sm:p-16 md:mt-0 w-full flex justify-center items-center md:p-14 bg-[]">
            <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                <div className="w-full md:w-6/12 flex grow flex-col p-2.5 justify-center">
                    {/* <div className= {`flex justify-center min-w-[50%] min-h-[30rem] items-center bg-[${selectedColor}] `}  style={{ backgroundImage:`url(${selectedImage})` }}> */}
                    <div className={`flex justify-center min-w-[50%] min-h-[30rem] items-center bg-[${selectedColor}] `} style={{ background: selectedColor }}>
                        <img className=" w-80 h-96" id="" src={livingImg} alt="" />
                    </div>
                    <div id="frames-container" className=" justify-center gap-7 p-5 w-full flex flex-grow">
                        {frames.map((frame, index) => (
                            <div className="w-20">
                                <img
                                    key={index}
                                    className=" w-full rounded-lg aspect-square cursor-pointer"
                                    src={frame}
                                    onClick={() => changeImage(frame)}
                                    alt={`Frame ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>


                <div className="w-full md:w-6/12 h-full flex grow flex-col gap-5 p-2.5">
                    <h1 className="text-[2.5rem] font-semibold absolute top-24 md:relative md:top-0">Photo Frame</h1>
                    <p className="text-[1.2rem] text-[#9F9F9F] p-0">Rs. 1000</p>
                    <p className="text-black">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
                        atque ducimus! Officiis rerum maxime eaque magnam
                    </p>
                    <div className="flex flex-col gap-[5px]">
                        {/* <p>Size</p> */}
                        <div className="flex gap-5 ">
                            <div className="sort-by">
                                <label className="relative flex w-20 md:w-40 rounded overflow-hidden">
                                    <select className="appearance-none text-inherit shadow-none flex-1 cursor-pointer p-[0.7em] border border-black">
                                        <option value="1">Frame Size</option>
                                        <option value="2">Size 1</option>
                                        <option value="3">Size 2</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Color</p>
                        <div className="w-fit h-fit flex gap-2.5 flex-wrap items-center">
                            <div className="w-[30px] h-[30px] bg-orange-700 cursor-pointer rounded-[50%]" onClick={() => handleColorPallate("#F57C00")}></div>
                            <div className="w-[30px] h-[30px] bg-red-500 cursor-pointer rounded-[50%]" onClick={() => handleColorPallate("#C53030")}></div>
                            <div className="w-[30px] h-[30px] bg-blue-600 cursor-pointer rounded-[50%]" onClick={() => handleColorPallate("#2b6cb0")}></div>

                            <label className="cursor-pointer">
                                <div className="w-[34px] aspect-square border-2 border-gray-300 rounded-full mr-2" style={{ backgroundColor: selectedColor }}></div>
                                <input
                                    type="color"
                                    id="color-picker"
                                    value={selectedColor}
                                    onChange={handleColorChange}
                                    className="opacity-0 absolute"
                                    style={{ zIndex: -1 }}
                                />
                            </label>

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

export default ProductMain;