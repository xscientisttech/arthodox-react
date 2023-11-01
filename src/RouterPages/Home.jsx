import dinnigImg from "../assets/images/dinning-1.jpg";
import livingImg from "../assets/images/living room.jpg";
import bedroomImg from "../assets/images/bedroom.webp";
import gridImg from "../assets/images/grid.jpg";
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
          <div className="flex flex-wrap justify-center items-center gap-14 mt-14">
            <div className="flex flex-col items-center justify-center text-center relative cursor-pointer m-2.5">
              <img
                src={dinnigImg}
                alt="DinningFrame"
                class="w-[26rem] h-[25rem] rounded-[15px]"
              />
              <div
                className=" absolute text-[white] flex items-center justify-center opacity-100 transition-opacity duration-[0.3s] text-[2rem] font-[bold] p-2.5 rounded-[15px] inset-0;
  background: rgba(0, 0, 0, 0.7)"
              >
                <p>Dinning</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center relative cursor-pointer m-2.5">
              <img
                src={livingImg}
                alt="LivingFrame"
                class="w-[26rem] h-[25rem] rounded-[15px]"
              />
              <div
                className="absolute text-[white] flex items-center justify-center opacity-100 transition-opacity duration-[0.3s] text-[2rem] font-[bold] p-2.5 rounded-[15px] inset-0;
  background: rgba(0, 0, 0, 0.7)"
              >
                <p>Living</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center relative cursor-pointer m-2.5">
              <img
                src={bedroomImg}
                alt="BedroomFrame"
                class="w-[26rem] h-[25rem] rounded-[15px]"
              />
              <div
                className="absolute text-[white] flex items-center justify-center opacity-100 transition-opacity duration-[0.3s] text-[2rem] font-[bold] p-2.5 rounded-[15px] inset-0;
  background: rgba(0, 0, 0, 0.7)"
              >
                <p>Bedroom</p>
              </div>
            </div>
          </div>
          <button
            className="flex justify-center cursor-pointer text-white bg-black text-base mt-8 px-8 py-3 rounded-xl hover:text-[black] hover:bg-[white] hover:border hover:border-solid hover:border-[black] hover:font-semibold"
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
