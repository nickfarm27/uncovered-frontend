import React from "react";

interface Props {
	title: string;
	status: string;
	rating: string;
	color: number;
}

const FeedPost = (props: Props) => {
	let backgroundColor = "";

	switch (props.color) {
		case 0:
			backgroundColor = "bg-blue-200";
			break;
		case 1:
			backgroundColor = "bg-red-300";
			break;
		case 2:
			backgroundColor = "bg-yellow-300";
			break;
		case 3:
			backgroundColor = "bg-green-300";
			break;
	}

	return (
		<div
			className={`box-border px-3 py-2 rounded-lg ${backgroundColor} mt-4`}
		>
			<h1 className="font-semibold text-lg">{props.title}</h1>
			<div className="flex justify-between">
				<h1 className="font-medium text-sm">{props.status}</h1>
				<h1 className="font-medium text-sm">
					Trust Index: {props.rating}
				</h1>
			</div>
		</div>
	);
};

export default FeedPost;
