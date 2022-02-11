import { motion } from "framer-motion";
import React  from "react";

type Props = {
    text: string;
    color: string;
    bgColor: string;
};

const Button = (props: Props) => {
	
	return (
		<motion.button
			whileHover={{
				scale: 1.02,
				backgroundColor: props.bgColor,
			}}
			transition={{ duration: 0.2 }}
			className={`${props.color} rounded-xl w-full`}
		>
			<h1 className="text-white font-medium p-4">{props.text}</h1>
		</motion.button>
	);
};

export default Button;
