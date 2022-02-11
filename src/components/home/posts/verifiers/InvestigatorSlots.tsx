import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlueButton from "../../../ui/BlueButton";

type Props = {
	id: string;
};

const InvestigatorSlots = (props: Props) => {
	const [investigatorView, setInvestigatorView] = useState(true);

	let color = "";
	let investigators = 4;

	switch (investigators) {
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
		if (investigators === 5) {
			setInvestigatorView(false);
		}
	}, [investigators]);

	const submitHandler = () => {
		console.log("verifynews!!!!")
	};

	return (
		<div className="w-full flex flex-col items-center gap-y-4 relative">
			<div className="w-full flex flex-col gap-y-8 justify-around mt-4 items-center">
				<div className="w-2/3">
					<h1 className="font-medium">Participated Investigators</h1>
					<ProgressBar
						completed={`${(investigators / 5) * 100}`}
						customLabel={`${investigators}/5`}
						bgColor={color}
						baseBgColor="white"
						labelAlignment="outside"
						width="90%"
						labelColor="black"
					/>
				</div>
			</div>

			{investigatorView ? (
				<Link to={`/${props.id}/investigator`}>
					<BlueButton
						text="Verify this news!"
						submit={submitHandler}
					/>
				</Link>
			) : (
				<div className="w-2/3 flex justify-center items-center">
					<h1 className="text-center">
						Waiting for verifications from jury
					</h1>
				</div>
			)}
		</div>
	);
};

export default InvestigatorSlots;
