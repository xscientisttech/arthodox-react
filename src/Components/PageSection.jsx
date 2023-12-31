const PageSection = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-10 p-8">
      <div className="items-center px-6 py-[0.8rem] rounded-[5px] bg-[#b88e2f] text-white cursor-pointer">
        1
      </div>
      <div className="items-center px-6 py-[0.8rem] rounded-[5px] bg-[#f9f1e7] cursor-pointer">
        2
      </div>
      <div className="items-center px-6 py-[0.8rem] rounded-[5px] bg-[#f9f1e7] cursor-pointer">
        3
      </div>
      <div className="items-center px-6 py-[0.8rem] rounded-[5px] bg-[#f9f1e7] cursor-pointer">
        Next
      </div>
    </div>
  );
};

export default PageSection;
