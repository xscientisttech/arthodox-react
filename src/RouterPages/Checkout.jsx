import { Fragment, useState, useEffect, memo, useMemo } from "react";
import Quality from "../Components/Quality";
import Hero from "../Components/Hero";
import Otp from "../Components/otp";
import '../firebase.config';
import { getFirestore, addDoc, collection } from "firebase/firestore/lite";
import { useCart } from "../assets/data/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


const Checkout = () => {


  const navigate = useNavigate();

  const { cart, cartTotal, emptyCart, removeFromCart, cartTotalWithGST } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const database = FirebaseApp.database();
  // const ordersDataRef = database.ref('Orders');
  const db = getFirestore();

  const [fullAddresss, setFullAddress] = useState({
    streetaddress: "",
    city: "",
    pincode: "",
    country: "",
  });

  const [details, setDetails] = useState({
    name: '',
    fullAddresss: "",
    email: "",
  });

  const [isDisabled, setIsDisablled] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [ph, setPh] = useState("");

  const PostData = async (e) => {
    e.preventDefault();

    // details.cart = cart;
    const uid = localStorage.getItem("UID");
    details.phone = ph;
    details.uid = uid;

    const orders = {cart: cart};
    orders.uid = uid;
    orders.phone = ph;
    orders.date = new Date().toLocaleString() + "";

    console.log('details : ', details);

    // details.cart = cart;

    if (isVerified) {
      const res1 = await addDoc(collection(db, 'profile'), details);
      const res2 = await addDoc(collection(db, 'orders'), orders);
      if (res1 && res2) {
        console.log('Data Stored Successfully ! ');
        toast.success("Order Placed ! ");
        emptyCart();
        navigate('/');
      } else {
        console.log("Database Error");
        toast.error("Database Error ! ")
      }
    } else {
      // toast.error("Please Verify Mobile Number ! ")
      console.log("Please Verify");
    }

  };

  // const onAddressChange = () => {
  //   let fullAddresss = `${details.fullAddresss}, ${details.city} - ${details.pincode}`;
  // }

  const [errorMessage, setErrorMessage] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    if (name === "pincode") {
      if (!/^\d+$/.test(value)) {
        setFullAddress({ ...fullAddresss, [name]: value });
        setErrorMessage("Please enter a valid numeric PIN code.");
      } else if (value.length !== 6) {
        setFullAddress({ ...fullAddresss, [name]: value });
        setErrorMessage("PIN code must be exactly 6 digits.");
      } else if (value !== "431001") {
        setFullAddress({ ...fullAddresss, [name]: value });
        setErrorMessage("This PIN code is out of service.");
      } else {
        setFullAddress({ ...fullAddresss, [name]: value });
        setErrorMessage("");
      }
    } else {
      setFullAddress({ ...fullAddresss, [name]: value });
    }
  };


  useEffect(() => {
    const address = fullAddresss.streetaddress + " " + fullAddresss.city + " " + fullAddresss.country + " " + fullAddresss.pincode;
    setDetails({ ...details, fullAddresss: address });
  }, [fullAddresss])


  return (
    <Fragment>
      <Hero title="Checkout" />
      <section className="content w-full p-[5%] lg:p-16 py-10">
        <form
          action="submit"
          onSubmit={PostData}
          className="container grid grid-cols-1 lg:grid-cols-2 md:p-20 lg:px-40 p-0 sm:p-0 justify-center gap-10"
        >
          <div className="c1 items-center lg:items-start min-w-1/2 sm:w-full flex flex-col p-5 gap-10">
            <h1 className="text-2xl font-bold">Billing Details</h1>
            <div
              id="billing"
              className="form flex flex-col font-semibold gap-5"
            >
              <div className="name flex flex-col sm:flex-row gap-5 w-full font-normal">
                <div className=" flex flex-col gap-5">
                  <label htmlFor="fname">First name</label>
                  <input
                    onChange={(e) =>
                      setDetails({ ...details, name: e.target.value })
                    }
                    required
                    name="firstname"
                    type="text"
                    id="fname"
                    className=" font-normal  flex-grow w-full p-2 sm:p-4 rounded-sm sm:rounded-lg border-2 border-slate-950 "
                  />
                </div>
                <div className=" flex flex-col gap-5">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    onChange={(e) =>
                      setDetails({ ...details, name: details.name + " " + e.target.value })
                    }
                    name="lname"
                    type="text"
                    id="lname"
                    className=" font-normal  w-full p-2  sm:p-4 flex-grow rounded-sm sm:rounded-lg border-2 border-slate-950 "
                    required
                  />
                </div>
              </div>
              {/* <div className="company-name flex flex-col gap-5">
                <label htmlFor="company">Company Name (Optional)</label>
                <input
                  name="company"
                  type="text"
                  className=" w-full w-full font-normal  p-2 sm:p-4 rounded-sm sm:rounded-lg border-2 border-slate-950 "
                  onChange={(e) =>
                    setDetails({ ...details, company: e.target.value })
                  }
                  required
                />
              </div> */}
              <div className="phone flex flex-col gap-5">
                <label htmlFor="phone">Phone</label>
                <Otp ph={ph} setPh={setPh} setIsVerified={setIsVerified} />
              </div>

              <div className="email flex flex-col gap-5">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  type="email"
                  name="email"
                  className="w-full font-normal p-2 sm:p-4 rounded-sm sm:rounded-lg border-2 border-slate-950 "
                  required
                />
              </div>


              <div className="address flex flex-col gap-5">
                <label htmlFor="address">Street Address</label>
                <input
                  type="text"
                  name="address"
                  className="w-full font-normal p-2 sm:p-4 rounded-sm sm:rounded-lg border-2 border-slate-950 "
                  onChange={(e) =>
                    setFullAddress({ ...fullAddresss, streetaddress: e.target.value })
                  }
                  required
                />
              </div>
              <div className="city flex flex-col gap-5">
                <label htmlFor="city">Town / City</label>
                <input
                  type="text"
                  name="city"
                  className="w-full font-normal p-2 sm:p-4 rounded-sm sm:rounded-lg border-2 border-slate-950 "
                  onChange={(e) =>
                    setFullAddress({ ...fullAddresss, city: e.target.value })
                  }
                  required
                />
              </div>
              <div className="zip-code flex flex-col gap-5">
                <label htmlFor="">Pincode</label>
                <input
                  type="number"
                  name="pincode"
                  className="w-full font-normal p-2 sm:p-4 rounded-sm sm:rounded-lg border-2 border-slate-950 "
                  onChange={onChangeHandler}
                  required
                />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              </div>

              <div className="country flex flex-col gap-5">
                <label htmlFor="country">Country / Region</label>
                <input
                  type="text"
                  name="country"
                  className="w-full font-normal p-2 sm:p-4 rounded-sm sm:rounded-lg border-2 border-slate-950 "
                  onChange={(e) =>
                    setFullAddress({ ...fullAddresss, country: e.target.value })
                  }
                  required
                />
              </div>
            </div>
          </div>
          <div className="c2 min-w-1/2 sm:w-full p-5 gap-10">
            <div className="product-details flex flex-col gap-5">
              {/* <div className="heading flex justify-between">
                <p>Product</p>
                <p>na</p>
              </div>
              <div className="product-name flex justify-between">
                <p>Best Frame</p>
                <p>10000</p>
              </div> */}
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>Rs. {cartTotal()}</p>
              </div>
              <div className="total flex justify-between">
                <p>Total (Including GST)</p>
                <p>Rs. {cartTotalWithGST()}</p>
              </div>
            </div>
            <div className="payment-mode flex flex-col mt-10 gap-5">
              {/* <div className="dbt flex flex-col gap-2">
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
              </div> */}
              <div className="cod flex items-center gap-2">
                <input type="radio" checked name="dbt" />
                <label htmlFor="cod">Cash On Delivery</label>
              </div>
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              {/* <button
                type="submit"
                // onClick={PostData}
                disabled
                className="w-44 p-4 rounded-lg font-semibold bg-blue-500 text-white self-center mt-10 hover:bg-slate-600"
              >
                Place Order
              </button> */}

              <div className="group flex flex-col items-center sm:items-start relative">
                <div className={`absolute -top-4 -left-4 text-red-500 w-56 p-4 border rounded-2xl shadow-lg opacity-0 ${isVerified ? '' : ' group-hover:opacity-100 '}`}>
                  Verify Phone number 
                </div>
                <input type="submit" disabled={!isVerified} className={` w-44 ${isVerified ? ' hover:bg-blue-700 cursor-pointer' : 'group bg-slate-600'} p-4 rounded-lg font-semibold bg-blue-500 text-white mt-10 `} value="Place Order" />
              </div>

            </div>
          </div>
        </form>
      </section>
      <Quality />
    </Fragment>
  );
};

export default Checkout;
