import React from "react";
import Blockchain from "../assets/Blockchain.png";
import TrustIndex from "../assets/Percent.png";
import { motion } from "framer-motion";

interface Props {}

const WhatWeUse = (props: Props) => {
	return (
		<div className="flex flex-col items-center justify-evenly box-border bg-[#9dbccf] h-screen ">
			<h1 className="text-6xl font-bold text-white">What We Use</h1>

			<div className="flex justify-around w-full">
				<div className="flex flex-col justify-space-around items-center">
					<motion.div
						whileHover={{ scale: 1.5, rotate: 90 }}
						className="box-border rounded-full h-72 w-72 bg-[#015a91] p-8"
					>
						<img src={Blockchain} alt="Blockchain" />
					</motion.div>
					<h1 className="text-5xl text-white mt-14">Blockchain</h1>
				</div>

				<div className=" flex flex-col items-center">
					<div className="box-border rounded-full h-72 w-72 bg-[#015a91] p-14">
						<img src={TrustIndex} alt="Trust Index" />
					</div>
					<h1 className="text-5xl text-white mt-14">Trust Index</h1>
				</div>
			</div>
		</div>
	);
};

export default WhatWeUse;
