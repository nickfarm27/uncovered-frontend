import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
	taskId: number;
	authorID: number;
	text: string;
	date: string;
	verifiedAmount: number;
};

const RatingPost = (props: Props) => {
	let color = "";
	let status = "";

	switch (props.verifiedAmount) {
		case 0:
			color = "#DC0E0E";
			status = "Click to submit rating form";
			break;
		case 1:
			color = "#DC0E0E";
			status = "Click to submit rating form";
			break;
		case 2:
			color = "#DC0E0E";
			status = "Click to submit rating form";
			break;
		case 3:
			color = "#F4EA21";
			status = "Click to submit rating form";
			break;
		case 4:
			color = "#F4EA21";
			status = "Click to submit rating form";
			break;
		case 5:
			color = "#4EF421";
			status = "Task completed (Will disappear in 1 day)";
			break;
	}

	return (
		<motion.div
			whileHover={{ scale: 1.02, backgroundColor: "white" }}
			className="box-border rounded-lg  bg-slate-100 mt-6 p-6 drop-shadow-xl "
		>
			<Link 
				to = {`/profile/${props.taskId}`}>
				<div className="flex justify-between">
					<h1 className="font-semibold text-lg">
						Task ID: {props.taskId}
					</h1>
				</div>

				<div className="flex flex-col w-full mt-4 mb-4 justify-between">
					<h1 className="font-semibold text-justify mb-4">
						Please rate the involved verifiers from the following
						news tweet verification:{" "}
					</h1>
					<h1 className="font-medium text-justify">
						I’m so proud and happy for my friends over at OTV
						welcoming three more friends, Jodi John and Sydney as
						official members!!! It’s been a long time coming and
						couldn’t be happier for all of them☺️❤️🎉{" "}
					</h1>
				</div>

				<div className="flex  justify-between items-start">
					<div className="flex flex-col justify-between w-2/3">
						<h1 className="font-medium text-sm mb-2">
							Numbers of completed rating:{" "}
						</h1>
						<ProgressBar
							completed={`${(props.verifiedAmount / 5) * 100}`}
							customLabel={`${props.verifiedAmount}/5`}
							bgColor={color}
							baseBgColor="white"
							labelAlignment="outside"
							width="90%"
							labelColor="black"
						/>
					</div>
					<h1 className="font-medium text-sm text-center">
						Assigned Date: <br /> {props.date}
					</h1>
				</div>

				<div className="flex justify-center mt-4 ">
					<h1 className="font-medium text-sm italic ">{status}</h1>
				</div>
			</Link>
		</motion.div>
	);
};

export default RatingPost;
