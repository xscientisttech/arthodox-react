import { Fragment } from "react";
import Quality from "../Components/Quality";
import HeroImg from "../assets/images/back-img.jpg";

const Checkout = () => {
  return (
    <Fragment>
      <div className="h-[25rem] w-full relative flex justify-center items-center">
        <img src={HeroImg} alt="" className="bg-no-repeat bg-cover w-full h-full absolute transform opacity-60" />
        <div className="relative">
          <h2 className="text-5xl font-bold p-2">Checkout</h2>
          <p className="text-[1.2rem] flex justify-evenly">
            <span className="font-bold">Home</span>
            <span>
              <i className="fa-solid fa-greater-than text-sm"></i>
            </span>
            <span>Checkout</span>
          </p>
        </div>
      </div>
      <Quality />
    </Fragment>
  );
};

export default Checkout;
