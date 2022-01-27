import React from "react";
import User from "../../../assets/User.png";
import Law from "../../../assets/Law.png";
import Newspaper from "../../../assets/Newspaper.png";
import Award from "../../../assets/Award.png";
import Dividers from "@mui/material/Divider";
import { AiOutlineEdit } from "react-icons/ai";
import ProgressBar from "./ProgressBar";
import Badges from "./Badges";
import { motion } from "framer-motion";

interface Props {}

const ProfileView = (props: Props) => {
	const levelPercentage = 65;
	const badgePercentage = 40;
	const userLevel = 50;
	const badgeLevel = 10;
	return (
		<div className="flex w-full p-8 gap-x-8 ">
			<div className="flex flex-col w-1/2 h-full gap-y-8 ">
				<div className="box-border bg-zinc-100 w-full drop-shadow-lg rounded-xl p-6 ">
					<div className="flex justify-between">
						<h1 className="font-semibold text-lg pb-2">
							Personal Details
						</h1>
						<motion.div whileHover={{ scale: 1.3 }}>
							<AiOutlineEdit className="text-2xl" />
						</motion.div>
					</div>
					<Dividers />
					<div className="flex gap-x-24 items-center pt-8">
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
						<div className="flex flex-col items-center">
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
					<div className="flex ">
						<h1 className="font-semibold text-lg pb-2">
							Statistics
						</h1>
					</div>
					<Dividers />

					<div className="flex justify-between">
						<div className="flex flex-col pt-8 ">
							<h1 className="font-medium pb-2">Level: 50</h1>
							<h1 className="font-medium pb-2">
								Role: Investigator
							</h1>
							<h1 className="font-medium pb-2">Class: Captain</h1>
						</div>

						<div className="flex flex-col items-center pt-4">
							<h1 className="pb-1 font-medium">
								Experience Points
							</h1>
							<ProgressBar
								percentage={levelPercentage}
								text={`Lv ${userLevel}`}
								textSize="18px"
								color={"rgb(1, 90, 145)"}
							/>
							<h1 className="pt-1 font-medium">{`${levelPercentage}/100`}</h1>
						</div>
					</div>
				</div>
			</div>

			<div className=" box-border bg-zinc-100 w-1/2 drop-shadow-xl rounded-lg p-6">
				<div className="flex ">
					<h1 className="font-semibold text-lg pb-2">Badges</h1>
				</div>
				<Dividers />

				<div className="flex justify-around pt-8">
					<div className="flex flex-col justify-center items-center">
						<h1 className="pb-1 font-medium">Badges Points</h1>
						<ProgressBar
							percentage={badgePercentage}
							text={`Lv ${badgeLevel}`}
							textSize="18px"
							color={"rgb(1, 177, 145)"}
						/>
						<h1 className="pt-1 font-medium">{`${badgePercentage}/100`}</h1>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-4 items-center pt-8 ">
					<Badges image={Award} name="Completion Badge" />
					<Badges image={Law} name="Outstanding Verified" />
					<Badges image={Newspaper} name="Contribution Badge" />
				</div>
			</div>
		</div>
	);
};

export default ProfileView;
