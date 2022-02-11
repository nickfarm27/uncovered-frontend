import React from "react";
import Controller from "../assets/Controller.png";
import { motion, Variants } from "framer-motion";

interface Props {}

const FunWay = (props: Props) => {
	const titleVariants: Variants = {
		offscreen: {
			y: 300,
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

	const imageVariants: Variants = {
		offscreen: {
			y: 150,
			opacity: 0,
			rotate: -180
		},
		onscreen: {
			y:  0,
			opacity: 1,
			rotate: 0,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.9,
			},
		},
	};

	const descVariants: Variants = {
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
				duration: 1,
			},
		},
	};

	return (
		<div className="flex flex-col box-border items-center justify-evenly bg-[#015a91] h-screen">
			<motion.h1
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				variants={titleVariants}
				className="text-5xl font-bold text-white"
			>
				Fun Way to Detect Fake News
			</motion.h1>

			<div className="flex justify-around items-center">
				<div className=" ">
					<motion.img
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.8 }}
					variants={imageVariants}

						src={Controller}
						alt="Sample"
						className="w-[24rem] object-contain"
					/>
				</div>

				<div className="box-border  w-1/2 ">
					<motion.h1 
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.8 }}
					variants={descVariants}
					className="text-white text-xl text-justify">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</motion.h1>
				</div>
			</div>
		</div>
	);
};

export default FunWay;
