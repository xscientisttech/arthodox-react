import React from "react";
import Quality from "../Components/Quality";
import Navigation from "../Components/Navigation";
import ProductMain from "../Components/ProductMain";
import { useNavigate } from "react-router";
import ProductItem from "../Components/ProductItem";
import DummyData from "../Components/DummyData";

const SepProduct = () => {

  const Navigate = useNavigate();

  return (
    <>
      <Navigation />
      <ProductMain />

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
              src={DummyData.LivingImgUrl} alt="living-img"
              className="w-6/12 max-w-[520px] min-w-[250px] aspect-[1.5] rounded-[10px]"
            ></img>
            <img
              src={DummyData.dinnigImgUrl} alt="living-img"
              className="w-6/12 max-w-[520px] min-w-[250px] aspect-[1.5] rounded-[10px]"
            ></img>
          </div>
        </div>
      </section>

      <section className="mt-20 px-[10%]">
        <div className="h-[7.5vh]  mx-20 max-w-full pl-5 bg-[#f4f4f4] mt-4 ">
          <h1 className=" justify-start flex items-start text-[2.5rem]">
            Related Products
          </h1>
        </div>
        <div className="max-w-full h-auto grid place-items-center p-6 md:p-20">
          <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
        <button
          className="flex justify-center m-auto cursor-pointer text-white bg-black text-base mt-8 px-8 py-3 rounded-xl hover:text-[black] hover:bg-[white] hover:border hover:border-solid hover:border-[black] hover:font-semibold"
          onClick={() => Navigate("/Products")}
        >
          Show more
        </button>
      </section>
      <Quality />
    </>
  );
};

export default SepProduct;
