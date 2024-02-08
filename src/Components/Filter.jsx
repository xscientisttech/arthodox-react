import React from "react";
import { FaSliders } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const Filter = ({ sortBy, setSortBy }) => {
  return (
    <div className="bg-[#F9F1E7] h-[70px] w-full flex justify-around items-center font-Poppins">
      <div className="flex gap-5">
        <div className="flex gap-2.5 justify-between cursor-pointer items-center"></div>
      </div>
      <div className="flex gap-5">
        <div className="sort-by flex">
          <label className="relative flex w-40 md:w-60 rounded overflow-hidden">
            <select
              className="appearance-none text-inherit shadow-none flex-1 cursor-pointer p-[0.7em] border-0"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="null">Default</option>
              <option value="1">Price Low To High</option>
              <option value="2">Price High To Low</option>
              <option value="3">Ascending A-Z</option>
              <option value="4">Descending Z-A</option>
            </select>
          </label>
          <div
            className=" relative flex justify-center items-center right-10"
            value={sortBy}
            onClick={(e) => setSortBy(e.target.value)}
          >
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
