import React, { useState } from "react";
import Captain from "../assets/Captain.png";
import Warrior from "../assets/Warrior.png";
import Wizard from "../assets/Wizard.png";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Props {}

const Investigation = (props: Props) => {
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

	const classVariants: Variants = {
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
				delay: 0,
			},
		},
	};

	const [showStats, setShowStats] = useState(false);

	return (
		<div className=" flex flex-col justify-evenly items-center box-border bg-white h-screen ">
			<motion.h1
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				variants={titleVariants}
				className="text-6xl font-bold "
			>
				Choose Your Investigation Class
			</motion.h1>

			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				variants={classVariants}
				whileHover={{}}
				onHoverStart={(e) => {
					setShowStats(true);
				}}
				onHoverEnd={(e) => {
					setShowStats(false);
				}}
				className="z-10 flex justify-evenly w-full"
			>
				<AnimatePresence>
					{showStats ? (
						<motion.div className=" flex flex-col justify-evenly items-center ">
							<motion.img
								animate={{ translateY: -60 }}
								transition={{ delay: 0 }}
								src={Captain}
								alt="Sample"
								className="w-[18rem] object-contain"
							/>
							<motion.h1
								animate={{ translateY: 55 }}
								transition={{ delay: 0 }}
								className="text-2xl mt-14 font-semibold"
							>
								Captain
							</motion.h1>
						</motion.div>
					) : (
						<motion.div className="flex flex-col justify-evenly items-center ">
							<motion.img
								animate={{ translateY: 0 }}
								transition={{ delay: 0.2 }}
								src={Captain}
								alt="Sample"
								className="w-[18rem] object-contain"
							/>
							<motion.h1
								animate={{ translateY: -5 }}
								transition={{ delay: 0.2 }}
								className="text-2xl mt-14 font-semibold"
							>
								Captain
							</motion.h1>
						</motion.div>
					)}
				</AnimatePresence>

				<AnimatePresence>
					{showStats ? (
						<motion.div className="flex flex-col items-center ">
							<motion.img
								animate={{ translateY: 10 }}
								transition={{ delay: 0.1 }}
								src={Warrior}
								alt="Sample"
								className="w-[14rem] object-contain"
							/>
							<motion.h1
								animate={{ translateY: 128 }}
								transition={{ delay: 0.1 }}
								className="text-2xl mt-12 font-semibold"
							>
								Warrior
							</motion.h1>
						</motion.div>
					) : (
						<motion.div className="flex flex-col items-center  ">
							<motion.img
								animate={{ translateY: 75 }}
								transition={{ delay: 0.1 }}
								src={Warrior}
								alt="Sample"
								className="w-[14rem] object-contain"
							/>
							<motion.h1
								animate={{ translateY: 67 }}
								transition={{ delay: 0.1 }}
								className="text-2xl mt-12 font-semibold"
							>
								Warrior
							</motion.h1>
						</motion.div>
					)}
				</AnimatePresence>

				<AnimatePresence>
					{showStats ? (
						<motion.div className="flex flex-col justify-evenly items-center ">
							<motion.img
								animate={{ translateY: -60 }}
								transition={{ delay: 0.2 }}
								src={Wizard}
								alt="Sample"
								className="w-[18rem] object-contain"
							/>
							<motion.h1
								animate={{ translateY: 57 }}
								transition={{ delay: 0.2 }}
								className="text-2xl mt-14 font-semibold"
							>
								Wizard
							</motion.h1>
						</motion.div>
					) : (
						<motion.div className="flex flex-col justify-evenly items-center ">
							<motion.img
								animate={{ translateY: 0 }}
								transition={{ delay: 0 }}
								src={Wizard}
								alt="Sample"
								className="w-[18rem] object-contain "
							/>
							<motion.h1
								animate={{ translateY: -3 }}
								transition={{ delay: 0 }}
								className="text-2xl mt-14 font-semibold"
							>
								Wizard
							</motion.h1>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>

			<div className="z-0 absolute flex flex-col w-4/5 h-4/5">
				<div className="box-border  w-full h-full"></div>

				<div className="box-border  w-full h-full"></div>

				<motion.div className="flex justify-around items-center box-border  w-full h-full">
					<div className="box-border flex justify-center  w-1/3 h-1/2 items-center">
						<AnimatePresence>
							{showStats ? (
								<motion.h1
									animate={{ scale: 1.3, translateX: -30 }}
									transition={{ delay: 0 }}
								>
									+15% EXP 
									
								</motion.h1>
							) : (
								<motion.h1
									animate={{
										scale: 0,
										opacity: 0,
										translateX: 30,
									}}
									transition={{ delay: 0.2 }}
								>
									+15% EXP 
								</motion.h1>
							)}
						</AnimatePresence>
					</div>
					<div className="box-border flex justify-center  w-1/3 h-1/2 items-center">
						<AnimatePresence>
							{showStats ? (
								<motion.h1
									animate={{ scale: 1.3 }}
									transition={{ delay: 0.1 }}
								>
									+15% Rewards 
								</motion.h1>
							) : (
								<motion.h1
									animate={{ scale: 0, opacity: 0 }}
									transition={{ delay: 0.1 }}
								>
									+15% Rewards 
								</motion.h1>
							)}
						</AnimatePresence>
					</div>
					<div className="box-border flex justify-center  w-1/3 h-1/2 items-center">
						<AnimatePresence>
							{showStats ? (
								<motion.h1
									animate={{ scale: 1.3, translateX: 30 }}
									transition={{ delay: 0.2 }}
								>
									+7.5% Rewards & EXP
									
								</motion.h1>
							) : (
								<motion.h1
									animate={{
										scale: 0,
										opacity: 0,
										translateX: -30,
									}}
									transition={{ delay: 0 }}
								>
									+7.5% Rewards & EXP
									
								</motion.h1>
							)}
						</AnimatePresence>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Investigation;
