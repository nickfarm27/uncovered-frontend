import React, { useState } from "react";
import Algorithm from "../assets/Algorithm.png";
import Coin from "../assets/Coin.png";
import Search from "../assets/Search.png";
import { motion, AnimatePresence } from "framer-motion";

interface Props {}

const Problems = (props: Props) => {
	const [showAlgorithm, setShowAlgorithm] = useState(false);
	const [showRewards, setShowRewards] = useState(false);
	const [showTransparency, setShowTransparency] = useState(false);

	return (
		<div className="flex flex-col justify-evenly items-center box-border bg-[#015a91] h-screen ">
			<h1 className="text-6xl font-bold text-white">
				Problems? Not Anymore!
			</h1>

			<div className="z-10 flex justify-around items-center w-full">
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
					<h1 className="text-center text-2xl text-white mt-14">
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
					<h1 className="text-center text-2xl text-white mt-14">
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
					<h1 className="text-center text-2xl text-white mt-14">
						Transparency
					</h1>
				</motion.div>
			</div>

			<div className=" z-0 absolute flex justify-around w-5/6 h-1/3 mt-12 gap-x-48 ">
				<AnimatePresence>
					{showAlgorithm ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								scaleX: 1.3,
								scaleY: 1.3,
								translateY: 80,
								
							}}
							transition={{
								duration: 0.5,
								type: "spring",
								delay: 0.2,
							}}
							className=" bg-teal-400 box-border w-full h-full rounded-3xl p-6 shadow-2xl"
						>
							<div>
								<h1 className="pb-1">Blockchain</h1>
								<h1 className="text-xs text-justify">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages.
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
							className=" bg-teal-400 box-border w-full h-full rounded-3xl p-6 shadow-2xl"
						>
							<div>
								<h1 className="pb-1">Blockchain</h1>
								<h1 className="text-xs text-justify">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages.
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
								scaleX: 1.3,
								scaleY: 1.3,
								translateY: 80,
							}}
							transition={{
								duration: 0.5,
								type: "spring",
								delay: 0.2,
							}}
							className=" bg-lime-400 box-border w-full h-full rounded-3xl p-6 shadow-2xl"
						>
							<div>
								<h1 className="pb-1">Blockchain</h1>
								<h1 className="text-xs text-justify">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages.
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
							className=" bg-lime-400 box-border w-full h-full rounded-3xl p-6 shadow-2xl"
						>
							<div>
								<h1 className="pb-1">Blockchain</h1>
								<h1 className="text-xs text-justify">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages.
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
								scaleX: 1.3,
								scaleY: 1.3,
								translateY: 80,
							}}
							transition={{
								duration: 0.5,
								type: "spring",
								delay: 0.2,
							}}
							className=" bg-amber-400 box-border w-full h-full rounded-3xl p-6 shadow-2xl"
						>
							<div>
								<h1 className="pb-1">Blockchain</h1>
								<h1 className="text-xs text-justify">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages.
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
							className=" bg-amber-400 box-border w-full h-full rounded-3xl p-6 shadow-2xl"
						>
							<div>
								<h1 className="pb-1">Blockchain</h1>
								<h1 className="text-xs text-justify">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages.
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
