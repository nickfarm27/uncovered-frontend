import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { Link } from "react-router-dom";
import BlueButton from "../../../ui/BlueButton";

type Props = {
	id: string;
};

const Slots = (props: Props) => {
	let color = "";
	let participants = 3;

	switch (participants) {
		case 0:
			color = "#DC0E0E";
			break;
		case 1:
			color = "#DC0E0E";
			break;
		case 2:
			color = "#DC0E0E";
			break;
		case 3:
			color = "#F4EA21";
			break;
		case 4:
			color = "#F4EA21";
			break;
		case 5:
			color = "#4EF421";
			break;
	}

	const submitHandler = () => {};

	return (
		<div className="w-full flex flex-col items-center gap-y-4">
			<div className="w-full flex flex-col gap-y-8 justify-around mt-8 items-center">
				<div className="w-2/3">
					<h1 className="font-medium">Participated Investigators</h1>
					<ProgressBar
						completed={`${(participants / 5) * 100}`}
						customLabel={`${participants}/5`}
						bgColor={color}
						baseBgColor="white"
						labelAlignment="outside"
						width="90%"
						labelColor="black"
					/>
				</div>

				<div className="w-2/3">
					<h1 className="font-medium">Participated Juries</h1>
					<ProgressBar
						completed={`${(participants / 5) * 100}`}
						customLabel={`${participants}/5`}
						bgColor={color}
						baseBgColor="white"
						labelAlignment="outside"
						width="90%"
						labelColor="black"
					/>
				</div>
			</div>
			<div className="w-1/3 flex justify-center items-center">
				<Link to={`/${props.id}`}>
					<BlueButton
						text="Verify this news!"
						submit={submitHandler}
					/>
				</Link>
			</div>
		</div>
	);
};

export default Slots;
