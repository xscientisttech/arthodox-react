import dinnigImg from "../assets/images/dinning-1.jpg";
import livingImg from "../assets/images/living room.jpg";
import bedroomImg from "../assets/images/bedroom.webp";
import HeroImg from "../assets/images/back-img.jpg";
import React from "react";
import { useNavigate } from "react-router";
import ProductGrid from "../Components/ProductGrid";

export default function Home() {
  const Navigate = useNavigate();

  const scrollDown = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight, // Scroll down by one viewport height
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <main>
      <section>
        <img src={HeroImg} alt="heroimg" className="h-[calc(100vh_-_4rem)] w-full bg-cover bg-center relative" />
        <div className="absolute text-7xl w-[500px] right-[5%] top-2/4">
          <h1>Discover Our New collection</h1>
          <button
            className=" 
  text-[white] bg-[black] text-xl px-16 py-4 rounded-[20px] hover:bg-white hover:text-black hover:font-semibold"
            onClick={scrollDown}
          >
            Explore
          </button>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-col justify-center items-center text-2xl m-auto">
          <div class="category-heading">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="h-[7.5vh] w-[90vw] bg-[#f4f4f4] mt-4 m-auto rounded-[10px]">
            <h1 className="justify-center flex items-center text-[2.5rem]">
              Browse The Range
            </h1>
          </div>
          <div className="max-w-full h-auto grid place-items-center p-6 md:p-20">
        <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={bedroomImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[380px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] font-medium text-white mb-3">
                Dining
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={livingImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[380px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] font-medium text-white mb-3">
                Living
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={bedroomImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[380px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] text-center font-medium text-white mb-3">
                Bedroom
              </h2>
            </div>
          </div>
        </div>
      </div>
          <button
            className="flex justify-center cursor-pointer text-white bg-black text-base px-8 py-3 rounded-xl hover:text-[black] hover:bg-[white] hover:border hover:border-solid hover:border-[black] hover:font-semibold"
            onClick={() => Navigate("/Category")}
          >
            Show more
          </button>
        </div>
      </section>
      <ProductGrid/>
    </main>
  );
}

// export default Home;
