import React from "react";
import Medal from "../assets/Medal.png";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Props {}

const Badges = (props: Props) => {
	const titleVariants: Variants = {
		offscreen: {
			y: 100,
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
			rotate: -180,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			rotate: 0,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.9,
			},
		},
	};

	return (
		<div className="flex box-border bg-[#9dbccf] h-screen ">
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				variants={titleVariants}
				className="flex flex-col justify-evenly items-center w-2/3 "
			>
				<h1 className="text-5xl font-bold text-white h-1/3 flex  items-center">
					Earn Dem' Badges
				</h1>

				<div className=" h-2/3 pt-8 w-3/4">
					<h1 className="text-white text-xl text-justify p-8">
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
					</h1>
				</div>
			</motion.div>

			<div className="flex justify-center items-center w-1/3 mr-4 mt-8">
				<motion.img
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.8 }}
					variants={imageVariants}
					src={Medal}
					alt="Sample"
					className=" w-[20rem] object-contain items-center"
				/>
			</div>
		</div>
	);
};

export default Badges;
