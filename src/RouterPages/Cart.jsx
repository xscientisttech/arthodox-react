import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Quality from "../Components/Quality";
import Hero from "../Components/Hero";
import CartItem from "../Components/CartItem";
import { useCart } from "../assets/data/CartContext";

const Cart = () => {
  const { cart, cartTotal, removeFromCart, cartTotalWithGST } = useCart();

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length > 0) {
      setTimeout(() => setIsLoading(false), 1500);
    } else {
      // navigate("/");
      setIsLoading(true);
    }
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   console.log(cartTotal())
  // })

  const Navigate = useNavigate();
  return (
    <Fragment>
      <Hero title="Cart" />
      <section className="w-full flex justify-center lg:px-[10%] p-[4%]">
        <div className="w-full gap-5 flex flex-wrap justify-center items-center lg:items-start lg:justify-start">
          <div className="flex w-full flex-1">
            {isLoading ? (
              <>
                <p className=" w-full bg-[#faf3ea] p-4">
                  No items in Cart ...{" "}
                </p>
              </>
            ) : (
              <>
                <table className=" min-w-0 border-collapse border-[#faf3ea] w-full">
                  <thead className="w-full ">
                    <tr className=" bg-[#faf3ea] ">
                      {/* <th className="lg:block hidden"></th> */}
                      {/* <th className="md:block hidden"></th> */}
                      <th className="text-center p-4 max-w-[6rem] max-h-[4rem]"></th>
                      <th className="text-center p-4">Product</th>
                      <th className="text-center p-4">Price</th>
                      <th className="text-center p-4">Quantity</th>
                      <th className="text-center p-4">Subtotal</th>
                      <th className="text-center p-4">{}</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {cart.map((item, index) => (
                      <tr className=" mt-4 hover:bg-slate-100 " key={index}>
                        <CartItem
                          product={item}
                          index={index}
                          removeFromCart={removeFromCart}
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
          <div className="bg-[#f9f1e7] flex flex-col justify-center items-center p-8 w-80">
            <h1 className="text-2xl font-bold">Cart Total</h1>
            <div className=" w-full flex justify-between p-2 px-10 items-center mt-6">
              <p className="font-semibold">Subtotal</p>
              <p className="font-semibold">Rs.{cartTotal()}</p>
            </div>
            <div className=" w-full flex justify-between p-2 px-10 items-center mt-6">
              <p className="font-semibold">All Taxes</p>
              <p className="font-semibold">Rs. { cartTotal() * 0.18}</p>
            </div>
            <hr className=" border-2 border-red-700 min-w-full"/>
            <div className=" w-full flex justify-between p-2 px-10 items-center mt-6">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">Rs. {cartTotalWithGST()}</p>
            </div>
            <button
              className="mt-6 px-8 py-2 rounded-xl border-solid bg-black text-white font-semibold border-[black] hover:bg-[#f9f1e7] hover:text-black border-2"
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
