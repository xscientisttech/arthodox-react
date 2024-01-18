import { Fragment, useState, useEffect } from "react";
import Quality from "../Components/Quality";
import Hero from "../Components/Hero";
import Otp from "../Components/otp";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    company: "",
    country: "",
    streetaddress: "",
    city: "",
    pincode: "",
    email: "",
    // addInfo: "",
  });

  const [showOtp, setShowOTP] = useState(false);

  const PostData = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      company,
      country,
      streetaddress,
      city,
      pincode,
      email,
    } = details;

    const res = await fetch(
      "https://arthodoxotp-default-rtdb.firebaseio.com/orders.json",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          company,
          country,
          streetaddress,
          city,
          pincode,
          email,
        }),
      }
    );
    setShowOTP(true);
  };

  const [errorMessage, setErrorMessage] = useState("");
  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    if (name === "pincode") {
      if (!/^\d+$/.test(value)) {
        setDetails({ ...details, [name]: value });
        setErrorMessage("Please enter a valid numeric PIN code.");
      } else if (value.length !== 6) {
        setDetails({ ...details, [name]: value });
        setErrorMessage("PIN code must be exactly 6 digits.");
      } else if (value !== "431001") {
        setDetails({ ...details, [name]: value });
        setErrorMessage("This PIN code is out of service.");
      } else {
        setDetails({ ...details, [name]: value });
        setErrorMessage("");
      }
    } else {
      setDetails({ ...details, [name]: value });
    }
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
                    onChange={(e) =>
                      setDetails({ ...details, firstName: e.target.value })
                    }
                    required
                    name="firstname"
                    type="text"
                    id="fname"
                    className=" font-normal  flex-grow w-full p-4 rounded-lg border-2 border-slate-950 "
                  />
                </div>
                <div className=" flex flex-col gap-5">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    onChange={(e) =>
                      setDetails({ ...details, lastName: e.target.value })
                    }
                    name="lname"
                    type="text"
                    id="lname"
                    className=" font-normal  w-full p-4 flex-grow rounded-lg border-2 border-slate-950 "
                    required
                  />
                </div>
              </div>
              <div className="company-name flex flex-col gap-5">
                <label htmlFor="company">Company Name (Optional)</label>
                <input
                  name="company"
                  type="text"
                  className=" w-full max-w-md font-normal  p-4 rounded-lg border-2 border-slate-950 "
                  onChange={(e) =>
                    setDetails({ ...details, company: e.target.value })
                  }
                  required
                />
              </div>
              <div className="country flex flex-col gap-5">
                <label htmlFor="country">Country / Region</label>
                <input
                  type="text"
                  name="country"
                  className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 "
                  onChange={(e) =>
                    setDetails({ ...details, country: e.target.value })
                  }
                  required
                />
              </div>
              {showOtp ? (
                <div className="phone flex flex-col gap-5">
                  <label htmlFor="phone">Phone</label>

                  <Otp />
                </div>
              ) : null}
              <div className="address flex flex-col gap-5">
                <label htmlFor="address">Street Address</label>
                <input
                  type="text"
                  name="address"
                  className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 "
                  onChange={(e) =>
                    setDetails({ ...details, streetaddress: e.target.value })
                  }
                  required
                />
              </div>
              <div className="city flex flex-col gap-5">
                <label htmlFor="city">Town / City</label>
                <input
                  type="text"
                  name="city"
                  className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 "
                  onChange={(e) =>
                    setDetails({ ...details, city: e.target.value })
                  }
                  required
                />
              </div>
              <div className="zip-code flex flex-col gap-5">
                <label htmlFor="">Pincode</label>
                <input
                  type="number"
                  name="pincode"
                  className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 "
                  onChange={onChangeHandler}
                  required
                />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              </div>

              <div className="email flex flex-col gap-5">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  type="email"
                  name="email"
                  className="max-w-md font-normal p-4 rounded-lg border-2 border-slate-950 "
                  required
                />
              </div>
            </div>
          </div>
          <div className="c2 min-w-1/2 sm:w-full p-5 gap-10">
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
                  <label htmlFor="dbt" className="ml-2">
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
                <label htmlFor="cod">Cash On Delivery</label>
              </div>
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              <button
                onClick={PostData}
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
