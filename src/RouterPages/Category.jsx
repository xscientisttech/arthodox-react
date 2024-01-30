import { Fragment, useEffect } from "react";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import Filter from "../Components/Filter";
import Hero from "../Components/Hero";
import CategoryItem from "../Components/CategoryItem";
import DummyData from "../assets/data/DummyData";
import { useProducts } from "../assets/data/ProductContext";

const Category = () => {

  // const categories = ['Games', 'Movies', 'Anime', 'Sports', 'God'];
  
	const { products, categories } = useProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Fragment>
      <Hero title="Category" />
      <Filter />

      <div className="max-w-full h-auto grid place-items-center p-6 md:p-20 bg-[#f4f4f4]">
        <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">

        {categories.map((category, index) => (
          <CategoryItem CategoryImgUrl={DummyData.CategoryImgUrl} category_id={categories.indexOf(category)} Title={category} Index={index} key={index} />
        ))}
        
        </div>
      </div>

      {/* <PageSection /> */}
      <Quality />
    </Fragment>
  );
};

export default Category;
