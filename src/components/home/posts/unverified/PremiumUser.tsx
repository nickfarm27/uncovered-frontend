import { motion } from "framer-motion";
import React, { useState } from "react";
import Button from "./Button";



type Props = {};

const PremiumUser = (props: Props) => {
	const [showBar, setShowBar] = useState(false);

	return (
		<div className="flex justify-around w-2/3">
			<motion.div
				onTap={(e) => {
					setShowBar(true);
				}}
				className="w-1/3"
			>
				<Button text="True" color="bg-green-500" bgColor="#009900" />
			</motion.div>

			<motion.div
				onTap={(e) => {
					setShowBar(true);
					console.log("dfgghfdghf");
				}}
				className="w-1/3"
			>
				<Button text="False" color="bg-red-500" bgColor="#b32d00" />
			</motion.div>
		</div>
	);
};

export default PremiumUser;
