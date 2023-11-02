import { Fragment } from "react";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import Filter from "../Components/Filter";
import HeroImg from "../assets/images/back-img.jpg";
import CategoryImagesGrid from "../Components/CategoryImagesGrid";
import Hero from "../Components/Hero";

const Category = () => {
  return (
    <Fragment>
      <Hero title="Category" />
      <Filter />
      <CategoryImagesGrid/>
      <PageSection />
      <Quality />
    </Fragment>
  );
};

export default Category;
