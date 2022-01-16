import React from "react";

interface Props {}

const Questions = (props: Props) => {
	return (
		<div className="flex justify-center  box-border bg-[#9dbccf] h-screen ">
			<div className="flex items-center w-1/3  ">
				<h1 className="text-center leading-loose text-6xl font-bold text-white">
					Questions?! Look Here
				</h1>
			</div>

			<div className="flex flex-col justify-center items-center w-2/3 py-8">
				<div className="rounded-3xl box-border flex flex-col justify-center h-4/6 w-10/12 bg-white">
					<h1 className="text-[#015a91] text-3xl text-justify p-8">
						1. How to subscribe to Premium plan?
					</h1>

					<h1 className="text-[#015a91] text-3xl text-justify p-8">
						2. Do I need an account to use Uncovered?
					</h1>

					<h1 className="text-[#015a91] text-3xl text-justify p-8">
						3. How does it work?
					</h1>

					<h1 className="text-[#015a91] text-3xl text-justify p-8">
						4. Can I use Uncovered on my smartphone?
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Questions;
