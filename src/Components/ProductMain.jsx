import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import DummyData from './DummyData';
import { useCart } from './CartContext';

const ProductMain = () => {

    const product = "product 1";

    const { addToCart } = useCart();

    const [bgVisible, setBgVisible] = useState("visible");

    const [selectedColor, setSelectedColor] = useState('#b99033');

    const frames = [DummyData.BgChangeImgUrl1, DummyData.BgChangeImgUrl2, DummyData.BgChangeImgUrl3, DummyData.BgChangeImgUrl4];

    const [selectedImage, setSelectedImage] = useState(frames[0]);

    const changeImage = (frame) => {
        setSelectedImage(frame);
        setBgVisible("visible");
        // setBackgroundMain(frame);
        console.log(frame);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
        setBgVisible("invisible");
        // setBackgroundMain(event.target.value);
    };
    
    const handleColorPallate = (color) => {
        setSelectedColor(color);
        setBgVisible("invisible");
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
        <section className="p-5 mt-14  sm:px-16 md:mt-0 w-full flex justify-center items-center md:px-24 bg-[]">
            <div className="w-full flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                <div className="w-full h-fit sm:min-w-max gap-5 sm:gap-10 md:w-6/12 flex mt-5 md:h-full p-2.5 justify-between">
                    {/* <div className= {`flex justify-center min-w-[50%] min-h-[30rem] items-center bg-[${selectedColor}] `}  style={{ backgroundImage:`url(${selectedImage})` }}> */}
                    <div id="frames-container" className=" flex gap-5 flex-col py-10 pt-0 justify-between w-10 aspect-square sm:w-24 ">
                        {frames.map((frame, index) => (
                            <div className=" w-16 md:w-20 ">
                                <img
                                    className=" w-full rounded-lg aspect-square cursor-pointer"
                                    src={frame}
                                    onClick={() => changeImage(frame)}
                                    alt={`Frame ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    {/* <div className={`flex justify-center min-w-[80%] min-h-max md:min-h-[65vh] md:max-w-[450px] md:max-h-[450px] aspect-square items-center bg-[${selectedColor}] `} style={{ background: selectedColor }}> */}
                    <div className={`flex justify-center min-w-[80%] md:min-h-[65vh] md:max-w-[450px] md:max-h-[450px] aspect-square items-center bg-[${selectedColor}] `} style={{ background: selectedColor }}>
                        <img className={`md:w-[450px] md:h-[450px] ${ bgVisible}`} src={selectedImage} alt="" />
                        <img className="absolute sm:w-72 h-20 sm:h-80" id="" src={DummyData.BgChangeImgUrl1} alt="" />
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
                                <label className="relative flex w-40 md:w-40 rounded overflow-hidden">
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
                            <button className="text-white font-bold px-5 h-10 rounded-xl  bg-black border border-solid border-[black] hover:bg-white hover:text-black"
                                onClick={() => addToCart(product)}>Add To Cart
                            </button>

                            <button className="text-white font-bold px-5 h-10 rounded-xl  bg-black border border-solid border-[black] hover:bg-white hover:text-black" onClick={() => Navigate("/Checkout")}>
                                BUY
                            </button>
                            <button
                                id="copy-button"
                                type="button"
                                data-te-clipboard-init
                                data-te-clipboard-target="#copy-target"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                class=" bg-slate-200 rounded-xl hover:bg-slate-300 py-2 px-3">
                                <i class="fa-solid fa-link"></i>
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
                                <a
                                    href="#"
                                    className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
                                >
                                    <i class="fa-regular fa-copy"></i>
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
