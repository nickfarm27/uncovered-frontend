import React from "react";

type Props = {
	name: string;
	vote: string;
	text: string;
	rating: number;
};

const Reviews = (props: Props) => {
	return (
		<div className="mb-8 w-full">
			<div className="flex  w-full">
				<div className="w-2/3">
					<h1 className="font-semibold">
						Investigator: {props.name}
					</h1>
				</div>

				<div className="w-1/3">
					<h1 className="font-semibold">Rating: {props.rating}</h1>
				</div>

				<div className="w-1/3 flex justify-end">
					<h1 className="font-semibold">Voted: {props.vote}</h1>
				</div>
			</div>
			<h1 className="font-medium text-justify">{props.text}</h1>
		</div>
	);
};

export default Reviews;
