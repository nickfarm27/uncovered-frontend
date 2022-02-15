
import React from "react";
import MissionCard from "./MissionCard";
import Dividers from "@mui/material/Divider";
import ProgressBar from "../profile/ProgressBar";

type Props = {};

const MissionsView = (props: Props) => {
	return (
		<div className="flex flex-col gap-y-8 drop-shadow-xl rounded-lg p-6  ">
			<div className="box-border bg-zinc-100 w-2/3 drop-shadow-lg rounded-xl p-6 ">
				<h1 className="font-semibold text-lg pb-2">Ongoing Missions</h1>
				<Dividers />

				<div className="flex justify-between">
					<div className="mt-8 ">
						<h1 className="text-2xl font-medium">
							Full Attendance
						</h1>
						<h1 className="font-medium">
							Login to Uncovered for a week straight.
						</h1>
						<h1 className="font-medium text-green-500">
							Complete this mission to earn: 500 EXP
						</h1>
					</div>
					<div className = "p-4">
						<ProgressBar
							percentage={(1/7)*100}
							text={`1/7`}
							textSize="12px"
							color={"rgb(34, 197, 94)"}
						/>
					</div>
				</div>
			</div>

			<div className="box-border bg-zinc-100  drop-shadow-lg rounded-xl p-6 ">
				<h1 className="font-semibold text-lg pb-2">
					Available Missions
				</h1>
				<Dividers />
				<div className="grid grid-cols-3 gap-x-8 gap-y-8 p-8">
					<MissionCard
						title={"Lawyer"}
						description={"Verify 10 news."}
						exp={500}
						difficulty={"MEDIUM"}
					/>
					<MissionCard
						title={"Hardworking"}
						description={"Reach top 10 in the leaderboard."}
						exp={5000}
						difficulty={"HARD"}
					/>
					<MissionCard
						title={"Rookie"}
						description={"Verify 5 news."}
						exp={50}
						difficulty={"EASY"}
					/>
				</div>
			</div>
		</div>
	);
};

export default MissionsView;
