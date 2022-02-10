import React from "react";
import User from "../../../assets/User.png";
import Dividers from "@mui/material/Divider";
import { AiOutlineEdit } from "react-icons/ai";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";

interface Props {}

const ProfileView = (props: Props) => {
	const levelPercentage = 65;
	const juryPercentage = 40;
	const userLevel = 50;

	return (
		<div className="flex w-full p-6 gap-x-8 ">
			<div className="flex flex-col w-1/2  gap-y-8 ">
				<div className="box-border bg-zinc-100 w-full drop-shadow-lg h-full rounded-xl p-6 ">
					<div className="flex justify-between">
						<h1 className="font-semibold text-lg pb-2">
							Personal Details
						</h1>
						<motion.div whileHover={{ scale: 1.3 }}>
							<AiOutlineEdit className="text-2xl" />
						</motion.div>
					</div>
					<Dividers />
					<div className="flex gap-x-24 items-center justify-between pt-4">
						<div className="flex flex-col justify-between">
							<h1 className="font-medium pb-2 ">
								Name: Mokey Gan
							</h1>

							<h1 className="font-medium pb-2">
								Email: ganzj45@gmail.com
							</h1>
							<h1 className="font-medium pb-2">
								XPX Private Key: 97nnsv786HKHK7t78
							</h1>
						</div>
						<div className="">
							<motion.img
								whileHover={{ scale: 1.3 }}
								src={User}
								alt="User"
								className=" w-[6rem] object-contain items-center"
							/>
						</div>
					</div>
				</div>

				<div className="box-border bg-zinc-100 w-full drop-shadow-lg rounded-xl p-6">
					<h1 className="font-semibold text-lg pb-2">Statistics</h1>
					<Dividers />

					<div className="flex justify-between">
						<div className="flex flex-col pt-4 ">
							<h1 className="font-medium pb-2">Level: 50</h1>
							<h1 className="font-medium pb-2">
								User Rating: 4.3/5.0
							</h1>
							<h1 className="font-medium pb-2">
								Role: Investigator
							</h1>
							<h1 className="font-medium pb-2">Class: Captain</h1>
							<h1 className="font-medium pb-2">
								Perks: +15% EXP
							</h1>
						</div>

						<div className="flex flex-col items-center pt-4">
							<h1 className="font-semibold pb-2 text-lg">
								Experience Points
							</h1>
							<ProgressBar
								percentage={levelPercentage}
								text={`${levelPercentage}%`}
								textSize="18px"
								color={"rgb(1, 90, 145)"}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className=" box-border bg-zinc-100 w-1/2 drop-shadow-xl rounded-lg p-6">
				<h1 className="font-semibold text-lg pb-2">Milestones</h1>
				<Dividers />
				<div className="flex flex-col pt-4 h-full gap-y-8">
					<div className="h-1/3 ">
						<h1 className="font-medium pb-2">
							Joined since: 28/1/2021
						</h1>
						<h1 className="font-medium pb-2">
							Applied for investigator role on: 28/1/2022
						</h1>
						<h1 className="font-medium pb-2">
							Total number of verified news: 25
						</h1>
						<h1 className="font-medium pb-2">
							News verification accuracy: 70%
						</h1>
						<h1 className="font-medium pb-2">
							Total number of submitted news tweet: 15
						</h1>
					</div>

					<div className="flex flex-col items-center h-2/3 ">
						<h1 className="font-semibold pb-2 text-lg">
							Eligibility for jury
						</h1>
						<ProgressBar
							percentage={juryPercentage}
							text={`${juryPercentage}%`}
							textSize="18px"
							color={"rgb(198, 28, 18)"}
						/>

						<h1 className="font-medium text-sm italic pt-8">
							Tip: Verify more news accurately to fill the bar.
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileView;
