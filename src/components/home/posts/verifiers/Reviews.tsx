import React from "react";

type Props = {
    name: string;
    vote: string;
    text: string;
    rating: number;

};

const Reviews = (props: Props) => {
	return (
		<div className="mb-8">
			<div className="flex justify-between w-full">
				<h1 className="font-semibold">Investigator: {props.name}</h1>
                <h1 className="font-semibold">Rating: {props.rating}</h1>
				<h1 className="font-semibold">Voted: {props.vote}</h1>
			</div>
			<h1 className="font-medium text-justify">
				{props.text}
			</h1>
		</div>
	);
};

export default Reviews;
