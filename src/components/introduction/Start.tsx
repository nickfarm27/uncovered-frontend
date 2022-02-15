import React from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {}

const Start = (props: Props) => {
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

	const descVariants: Variants = {
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
				delay: 0.8,
			},
		},
	};

	const buttonVariants: Variants = {
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
				delay: 0.9,
			},
		},
	};
	return (
		<div className="flex flex-col justify-center  items-center box-border bg-white h-screen">
			<div className=" w-3/4">
				<motion.h1
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.8 }}
					variants={titleVariants}
					className="text-5xl font-bold"
				>
					Uncovered
				</motion.h1>
				<motion.h1
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.8 }}
					variants={descVariants}
					className="pt-12 text-2xl leading-loose"
				>
					A platform allowing a community to identify news genuinity.{" "}
					<br /> Read and write reviews for every possible news found
					on Twitter. <br /> Keep news honest. Look for credible news
					online.
				</motion.h1>

				<Link to="/login">
					<motion.button
						whileHover={{
							scale: 1.1,
							backgroundColor: "#00c2ff",
							transition: {
								duration: 0.1,
							},
						}}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
						variants={buttonVariants}
						className="mt-16 rounded-lg font-bold py-4 px-10 bg-blue-600 text-white"
					>
						Get Started!
					</motion.button>
				</Link>
			</div>
		</div>
	);
};

export default Start;
