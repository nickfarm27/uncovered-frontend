import { animate, motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
	class: string;
	picture: string;
	size: string;
	stats: string;
	selected: boolean;
};

const Classes = (props: Props) => {
	return (
		<div>
			{props.selected ? (
				<motion.div
					animate={{ scale: 1.15, translateY: 50}}
					className=" flex flex-col justify-evenly items-center "
				>
					<motion.img
						src={props.picture}
						alt="Sample"
						className={`${props.size} object-contain`}
					/>
					<h1 className="text-xl mt-6 text-green-500">{props.stats}</h1>
					<h1 className="text-2xl mt-6 font-medium text-green-500">{props.class}</h1>
				</motion.div>
			) : (
				<motion.div
					animate={{ scale: 1 }}
					className=" flex flex-col justify-evenly items-center "
				>
					<img
						src={props.picture}
						alt="Sample"
						className={`${props.size} object-contain`}
					/>

					<h1 className="text-xl mt-6 ">{props.stats}</h1>
					<h1 className="text-2xl mt-6 font-medium">{props.class}</h1>
				</motion.div>
			)}
		</div>
	);
};

export default Classes;
