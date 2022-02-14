import React, { useEffect, useState } from "react";
import Dividers from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import TrustIndex from "./TrustIndex";
import SubmitReview from "./SubmitReview";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

interface Props {}

const PostDetails = (props: Props) => {
	const { postId } = useParams();
	const [post, setPost] = useState<any>(null);
	const [author, setAuthor] = useState<any>([]);

	//GET POST DATA
	const getPostData = async () => {
		const response1 = await axios.get(
			`http://localhost:3030/post/${postId as string}`
		);
		if (response1.data.data) {
			setPost(response1.data.data);
		}
		//console.log(response1.data);

		const response2 = await axios.get(
			`http://localhost:3030/user/author/${
				response1.data.data.author_id as string
			}`
		);
		//console.log(response2.data);

		if (response2.data.author) {
			setAuthor(response2.data.author);
			console.log(author);
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => getPostData(), 1000);
	}, []);

	// //GET AUTHOR DATA
	// const getAuthorData = async () => {
	// 	const response = await axios.get(
	// 		`http://localhost:3030/user/author/${post.author_id as string}`
	// 	);
	// 	if (response.data.data) {
	// 		setAuthor(response.data.data);
	// 		console.log(author);
	// 	}
	// };

	// useEffect(() => {
	// 	const timeout = setTimeout(() => getAuthorData(), 1000);
	// }, []);
	// console.log(
	// 	author.trust_index_scores.reduce((a: any, b: any) => a + b, 0) /
	// 		author.trust_index_scores.length
	// );

	return (
		<div className="flex w-full flex-grow min-h-full">
			{post && author ? (
				<div className="flex-col w-1/2 ">
					<div className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 m-6 ">
						<div className="w-full mb-4">
							<h1 className="font-semibold text-lg pb-2">{`Post ID: ${postId}`}</h1>

							<Dividers />
						</div>
						<div className="flex justify-between w-full ">
							<h1 className="font-medium">{post.author_name}</h1>
							<h1 className="font-medium">
								@{post.author_username}
							</h1>
							<h1 className="font-medium">2h</h1>
						</div>

						<div className="mt-8 flex items-start w-full">
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
						<div className="flex flex-col justify-between w-full  ">
							<h1 className="font-medium">
								Name: {post.author_name}
							</h1>
							<h1 className="font-medium">
								Rating: {author.author_rating}/100
							</h1>

							<h1 className="font-medium">
								Total submitted tweets: {author.no_of_posts}
							</h1>
							<div className="flex ">
								{author.trust_index_scores && author.trust_index_scores.length ? (
									<h1 className="font-medium">
										Average trust index of submitted tweets:
										{` ${Math.round(
											author.trust_index_scores.reduce(
												(a: any, b: any) => a + b,
												0
											) / author.trust_index_scores.length
										)}%`}
									</h1>
								) : null}
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="flex absolute top-0 bottom-0 w-full justify-center items-center">
					<BallTriangle
						height="100"
						width="100"
						color="#2563eb"
						ariaLabel="loading"
					/>
				</div>
			)}

			{post ? (
				post.verified ? (
					<TrustIndex post={post} />
				) : (
					<SubmitReview jury={false} verified={!post.verified} />
				)
			) : null}
		</div>
	);
};

export default PostDetails;
