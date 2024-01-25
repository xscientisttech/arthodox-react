import React, { useEffect, useState, Fragment } from "react";
import { useProducts } from '../assets/data/ProductContext';
import { useNavigate, useParams } from "react-router";
import Filter from "../Components/Filter";
import Hero from "../Components/Hero";
import ProductItem from "../Components/ProductItem";

const Products = ({ search }) => {
  const { products, categories }= useProducts();
  const { categoryId } = useParams();
  const [category, setCategory] = useState(categoryId || 0);
  const [sortBy, setSortBy] = useState("null");
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0);
    if (categoryId) {
      setCategory(categoryId);
    }
  }, [categoryId]);

  const filteredProducts = products
    .filter((item) => {
      return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search) || categories[item.category].toLowerCase().includes(search);
    })
    .filter((item) => category === 0 || item.category === parseInt(category));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "1":
        return a.Discount - b.Discount;
      case "2":
        return b.Discount - a.Discount;
      case "3":
        return a.title.localeCompare(b.title);
      case "4":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });



  return (
    <Fragment>
      <Hero title="Products" />
      <Filter sortBy={sortBy} setSortBy={setSortBy} />
      <div className="max-w-full h-auto grid place-items-center p-6 md:p-20 bg-[#f4f5f7]">
        <div className="grid gap-y-14 grid-cols-1 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
          {sortedProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Products;