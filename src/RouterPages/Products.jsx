import Filter from "../Components/Filter";
import HeroImg from "../assets/images/back-img.jpg";
import gridImg from "../assets/images/grid.jpg";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import { Fragment } from "react";
import { useNavigate } from "react-router";
import Hero from "../Components/Hero";
import ProductItem from "../Components/ProductItem";
const Products = () => {

  const Navigate = useNavigate();


  return (
    <Fragment>
      <Hero title="Products" />
      <Filter />
      <div className="max-w-full h-auto grid place-items-center p-6 md:p-20">
          <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
           <ProductItem />
           <ProductItem />
           <ProductItem />
           <ProductItem />
           <ProductItem />
           <ProductItem />
           <ProductItem />
           <ProductItem />
           <ProductItem />
          </div>
        </div>
      <PageSection />
      <Quality />
    </Fragment>
  );
};

export default Products;
