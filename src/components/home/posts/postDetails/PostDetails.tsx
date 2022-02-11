import React, { useEffect, useState } from "react";
import Dividers from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import TrustIndex from "./TrustIndex";
import SubmitReview from "./SubmitReview";
import axios from "axios"

interface Props {}

const PostDetails = (props: Props) => {
	const { postId } = useParams();
	const [post, setPost] = useState<any>(null);

	const getPostData = async () => {
		const response = await axios.get(`http://localhost:3030/post/${postId as string}`);
		if (response.data.data) {
			setPost(response.data.data)
		}
	}

	useEffect(() => {
		const timeout = setTimeout(() => getPostData(), 1000);
	  	console.log("PostDetail")
	}, []);

	return (
		<div className="flex w-full ">
			{post ? <div className="flex-col w-1/2 ">
				<div className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 m-6 ">
					<div className="w-full mb-4">
						<h1 className="font-semibold text-lg pb-2">{`Post ID: ${postId}`}</h1>

						<Dividers />
					</div>
					<div className="flex  justify-between w-full ">
						<h1 className="font-medium">{post.author_name}</h1>
						<h1 className="font-medium">@{post.author_username}</h1>
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
			</div> : "NOTHING HERE"}

			{post ? post.verified ? <TrustIndex /> : <SubmitReview jury={false}/> : null}
		</div>
	);
};

export default PostDetails;
