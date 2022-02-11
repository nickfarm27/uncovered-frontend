import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlueButton from "../../../ui/BlueButton";

type Props = {
	id: string;
};

const JurySlots = (props: Props) => {
	const [juryView, setJuryView] = useState(true);

	let color = "";
	let jury = 3;

	switch (jury) {
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

	useEffect(() => {
		if (jury === 5) {
			setJuryView(false);
		}
	}, [jury]);

	const submitHandler = () => {
		console.log("juryTest");
	};

	return (
		<div className="w-full flex flex-col items-center gap-y-4">
			<div className="w-full flex flex-col gap-y-8 justify-around mt-4 items-center">
				<div className="w-2/3">
					<h1 className="font-medium">Participated Jury</h1>
					<ProgressBar
						completed={`${(jury / 5) * 100}`}
						customLabel={`${jury}/5`}
						bgColor={color}
						baseBgColor="white"
						labelAlignment="outside"
						width="90%"
						labelColor="black"
					/>
				</div>
			</div>

			{juryView ? (
				<Link to={`/${props.id}/jury`}>
					<BlueButton
						text="Verify this news!"
						submit={submitHandler}
					/>
				</Link>
			) : null}
		</div>
	);
};

export default JurySlots;
