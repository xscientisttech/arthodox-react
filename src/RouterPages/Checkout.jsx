import { Fragment } from "react";
import Quality from "../Components/Quality";
import HeroImg from "../assets/images/back-img.jpg";
import Hero from "../Components/Hero";

const Checkout = () => {
  return (
    <Fragment>
      <Hero title="Checkout" />
      <section className="content w-full p-32 py-0">
        <div className="container p-20 flex justify-center gap-10">
          <div className="c1 w-1/2 flex flex-col gap-10">
            <h1 className="text-2xl font-bold">Billing Details</h1>
            <form action="submit" id="billing" className="form flex flex-col font-semibold gap-5">
              <div className="name flex  gap-5 max-w-md font-normal">
                <div className=" flex flex-col gap-5">
                  <label htmlFor="fname">First name</label>
                  <input type="text" id="fname" name="fname" className=" font-normal  flex-grow w-full p-4 rounded-lg border-2 border-slate-950 " />
                </div>
                <div className=" flex flex-col gap-5">
                  <label htmlFor="lname">Last name</label>
                  <input type="text" id="lname" name="lname" className=" font-normal  w-full p-4 flex-grow rounded-lg border-2 border-slate-950 " />
                </div>
              </div>
              <div className="company-name flex flex-col gap-5">
                <label htmlFor="company">Company Name (Optional)</label>
                <input type="text" name="company" className=" w-full max-w-md font-normal  p-4 rounded-lg border-2 border-slate-950 " />
              </div>
              <div className="country flex flex-col gap-5">
                <label htmlFor="country">Country / Region</label>
                <input type="text" name="country" className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 " />
              </div>
              <div className="address flex flex-col gap-5">
                <label htmlFor="address">Street Address</label>
                <input type="text" name="address" className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 " />
              </div>
              <div className="city flex flex-col gap-5">
                <label htmlFor="city">Town / City</label>
                <input type="text" name="city" className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 " />
              </div>
              <div className="province flex flex-col gap-5">
                <label htmlFor="province">Province</label>
                <input type="text" name="province" className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 " />
              </div>
              <div className="zip-code flex flex-col gap-5">
                <label htmlFor="zip-code">Zip Code</label>
                <input type="text" name="zip-code" className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 " />
              </div>
              <div className="phone flex flex-col gap-5">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 " />
              </div>
              <div className="email flex flex-col gap-5">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 " />
              </div>
              <div className="add-info flex flex-col gap-5">
                <input type="text" name="add-info" placeholder="Additional Information" className="max-w-md font-normal p-4 rounded-lg border-2 mt-10 border-slate-950 " />
              </div>
            </form>
          </div>
          <div className="c2 w-1/2 p-5 gap-10">
            <div className="product-details flex flex-col gap-5">
              <div className="heading flex justify-between">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <div className="product-name flex justify-between">
                <p>Best Frame</p>
                <p>Rs. 2500</p>
              </div>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>Rs. 2500</p>
              </div>
              <div className="total flex justify-between">
                <p>Total</p>
                <p>Rs. 2500</p>
              </div>
            </div>
            <div className="payment-mode flex flex-col mt-10 gap-5">
              <div className="dbt flex flex-col gap-2">
                <div className="flex items-center">
                  <input type="radio" checked name="dbt" />
                  <label htmlFor="dbt" className="ml-2">Direct Bank Transfer</label>
                </div>
                <p>
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                  Your order will not be shipped until the funds have cleared in our account.
                </p>
              </div>
              <div className="cod flex items-center gap-2">
                <input type="radio" name="dbt" />
                <label htmlFor="cod">Cash On Delivery</label>
              </div>
              <p>
                Your personal data will be used to support your experience throughout this website, to manage access to
                your account, and for other purposes described in our privacy policy.
              </p>
              <button className="w-44 p-4 rounded-lg font-semibold bg-blue-500 text-white self-center mt-10 hover:bg-slate-600">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
      <Quality />
    </Fragment>
  );
};

export default Checkout;
