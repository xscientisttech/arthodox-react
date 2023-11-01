import { Fragment } from "react";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import Filter from "../Components/Filter";
import HeroImg from "../assets/images/back-img.jpg";
import dinnigImg from "../assets/images/dinning-1.jpg";
import livingImg from "../assets/images/living room.jpg";
import bedroomImg from "../assets/images/bedroom.webp";
import Hero from "../Components/Hero";
import cImg1 from '../assets/images/Category 01.png'
import cImg2 from '../assets/images/Category 02.png'
import cImg3 from '../assets/images/Category 03.png'


const Category = () => {
  return (
    <Fragment>
      <Hero title="Category" />
      <Filter />

      <div
        class="max-w-full h-auto grid place-items-center p-6 md:p-20"
      >
        <div
          class="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]"
        >

          {[
            { src: cImg1, alt: "Image 1" },
            { src: cImg2, alt: "Image 2" },
            { src: cImg3, alt: "Image 3" },
            { src: cImg1, alt: "Image 4" },
            { src: cImg2, alt: "Image 5" },
            { src: cImg3, alt: "Image 6" },
            { src: cImg1, alt: "Image 7" },
            { src: cImg2, alt: "Image 8" },
            { src: cImg3, alt: "Image 9" },
          ].map((item, index) => (

            <div class="relative overflow-hidden cursor-pointer">
              <div class="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
                <img
                  src={item.src}
                  alt={item.alt}
                  class="w-[328px] rounded-3xl xl:w-[348px]"
                />
              </div>
              <div
                class="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80  md:p-8 xl:w-[316px] xl:p-10"
              >
                <h2 class="text-[2rem] font-medium text-white mb-3">Dining</h2>
              </div>
            </div>
          ))}

        </div>
      </div>

      <PageSection />
      <Quality />
    </Fragment>
  );
};

export default Category;
