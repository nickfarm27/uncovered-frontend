import React from "react";
import Dividers from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

type Props = {};

const SubmitReview = (props: Props) => {
	const submitHandler = () => {};

	const PrettoSlider = styled(Slider)({
		color: "#015a91",
		height: 8,
		"& .MuiSlider-track": {
			border: "none",
		},
		"& .MuiSlider-thumb": {
			height: 24,
			width: 24,
			backgroundColor: "#fff",
			border: "2px solid currentColor",
			"&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
				boxShadow: "inherit",
			},
			"&:before": {
				display: "none",
			},
		},
		"& .MuiSlider-valueLabel": {
			lineHeight: 1.2,
			fontSize: 12,
			background: "unset",
			padding: 0,
			width: 32,
			height: 32,
			borderRadius: "50% 50% 50% 0",
			backgroundColor: "#015a91",
			transformOrigin: "bottom left",
			transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
			"&:before": { display: "none" },
			"&.MuiSlider-valueLabelOpen": {
				transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
			},
			"& > *": {
				transform: "rotate(45deg)",
			},
		},
	});

	return (
		<div className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 m-6 w-1/2 ">
			<div className="w-full mb-4">
				<h1 className="font-semibold text-lg pb-2">Submit Review</h1>
				<Dividers />
			</div>

			<form
				onSubmit={submitHandler}
				className="flex flex-col w-full items-center"
			>
				<textarea
					required={true}
					autoFocus={true}
					placeholder="Type your review here and include all sources ...  "
					rows={15}
					className="w-full p-2 resize-none rounded-lg bg-blue-50"
				></textarea>

				<div className="w-2/3 m-4 flex flex-col items-center">
					<h1 className="font-medium m-2">
						How trustable is this tweet on the scale of 0 to 100?
					</h1>
					<PrettoSlider
						className="mt-8"
						valueLabelDisplay="auto"
						aria-label="pretto slider"
						defaultValue={20}
					/>
				</div>
				<motion.button
					whileHover={{ scale: 1.02 }}
					className="bg-[#015a91] rounded-lg w-1/6"
				>
					<h1 className="font-medium p-4 text-white">Submit</h1>
				</motion.button>
			</form>
		</div>
	);
};

export default SubmitReview;
