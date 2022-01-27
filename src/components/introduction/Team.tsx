import React, { useState } from "react";
import Gan from "../assets/Gan.png";
import Nic from "../assets/Nicholas.jpeg";
import Yy from "../assets/Yy.jpeg";
import Sachin from "../assets/Sachin.jpg";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Props {}

const Team = (props: Props) => {
	const [showFirst, setShowFirst] = useState(false);
	const [showSecond, setShowSecond] = useState(false);
	const [showThird, setShowThird] = useState(false);
	const [showFourth, setShowFourth] = useState(false);


	const titleVariants: Variants = {
		offscreen: {
			y: 150,
			opacity: 0,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};

	const circleVariants: Variants = {
		offscreen: {
			x: -200,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 1,
			},
		},
	};

	return (
		<div className="flex flex-col justify-evenly items-center box-border bg-white h-screen ">
			<motion.h1 
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
			variants={titleVariants}
			className="text-5xl font-bold ">Meet Our Team</motion.h1>

			<motion.div 
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
			variants={circleVariants}
			className="flex  w-full justify-around  ">
				<motion.div
					whileHover={{ scale: 1.2, translateY: -50 }}
					onHoverStart={(e) => {
						setShowFirst(true);
					}}
					onHoverEnd={(e) => {
						setShowFirst(false);
					}}
					transition={{ duration: 0.2, type: "spring" }}
					className=" flex flex-col items-center h-56 w-1/5"
				>
					<img
						src={Sachin}
						alt="Trust Index"
						className="box-border rounded-full h-36 w-36 "
					/>

					{showFirst ? (
						<motion.h1 className="  mt-8 font-semibold">
							UI/UX Designer <br />
							Frontend Developer
						</motion.h1>
					) : (
						<motion.h1 className="text-xl  mt-8 font-semibold">
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
					transition={{ duration: 0.2, type: "spring" }}
					className=" flex flex-col items-center h-56 w-1/5"
				>
					<img
						src={Nic}
						alt="Trust Index"
						className="box-border rounded-full h-36 w-36"
					/>

					{showSecond ? (
						<motion.h1 className="  mt-8 font-semibold">
							Database Designer <br />
							Frontend Developer <br />
							Backend Developer <br />
							Blockchain Developer
						</motion.h1>
					) : (
						<motion.h1 className="text-xl  mt-8 font-semibold">
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
					transition={{ duration: 0.2, type: "spring" }}
					className=" flex flex-col items-center h-56 w-1/5 "
				>
					<img
						src={Yy}
						alt="Trust Index"
						className="box-border rounded-full h-36 w-36"
					/>

					{showThird ? (
						<motion.h1 className="  mt-8 font-semibold">
							UI/UX Designer <br />
							Backend Developer <br />
							Blockchain Developer
						</motion.h1>
					) : (
						<motion.h1 className="text-xl  mt-8 font-semibold">
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
					transition={{ duration: 0.2, type: "spring" }}
					className=" flex flex-col items-center h-56 w-1/5 "
				>
					<img
						src={Gan}
						alt="Trust Index"
						className="box-border rounded-full h-36 w-36"
					/>

					{showFourth ? (
						<motion.h1 className="  mt-8 font-semibold">
							Frontend Developer <br />
							Backend Developer <br />
							Architecture Designer
						</motion.h1>
					) : (
						<motion.h1 className="text-xl  mt-8 font-semibold">
							Gan Zheng Jie
						</motion.h1>
					)}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Team;
