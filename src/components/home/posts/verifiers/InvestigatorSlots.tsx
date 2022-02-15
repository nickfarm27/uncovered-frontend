import ProgressBar from "@ramonak/react-progress-bar";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlueButton from "../../../ui/BlueButton";
import InvestigatorView from "./InvestigatorView";
import UserContext from "../../../../store/user-context";

type Props = {
	id: string;
	role: string;
	identifier: number;
	status: Boolean;
	post: any;
};

const InvestigatorSlots = (props: Props) => {
	const userCtx = useContext(UserContext);
	const [verified, setVerified] = useState(false);

	let color = "";

	useEffect(() => {
		if (props.post.investigator_ids.includes(userCtx.user.uid)) {
			setVerified(true);
		}
	}, []);

	switch (props.post.investigator_ids.length) {
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

	const submitHandler = () => {
		console.log("verifynews!!!!");
	};

	return (
		<div className="w-full flex flex-col items-center gap-y-4 relative">
			<div className="w-full flex flex-col gap-y-8 justify-around mt-4 items-center">
				<div className="w-2/3">
					<h1 className="font-medium">Participated Investigators</h1>

					<ProgressBar
						completed={`${
							(props.post.investigator_ids.length / 5) * 100
						}`}
						customLabel={`${props.post.investigator_ids.length}/5`}
						bgColor={color}
						baseBgColor="white"
						labelAlignment="outside"
						width="90%"
						labelColor="black"
					/>
				</div>
			</div>

			{!verified ? (
				(!props.status && props.role === "JURY") || !props.status ? (
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
				)
			) : (props.role == "INVESTIGATOR" && !props.status) ||
			  (props.role == "JURY" && !props.status) ? (
				<div className="w-2/3 flex justify-center items-center">
					<h1 className="text-center font-semibold">
						You already have verified this post
					</h1>
				</div>
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
