import ProgressBar from "@ramonak/react-progress-bar";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlueButton from "../../../ui/BlueButton";
import axios from "axios";
import UserContext from "../../../../store/user-context";

type Props = {
	id: string;
	identifier: number;
	post: any;
};

const JurySlots = (props: Props) => {
	const [verified, setVerified] = useState(false);

	const userCtx = useContext(UserContext);

	useEffect(() => {
		if (
			props.post.jury_ids.includes(userCtx.user.uid) ||
			props.post.investigator_ids.includes(userCtx.user.uid)
		) {
			setVerified(true);
		}
	}, []);

	let color = "";

	switch (props.post.jury_ids.length) {
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
		console.log("juryTest");
	};

	return (
		<div className="w-full flex flex-col items-center gap-y-4">
			<div className="w-full flex flex-col gap-y-8 justify-around mt-4 items-center">
				<div className="w-2/3">
					<h1 className="font-medium">Participated Jury</h1>
					<ProgressBar
						completed={`${(props.post.jury_ids.length / 5) * 100}`}
						customLabel={`${props.post.jury_ids.length}/5`}
						bgColor={color}
						baseBgColor="white"
						labelAlignment="outside"
						width="90%"
						labelColor="black"
					/>
				</div>
			</div>

			{verified ? (
				<Link to={`/${props.id}/jury`}>
					<BlueButton
						text="Verify this news!"
						submit={submitHandler}
					/>
				</Link>
			) : (
				<div className="w-2/3 flex justify-center items-center">
					<h1 className="text-center font-semibold">
						You already have verified this post
					</h1>
				</div>
			)}
		</div>
	);
};

export default JurySlots;
