import React from "react";
import Controller from "../assets/Controller.png";

interface Props {}

const FunWay = (props: Props) => {
	return (
		<div className="flex flex-col box-border items-center justify-evenly bg-[#015a91] h-screen">
			<h1 className="text-6xl font-bold text-white">
				Fun Way to Detect Fake News
			</h1>

			<div className="flex justify-around items-center">
				<div className=" ">
					<img
						src={Controller}
						alt="Sample"
						className="w-[36rem] object-contain"
					/>
				</div>

				<div className="box-border  w-1/2 ">
					<h1 className="text-white text-2xl text-justify">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</h1>
				</div>
			</div>
		</div>
	);
};

export default FunWay;
