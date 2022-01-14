import React from "react";
import Blockchain from "../assets/Blockchain.png";
import TrustIndex from "../assets/Percent.png";
import { motion } from "framer-motion";

interface Props {}

const Introduction = (props: Props) => {
	return (
		<div>
			<div className="flex flex-col justify-center pt-28 pl-12 box-border bg-blue-200 h-screen">
				<h1 className="text-6xl font-bold">Uncovered</h1>
				<h1 className="pt-12 text-3xl leading-loose">
					A platform allowing a community to identify new's genuinity.{" "}
					<br /> Read and write reviews for every possible news found
					on Twitter. <br /> Keep news honest. Look for credible news
					online.
				</h1>

				<button className="mt-24 rounded-full w-80 font-bold py-2 px-4 bg-sky-500 text-white">
					Get Started!
				</button>
			</div>

			<div className="flex flex-col items-center justify-evenly box-border bg-blue-300 h-screen ">
				<h1 className="text-6xl font-bold text-white">
					What We Use
				</h1>

				<div className="flex justify-around w-full">
					<div className="flex flex-col justify-space-around items-center">
						<motion.div
							whileHover={{ scale: 1.5, rotate: 90  }} 
							className="box-border rounded-full h-72 w-72 bg-blue-400 p-8"
						>
							<img src={Blockchain} alt="Blockchain" />
						</motion.div>
						<h1 className="text-5xl text-white mt-14">Blockchain</h1>
					</div>

					<div className=" flex flex-col items-center">
						<div className="box-border rounded-full h-72 w-72 bg-blue-400 p-14">
							<img src={TrustIndex} alt="Trust Index" />
						</div>
						<h1 className="text-5xl text-white mt-14">Trust Index</h1>
					</div>
				</div>
			</div>

			<div className="box-border bg-blue-400 h-screen">
				Fun Way to Detect Fake News
			</div>
			<div className="box-border bg-blue-200 h-screen ">
				Choose Your Investigation
			</div>
			<div className="box-border bg-blue-300 h-screen">
				Earn Dem' Badges
			</div>
			<div className="box-border bg-blue-400 h-screen">
				Problems? Not Anymore!
			</div>
			<div className="box-border bg-blue-200 h-screen">Meet Our Team</div>
			<div className="box-border bg-blue-300 h-screen">FAQ</div>
		</div>
	);
};

export default Introduction;
