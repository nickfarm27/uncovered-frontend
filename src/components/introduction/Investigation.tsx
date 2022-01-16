import React from "react";
import Captain from "../assets/Captain.png";
import Warrior from "../assets/Warrior.png";
import Wizard from "../assets/Wizard.png";

interface Props {}

const Investigation = (props: Props) => {
	return (
		<div className="flex flex-col justify-evenly items-center box-border bg-white h-screen ">
			<h1 className="text-6xl font-bold ">Choose Your Investigation</h1>

			<div className="flex justify-evenly w-full">
				<div className="flex flex-col justify-evenly items-center ">
					<img
						src={Captain}
						alt="Sample"
						className="w-[24rem] object-contain"
					/>
					<h1 className="text-5xl  mt-14">Captain</h1>
				</div>
				<div className="flex flex-col justify-evenly items-center">
					<img
						src={Warrior}
						alt="Sample"
						className="w-[24rem] object-contain "
					/>
					<h1 className="text-5xl  mt-14">Warrior</h1>
				</div>
				<div className="flex flex-col justify-evenly items-center">
					<img
						src={Wizard}
						alt="Sample"
						className="w-[24rem] object-contain"
					/>
					<h1 className="text-5xl  mt-14">Wizard</h1>
				</div>
			</div>
		</div>
	);
};

export default Investigation;
