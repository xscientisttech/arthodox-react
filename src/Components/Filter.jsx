const Filter = () => {
  return (
    <div className="bg-[#f9f1e7] h-[70px] w-full flex justify-around items-center">
      <div className="flex gap-5">
        <div className="flex gap-2.5 justify-between items-center">
          <i class="fa-solid fa-sliders"></i>
          <p>Filter</p>
        </div>

      </div>
      <div className="flex gap-5">
        <div class="sort-by">
          <label className="relative flex w-60 rounded overflow-hidden after:absolute after:transition-[0.25s] after:duration-[all] after:ease-[ease] after:pointer-events-none after:right-4 after:top-4">
            <select className="appearance-none text-inherit shadow-none flex-1 cursor-pointer p-[0.75rem] border-0">
              <option value="1">Default</option>
              <option value="2">Price Low To High</option>
              <option value="3">Price High To Low</option>
            </select>
          </label>
        </div>

      </div>
    </div>
  )
}

export default Filter;