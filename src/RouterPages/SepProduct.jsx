import { React, useEffect, useState } from "react";
import Quality from "../Components/Quality";
import Navigation from "../Components/Navigation";
import ProductMain from "../Components/ProductMain";
import { useNavigate } from "react-router";
import ProductItem from "../Components/ProductItem";
import { useParams } from 'react-router-dom';
import { useProducts } from '../assets/data/ProductContext';
import wall1 from '../assets/images/background/wall9.jpg';
import wall2 from '../assets/images/background/wall11.jpg';

const SepProduct = () => {

  const Navigate = useNavigate();

  const { productId } = useParams();
  const { products, categories }= useProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const product = products.find((product) => product.id === parseInt(productId, 10));

  const [relatedProducts, setRelatedProducts] = useState(products.filter((item) => item.id !== product.id && item.category === parseInt(product.category)));

  // useEffect(() => {
  //   // setRelatedProducts(products.filter((item) => [] || item.category === parseInt(product.category)));
  //   // console.log("related Product id : ", product.id);
  //   // console.log("related Products : ", relatedProducts);
  // }, [relatedProducts])




  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navigation title={product.title} />
      <ProductMain product={product} categories={categories} key={product.key} />

      <section className=" w-full flex flex-col items-center justify-center px-[10%] py-[5%]">
        <div className="w-full flex flex-col items-center justify-center gap-20">
          <div className="max-w-[1200px] flex flex-col items-center justify-center gap-5 px-[5%] py-[0%]">
            <div className="flex gap-5 cursor-pointer justify-center items-center ">
              <h3 className="text-[22px] font-bold">Description</h3>
            </div>
            <p className="text-base text-[#888888]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
              placeat perferendis dicta quae corrupti velit ipsa minus inventore
              nihil, perspiciatis laboriosam sapiente veritatis explicabo
              deserunt. Totam perspiciatis doloribus vero sed.
            </p>
            <p className="text-base text-[#888888]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              rerum neque repellat ratione tempore recusandae iure architecto,
              rem fugiat nesciunt provident fuga, ipsum suscipit labore ipsa
              molestiae veritatis. Necessitatibus, voluptatibus? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Molestias earum
              impedit fugit pariatur ut obcaecati autem assumenda corporis,
              debitis, voluptatem nulla! Soluta minus sint optio delectus beatae
              unde eveniet repellat?
            </p>
          </div>
          <div className="w-full flex gap-10 items-center justify-center flex-wrap">
            <img
              src={wall1} alt="living-img"
              className="w-6/12 max-w-[520px] min-w-[250px] aspect-[1.5] rounded-[10px]"
            ></img>
            <img
              src={wall2} alt="living-img"
              className="w-6/12 max-w-[520px] min-w-[250px] aspect-[1.5] rounded-[10px]"
            ></img>
          </div>
        </div>
      </section>

      <section className="mt-20 px-[10%] bg-[#f4f4f4] py-10">
        <div className="xl:h-[7.5vh] lg:h-[6.5vh] md:h-[6vh] sm:h-[5vh] w-[71vw] mt-4 m-auto rounded-[10px]">
          <h1 className=" justify-center flex items-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg text-md font-Poppins">
            Related Products
          </h1>
        </div>
        <div className="max-w-full h-auto grid place-items-center p-6 md:p-20 ">
          <div className="grid gap-y-14 grid-cols-1 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
            {relatedProducts.slice(0, 3).map((product, index) => (
              <ProductItem product={product} key={index} />
            ))}

          </div>
        </div>

        <button
          className="flex justify-center m-auto cursor-pointer text-white bg-black text-base mt-8 px-8 py-3 rounded-xl hover:text-[black] hover:bg-[white] hover:border hover:border-solid hover:border-[black] hover:font-semibold"
          onClick={() => Navigate(`/Products/category/${product.category}`)}
        >
          Show more
        </button>
      </section>
      <Quality />
    </>
  );
};

export default SepProduct;
