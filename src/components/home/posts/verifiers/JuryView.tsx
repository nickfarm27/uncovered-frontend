import React, { useContext, useEffect, useRef, useState } from "react";
import Dividers from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import Reviews from "./Reviews";
import UserContext from "../../../../store/user-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const JuryView = (props: Props) => {
	const [selected, setSelected] = useState(0);
	let jury = Boolean(true);
	let investigatorFilled = Boolean(false);
	const [value, setValue] = useState(0);
	const userCtx = useContext(UserContext);
	const navigate = useNavigate();
	const textRef = useRef<HTMLTextAreaElement>(null);

	const handleChange = (event: Event, newValue: number | number[]) => {
		event.preventDefault();
		if (typeof newValue === "number") {
			setValue(newValue);
		}
	};

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
	const [reviews, setReviews] = useState<any[]>([]);

	const getPostData = async () => {
		const response = await axios.get(
			`http://localhost:3030/post/${postId as string}`
		);
		if (response.data.data) {
			setPost(response.data.data);
			setReviews(response.data.data.investigator_info);
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => getPostData(), 1000);
		console.log("PostDetail");
		console.log(timeout);
	}, []);

	
	let text = "News succesfully verified";
	const notify = () => {
		toast.success(text);
	};
	
	const addJuryReview = async (text: string) => {
		try {
			const response = await axios.post(
				"http://localhost:3030/post/jury",
				{
					pid: post.tweet_id,
					uid: userCtx.user.uid,
					username: userCtx.user.username,
					userRating:
						userCtx.user.userRatings.reduce(
							(a: any, b: any) => a + b,
							0
						) / userCtx.user.userRatings.length,
					researchText: text,
					grade: value,
					juryCount: post.jury_ids.length,
					userPublicKey: userCtx.user.publicKey,
					invClass: userCtx.user.class
				}
			);
			if (response.data.message) {
				navigate(`/${post.tweet_id}`, { replace: true });
				notify()
			}
		} catch (error) {
			console.log(error);
		}
	};

	const submitHandler = (e: React.MouseEvent) => {
		e.preventDefault();

		if (textRef.current) {
			addJuryReview(textRef.current.value);
		}
	};

	return (
		<div>
			{post ? (
				<div className="w-full h-screen flex">
					{/* LEFT BOXES */}

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
								
							</div>

							<div className="mt-8 w-full flex items-start">
								<h1 className="text-justify font-medium">
									{post.text}
								</h1>
							</div>
						</div>

						<div className="bg-zinc-100  flex  flex-col items-center box-border drop-shadow-lg rounded-xl p-6 m-6 ">
							<div className="w-full mb-4">
								<h1 className="font-semibold text-lg pb-2">
									Author's Information
								</h1>

								<Dividers />
							</div>
							<div className="flex flex-col justify-between w-full ">
								<h1 className="font-medium">
									Name: {post.author_name}
								</h1>
								<h1 className="font-medium">Rating: 4.5</h1>
								<h1 className="font-medium">
									Total submitted tweets: 5
								</h1>
								<h1 className="font-medium">
									Average trust index of submitted tweets: 65%
								</h1>
							</div>
						</div>

						<div className="bg-zinc-100 flex flex-col items-start mb-4 box-border drop-shadow-lg rounded-xl p-6 m-6">
							<div className="w-full mb-4">
								<h1 className="font-semibold text-lg pb-2">
									Investigator Reviews
								</h1>

								<Dividers />
							</div>

							{reviews.map((post) => {
								let voting = "";
								if (post.vote == true) {
									voting = "True";
								} else {
									voting = "False";
								}

								return (
									<Reviews
										key={post.uid}
										name={post.username}
										vote={voting}
										rating={post.userRating}
										text={post.researchText}
									/>
								);
							})}
						</div>
					</div>

					{/* RIGHT BOX */}
					<motion.div
						animate={{ backgroundColor: Color }}
						className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 m-6 w-1/2 h-max "
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
								rows={20}
								className="w-full p-2 resize-none rounded-lg bg-blue-50"
								ref={textRef}
							></textarea>

							{jury && !investigatorFilled ? (
								<div className="w-2/3 m-4 flex flex-col items-center">
									<h1 className="font-medium m-2">
										How trustable is this tweet on the scale
										of 0 to 100?
									</h1>
									<Slider
										value={value}
										className="mt-8"
										valueLabelDisplay="auto"
										defaultValue={20}
										onChange={handleChange}
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
								onClick={submitHandler}
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

export default JuryView;
