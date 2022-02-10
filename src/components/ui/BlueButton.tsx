import { motion } from "framer-motion";
import React, { MouseEventHandler } from "react";

type Props = {
	text: string;
    submit: MouseEventHandler;
};

const BlueButton = (props: Props) => {
	
	return (
		<motion.button
			onClick={props.submit}
			whileHover={{ scale: 1.03 }}
			className="bg-[#015a91] rounded-lg "
		>
			<h1 className="font-medium p-4 text-white text-sm">{props.text}</h1>
		</motion.button>
	);
};

export default BlueButton;
