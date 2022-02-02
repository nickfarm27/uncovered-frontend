import { motion } from "framer-motion";
import React from "react";

type Props = {
	title: string;
	description: string;
	exp: number;
	difficulty: string;
};

const MissionCard = (props: Props) => {
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
		<motion.div
			whileHover={{scale: 1.02, backgroundColor: "white" }}
			className="flex flex-col box-border bg-slate-100 drop-shadow-lg rounded-xl p-6 items-center gap-y-2 h-full"
		>
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
			<motion.button
				whileHover={{ scale: 1.03 }}
				className="bg-[#015a91] rounded-lg w-2/6"
			>
				<h1 className="font-medium p-4 text-white">Join!</h1>
			</motion.button>
		</motion.div>
	);
};

export default MissionCard;
