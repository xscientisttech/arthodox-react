import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function SearchIcon({ search, setSearch }) {
  const [searchOpen, setSearchOpen] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (search !== '' && location.pathname !== '/Products') {
      navigate('/Products');
    }
  }, [search])



  return (

    <>
      <div className="group/searchBar">
        <div className="group/item relative flex items-center h-10 w-fit md:w-full rounded-lg md:border focus-within:shadow-lg bg-white overflow-hidden cursor-pointer">
          <div className=" grid place-items-center h-full w-12 text-gray-900 md:text-gray-300 font-bold ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            className="peer  h-full w-full hidden md:block outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className=" group/bar group-hover/searchBar:visible md:group-hover/searchBar:invisible invisible fixed left-0 top-12 mx-1 flex items-center h-10 w-full md:border focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-900 md:text-gray-300 font-bold ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            className="peer h-full w-full md:block outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
    </>




  );
}

export default SearchIcon;
