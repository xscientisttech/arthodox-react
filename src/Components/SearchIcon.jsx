import React, { useState } from "react";

function SearchIcon() {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (

    <>
      <div className="group/searchBar">
        <div class="group/item relative flex items-center h-10 w-fit md:w-full rounded-lg md:border focus-within:shadow-lg bg-white overflow-hidden cursor-pointer">
          <div class=" grid place-items-center h-full w-12 text-gray-900 md:text-gray-300 font-bold ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            class="peer  h-full w-full hidden md:block outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search..." />
        </div>

        <div class=" group/bar group-hover/searchBar:visible md:group-hover/searchBar:invisible invisible fixed left-0 top-12 mx-1 flex items-center h-10 w-full md:border focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-900 md:text-gray-300 font-bold ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            class="peer h-full w-full md:block outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search..." />
        </div>
      </div>
    </>




  );
}

export default SearchIcon;
