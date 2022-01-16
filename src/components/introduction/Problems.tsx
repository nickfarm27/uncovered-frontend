import React from "react";
import Algorithm from "../assets/Algorithm.png";
import Coin from "../assets/Coin.png";
import Search from "../assets/Search.png";

interface Props {}

const Problems = (props: Props) => {
	return (
		<div className="flex flex-col justify-evenly items-center box-border bg-[#015a91] h-screen ">
			<h1 className="text-6xl font-bold text-white">
				Problems? Not Anymore!
			</h1>

			<div className="flex justify-around items-center w-full">
				<div className=" flex flex-col items-center  box-border w-1/3">
					<div className="box-border rounded-full h-48 w-48 bg-teal-600 p-14">
						<img src={Algorithm} alt="Trust Index" />
					</div>
					<h1 className="text-center text-5xl text-white mt-14">
						Algorithm
					</h1>
				</div>
				<div className=" flex flex-col items-center  box-border w-1/3">
					<div className="box-border rounded-full h-48 w-48 bg-lime-600 p-14">
						<img src={Coin} alt="Trust Index" />
					</div>
					<h1 className="text-center text-5xl text-white mt-14">
						Rewards
					</h1>
				</div>
				<div className=" flex flex-col items-center box-border w-1/3">
					<div className="box-border rounded-full h-48 w-48 bg-amber-400 p-14">
						<img src={Search} alt="Trust Index" />
					</div>
					<h1 className="text-5xl text-white mt-14 text-center">
						Transparency
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Problems;
