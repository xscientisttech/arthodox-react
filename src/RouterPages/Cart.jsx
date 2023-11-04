import { Fragment } from "react";
import { useNavigate } from "react-router";
import Quality from "../Components/Quality";
import Hero from "../Components/Hero";
import gridImg from "../assets/images/grid.jpg";

const Cart = () => {
  const Navigate = useNavigate();
  return (
    <Fragment>
      <Hero title="Cart" />

      <section className="w-full flex justify-center lg:px-[10%] py-[4%]">
        <div className="w-full gap-10 flex flex-wrap justify-between items-center lg:items-start lg:justify-start">
          <div className="flex flex-grow w-8/12">
            <table class="border-collapse w-full">
              <thead className="bg-[#faf3ea]">
                <tr className=" ">
                  <th class=" py-5"></th>
                  <th class=" py-5">Product</th>
                  <th class=" py-5">Price</th>
                  <th class=" py-5">Quantity</th>
                  <th class=" py-5">Subtotal</th>
                  <th class=" py-5"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className=" mt-10">
                    <div className="flex justify-center items-center gap-10">
                      <img src={gridImg} alt="" className="w-[6rem] rounded-lg" />
                    </div>
                  </td>
                  <td class=" text-center">Wall Frame</td>
                  <td class=" text-center">Rs 1000</td>
                  <td class=" text-center">2</td>
                  <td class=" text-center">Rs 2000</td>
                  <td class=" text-center">
                    <i className="fa-solid fa-trash text-orange-600"></i>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="bg-[#f9f1e7] flex flex-col justify-center items-center p-8 w-80">
            <h1 className="text-2xl font-bold">Cart Total</h1>
            <div className=" w-full flex justify-between p-3 px-10 items-center mt-6">
              <p className="font-semibold">Subtotal</p>
              <p className="font-semibold">Rs. 1000</p>
            </div>
            <div className=" w-full flex justify-between p-3 px-10 items-center mt-6">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">Rs. 1000</p>
            </div>
            <button
              class="mt-6 px-8 py-2 rounded-xl border-solid bg-black text-white font-semibold border-[black] hover:bg-[#f9f1e7] hover:text-black border-2"
              onClick={() => Navigate("/Checkout")}
            >
              Check Out
            </button>
          </div>
        </div>
      </section>
      <Quality />
    </Fragment>
  );
};

export default Cart;
