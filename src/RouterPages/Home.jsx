import { React, useEffect } from "react";
import { useNavigate } from "react-router";
import CategoryItem from "../Components/CategoryItem";
import ProductItem from "../Components/ProductItem";
import DummyData from "../assets/data/DummyData";
import { useProducts } from "../assets/data/ProductContext";
import Slider from "../Components/slider";

export default function Home() {

	const Navigate = useNavigate();
	
	const { products, categories } = useProducts();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


  const scrollDown = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: "smooth",
    });
  };

	return (
		<main className=" font-Poppins">
			<section>
				<img
					src={DummyData.HeroImgUrl}
					alt="heroimg"
					className="h-[50vh] object-cover xl:h-[calc(100vh_-_4rem)] lg:h-[80vh] md:h-[70vh] sm:h-[60vh] w-full bg-cover bg-center relative"
				/>
				<div className="absolute xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:w-[500px] lg:w-[350px] md:w-[280px] sm:w-[230px] w-[190px] xl:right-[5%] lg:right-[4%] md:right-[3%] sm:right-[2%] right-[1%] xl:top-[50%] lg:top-[45%] md:top-[40%] sm:top-[35%] top-[30%]">
					<h1 className="font-['Shantell Sans', cursive] ">Discover Our New collection</h1>
					<button
						className=" 
  text-[white] bg-[black] xl:text-xl lg:text-lg md:text-md sm:text-md text-sm xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 xl:py-4 lg:py-3 md:py-2 sm:py-2 py-1 rounded-[20px] hover:bg-white hover:text-black hover:font-semibold"
            onClick={scrollDown}
          >
            Explore
          </button>
		  
        </div>
		{/* <div className="flex absolute w-full  h-[40%] ">
          {products.slice(0, 6).map((product, index) => (
            <Slider key={index} product={product} />
          ))}
        </div> */}
      </section>
      <section className="xl:mt-16 lg:mt-12 md:mt-8 sm:mt-6 mt-4  bg-[#f4f4f4] py-10">
        <div className="flex flex-col justify-center items-center text-2xl m-auto">
          {/* <div className="xl:text-xl lg:text-lg md:text-md sm:text-md text-sm">
						<p className=" font-Poppins">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit.
						</p>
					</div> */}
          <div className="xl:h-[7.5vh] lg:h-[6.5vh] md:h-[6vh] sm:h-[5vh] w-[71vw] mt-4 m-auto rounded-[10px]">
            <h1 className=" justify-center flex items-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg text-md font-Poppins">
              Browse The Range
            </h1>
          </div>
          <div className="max-w-full h-auto grid place-items-center p-6 md:p-20">
            <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
              {categories.slice(0, 3).map((category, index) => (
                <CategoryItem
                  CategoryImgUrl={DummyData.CategoryImgUrl}
                  Title={category}
                  Index={index + 1}
                  key={index}
                />
              ))}
            </div>
          </div>
          <button
            className="flex justify-center cursor-pointer text-white bg-black xl:px-8 lg:px-7 md:px-6 sm:px-5 px-4 py-3 rounded-xl hover:text-[black] hover:bg-[white] hover:border hover:border-solid hover:border-[black] hover:font-semibold xl:text-xl lg:text-lg md:text-md sm:text-md text-sm font-Poppins"
            onClick={() => Navigate("/Category")}
          >
            Show more
          </button>
        </div>
      </section>
      <section className="mt-20 bg-[#f4f4f4] p-10">
        <div className="xl:h-[7.5vh] lg:h-[6.5vh] md:h-[6vh] sm:h-[5vh] w-[71vw] bg-[#f4f4f4] mt-4 m-auto rounded-[10px]">
          <h1 className="justify-center flex items-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg text-md font-Poppins">
            Our Products
          </h1>
        </div>
        <div className="max-w-full h-auto grid place-items-center p-6 md:p-20">
          <div className="grid gap-y-14 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 xl:grid-cols-[repeat(3,1fr)]">
            {products.slice(0, 6).map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
        </div>
        <button
          className="flex justify-center m-auto cursor-pointer text-white bg-black xl:px-8 lg:px-7 md:px-6 sm:px-5 px-4 py-3 rounded-xl hover:text-[black] hover:bg-[white] hover:border hover:border-solid hover:border-[black] hover:font-semibold xl:text-xl lg:text-lg md:text-md sm:text-md text-sm font-Poppins"
          onClick={() => Navigate("/Products")}
        >
          Show more
        </button>
      </section>
    </main>
  );
}

// export default Home;
