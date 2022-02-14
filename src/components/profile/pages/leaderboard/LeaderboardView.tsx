import React, { useEffect, useState } from "react";
import Ranking from "./Ranking";
import axios from "axios"

type Props = {};

const LeaderboardView = (props: Props) => {
	const [users, setUsers] = useState<any[]>([]);

	const fetchLeaderboard = async () => {
		try {
			const response = await axios.get(
				"http://localhost:3030/user/leaderboard"
			);
			if (response.data.data) {
				setUsers(response.data.data);
			}
		} catch (error) {
			console.log("ERROR FROM LEADERBOARD");
		}
	};

	useEffect(() => {
		setTimeout(() => fetchLeaderboard(), 1000);
	}, []);

	return (
		<div className="flex flex-col gap-y-4 p-10 w-full items-center">
			<div className="flex w-2/3 items-center px-6">
				<div className="w-1/6 ">
					<h1 className="font-semibold">Rank</h1>
				</div>
				<div className="w-4/6  ">
					<h1 className="font-semibold">Name</h1>
				</div>
				<div className="w-2/6  ">
					<h1 className="font-semibold">Number of verified news</h1>
				</div>
			</div>
			{users.length !== 0 && users.map((user, rank) => {
				return <Ranking rank={rank+1} name={user.username} numberOfVerified={user.numberOfVerifiedNews} />
			})}
		</div>
	);
};

export default LeaderboardView;
