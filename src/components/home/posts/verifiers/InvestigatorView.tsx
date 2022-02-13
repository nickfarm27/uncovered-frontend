import React, { useEffect, useState } from "react";
import Dividers from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

type Props = {};

const InvestigatorView = (props: Props) => {
	const [selected, setSelected] = useState(0);
	let jury = Boolean(false);


	let Color = "";

	switch (selected) {
		case 0:
			Color = "#f4f4f5";
			break;
		case 1:
			Color = "#ffece6";
			break;
		case 2:
			Color = "#e6ffe6";
			break;
	}

	const { postId } = useParams();
	const [post, setPost] = useState<any>(null);

	const getPostData = async () => {
		const response = await axios.get(
			`http://localhost:3030/post/${postId as string}`
		);
		if (response.data.data) {
			setPost(response.data.data);
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => getPostData(), 1000);
		console.log("PostDetail");
		console.log(timeout);
	}, []);

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
		<div>
			{post ? (
				<div className="w-full flex">
					<div className="flex-col w-1/2 ">
						<div className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 m-6 ">
							<div className="w-full mb-4">
								<h1 className="font-semibold text-lg pb-2">{`Post ID: ${postId}`}</h1>

								<Dividers />
							</div>
							<div className="flex  justify-between w-full ">
								<h1 className="font-medium">
									{post.author_name}
								</h1>
								<h1 className="font-medium">
									@{post.author_username}
								</h1>
								<h1 className="font-medium">2h</h1>
							</div>

							<div className="mt-8">
								<h1 className="text-justify font-medium">
									{post.text}
								</h1>
							</div>
						</div>

						<div className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 m-6 ">
							<div className="w-full mb-4">
								<h1 className="font-semibold text-lg pb-2">
									Author's Information
								</h1>

								<Dividers />
							</div>
							<div className="flex flex-col justify-between w-full ">
								<h1 className="font-medium">Name: Gan</h1>
								<h1 className="font-medium">Rating: 4.5</h1>
								<h1 className="font-medium">
									Total submitted tweets: 5
								</h1>
								<h1 className="font-medium">
									Average trust index of submitted tweets: 65%
								</h1>
							</div>
						</div>
					</div>

					<motion.div
						animate={{ backgroundColor: Color }}
						className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 m-6 w-1/2 "
					>
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

							{jury ? (
								<div className="w-2/3 m-4 flex flex-col items-center">
									<h1 className="font-medium m-2">
										How trustable is this tweet on the scale
										of 0 to 100?
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
											onTap={(e) => {
												setSelected(2);
											}}
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
											onTap={(e) => {
												setSelected(1);
											}}
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
								className="bg-[#2563eb] rounded-lg w-1/6 mt-8"
							>
								<h1 className="font-medium p-4 text-white">
									Submit
								</h1>
							</motion.button>
						</form>
					</motion.div>
				</div>
			) : (
				<div className=" flex absolute top-0 bottom-0 left-0 right-0 w-full items-center justify-center">
					<BallTriangle
						height="100"
						width="100"
						color="#015a91"
						ariaLabel="loading"
					/>
				</div>
			)}
		</div>
	);
};

export default InvestigatorView;
