import React from "react";
import Cards from "../dashboard/Cards";
import Ranking from "./Ranking";

type Props = {};

const LeaderboardView = (props: Props) => {
	return (
		<div className="flex flex-col gap-y-4 m-8 w-full">
			<div className="flex w-2/3 items-start  p-6">
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
			<Ranking rank={1} name="Mokey Gan" numberOfVerified={50} />
			<Ranking rank={1} name="Mokey Gan" numberOfVerified={50} />
			<Ranking rank={1} name="Mokey Gan" numberOfVerified={50} />
			<Ranking rank={1} name="Mokey Gan" numberOfVerified={50} />
		</div>
	);
};

export default LeaderboardView;
