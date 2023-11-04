import React, { useState } from "react";

function SearchIcon() {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div>
      <span onClick={toggleSearch}>
        <i className={ searchOpen ? "fa-solid fa-x" : "fa-solid fa-search"}></i>
      </span>
      {searchOpen && (
        <input
        className="w-40 absolute top-[100%] right-[7%]"
          type="text"
          placeholder="Search..."
          autoFocus
          onBlur={() => setSearchOpen(false)}
        />
      )}
    </div>
  );
}

export default SearchIcon;
