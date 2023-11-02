import { Fragment } from "react";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import Filter from "../Components/Filter";
import HeroImg from "../assets/images/back-img.jpg";
import CategoryImagesGrid from "../Components/CategoryImagesGrid";
import Hero from "../Components/Hero";
import CategoryItem from "../Components/CategoryItem";

const Category = () => {
  return (
    <Fragment>
      <Hero title="Category" />
      <Filter />

      <div className="max-w-full h-auto grid place-items-center p-6 md:p-20">
        <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        </div>
      </div>

      {/* <CategoryImagesGrid/> */}
      <PageSection />
      <Quality />
    </Fragment>
  );
};

export default Category;
