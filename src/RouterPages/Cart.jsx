import { Fragment } from "react";
import { useNavigate } from "react-router";
import Quality from "../Components/Quality";
import Hero from "../Components/Hero";
import gridImg from "../assets/images/grid.jpg";

const Cart = () => {
	const Navigate = useNavigate();
	return (
		<Fragment>
			<Hero title="Cart" />
			<section className="w-full flex justify-center px-[10%] py-[4%]">
				<div className="w-full gap-5 flex flex-wrap">
					<div className="flex">
						<table className="w-full border-collapse">
							<thead className="flex flex-wrap">
								<tr className=" bg-[#faf3ea] flex gap-20">
									<th></th>
									<th></th>
									<th className="text-center p-4">Product</th>
									<th className="text-center p-4">Price</th>
									<th className="text-center p-4">
										Quantity
									</th>
									<th className="text-center p-4">
										Subtotal
									</th>
									<th className="text-center p-4"> </th>
								</tr>
							</thead>
							<tbody className="flex  justify-centre items-center mt-10">
								<tr className="flex  gap-28 items-center justify-centre">
									<td className="text-center p-2">
										{" "}
										<div className="flex justify-center items-center gap-10">
											<img
												src={gridImg}
												alt=""
												className="w-[6rem] rounded-lg"
											/>
											<p>Wall Frame</p>
										</div>
									</td>
									<td className="text-center p-2">Rs. 100</td>
									<td className="text-center p-2">1</td>
									<td className="text-center p-2">
										<div className="flex justify-between items-center gap-14">
											<p>Rs. 1000</p>
											<i className="fa-solid fa-trash text-orange-600"></i>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="bg-[#f9f1e7] flex flex-col justify-center items-center p-8 w-80">
						<h1 className="text-2xl font-bold">Cart Total</h1>
						<div className=" w-full flex justify-between p-3 px-10 items-center mt-6">
							<p className="font-semibold">Subtotal</p>
							<p className="font-semibold">Rs. 1000</p>
						</div>
						<div className=" w-full flex justify-between p-3 px-10 items-center mt-6">
							<p className="font-semibold">Total</p>
							<p className="font-semibold">Rs. 1000</p>
						</div>
						<button
							class="mt-6 px-8 py-2 rounded-xl border-solid bg-black text-white font-semibold border-[black] hover:bg-[#f9f1e7] hover:text-black border-2"
							onClick={() => Navigate("/Checkout")}
						>
							Check Out
						</button>
					</div>
				</div>
			</section>
			<Quality />
		</Fragment>
	);
};

export default Cart;
