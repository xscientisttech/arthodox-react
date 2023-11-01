import { Fragment } from "react";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import Filter from "../Components/Filter";
import HeroImg from "../assets/images/back-img.jpg";
import dinnigImg from "../assets/images/dinning-1.jpg";
import livingImg from "../assets/images/living room.jpg";
import bedroomImg from "../assets/images/bedroom.webp";
import Hero from "../Components/Hero";

const Category = () => {
  return (
    <Fragment>
      <Hero title="Category"/>
      <Filter />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-40 py-16">
        {[
          { src: dinnigImg, alt: "Image 1" },
          { src: livingImg, alt: "Image 2" },
          { src: bedroomImg, alt: "Image 3" },
          { src: dinnigImg, alt: "Image 4" },
          { src: livingImg, alt: "Image 5" },
          { src: bedroomImg, alt: "Image 6" },
          { src: dinnigImg, alt: "Image 7" },
          { src: livingImg, alt: "Image 8" },
          { src: bedroomImg, alt: "Image 9" },
        ].map((item, index) => (
          <div key={index} className="grid-item">
            <img src={item.src} alt={item.alt} className="w-full h-96 object-cover rounded-xl" />
          </div>
        ))}
      </div>

      <PageSection />
      <Quality />
    </Fragment>
  );
};

export default Category;