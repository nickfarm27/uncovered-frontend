import React, { useState } from "react";
import Dividers from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import PremiumUser from "../unverified/PremiumUser";
import Button from "../unverified/Button";

type Props = {
	jury: Boolean;
};

const SubmitReview = (props: Props) => {
	const [selected, setSelected] = useState(1)

	let Color = "";

	switch (selected) {
		case 1:
			Color = "#ffece6";
			break;
		case 2:
			Color = "#e6ffe6";
			break;
	}


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
		<div className="w-1/2">
			<motion.div 
            animate = {{backgroundColor: Color}}
            className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 m-6  ">
				<div className="w-full mb-4">
					<h1 className="font-semibold text-lg pb-2">
						Submit Review
					</h1>
					<Dividers />
				</div>

				<form className="flex flex-col w-full items-center">
					<textarea
						required={true}
						autoFocus={true}
						placeholder="Type your review here and include all sources ...  "
						rows={15}
						className="w-full p-2 resize-none rounded-lg bg-blue-50"
					></textarea>

					{props.jury ? (
						<div className="w-2/3 m-4 flex flex-col items-center">
							<h1 className="font-medium m-2">
								How trustable is this tweet on the scale of 0 to
								100?
							</h1>
							<PrettoSlider
								className="mt-8"
								valueLabelDisplay="auto"
								aria-label="pretto slider"
								defaultValue={20}
							/>
						</div>
					) : (
						<div className="w-full m-4 flex flex-col items-center justify-center">
							<h1 className="font-medium mb-8 mt-2">
								Is the news true or false?
							</h1>
							<div className="flex justify-around w-2/3">
								<motion.div
									onTap={(e) => {setSelected(2)}}
									whileHover={{
										scale: 1.02,
										backgroundColor: "#008000",
									}}
									transition={{ duration: 0.2 }}
									className="bg-green-500 rounded-xl w-1/3 cursor-pointer"
								>
									<h1 className="text-white font-medium p-4 text-center">
										True
									</h1>
								</motion.div>

								<motion.div
									onTap={(e) => {setSelected(1)}}
									whileHover={{
										scale: 1.02,
										backgroundColor: "#b30000",
									}}
									transition={{ duration: 0.2 }}
									className="bg-red-500 rounded-xl w-1/3 cursor-pointer"
								>
									<h1 className="text-white font-medium p-4 text-center">
										False
									</h1>
								</motion.div>
							</div>
						</div>
					)}

					<motion.button
						whileHover={{ scale: 1.02 }}
						className="bg-[#015a91] rounded-lg w-1/6 mt-8"
					>
						<h1 className="font-medium p-4 text-white">Submit</h1>
					</motion.button>
				</form>
			</motion.div>
		</div>
	);
};

export default SubmitReview;
