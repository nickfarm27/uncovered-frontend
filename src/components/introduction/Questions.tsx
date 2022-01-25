import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Props {}

const Questions = (props: Props) => {
	const [showAnswer, setShowAnswer] = useState(false);
	const [showSelected, setShowSelected] = useState(0);
	const Answers = [
		{
			Question: "Answer 1",
		},
		{
			Question: "Answer 2",
		},
		{
			Question: "Answer 3",
		},
		{
			Question: "Answer 4",
		},
	];

	const titleVariants: Variants = {
		offscreen: {
			y: 200,
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

	return (
		<div className="flex justify-center items-center box-border h-screen ">
			<div className="z-30 flex justify-center items-center w-full h-screen bg-[#9dbccf]  ">
				<div className="z-30 flex items-center w-1/4  ">
					<motion.h1
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
						variants={titleVariants}
						className=" text-center leading-loose text-5xl font-bold text-white"
					>
						Questions?! Look Here
					</motion.h1>
				</div>

				<div className="z-30 flex flex-col justify-center items-center w-2/4 ">
					<div className="rounded-3xl box-border flex flex-col justify-center h-2/6 w-9/12 p-8 bg-white">
						<motion.h1
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.6 }}
							variants={titleVariants}
							whileTap={{ scale: 0.9 }}
							onTap={(e) => {
								setShowAnswer(true);
								setShowSelected(0);
							}}
							className="cursor-pointer text-[#015a91] text-xl text-justify p-4 font-medium"
						>
							1. How to subscribe to Premium plan?
						</motion.h1>

						<motion.h1
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.7 }}
							variants={titleVariants}
							whileTap={{ scale: 0.9 }}
							onTap={(e) => {
								setShowAnswer(true);
								setShowSelected(1);
							}}
							className="cursor-pointer text-[#015a91] text-xl text-justify p-4 font-medium"
						>
							2. Do I need an account to use Uncovered?
						</motion.h1>

						<motion.h1
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
							variants={titleVariants}
							whileTap={{ scale: 0.9 }}
							onTap={(e) => {
								setShowAnswer(true);
								setShowSelected(2);
							}}
							className=" cursor-pointer text-[#015a91] text-xl text-justify p-4 font-medium"
						>
							3. How does it work?
						</motion.h1>

						<motion.h1
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.9 }}
							variants={titleVariants}
							whileTap={{ scale: 0.9 }}
							onTap={(e) => {
								setShowAnswer(true);
								setShowSelected(3);
							}}
							className=" cursor-pointer text-[#015a91] text-xl text-justify p-4 font-medium"
						>
							4. Can I use Uncovered on my smartphone?
						</motion.h1>
					</div>
				</div>
			</div>

			{showAnswer ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 0.5,
						scaleX: 1,
						scaleY: 1,
						zIndex: 50,
					}}
					transition={{
						duration: 0.5,
						type: "spring",
						delay: 0.2,
					}}
					onTap={(e) => {
						setShowAnswer(false);
					}}
					className="z-20 absolute w-full h-screen bg-black "
				></motion.div>
			) : null}

			<AnimatePresence>
				{showAnswer ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							scaleX: 1,
							scaleY: 1,
							zIndex: 50,
						}}
						transition={{
							duration: 0.5,
							type: "spring",
							delay: 0.2,
						}}
						className="z-0 absolute rounded-xl box-border bg-blue-400 w-3/5 h-1/5 flex justify-center items-center "
					>
						<h1>{Answers[showSelected].Question}</h1>
					</motion.div>
				) : (
					<motion.div
						initial={{ opacity: 1 }}
						animate={{
							opacity: 0,
							scaleX: 0.5,
							scaleY: 0.5,
						}}
						transition={{
							duration: 0.5,
							type: "spring",
						}}
						className="z-0 absolute rounded-xl box-border bg-blue-400 w-3/5 h-1/5 flex justify-center items-center "
					>
						<h1>{Answers[showSelected].Question}</h1>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Questions;
