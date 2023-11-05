import { React, useEffect } from "react";
import Filter from "../Components/Filter";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import { Fragment } from "react";
import Hero from "../Components/Hero";
import ProductItem from "../Components/ProductItem";
import DummyData from "../Components/DummyData";
import { useProducts } from '../Components/ProductContext';


const Products = () => {

  const products = useProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Fragment>
      <Hero title="Products" />
      <Filter />
      <div className="max-w-full h-auto grid place-items-center p-6 md:p-20 bg-[#f4f5f7]">
        <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">

          {products.map((product, index) => (
            <ProductItem Img={DummyData.GridImgUrl} id={product.id} index={index} Title={product.title} Dprice={product.Discount} Oprice={product.price} Description={product.description} />
          ))}

        </div>
      </div>
      <PageSection />
      <Quality />
    </Fragment>
  );
};

export default Products;
