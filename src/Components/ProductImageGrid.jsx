import { Fragment } from "react";
import gridImg from "../assets/images/grid.jpg";
import { useNavigate } from "react-router";

const ProductImageGrid = () => {
  const Navigate = useNavigate();

  return (
    <Fragment>
      <div className="max-w-full h-auto grid place-items-center p-6 md:p-20">
        <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
          <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
            <img
              src={gridImg}
              alt="Avatar"
              className="w-[100%]"
              onClick={() => Navigate("/SepProduct")}
            />
            <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
              <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                wall frame
              </h3>
              <p>Attrative Wall Frames</p>
              <p className="text-[#898989] text-base flex gap-2.5">
                <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>

          <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
            <img
              src={gridImg}
              alt="Avatar"
              className="w-[100%]"
              onClick={() => Navigate("/SepProduct")}
            />
            <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
              <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                wall frame
              </h3>
              <p>Attrative Wall Frames</p>
              <p className="text-[#898989] text-base flex gap-2.5">
                <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>

          <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
            <img
              src={gridImg}
              alt="Avatar"
              className="w-[100%]"
              onClick={() => Navigate("/SepProduct")}
            />
            <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
              <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                wall frame
              </h3>
              <p>Attrative Wall Frames</p>
              <p className="text-[#898989] text-base flex gap-2.5">
                <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
            <img
              src={gridImg}
              alt="Avatar"
              className="w-[100%]"
              onClick={() => Navigate("/SepProduct")}
            />
            <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
              <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                wall frame
              </h3>
              <p>Attrative Wall Frames</p>
              <p className="text-[#898989] text-base flex gap-2.5">
                <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
            <img
              src={gridImg}
              alt="Avatar"
              className="w-[100%]"
              onClick={() => Navigate("/SepProduct")}
            />
            <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
              <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                wall frame
              </h3>
              <p>Attrative Wall Frames</p>
              <p className="text-[#898989] text-base flex gap-2.5">
                <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
            <img
              src={gridImg}
              alt="Avatar"
              className="w-[100%]"
              onClick={() => Navigate("/SepProduct")}
            />
            <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
              <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                wall frame
              </h3>
              <p>Attrative Wall Frames</p>
              <p className="text-[#898989] text-base flex gap-2.5">
                <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
            <img
              src={gridImg}
              alt="Avatar"
              className="w-[100%]"
              onClick={() => Navigate("/SepProduct")}
            />
            <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
              <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                wall frame
              </h3>
              <p>Attrative Wall Frames</p>
              <p className="text-[#898989] text-base flex gap-2.5">
                <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
            <img
              src={gridImg}
              alt="Avatar"
              className="w-[100%]"
              onClick={() => Navigate("/SepProduct")}
            />
            <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
              <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                wall frame
              </h3>
              <p>Attrative Wall Frames</p>
              <p className="text-[#898989] text-base flex gap-2.5">
                <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
          <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
            <img
              src={gridImg}
              alt="Avatar"
              className="w-[100%]"
              onClick={() => Navigate("/SepProduct")}
            />
            <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
              <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                wall frame
              </h3>
              <p>Attrative Wall Frames</p>
              <p className="text-[#898989] text-base flex gap-2.5">
                <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                <del>Rs. 1500.00</del>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// export default ProductImageGrid;
