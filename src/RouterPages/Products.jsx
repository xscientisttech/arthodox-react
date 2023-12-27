import { React, useEffect, useState } from "react";
import Filter from "../Components/Filter";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import { Fragment } from "react";
import Hero from "../Components/Hero";
import ProductItem from "../Components/ProductItem";
import DummyData from "../assets/data/DummyData";
import { useProducts } from '../assets/data/ProductContext';
import { useParams } from "react-router";


const Products = () => {

  const products = useProducts();
  const { categoryId } = useParams();
  const [category, setCategory] = useState(0);
  
  // const categories = ['All','Games', 'Movies', 'Anime', 'Sports']

  useEffect(() => {
    window.scrollTo(0, 0);
    if(categoryId){
      setCategory(categoryId)
    }
  }, []);


  return (
    <Fragment>
      <Hero title="Products" />
      <Filter />
      <div className="max-w-full h-auto grid place-items-center p-6 md:p-20 bg-[#f4f5f7]">
        <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">

          {category !== 0 ? products.map((product, index) => (
            <>
              {category == product.category && <ProductItem key={index} product={product} />}
            </>

          ))
            : products.map((product, index) => (
              <>
                <ProductItem key={index} product={product} />
              </>))
          }

        </div>
      </div>
      <PageSection />
      <Quality />
    </Fragment>
  );
};

export default Products;
