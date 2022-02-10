import React from "react";
import BlueButton from "../../../ui/BlueButton";

type Props = {
	title: string;
	description: string;
	exp: number;
	difficulty: string;
};

const MissionCard = (props: Props) => {

	const submitHandler = () => {
		console.log("Join");
	};

	let color = "";

	switch (props.difficulty) {
		case "easy":
			color = "text-green-500";
			break;
		case "medium":
			color = "text-yellow-500";
			break;
		case "hard":
			color = "text-red-500";
			break;
	}

	return (
		<div className="flex flex-col box-border bg-slate-100 drop-shadow-lg rounded-xl p-6 items-center gap-y-2 h-full w-full">
			<h1 className="font-semibold text-xl">{props.title}</h1>
			<div className=" m-8 h-12 ">
				<h1 className="font-medium text-center">{props.description}</h1>
			</div>
			<div className="flex flex-col items-center ">
				<h1 className="font-medium text-green-500">
					EXP to be earned: {props.exp}
				</h1>
				<h1 className={`font-medium  ${color}`}>
					Difficulty:{props.difficulty}
				</h1>
			</div>
			<BlueButton text="Join!" submit = {submitHandler}/>
		</div>
	);
};

export default MissionCard;
