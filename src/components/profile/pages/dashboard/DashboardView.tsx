import React, { useContext, useEffect, useState } from "react";
import Dividers from "@mui/material/Divider";
import Cards from "./Cards";
import ProgressBar from "../profile/ProgressBar";
import Badges from "../profile/Badges";
import Award from "../../../assets/Award.png";
import Newspaper from "../../../assets/Newspaper.png";
import FeedPost from "./FeedPost";
import axios from "axios"
import UserContext from "../../../../store/user-context";
import { Link } from "react-router-dom";

interface Props {}

const DashboardView = (props: Props) => {
	const userCtx = useContext(UserContext);
	const [wallet, setWallet] = useState(0);
	const [ranking, setRanking] = useState(10);

	let xpxPriceUSD = 0.00359326;
	let xpxPriceMYR = xpxPriceUSD * 4.13;

	const fetchWallet = async () => {
		if (userCtx.user) {
			try {
				const response = await axios.get(
					`http://localhost:3030/blockchain/account/${userCtx.user.address}`
				);
				if (response.data.xpxAmount) {
					setWallet(response.data.xpxAmount / 1000000);
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	const getLeaderboardData = async () => {
		try {
			const response = await axios.get("http://localhost:3030/user/leaderboard")
			if (response.data.data && userCtx.user) {
				const leaderboard = response.data.data
				for (let i = 0; i < leaderboard.length; i++) {
					if (leaderboard[i].uid === userCtx.user.uid) {
						setRanking(i+1)
					}
				}
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		setTimeout(() => {
			fetchWallet()
			getLeaderboardData()
		}, 1000);
	}, [userCtx.user]);

	return (
		<div className="flex w-full h-4/6 p-6 gap-x-8 ">
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
										RM{(wallet * xpxPriceMYR).toFixed(2)}
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
										#{ranking}
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
						<Link to="/profile/missions">
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
										percentage={(1/7)*100}
										text={`1/7`}
										textSize="12px"
										color={"rgb(34, 197, 94)"}
									/>
								</div>
							</div>
						</Link>
					}
				/>

				{/* Task */}
				{userCtx.user && userCtx.user.role === "R" ? (
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
				) : null}
			</div>

			{/* Rewards */}
			<div className="flex flex-col w-1/2 gap-y-8 ">
				<Cards
					height="h-3/6"
					width="w-full"
					content={
						<Link to="/profile/rewards">
							<h1 className="font-semibold text-lg pb-2 ">
								Rewards
							</h1>

							<Dividers />
							<div className="flex flex-col pt-2 ">
								<div className="flex justify-around ">
									<Badges
										image={Award}
										name="Investigator Role"
										description="Become an investigator."
										earned={1}
									/>

									<Badges
										image={Newspaper}
										name="Contributor"
										description="Submit 5 news tweet to Uncovered."
										earned={1}
									/>
								</div>

								<div className="flex justify-center mt-4 ">
									<h1 className="font-medium text-sm italic ">
										Click to view more
									</h1>
								</div>
							</div>
						</Link>
					}
				/>

				{/* My Feed */}
				<Cards
					height="h-full"
					width="w-full"
					content={
						<Link to="/profile/feed">
							<h1 className="font-semibold text-lg pb-2">
								My Feed
							</h1>

							<Dividers />

							<div className="flex flex-col justify-between ">
								<div className="">
									<FeedPost
										title="Tweet 1"
										status="Status: Unverified"
										rating="Unknown"
										color={0}
									/>
								</div>
								<div className="flex justify-center">
									<h1 className="font-medium text-sm italic pt-4">
										Click to view more
									</h1>
								</div>
							</div>
						</Link>
					}
				/>
			</div>
		</div>
	);
};

export default DashboardView;
