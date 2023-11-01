import Filter from "../Components/Filter";
import HeroImg from "../assets/images/back-img.jpg";
import gridImg from "../assets/images/grid.jpg";
import PageSection from "../Components/PageSection";
import Quality from "../Components/Quality";
import { Fragment } from "react";
import { useNavigate } from "react-router";
import Hero from "../Components/Hero";

const Products = () => {

  const Navigate = useNavigate();


  return (
    <Fragment>
      <Hero title="Products" />

      <Filter />

        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 max-w-[1200px] mt-16 mx-auto my-0" onClick={() => Navigate("/Product")}>
          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 cursor-pointer">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 cursor-pointer">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 ">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>

          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 cursor-pointer">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 cursor-pointer">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 cursor-pointer">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 cursor-pointer">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 cursor-pointer">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 cursor-pointer">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>

          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 cursor-pointer">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 cursor-pointer">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="text-start border bg-neutral-100 border-solid border-[#ccc] transform hover:scale-110 cursor-pointer">
            <img src={gridImg} alt="Avatar" className=" cursor-pointer" />
            <div className="p-2">
              <h3 className="text-xl font-semibold cursor-pointer">wall frame</h3>
              <p className=" cursor-pointer">Attrative Wall Frames</p>
              <p className=" cursor-pointer">
                <span>Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
        </div>
        <PageSection/>
        <Quality/>
      </Fragment>
  );
};

export default Products;
