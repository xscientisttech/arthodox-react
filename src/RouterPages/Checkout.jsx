import { Fragment, useState, useEffect } from "react";
import Quality from "../Components/Quality";
import Hero from "../Components/Hero";
import Otp from "../Components/otp";
import { useCart } from "../assets/data/CartContext";

const Checkout = ({ typeBuy }) => {
  const { buy, cartTotal } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    cname: "",
    address: "",
    phone: "",
    email: "",
    addInfo: "",
  });

  const onChangeHandler = (event) => {
    // console.log(event.target.value);
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Fragment>
      <Hero title="Checkout" />
      <section className="content w-full p-10 lg:p-16 py-10">
        <form
          action="submit"
          className="container grid grid-cols-1 lg:grid-cols-2 md:p-20 lg:px-40 p-0 justify-center gap-10"
        >
          <div className="c1 items-center lg:items-start min-w-1/2 sm:w-full flex flex-col gap-10">
            <h1 className="text-2xl font-bold">Billing Details</h1>
            <div
              id="billing"
              className="form flex flex-col font-semibold gap-5"
            >
              <div className="name flex  gap-5 max-w-md font-normal">
                <div className=" flex flex-col gap-5">
                  <label htmlFor="fname">First name</label>
                  <input
                    onChange={onChangeHandler}
                    name="fname"
                    type="text"
                    id="fname"
                    className=" font-normal  flex-grow w-full p-4 rounded-lg border-2 border-slate-950 "
                  />
                </div>
                <div className=" flex flex-col gap-5">
                  <label htmlFor="lname">Last name</label>
                  <input
                    onChange={onChangeHandler}
                    name="lname"
                    type="text"
                    id="lname"
                    className=" font-normal  w-full p-4 flex-grow rounded-lg border-2 border-slate-950 "
                  />
                </div>
              </div>
              <div className="company-name flex flex-col gap-5">
                <label htmlFor="company">Company Name (Optional)</label>
                <input
                  onChange={onChangeHandler}
                  name="company"
                  type="text"
                  className=" w-full max-w-md font-normal  p-4 rounded-lg border-2 border-slate-950 "
                />
              </div>
              <div className="country flex flex-col gap-5">
                <label htmlFor="country">Country / Region</label>
                <input
                  onChange={onChangeHandler}
                  type="text"
                  name="country"
                  className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 "
                />
              </div>
              <div className="address flex flex-col gap-5">
                <label htmlFor="address">Street Address</label>
                <input
                  onChange={onChangeHandler}
                  type="text"
                  name="address"
                  className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 "
                />
              </div>
              <div className="city flex flex-col gap-5">
                <label htmlFor="city">Town / City</label>
                <input
                  onChange={onChangeHandler}
                  type="text"
                  name="city"
                  className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 "
                />
              </div>
              <div className="province flex flex-col gap-5">
                <label htmlFor="province">Province</label>
                <input
                  onChange={onChangeHandler}
                  type="text"
                  name="province"
                  className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 "
                />
              </div>
              <div className="zip-code flex flex-col gap-5">
                <label htmlFor="zip-code">Zip Code</label>
                <input
                  onChange={onChangeHandler}
                  type="number"
                  name="zip-code"
                  className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 "
                />
              </div>
              <div className="phone flex flex-col gap-5">
                <label htmlFor="phone">Phone</label>
                {/*<input onChange={onChangeHandler} type="number" name="phone" className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 " /> */}
                <Otp />
              </div>
              <div className="email flex flex-col gap-5">
                <label htmlFor="email">Email</label>
                <input
                  onChange={onChangeHandler}
                  type="email"
                  name="email"
                  className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 "
                />
              </div>
              <div className="add-info flex flex-col gap-5">
                <input
                  onChange={onChangeHandler}
                  type="text"
                  name="add-info"
                  placeholder="Additional Information"
                  className="max-w-md font-normal p-4 rounded-lg border-2 mt-10 border-slate-950 "
                />
              </div>
            </div>
          </div>
          <div className="c2 min-w-1/2 sm:w-full p-5 gap-10">
            <div className="product-details flex flex-col gap-5">
              <div className="heading flex justify-between font-bold text-lg">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <div className="flex justify-between">
                <p>Subtotal</p>
                {typeBuy == true ? (
                  <p>Rs {buy[0].discount * buy[0].quantity}</p>
                ) : (
                  <p>Rs {cartTotal()}</p>
                )}
              </div>
              <div className="product-name flex justify-between">
                <p>Shipping & Handling</p>
                <p>Free</p>
              </div>
              <div className="total flex justify-between font-bold text-red-700 ">
                <p className="">Total</p>
                {typeBuy == true ? (
                  <p>Rs {buy[0].discount * buy[0].quantity}</p>
                ) : (
                  <p>Rs {cartTotal()}</p>
                )}
              </div>
            </div>
            <div className="payment-mode flex flex-col mt-10 gap-5">
              <div className="dbt flex flex-col gap-2">
                <div className="flex items-center">
                  <input type="radio" checked name="dbt" />
                  <label htmlFor="dbt" className="ml-2 font-semibold">
                    Direct Bank Transfer
                  </label>
                </div>
                <p>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
              <div className="cod flex items-center gap-2">
                <input type="radio" name="dbt" />
                <label htmlFor="cod" className="font-semibold">
                  Cash On Delivery
                </label>
              </div>
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              <button
                onClick={() => console.log(formData)}
                className="w-44 p-4 rounded-lg font-semibold bg-blue-500 text-white self-center mt-10 hover:bg-slate-600"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </section>
      <Quality />
    </Fragment>
  );
};

export default Checkout;
