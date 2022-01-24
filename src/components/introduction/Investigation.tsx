import React, { useState } from "react";
import Captain from "../assets/Captain.png";
import Warrior from "../assets/Warrior.png";
import Wizard from "../assets/Wizard.png";
import { motion, AnimatePresence } from "framer-motion";

interface Props {}

const Investigation = (props: Props) => {
	const [showStats, setShowStats] = useState(false);

	return (
		<div className=" flex flex-col justify-evenly items-center box-border bg-white h-screen ">
			<h1 className="text-6xl font-bold ">Choose Your Investigation Class</h1>

			<motion.div
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
								className="text-xl mt-14"
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
								className="text-xl mt-14"
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
								className="text-xl mt-12"
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
								className="text-xl mt-12"
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
								className="text-xl mt-14"
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
								className="w-[18rem] object-contain"
							/>
							<motion.h1
								animate={{ translateY: -3 }}
								transition={{ delay: 0 }}
								className="text-xl mt-14"
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
									animate={{ scale: 1.5, translateX: -30 }}
									transition={{ delay: 0 }}
								>
									+15% EXP <br/>
									+News Options
								</motion.h1>
							) : (
								<motion.h1
									animate={{ scale: 0, opacity: 0, translateX: 30 }}
									transition={{ delay: 0.2 }}
								>
									+15% EXP <br/>
									+News Options
								</motion.h1>
							)}
						</AnimatePresence>
					</div>
					<div className="box-border flex justify-center  w-1/3 h-1/2 items-center">
						<AnimatePresence>
							{showStats ? (
								<motion.h1
									animate={{ scale: 1.5 }}
									transition={{ delay: 0.1 }}
								>
									+15% Rewards <br/>
									+News shuffling ability
								</motion.h1>
							) : (
								<motion.h1
									animate={{ scale: 0, opacity: 0 }}
									transition={{ delay: 0.1 }}
								>
									+15% Rewards <br/>
									+News shuffling ability
								</motion.h1>
							)}
						</AnimatePresence>
					</div>
					<div className="box-border flex justify-center  w-1/3 h-1/2 items-center">
						<AnimatePresence>
							{showStats ? (
								<motion.h1
									animate={{ scale: 1.5, translateX: 30 }}
									transition={{ delay: 0.2 }}
								>
									+7.5% Rewards & EXP<br/>
									+1 chance to select news of choice
								</motion.h1>
							) : (
								<motion.h1
									animate={{ scale: 0, opacity: 0, translateX: -30 }}
									transition={{ delay: 0 }}
								>
									+7.5% Rewards & EXP<br/>
									+1 chance to select news of choice
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
