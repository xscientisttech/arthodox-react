import Filter from "../Components/Filter";
import HeroImg from "../assets/images/back-img.jpg";
import gridImg from "../assets/images/grid.jpg";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import { Fragment } from "react";
import ProductImageGrid from "../Components/ProductImageGrid";
const Products = () => {
  return (
    <Fragment>
      <div className="h-[25rem] w-full relative flex justify-center items-center">
        <img
          src={HeroImg}
          alt=""
          className="bg-no-repeat bg-cover w-full h-full absolute transform opacity-60"
        />
        <div className="relative">
          <h2 className="text-5xl font-bold p-2">Products</h2>
          <p className="text-[1.2rem] flex justify-evenly">
            <span className="font-bold">Home</span>
            <span>
              <i className="fa-solid fa-greater-than text-sm"></i>
            </span>
            <span>Products</span>
          </p>
        </div>
      </div>

      <Filter />
      <ProductImageGrid />
      <PageSection />
      <Quality />
    </Fragment>
  );
};

export default Products;
