import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlueButton from "../../../ui/BlueButton";
import InvestigatorView from "./InvestigatorView";

type Props = {
	id: string;
	role: string;
	identifier: number;
	status: Boolean;
};

const InvestigatorSlots = (props: Props) => {
	const [investigatorView, setInvestigatorView] = useState(true);

	let color = "";
	

	const [percentage, setPercentage] = useState(0);

	const fetchUnverifiedPosts = async () => {
		try {
			const response = await axios.get(
				"http://localhost:3030/post/unverified"
			);
			if (response.data.data) {
				setPercentage(response.data.data[props.identifier].investigator_info.length)
				console.log(percentage);
			}
		} catch (error) {
			console.log(error)
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => fetchUnverifiedPosts(), 1000);
		console.log(timeout);
	}, []);


	switch (percentage) {
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
		if (percentage === 5) {
			setInvestigatorView(false);
		}
	}, [percentage]);

	//console.log(investigatorView)

	const submitHandler = () => {
		console.log("verifynews!!!!");
	};

	return (
		<div className="w-full flex flex-col items-center gap-y-4 relative">
			<div className="w-full flex flex-col gap-y-8 justify-around mt-4 items-center">
				<div className="w-2/3">
					<h1 className="font-medium">Participated Investigators</h1>


					<ProgressBar
						completed={`${(percentage / 5) * 100}`}
						customLabel={`${percentage}/5`}
						bgColor={color}
						baseBgColor="white"
						labelAlignment="outside"
						width="90%"
						labelColor="black"
					/>
				</div>
			</div>

			{(!props.status && props.role === "JURY") || !props.status ? (
				<Link to={`/${props.id}/investigator`}>
					<BlueButton
						text="Verify this news!"
						submit={submitHandler}
					/>
				</Link>
			) : (
				<div className="w-2/3 flex justify-center items-center">
					<h1 className="text-center font-semibold">
						Waiting for verifications from jury
					</h1>
				</div>
			)}
		</div>
	);
};

export default InvestigatorSlots;
