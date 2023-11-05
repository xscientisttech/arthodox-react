const Filter = () => {
  return (
    <div className="bg-[#F9F1E7] h-[70px] w-full flex justify-around items-center font-Poppins">
      <div className="flex gap-5">
        <div className="flex gap-2.5 justify-between cursor-pointer items-center">
          <i className="fa-solid fa-sliders"></i>
          <p>Filter</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="sort-by">
          <label className="relative flex w-40 md:w-60 rounded overflow-hidden">
            <select className="appearance-none text-inherit shadow-none flex-1 cursor-pointer p-[0.7em] border-0">
              <option value="1">Default</option>
              <option value="2">Price Low To High</option>
              <option value="3">Price High To Low</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
