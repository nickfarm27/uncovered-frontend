import React, { useState } from "react";
import Algorithm from "../assets/Algorithm.png";
import Coin from "../assets/Coin.png";
import Search from "../assets/Search.png";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Props {}

const Problems = (props: Props) => {
	const [showAlgorithm, setShowAlgorithm] = useState(false);
	const [showRewards, setShowRewards] = useState(false);
	const [showTransparency, setShowTransparency] = useState(false);

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
		<div className="flex flex-col justify-evenly items-center box-border bg-[#015a91] h-screen ">
			<motion.h1
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				variants={titleVariants}
				className="text-5xl font-bold text-white"
			>
				Problems? Not Anymore!
			</motion.h1>

			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				variants={circleVariants}
				className="z-10 flex justify-around items-center w-full"
			>
				<motion.div
					whileHover={{ scale: 0.5, opacity: 0 }}
					onHoverStart={(e) => {
						setShowAlgorithm(true);
					}}
					onHoverEnd={(e) => {
						setShowAlgorithm(false);
					}}
					transition={{ duration: 0.4, type: "spring" }}
					exit={{ y: -1000 }}
					className=" flex flex-col items-center  box-border w-1/5"
				>
					<div className="box-border rounded-full h-48 w-48 bg-teal-600 p-14">
						<img src={Algorithm} alt="Trust Index" />
					</div>
					<h1 className="text-center text-2xl text-white mt-14 font-semibold">
						Algorithm
					</h1>
				</motion.div>

				<motion.div
					whileHover={{ scale: 0.5, opacity: 0 }}
					onHoverStart={(e) => {
						setShowRewards(true);
					}}
					onHoverEnd={(e) => {
						setShowRewards(false);
					}}
					transition={{ duration: 0.4, type: "spring" }}
					exit={{ y: -1000 }}
					className=" flex flex-col items-center  box-border w-1/5"
				>
					<div className="box-border rounded-full h-48 w-48 bg-lime-600 p-14">
						<img src={Coin} alt="Trust Index" />
					</div>
					<h1 className="text-center text-2xl text-white mt-14 font-semibold">
						Rewards
					</h1>
				</motion.div>

				<motion.div
					whileHover={{ scale: 0.5, opacity: 0 }}
					onHoverStart={(e) => {
						setShowTransparency(true);
					}}
					onHoverEnd={(e) => {
						setShowTransparency(false);
					}}
					transition={{ duration: 0.4, type: "spring" }}
					exit={{ y: -1000 }}
					className=" flex flex-col items-center  box-border w-1/5"
				>
					<div className="box-border rounded-full h-48 w-48 bg-amber-600 p-14">
						<img src={Search} alt="Trust Index" />
					</div>
					<h1 className="text-center text-2xl text-white mt-14 font-semibold">
						Transparency
					</h1>
				</motion.div>
			</motion.div>

			<div className=" z-0 absolute flex justify-around w-5/6 mt-12 gap-x-48 ">
				<AnimatePresence>
					{showAlgorithm ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								scaleX: 1.2,
								scaleY: 1.2,
								translateY: 80,
							}}
							transition={{
								duration: 0.5,
								type: "spring",
								delay: 0.2,
							}}
							className=" bg-teal-400 box-border w-full rounded-3xl p-4 shadow-2xl flex item-center"
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
							className=" bg-teal-400 box-border w-full rounded-3xl p-4 shadow-2xl flex item-center"
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
					)}
				</AnimatePresence>

				<AnimatePresence>
					{showRewards ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								scaleX: 1.2,
								scaleY: 1.2,
								translateY: 80,
							}}
							transition={{
								duration: 0.5,
								type: "spring",
								delay: 0.2,
							}}
							className=" bg-lime-400 box-border w-full rounded-3xl p-4 shadow-2xl flex item-center"
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
							className=" bg-lime-400 box-border w-full rounded-3xl p-4 shadow-2xl flex item-center"
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
					)}
				</AnimatePresence>

				<AnimatePresence>
					{showTransparency ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								scaleX: 1.2,
								scaleY: 1.2,
								translateY: 80,
							}}
							transition={{
								duration: 0.5,
								type: "spring",
								delay: 0.2,
							}}
							className=" bg-amber-400 box-border w-full rounded-3xl p-4 shadow-2xl flex item-center"
						>
							<div>
								<h1 className="font-semibold pb-2">
									Blockchain
								</h1>
								<h1 className="text-xs text-justify font-medium ">
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
							className=" bg-amber-400 box-border w-full rounded-3xl p-4 shadow-2xl flex item-center"
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
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Problems;
