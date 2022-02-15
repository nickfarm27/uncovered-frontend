import React, { useContext } from "react";
import User from "../../../assets/User.png";
import Dividers from "@mui/material/Divider";
import { AiOutlineEdit } from "react-icons/ai";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";
import UserContext from "../../../../store/user-context";

interface Props {}

const ProfileView = (props: Props) => {
	const userCtx = useContext(UserContext);

	let experiencePoints = userCtx.user && userCtx.user.experiencePoints;
	let juryPercentage = userCtx.user && (userCtx.user.numberOfVerifiedNews / 50) * 100;

	let level = 0;
	level = Math.floor(experiencePoints / 100);

	let experienceMeter = parseInt((experiencePoints / 100).toFixed(2)) * 100;
	experienceMeter = experienceMeter - experiencePoints;

	// console.log(userCtx.user.role);

	if(juryPercentage > 100){
		juryPercentage = 100
	}

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
								Name: {userCtx.user && userCtx.user.username}
							</h1>

							<h1 className="font-medium pb-2">
								Email: {userCtx.user && userCtx.user.email}
							</h1>
							<h1 className="font-medium pb-2 ">Private Key:</h1>
							<h1 className="font-medium pb-2 text-xs">
								{userCtx.user && userCtx.user.privateKey}
							</h1>
							<h1 className="font-medium pb-2 ">Public Key:</h1>
							<h1 className="font-medium pb-2 text-xs">
								{userCtx.user && userCtx.user.publicKey}
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
							<h1 className="font-medium pb-2">Level: {level}</h1>

							{userCtx.user && userCtx.user.userRating < 1 ? (
								<h1 className="font-medium pb-2">
									User Rating: {userCtx.user.userRating}/5.0
								</h1>
							) : null}

							<h1 className="font-medium pb-2">
								Role: {userCtx.user && userCtx.user.role}
							</h1>

							{userCtx.user && !(userCtx.user.role === "NORMAL") ? (
								<h1 className="font-medium pb-2">
									Class: {userCtx.user.class}
								</h1>
							) : null}

							{userCtx.user && !(userCtx.user.role === "NORMAL") ? (
								<h1 className="font-medium pb-2">
									Perks: +15% EXP
								</h1>
							) : null}
						</div>

						<div className="flex flex-col items-center pt-4">
							<h1 className="font-semibold pb-2 text-lg">
								Experience Points
							</h1>
							<ProgressBar
								percentage={-experienceMeter}
								text={`${-experienceMeter}%`}
								textSize="18px"
								color={"rgb(1, 90, 145)"}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className=" box-border bg-zinc-100 w-1/2 drop-shadow-xl rounded-lg p-6 h-fit">
				<h1 className="font-semibold text-lg pb-2">Milestones</h1>
				<Dividers />
				<div className="flex flex-col pt-4 h-full gap-y-8">
					<div className="h-1/3 ">
						<h1 className="font-medium pb-2">
							Total number of verified news:{" "}
							{userCtx.user ? userCtx.user.numberOfVerifiedNews : null}
						</h1>
					</div>

					{userCtx.user && !(userCtx.user.role == "JURY") ? (
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
								Tip: Verify more news accurately to fill the
								bar.
							</h1>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ProfileView;
