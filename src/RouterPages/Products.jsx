import { React, useEffect } from "react";
import Filter from "../Components/Filter";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import { Fragment } from "react";
import Hero from "../Components/Hero";


import ProductItem from "../Components/ProductItem";
import DummyData from "../Components/DummyData";
const Products = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <Fragment>
      <Hero title="Products" />
      <Filter />
      <div className="max-w-full h-auto grid place-items-center p-6 md:p-20">
          <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
           <ProductItem Img={DummyData.GridImgUrl} Title="Frame 01" Description="Here is the Description" Dprice="Rs.1000" Oprice="1200" />
           <ProductItem Img={DummyData.GridImgUrl} Title="Frame 02" Description="Here is the Description" Dprice="Rs.900" Oprice="1200" />
           <ProductItem Img={DummyData.GridImgUrl} Title="Frame 03" Description="Here is the Description" Dprice="Rs.786" Oprice="1200" />
           <ProductItem Img={DummyData.GridImgUrl} Title="Frame 04" Description="Here is the Description" Dprice="Rs.971" Oprice="1200" />
           <ProductItem Img={DummyData.GridImgUrl} Title="Frame 05" Description="Here is the Description" Dprice="Rs.1200" Oprice="1300" />
           <ProductItem Img={DummyData.GridImgUrl} Title="Frame 06" Description="Here is the Description" Dprice="Rs.516" Oprice="600" />
           <ProductItem Img={DummyData.GridImgUrl} Title="Frame 07" Description="Here is the Description" Dprice="Rs.4639" Oprice="5200" />
           <ProductItem Img={DummyData.GridImgUrl} Title="Frame 08" Description="Here is the Description" Dprice="Rs.4500" Oprice="5200" />
           <ProductItem Img={DummyData.GridImgUrl} Title="Frame 09" Description="Here is the Description" Dprice="Rs.1000" Oprice="1200" />
          </div>
        </div>
      <PageSection />
      <Quality />
    </Fragment>
  );
};

export default Products;
