import React, { useState } from "react";
import { motion } from "framer-motion";
import Dividers from "@mui/material/Divider";

interface Props {
	image: any;
	name: string;
	description: string;
	opacity: number;
}

const Badges = (props: Props) => {
	const [show, setShow] = useState(false);

	return (
		<div className="flex flex-col items-center  w-2/3 p-2 h-36 ">
			<motion.img
				whileHover={{ scale: 1.1 }}
				transition={{ duration: 0.1, type: "tween" }}
				onHoverStart={(e) => {
					setShow(true);
				}}
				onHoverEnd={(e) => {
					setShow(false);
				}}
				src={props.image}
				alt="Award"
				className={`w-[6rem] object-contain items-center opacity-${props.opacity}`}
			/>

			{show ? (
				<motion.h1
					animate={{ scale: 1.1, translateY: 15}}
					transition={{ duration: 0.1, type: "tween" }}
					className="pt-1 font-medium text-xs text-center"
				>
					{props.description}
				</motion.h1>
			) : (
				<motion.h1
					animate={{ scale: 1 }}
					transition={{ duration: 0.1, type: "tween" }}
					className="pt-1 font-semibold text-sm "
				>
					{props.name}
				</motion.h1>
			)}
		</div>
	);
};

export default Badges;
