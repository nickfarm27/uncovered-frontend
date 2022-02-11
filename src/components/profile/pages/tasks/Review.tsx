import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { useParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import InvestigatorRating from "./InvestigatorRating";
import BlueButton from "../../../ui/BlueButton";

type Props = {};

const Review = (props: Props) => {
	const { tweetId } = useParams();

	let color = "";
	let percentage = 70;

	if (percentage < 30) {
		color = "#DC0E0E";
	} else if (percentage < 70) {
		color = "#F4EA21";
	} else {
		color = "#4EF421";
	}

	const submitHandler = () => {

	}

	return (
		<div className="m-6 flex flex-col gap-y-8">
			<div className="box-border bg-zinc-100 drop-shadow-lg rounded-xl p-6 flex flex-col justify-center  w-full">
				<h1 className="font-semibold">Tweet ID: {tweetId}</h1>

				<h1 className="font-medium text-justify">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting.
				</h1>

				<div className="w-full mt-8">
					<ProgressBar
						completed={percentage}
						customLabel={`${percentage}%`}
						bgColor={color}
						baseBgColor="white"
						labelAlignment="outside"
						width="100%"
						labelColor="black"
					/>
				</div>
			</div>

			<InvestigatorRating
				name={"Gan"}
				text={
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
				}
			/>
			<InvestigatorRating
				name={"Gan"}
				text={
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
				}
			/>
			<InvestigatorRating
				name={"Gan"}
				text={
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
				}
			/>
			<InvestigatorRating
				name={"Gan"}
				text={
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
				}
			/>
			<InvestigatorRating
				name={"Gan"}
				text={
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
				}
			/>

			<BlueButton text={"Submit Rating"} submit={submitHandler} />
		</div>
	);
};

export default Review;
