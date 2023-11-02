import React, { useState } from "react";
import Quality from "../Components/Quality";
import Navigation from "../Components/Navigation";
import dinnigImg from "../assets/images/dinning-1.jpg";
import livingImg from "../assets/images/living room.jpg";

import ColorPicker from "../Components/colorPicker";
import { useNavigate } from "react-router";
import gridImg from "../assets/images/grid.jpg";

const SepProduct = () => {

  const Navigate = useNavigate();

  return (
    <>
      <Navigation />
      <ColorPicker/>

      <section className=" w-full flex flex-col items-center justify-center px-[10%] py-[5%]">
        <div className="w-full flex flex-col items-center justify-center gap-20">
          <div className="max-w-[1200px] flex flex-col items-center justify-center gap-5 px-[5%] py-[0%]">
            <div className="flex gap-5 cursor-pointer justify-center items-center ml-28">
              <h3 className="text-[22px] font-bold">Description</h3>
              <h3 className="text-[22px] text-[#00000084] font-bold">
                Additional Information
              </h3>
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
              src={livingImg}
              className="w-6/12 max-w-[520px] min-w-[250px] aspect-[1.5] rounded-[10px]"
            ></img>
            <img
              src={dinnigImg}
              className="w-6/12 max-w-[520px] min-w-[250px] aspect-[1.5] rounded-[10px]"
            ></img>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="h-[7.5vh] w-[90vw] bg-[#f4f4f4] mt-4 m-auto rounded-[10px]">
          <h1 className="justify-center flex items-center text-[2.5rem]">
            Our Products
          </h1>
        </div>
        <div className="max-w-full h-auto grid place-items-center p-6 md:p-20">
          <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
            <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
              <img
                src={gridImg}
                alt="Avatar"
                className="w-[100%]"
                onClick={() => Navigate("/SepProduct")}
              />
              <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
                <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                  wall frame
                </h3>
                <p>Attrative Wall Frames</p>
                <p className="text-[#898989] text-base flex gap-2.5">
                  <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                  <del>Rs. 1500.00</del>
                </p>
              </div>
            </div>

            <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
              <img
                src={gridImg}
                alt="Avatar"
                className="w-[100%]"
                onClick={() => Navigate("/SepProduct")}
              />
              <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
                <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                  wall frame
                </h3>
                <p>Attrative Wall Frames</p>
                <p className="text-[#898989] text-base flex gap-2.5">
                  <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                  <del>Rs. 1500.00</del>
                </p>
              </div>
            </div>

            <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
              <img
                src={gridImg}
                alt="Avatar"
                className="w-[100%]"
                onClick={() => Navigate("/SepProduct")}
              />
              <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
                <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                  wall frame
                </h3>
                <p>Attrative Wall Frames</p>
                <p className="text-[#898989] text-base flex gap-2.5">
                  <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                  <del>Rs. 1500.00</del>
                </p>
              </div>
            </div>
            <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
              <img
                src={gridImg}
                alt="Avatar"
                className="w-[100%]"
                onClick={() => Navigate("/SepProduct")}
              />
              <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
                <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                  wall frame
                </h3>
                <p>Attrative Wall Frames</p>
                <p className="text-[#898989] text-base flex gap-2.5">
                  <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                  <del>Rs. 1500.00</del>
                </p>
              </div>
            </div>
            <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
              <img
                src={gridImg}
                alt="Avatar"
                className="w-[100%]"
                onClick={() => Navigate("/SepProduct")}
              />
              <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
                <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                  wall frame
                </h3>
                <p>Attrative Wall Frames</p>
                <p className="text-[#898989] text-base flex gap-2.5">
                  <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                  <del>Rs. 1500.00</del>
                </p>
              </div>
            </div>
            <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
              <img
                src={gridImg}
                alt="Avatar"
                className="w-[100%]"
                onClick={() => Navigate("/SepProduct")}
              />
              <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
                <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                  wall frame
                </h3>
                <p>Attrative Wall Frames</p>
                <p className="text-[#898989] text-base flex gap-2.5">
                  <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                  <del>Rs. 1500.00</del>
                </p>
              </div>
            </div>
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
