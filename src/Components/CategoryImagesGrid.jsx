import { Fragment } from "react";
import livingImg from "../assets/images/living room.jpg";
import bedroomImg from "../assets/images/bedroom.webp";

const CategoryImagesGrid = () => {
  return (
    <Fragment>
      <div className="max-w-full h-auto grid place-items-center p-6 md:p-20">
        <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={bedroomImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[348px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] font-medium text-white mb-3">
                Dining
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={livingImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[348px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] font-medium text-white mb-3">
                Living
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={bedroomImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[348px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] text-center font-medium text-white mb-3">
                Bedroom
              </h2>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={bedroomImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[348px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] font-medium text-white mb-3">
                Dining
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={livingImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[348px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] font-medium text-white mb-3">
                Living
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={bedroomImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[348px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] text-center font-medium text-white mb-3">
                Bedroom
              </h2>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={bedroomImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[348px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] font-medium text-white mb-3">
                Dining
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={livingImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[348px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] font-medium text-white mb-3">
                Living
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
              <img
                src={bedroomImg}
                alt="image"
                className="w-[328px] rounded-3xl xl:w-[348px]"
              />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
              <h2 className="text-[2rem] text-center font-medium text-white mb-3">
                Bedroom
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryImagesGrid;
