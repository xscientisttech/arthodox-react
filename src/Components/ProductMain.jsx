import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import DummyData from "../assets/data/DummyData";
import { useCart } from "../assets/data/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import colorwheel from "../assets/images/background/colorwheel.jpeg";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaLink,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const ProductMain = (props) => {


  const categories = ['Games', 'Movies', 'Anime', 'Sports'];
  const [data, setData] = useState();
  const product = props.product;
  const { addToCart } = useCart();
  const [count, setCount] = useState(1);

  const [selectedColor, setSelectedColor] = useState("#b99033");
  const frames = [
    {
      src: DummyData.BgChangeImgUrl1,
      x: 45,
      y: 40,
      width: 122,
      height: 60,
    },
    {
      src: DummyData.BgChangeImgUrl2,
      x: 54,
      y: 60,
      width: 143,
      height: 65,
    },
    {
      src: DummyData.BgChangeImgUrl3,
      x: 77,
      y: 42,
      width: 150,
      height: 66,
    },
    {
      src: DummyData.BgChangeImgUrl4,
      x: 108,
      y: 24,
      width: 90,
      height: 85,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(frames[0].src);

  const [linkCoppied, setLinkCoppied] = useState("hidden");
  const copyLink = () => {
    setLinkCoppied("block");
    // console.log("copied ! ");
  };

  const notifyAddedToCart = () => {
    const data = { ...product, quantity: count }
    addToCart(data);

    toast.success(`${product.title} added to Cart ! `, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    formData.backgroundColor = event.target.value;
  };

  const handleColorPallate = (color) => {
    setSelectedColor(color);
    formData.backgroundColor = color;

    clearCanvas();
    setSelectedImage("");
    setImageProps({
      x: 50,
      y: 25,
      width: 200,
      height: 100,
    });
  };

  const changeImage = (frame) => {
    setSelectedImage(frame.src);
    formData.backgroundImage = frame.src ;
    setImageProps({
      x: frame.x,
      y: frame.y,
      width: frame.width,
      height: frame.height,
    });

    // console.log(frame.src);
  };


  const Navigate = useNavigate();


  // canvas to change background images and product iamge

  const canvasRef = useRef(null);
  const [imageProps, setImageProps] = useState({
    x: frames[0].x,
    y: frames[0].y,
    width: frames[0].width,
    height: frames[0].height,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const bgImage = new Image();
    bgImage.src = selectedImage;

    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

    const mainImage = new Image();
    mainImage.src = product.img;
    mainImage.onload = function () {
      ctx.drawImage(
        mainImage,
        imageProps.x,
        imageProps.y,
        imageProps.width,
        imageProps.height
      );
    };
  }, [product.img, selectedImage, imageProps]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };


  const [formData, setFormData] = useState({
    backgroundImage: selectedImage,
    backgroundColor: selectedColor,
    frameSize: 1,
    quantity: count,
    sku: '',
    category: product.category,

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission goes here
    console.log("Form submitted:", formData);
  };

  const increment = () => {
    setCount(count + 1);
    formData.quantity = count+1;
  };
  const decreament = () => {
    if (count > 1) {
      setCount(count - 1);
      formData.quantity = count-1;
    }
  };


  return (
    <section className="p-5 mt-14  sm:px-16 md:mt-0 w-full flex justify-center items-center md:px-24 bg-[] font-Poppins">
      <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row justify-center gap-10 xl:gap-28 lg:gap-24 md:gap-20">
        <div className="w-full h-fit sm:min-w-max  gap-10 sm:gap-10 md:w-6/12 flex mt-5 md:h-full p-0 justify-between">
          <div
            id="frames-container"
            className=" flex gap-5 flex-col py-10 pt-0 justify-between w-8 aspect-square sm:w-24"
          >
            {frames.map((frame, index) => (
              <div className=" w-16 md:w-20 ">
                <img
                  key={index}
                  className=" w-full rounded-lg aspect-square cursor-pointer"
                  src={frame.src}
                  onClick={() => changeImage(frame)}
                  onChange={(e) => handleInputChange(e)}
                  alt={`Frame ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div
            className={`flex justify-center min-w-[80%] md:min-h-[65vh] md:max-w-[450px] md:max-h-[450px] sm:w-[16rem] aspect-square items-center bg-[${selectedColor}] `}
            style={{ background: selectedColor }}
          >
            {/* <img
              className={`w-full h-full ${bgVisible}`}
              src={selectedImage}
              alt=""
            />
            <img
              className="absolute sm:w-72 h-20 sm:h-80"
              id=""
              src={product.img}
              alt=""
            /> */}
            <canvas
              ref={canvasRef}
              className=" w-full h-full"
              style={{ border: "1px solid #000" }}
            ></canvas>
          </div>
        </div>

        <div className="w-full md:w-6/12 h-full flex grow flex-col gap-5 p-2.5">
          <h1 className="text-[2.5rem] font-semibold absolute top-24 md:relative md:top-0">
            {product.title}
          </h1>
          <p className="text-2xl font-semibold text-[#202020] p-0">&#8377; {product.price}</p>
          <p className="text-black">
            {product.description}
          </p>
          <div className="flex flex-col gap-[5px]">
            <div className="flex gap-5 ">
              <div className="sort-by">
                <label className="relative flex w-40 md:w-40 rounded overflow-hidden">
                  <select
                    name="frameSize"
                    value={formData.frameSize}
                    onChange={(e) => handleInputChange(e)}
                    className="appearance-none text-inherit shadow-none flex-1 cursor-pointer p-[0.7em] border-2 border-black"
                  >
                    <option value="0">Frame Size</option>
                    <option value="1">Size 1</option>
                    <option value="2">Size 2</option>
                  </select>

                </label>
              </div>
            </div>
          </div>
          <div>
            <p>Color</p>
            <div className="w-fit h-fit flex gap-2.5 flex-wrap items-center">
              <div
                className="w-[30px] h-[30px] bg-orange-700 cursor-pointer rounded-[50%]"
                onClick={() => handleColorPallate("#c2410c")}
              ></div>
              <div
                className="w-[30px] h-[30px] bg-red-500 cursor-pointer rounded-[50%]"
                onClick={() => handleColorPallate("#C53030")}
              ></div>
              <div
                className="w-[30px] h-[30px] bg-blue-600 cursor-pointer rounded-[50%]"
                onClick={() => handleColorPallate("#2b6cb0")}
              ></div>

              <label className="cursor-pointer">
                <img
                  src={colorwheel}
                  alt="wheel"
                  className="w-[34px] aspect-square border-2 border-gray-300 rounded-full mr-2"
                />
                {/* <div
                  className="w-[34px] aspect-square border-2 border-gray-300 rounded-full mr-2"
                  style={{ backgroundColor: selectedColor }}
                ></div> */}
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
              <FaMinus onClick={decreament} />
              <p id="count" name='quantity' value={count} onChange={(e) => handleInputChange(e)} >{count}</p>
              <FaPlus onClick={increment} />
            </div>
            <div className="flex gap-5 items-center">
              <button type="submit"
                className="text-white font-bold px-5 h-10 rounded-xl  bg-black border border-solid border-[black] hover:bg-white hover:text-black"
                onClick={() => notifyAddedToCart(product)}
              >
                Add To Cart
              </button>

              <button type="submit"
                className="text-white font-bold px-5 h-10 rounded-xl  bg-black border border-solid border-[black] hover:bg-white hover:text-black"
                // onClick={() => Navigate("/Checkout")}
                onClick={handleSubmit}
              >
                BUY
              </button>
              <button
                id="copy-button"
                type="button"
                data-te-clipboard-init
                data-te-clipboard-target="#copy-target"
                data-te-ripple-init
                data-te-ripple-color="light"
                class=" bg-slate-200 rounded-xl hover:bg-slate-300 py-2 px-3"
              >
                <div className="flex gap-2 items-center">
                  <FaLink onClick={copyLink} />
                  <span className={`${linkCoppied}`}>Coppied !</span>
                </div>
              </button>
              <ToastContainer />
            </div>
          </div>
          <div class="flex flex-col gap-2.5">
            <div className="flex items-center gap-5">
              <p className="w-20">SKU</p>
              <p>SS001</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="w-20">Category</p>
              <p>{categories[product.category]}</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="w-20">Tags</p>
              <p>{categories[product.category]}</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="w-20">Share</p>
              <div class="social-links flex">
                <a
                  href="#"
                  className="flex justify-center items-center h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProductMain;
