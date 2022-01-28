import React from "react";
import { motion } from "framer-motion";
import Dividers from "@mui/material/Divider";

interface Props {
	image: any;
	name: string;
}

const Badges = (props: Props) => {
	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.4, type: "spring" }}
			className="flex flex-col items-center pt-2"
		>
			<img
				src={props.image}
				alt="Award"
				className=" w-[6rem] object-contain items-center"
			/>
			<h1 className="pt-1 font-medium text-sm">{props.name}</h1>
		</motion.div>
	);
};

export default Badges;
