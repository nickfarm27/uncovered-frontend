import React, { useState } from "react";
import Blockchain from "../assets/Blockchain.png";
import TrustIndex from "../assets/Percent.png";
import { motion, AnimatePresence, Variants } from "framer-motion";


interface Props {}

const WhatWeUse = (props: Props) => {
	const [showBlockchain, setShowBlockchain] = useState(false);
	const [showTrustIndex, setShowTrustIndex] = useState(false);

	const titleVariants: Variants = {
		offscreen: {
			y: 300,
			opacity: 0,
		},
		onscreen: {
			y: -50,
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
			y: 150,
			opacity: 0,
		},
		onscreen: {
			y: -50,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.9,
			},
		},
	};

	return (
		<div className="flex flex-col items-center justify-evenly box-border bg-blue-200 h-screen ">
			<motion.h1
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				variants={titleVariants}
				className="text-5xl font-bold text-black"
			>
				What We Use
			</motion.h1>

			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				variants={circleVariants}
				className="z-10 flex justify-around w-full"
			>
				<motion.div
					whileHover={{ scale: 0.5, opacity: 0 }}
					onHoverStart={(e) => {
						setShowBlockchain(true);
					}}
					onHoverEnd={(e) => {
						setShowBlockchain(false);
					}}
					transition={{ duration: 0.4, type: "spring" }}
					exit={{ y: -1000 }}
					className=" flex static flex-col justify-space-around items-center "
				>
					<div className="box-border rounded-full h-56 w-56 bg-[#2563eb] p-8">
						<img src={Blockchain} alt="Blockchain" />
					</div>
					<h1 className="text-2xl text-black mt-14 font-semibold">
						Blockchain
					</h1>
				</motion.div>

				<motion.div
					whileHover={{ scale: 0.5, opacity: 0 }}
					onHoverStart={(e) => {
						setShowTrustIndex(true);
					}}
					onHoverEnd={(e) => {
						setShowTrustIndex(false);
					}}
					transition={{ duration: 0.4, type: "spring" }}
					className=" flex static flex-col justify-space-around items-center "
				>
					<div className="box-border rounded-full h-56 w-56 bg-[#2563eb] p-14">
						<img src={TrustIndex} alt="Trust Index" />
					</div>
					<h1 className="text-2xl text-black mt-14 font-semibold">
						Trust Index
					</h1>
				</motion.div>
			</motion.div>

			<div className=" z-0 absolute flex justify-around w-5/6 h-1/5 mt-12 gap-x-48 ">
				<AnimatePresence>
					{showBlockchain ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								scaleX: 1.2,
								scaleY: 1.2,
								translateY: 50,
							}}
							transition={{
								duration: 0.5,
								type: "spring",
								delay: 0.2,
							}}
							className=" bg-blue-400 box-border w-full h-full rounded-3xl p-4 flex items-center shadow-2xl"
						>
							<div>
								<h1 className="font-semibold pb-2">
									Blockchain
								</h1>
								<h1 className="text-xs text-justify font-medium">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged.
								</h1>
							</div>
						</motion.div>
					) : (
						<motion.div
							initial={{ opacity: 1 }}
							animate={{
								opacity: 0,
								scaleX: 1,
								scaleY: 1,
								translateY: -100,
							}}
							transition={{
								duration: 0.5,
								type: "spring",
								delay: 0,
							}}
							className="bg-blue-400 box-border w-full h-full rounded-3xl p-4 flex items-center shadow-2xl"
						>
							<div>
								<h1 className=" font-semibold pb-2">
									Blockchain
								</h1>
								<h1 className="text-xs text-justify font-medium">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged.
								</h1>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<AnimatePresence>
					{showTrustIndex ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								scaleX: 1.2,
								scaleY: 1.2,
								translateY: 50,
							}}
							transition={{
								duration: 0.5,
								type: "spring",
								delay: 0.2,
							}}
							className=" bg-blue-400 box-border w-full h-full rounded-3xl p-4 flex items-center shadow-2xl"
						>
							<div>
								<h1 className="font-semibold pb-2">
									Trust Index
								</h1>
								<h1 className="text-xs text-justify font-medium">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged.
								</h1>
							</div>
						</motion.div>
					) : (
						<motion.div
							initial={{ opacity: 1 }}
							animate={{
								opacity: 0,
								scaleX: 1,
								scaleY: 1,
								translateY: -100,
							}}
							transition={{
								duration: 0.5,
								type: "spring",
								delay: 0,
							}}
							className=" bg-blue-400 box-border w-full h-full rounded-3xl p-4 flex items-center shadow-2xl"
						>
							<div>
								<h1 className="font-semibold pb-2">
									Trust Index
								</h1>
								<h1 className="text-xs text-justify font-medium">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged.
								</h1>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default WhatWeUse;
