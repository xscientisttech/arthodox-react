import Filter from "../Components/Filter";
import HeroImg from "../assets/images/back-img.jpg";
import gridImg from "../assets/images/grid.jpg";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import { Fragment } from "react";
import { useNavigate } from "react-router";
import Hero from "../Components/Hero";

import ProductImageGrid from "../Components/ProductImageGrid";
const Products = () => {

  const Navigate = useNavigate();


  return (
    <Fragment>
      <Hero title="Products" />
      <Filter />
      <ProductImageGrid />
      <PageSection />
      <Quality />
    </Fragment>
  );
};

export default Products;
