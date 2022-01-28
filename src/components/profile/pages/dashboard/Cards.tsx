import React from "react";
import { motion } from "framer-motion";

interface Props {
	height: string;
	width: string;
	content: any;
}

const Cards = (props: Props) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className={`cursor-pointer box-border bg-zinc-100 ${props.width} drop-shadow-lg rounded-xl p-6 ${props.height}`}
		>
			{props.content}
		</motion.div>
	);
};

export default Cards;
