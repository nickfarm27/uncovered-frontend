import { motion } from "framer-motion";
import React from "react";
import Cards from "../dashboard/Cards";

type Props = {
	rank: number;
	name: string;
	numberOfVerified: number;
};

const Ranking = (props: Props) => {
	return (
		<motion.div
			whileHover={{ scale: 1.03, backgroundColor: "white" }}
			className="box-border bg-zinc-100 w-2/3 drop-shadow-lg rounded-xl p-6 "
		>
			<div className="flex">
				<div className="w-2/12  ">
					<h1 className="font-medium items-center pl-4">
						{props.rank}
					</h1>
				</div>
				<div className="w-9/12 ">
					<h1 className="font-medium">{props.name}</h1>
				</div>
				<div className="w-3/12 ">
					<h1 className="font-medium">{props.numberOfVerified}</h1>
				</div>
			</div>
		</motion.div>
	);
};

export default Ranking;
