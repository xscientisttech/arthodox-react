import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router";
import Quality from "../Components/Quality";
import Hero from "../Components/Hero";
import CartItem from "../Components/CartItem";
import { useCart } from "../assets/data/CartContext";


const Cart = () => {

  const { cart, removeFromCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Navigate = useNavigate();
  return (
    <Fragment>
      <Hero title="Cart" />
      <section className="w-full flex justify-center lg:px-[10%] py-[4%]">
        <div className="w-full gap-5 flex flex-wrap justify-center items-center lg:items-start lg:justify-start">
          <div className="flex">
            <table className="sm:w-full sm:border-0 border-collapse border-4 border-solid border-[#faf3ea] w-[100vw] ">
              <thead className="flex flex-wrap">
                <tr className=" hidden sm:bg-[#faf3ea] sm:flex sm:gap-20">
                  <th className="lg:block hidden"></th>
                  <th className="md:block hidden"></th>
                  <th className="text-center p-4">Product</th>
                  <th className="text-center p-4">Price</th>
                  <th className="text-center p-4">Quantity</th>
                  <th className="text-center p-4">Subtotal</th>
                  <th className="text-center p-4"> </th>
                </tr>
              </thead>
              <tbody className="flex  justify-centre items-center mt-10 flex-col">
                {cart.map((item, index) => (
                  <tr className="block w-full sm:flex px-8 xl:px-0 lg:px-0 md:px-0 gap-28 items-center justify-centre" key={index}>
                    <CartItem product={item} index={index} removeFromCart={removeFromCart} />
                  </tr>
                ))}
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
