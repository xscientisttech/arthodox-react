import { Fragment } from "react";
import Quality from "../Components/Quality";
import HeroImg from "../assets/images/back-img.jpg";
import Hero from "../Components/Hero";

const Cart = () => {
  return (
    <Fragment>
      <Hero title="Cart" />
      <Quality />
    </Fragment>
  );
};

export default Cart;
