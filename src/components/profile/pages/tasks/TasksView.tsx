import React from "react";
import Dividers from "@mui/material/Divider";
import RatingPost from "./RatingPost";

type Props = {};

const TasksView = (props: Props) => {
	return (
		<div className="flex gap-x-8 drop-shadow-xl rounded-lg p-6 w-full ">
			<div className="box-border bg-zinc-100  drop-shadow-lg rounded-xl p-6 ">
				<h1 className="font-semibold text-lg pb-2">Verifier Ratings</h1>
				<Dividers />
				<RatingPost
					taskId={100}
					authorID={2708191476}
					text="I’m so proud and happy for my friends over at OTV welcoming three more friends, Jodi John and Sydney as official members!!! It’s been a long time coming and couldn’t be happier for all of them☺️❤️🎉"
					verifiedAmount={4}
					date="22/1/2022"
				/>

				<RatingPost
					taskId={101}
					authorID={2708191476}
					text="I’m so proud and happy for my friends over at OTV welcoming three more friends, Jodi John and Sydney as official members!!! It’s been a long time coming and couldn’t be happier for all of them☺️❤️🎉"
					verifiedAmount={5}
					date="22/1/2022"
				/>
			</div>
		</div>
	);
};

export default TasksView;
