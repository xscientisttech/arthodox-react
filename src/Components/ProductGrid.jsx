import React from 'react'
import gridImg from "../assets/images/grid.jpg";
import { useNavigate } from "react-router";

const ProductGrid = () => {

    const Navigate = useNavigate();


    return (
        <>
            <section className="mt-20">
                <div className="h-[7.5vh] w-[90vw] bg-[#f4f4f4] mt-4 m-auto rounded-[10px]">
                    <h1 className="justify-center flex items-center text-[2.5rem]">
                        Our Products
                    </h1>
                </div>
                <div className=" transition-all grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 max-w-[1200px] mt-8 mx-auto my-0">
                    <div className="text-center border bg-neutral-100 rounded-[15px] border-solid border-[#ccc]">
                        <img
                            className="max-w-full h-auto rounded-[15px_15px_0_0]"
                            src={gridImg}
                            onClick={() => Navigate("/Products")}
                            alt="Item 1"
                        />
                        <h2>Wall Frame</h2>
                        <p>Attractive Wall Frames</p>
                        <p>Price: &#8377;1000.00</p>
                    </div>
                    <div className="text-center border bg-neutral-100 rounded-[15px] border-solid border-[#ccc]">
                        <img
                            className="max-w-full h-auto rounded-[15px_15px_0_0]"
                            src={gridImg}
                            onClick={() => Navigate("/Products")}
                            alt="Item 2"
                        />
                        <h2>Wall Frame</h2>
                        <p>Attractive Wall Frames</p>
                        <p>Price: &#8377;1000.00</p>
                    </div>
                    <div className="text-center border bg-neutral-100 rounded-[15px] border-solid border-[#ccc]">
                        <img
                            className="max-w-full h-auto rounded-[15px_15px_0_0]"
                            src={gridImg}
                            onClick={() => Navigate("/Products")}
                            alt="Item 3"
                        />
                        <h2>Wall Frame</h2>
                        <p>Attractive Wall Frames</p>
                        <p>Price: &#8377;1000.00</p>
                    </div>
                    <div className="text-center border bg-neutral-100 rounded-[15px] border-solid border-[#ccc]">
                        <img
                            className="max-w-full h-auto rounded-[15px_15px_0_0]"
                            src={gridImg}
                            onClick={() => Navigate("/Products")}
                            alt="Item 4"
                        />
                        <h2>Wall Frame</h2>
                        <p>Attractive Wall Frames</p>
                        <p>Price: &#8377;2000.00</p>
                    </div>
                    <div className="text-center border bg-neutral-100 rounded-[15px] border-solid border-[#ccc]">
                        <img
                            className="max-w-full h-auto rounded-[15px_15px_0_0]"
                            src={gridImg}
                            onClick={() => Navigate("/Products")}
                            alt="Item 5"
                        />
                        <h2>Wall Frame</h2>
                        <p>Attractive Wall Frames</p>
                        <p>Price: &#8377;1000.00</p>
                    </div>
                    <div className="text-center border bg-neutral-100 rounded-[15px] border-solid border-[#ccc]">
                        <img
                            className="max-w-full h-auto rounded-[15px_15px_0_0] "
                            src={gridImg}
                            onClick={() => Navigate("/Products")}
                            alt="Item 6"
                        />
                        <h2>Wall Frame</h2>
                        <p>Attractive Wall Frames</p>
                        <p>Price: &#8377;2000.00</p>
                    </div>
                </div>
                <button
                    className="flex justify-center m-auto cursor-pointer text-white bg-black text-base mt-8 px-8 py-3 rounded-xl hover:text-[black] hover:bg-[white] hover:border hover:border-solid hover:border-[black] hover:font-semibold"
                    onClick={() => Navigate("/Products")}
                >
                    Show more
                </button>
            </section>
        </>
    )
}

export default ProductGrid