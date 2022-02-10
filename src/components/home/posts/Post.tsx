import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

interface Props {
	verified: boolean;
	name: string;
	username: string;
	text: string;
	id: string
}

const Post = (props: Props) => {
	let percentage = 10;
	let color = "";

	if (percentage < 30) {
		color = "#e60000";
	} else if (percentage < 70) {
		color = "#ff9900";
	} else {
		color = "#4EF421";
	}

	return (
		<motion.div whileHover={{ scale: 1.02, backgroundColor: "white" }}>
			<Link
				to={`/${props.id}`}
				className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 cursor-pointer"
			>
				<div className="flex pb-4 self-start">
					<div className="box-border h-12 w-12 min-w-[3rem] rounded-full bg-black"></div>
					<div className="flex flex-col pl-3">
						<div className="flex gap-2">
							<h1 className="font-semibold">{props.name}</h1>
							<h2 className="text-slate-500">
								@{props.username}
							</h2>
							<h2 className="text-slate-500">· 2h</h2>
						</div>
						<p className="font-medium">{props.text}</p>
					</div>
				</div>

				{props.verified ? (
					<div className="w-full">
						<ProgressBar
							completed={percentage}
							bgColor={color}
							baseBgColor="white"
							width="100%"
							isLabelVisible={false}
						/>
					</div>
				) : null}
			</Link>
		</motion.div>
	);
};

export default Post;
