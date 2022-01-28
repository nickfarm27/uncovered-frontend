import React from "react";
import { motion } from "framer-motion";
import Dividers from "@mui/material/Divider";
import Cards from "./Cards";
import ProgressBar from "../profile/ProgressBar";
import Badges from "../profile/Badges";
import Award from "../../../assets/Award.png";
import Law from "../../../assets/Law.png";
import Newspaper from "../../../assets/Newspaper.png";
import FeedPost from "./FeedPost";

interface Props {}

const DashboardView = (props: Props) => {
	const missionPercentage = 50;
	return (
		<div className="flex w-full h-5/6 p-8 gap-x-8 ">
			<div className="flex flex-col w-1/2  gap-y-8 ">
				<div className="flex w-full h-3/4 gap-x-8">
					{/* Wallet */}
					<Cards
						height=""
						width="w-1/2"
						content={
							<div>
								<h1 className="font-semibold text-lg pb-2">
									Wallet
								</h1>

								<Dividers />
								<div className=" pt-2">
									<h1 className="font-medium ">Balance:</h1>
									<h1 className="font-medium text-3xl ">
										RM420.69
									</h1>
								</div>
							</div>
						}
					/>
					{/* Leaderboard */}
					<Cards
						height=""
						width="w-1/2"
						content={
							<div>
								<h1 className="font-semibold text-lg pb-2">
									Leaderboard
								</h1>

								<Dividers />
								<div className=" pt-2">
									<h1 className="font-medium ">
										Total Ranking:
									</h1>
									<h1 className="font-medium text-3xl">
										#23
									</h1>
								</div>
							</div>
						}
					/>
				</div>
				{/* Mission */}
				<Cards
					height="h-3/4"
					width="w-full"
					content={
						<div>
							<h1 className="font-semibold text-lg pb-2">
								Missions
							</h1>

							<Dividers />
							<div className="flex justify-between ">
								<div className="flex flex-col justify-between pt-2 ">
									<div>
										<h1 className="font-medium text-2xl pb-2">
											Full Attendance
										</h1>
										<h1 className="font-medium ">
											Login to Uncovered for a week
											straight.
										</h1>
										<h1 className="font-medium text-green-500">
											Points to be earned: 500
										</h1>
									</div>

									<h1 className="font-medium text-sm  italic">
										Complete before expired
									</h1>
								</div>

								<div className="pt-4">
									<ProgressBar
										percentage={missionPercentage}
										text={`${missionPercentage}/100`}
										textSize="12px"
										color={"rgb(34, 197, 94)"}
									/>
								</div>
							</div>
						</div>
					}
				/>

				{/* Task */}
				<Cards
					height="h-3/4"
					width="w-full"
					content={
						<div>
							<h1 className="font-semibold text-lg pb-2 ">
								Tasks
							</h1>

							<Dividers />
							<div className="flex flex-col justify-between pt-2  ">
								<div>
									<h1 className="font-medium text-xl pb-2">
										Ongoing tasks: 4
									</h1>
									<h1 className="font-medium ">
										Rate verifiers from the previous
										investigation.
									</h1>
								</div>

								<h1 className="font-medium text-sm italic pt-8">
									Click to view more
								</h1>
							</div>
						</div>
					}
				/>
			</div>

			{/* Rewards */}
			<div className="flex flex-col w-1/2  gap-y-8 ">
				<Cards
					height="h-3/6"
					width="w-full"
					content={
						<div>
							<h1 className="font-semibold text-lg pb-2 ">
								Rewards
							</h1>

							<Dividers />
							<div className="flex flex-col justify-between pt-2  ">
								<div className="flex justify-around">
									<Badges
										image={Award}
										name="Completion Badge"
									/>
									<Badges
										image={Law}
										name="Outstanding Verified"
									/>
									<Badges
										image={Newspaper}
										name="Contribuion Badge"
									/>
								</div>

								<div className="flex justify-center">
									<h1 className="font-medium text-sm italic pt-8">
										Click to view more
									</h1>
								</div>
							</div>
						</div>
					}
				/>

				{/* My Feed */}
				<Cards
					height="h-full"
					width="w-full"
					content={
						<div>
							<h1 className="font-semibold text-lg pb-2">
								My Feed
							</h1>

							<Dividers />

							<div className="flex flex-col justify-between">
								<div className="">
								<FeedPost
									title="Are Valorant players gay?"
									status="Status: Unverified"
									rating="Unknown"
									color={0}
								/>
								<FeedPost
									title="Are Valorant players gay?"
									status="Status: Verified"
									rating={`${60}/100%`}
									color={2}
								/>
								<FeedPost
									title="Are Valorant players gay?"
									status="Status: Verified"
									rating={`${80}/100%`}
									color={3}
								/>
								</div>
								<div className="flex justify-center">
									<h1 className="font-medium text-sm italic pt-4">
										Click to view more
									</h1>
								</div>
							</div>
						</div>
					}
				/>
			</div>
		</div>
	);
};

export default DashboardView;
