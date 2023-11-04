import Filter from "../Components/Filter";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import { Fragment } from "react";
import Hero from "../Components/Hero";


import ProductItem from "../Components/ProductItem";
const Products = () => {
  return (
    <Fragment>
      <Hero title="Products" />
      <Filter />
      {/* <ProductImageGrid /> */}
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
