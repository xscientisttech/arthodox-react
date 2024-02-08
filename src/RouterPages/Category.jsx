import { Fragment, useEffect, useState } from "react";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import Filter from "../Components/Filter";
import Hero from "../Components/Hero";
import CategoryItem from "../Components/CategoryItem";
import { useProducts } from "../assets/data/ProductContext";

const Category = () => {

  // const categories = ['Games', 'Movies', 'Anime', 'Sports', 'God'];
  
	const { products, categories } = useProducts();
  const [sortBy, setSortBy] = useState("null");
  const [filteredItems, setFilteredItems] = useState(categories);
  // const filteredItems = categories;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // setFilteredItems(categories);
    // filteredItems.sort()
    console.log('filtered cat : ',filteredItems);
  })
  
  if (filteredItems)
  return (
    <Fragment>
      <Hero title="Category" />
      <Filter sortBy={sortBy} setSortBy={setSortBy} />

      <div className="max-w-full h-auto grid place-items-center p-6 md:p-20 bg-[#f4f4f4]">
        <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">

        {filteredItems.map((category, index) => (
          <CategoryItem category_id={categories.indexOf(category)} Title={category} Index={categories.indexOf(category)} key={index} />
        ))}
        

        </div>
      </div>

      {/* <PageSection /> */}
      <Quality />
    </Fragment>
  );
};

export default Category;
