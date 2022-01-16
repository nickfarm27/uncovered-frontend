import React from "react";
import Medal from "../assets/Medal.png";

interface Props {}

const Badges = (props: Props) => {
	return (
		<div className="flex box-border bg-[#9dbccf] h-screen ">
			<div className="flex flex-col justify-evenly items-center w-2/3">
				<h1 className="text-6xl font-bold text-white">
					Earn Dem' Badges
				</h1>

				<div className="">
					<h1 className="text-white text-2xl text-justify p-8">
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

			<div className="flex items-center w-1/3 mr-4">
				<img
					src={Medal}
					alt="Sample"
					className="w-[64rem] object-contain "
				/>
			</div>
		</div>
	);
};

export default Badges;
