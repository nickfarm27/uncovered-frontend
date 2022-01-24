import React, { useState } from "react";
import Gan from "../assets/Gan.png";
import Nic from "../assets/Nicholas.jpeg";
import Yy from "../assets/Yy.jpeg";
import Sachin from "../assets/Sachin.jpg";
import { motion, AnimatePresence } from "framer-motion";

interface Props {}

const Team = (props: Props) => {
	const [showFirst, setShowFirst] = useState(false);
	const [showSecond, setShowSecond] = useState(false);
	const [showThird, setShowThird] = useState(false);
	const [showFourth, setShowFourth] = useState(false);

	return (
		<div className="flex flex-col justify-evenly items-center box-border bg-white h-screen ">
			<h1 className="text-6xl font-bold ">Meet Our Team</h1>

			<div className="flex  w-full justify-around  ">
				<motion.div
					whileHover={{ scale: 1.2, translateY: -50 }}
					onHoverStart={(e) => {
						setShowFirst(true);
					}}
					onHoverEnd={(e) => {
						setShowFirst(false);
					}}
					transition={{ duration: 0.4, type: "spring" }}
					className=" flex flex-col items-center h-56 w-1/4"
				>
					<img
						src={Sachin}
						alt="Trust Index"
						className="box-border rounded-full h-36 w-36 "
					/>

					{showFirst ? (
						<motion.h1 className="  mt-8">
							UI/UX Designer <br />
							Frontend Developer
						</motion.h1>
					) : (
						<motion.h1 className="text-xl  mt-8">
							Sachine Vijaya Kumar
						</motion.h1>
					)}
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.2, translateY: -50 }}
					onHoverStart={(e) => {
						setShowSecond(true);
					}}
					onHoverEnd={(e) => {
						setShowSecond(false);
					}}
					transition={{ duration: 0.4, type: "spring" }}
					className=" flex flex-col items-center h-56 w-1/4 "
				>
					<img
						src={Nic}
						alt="Trust Index"
						className="box-border rounded-full h-36 w-36"
					/>

					{showSecond ? (
						<motion.h1 className="  mt-8">
							Database Designer <br />
							Frontend Developer <br />
							Backend Developer <br />
							Blockchain Developer
						</motion.h1>
					) : (
						<motion.h1 className="text-xl  mt-8">
							Nicholas Ryan Farm
						</motion.h1>
					)}
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.2, translateY: -50}}
					onHoverStart={(e) => {
						setShowThird(true);
					}}
					onHoverEnd={(e) => {
						setShowThird(false);
					}}
					transition={{ duration: 0.4, type: "spring" }}
					className=" flex flex-col items-center h-56 w-1/4 "
				>
					<img
						src={Yy}
						alt="Trust Index"
						className="box-border rounded-full h-36 w-36"
					/>

					{showThird ? (
						<motion.h1 className="  mt-8">
							UI/UX Designer <br />
							Backend Developer <br />
							Blockchain Developer
						</motion.h1>
					) : (
						<motion.h1 className="text-xl  mt-8">
							Low Yee Yieng
						</motion.h1>
					)}
				</motion.div>
				<motion.div
					whileHover={{ scale: 1.2, translateY: -50 }}
					onHoverStart={(e) => {
						setShowFourth(true);
					}}
					onHoverEnd={(e) => {
						setShowFourth(false);
					}}
					transition={{ duration: 0.4, type: "spring" }}
					className=" flex flex-col items-center h-56 w-1/4 "
				>
					<img
						src={Gan}
						alt="Trust Index"
						className="box-border rounded-full h-36 w-36"
					/>

					{showFourth ? (
						<motion.h1 className="  mt-8">
							Frontend Developer <br />
							Backend Developer <br />
							Architecture Designer
						</motion.h1>
					) : (
						<motion.h1 className="text-xl  mt-8">
							Gan Zheng Jie
						</motion.h1>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default Team;
