import React, { useState } from "react";
import BlueButton from "../../../ui/BlueButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// @ts-ignore
import { Checkmark } from "react-checkmark";

type Props = {
	title: string;
	description: string;
	exp: number;
	difficulty: string;
};

const MissionCard = (props: Props) => {
	const [chosen, setChosen] = useState(false);

	let text = "Mission joined";

	const notify = () => {
		toast.success(text);
	};

	const submitHandler = () => {
		notify();
		setChosen(true);
	};

	let color = "";

	switch (props.difficulty) {
		case "EASY":
			color = "text-green-500";
			break;
		case "MEDIUM":
			color = "text-yellow-500";
			break;
		case "HARD":
			color = "text-red-500";
			break;
	}

	return (
		<div className="flex flex-col justify-center box-border bg-slate-100 drop-shadow-lg rounded-xl p-6 items-center gap-y-2 h-full w-full">
			<h1 className="font-semibold text-xl">{props.title}</h1>
			<div className=" m-8 h-12 ">
				<h1 className="font-medium text-center">{props.description}</h1>
			</div>
			<div className="flex flex-col items-center ">
				<h1 className="font-medium text-green-500">
					EXP to be earned: {props.exp}
				</h1>
				<h1 className={`font-medium  ${color}`}>
					Difficulty: {props.difficulty}
				</h1>
			</div>
			{!chosen ? (
				<BlueButton text="Join!" submit={submitHandler} />
			) : (
				<div className="flex justify-center items-center  w-full h-full">
					<Checkmark color="green" />
				</div>
			)}
		</div>
	);
};

export default MissionCard;
