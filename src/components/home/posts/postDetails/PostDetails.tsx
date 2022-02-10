import React from "react";
import Dividers from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import TrustIndex from "./TrustIndex";
import SubmitReview from "./SubmitReview";


interface Props {}

const PostDetails = (props: Props) => {
	const { postId } = useParams();
	const verified = false;

	return (
		<div className="flex w-full ">
			<div className="flex-col w-1/2 ">
				<div className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 m-6 ">
					<div className="w-full mb-4">
						<h1 className="font-semibold text-lg pb-2">{`Post ID: ${postId}`}</h1>

						<Dividers />
					</div>
					<div className="flex  justify-between w-full ">
						<h1 className="font-medium">Mokey Gan</h1>
						<h1 className="font-medium">@mokeygan</h1>
						<h1 className="font-medium">2h</h1>
					</div>

					<div className="mt-8">
						<h1 className="text-justify font-medium">
							I will rule China one day. Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Itaque animi
							debitis veniam quod expedita inventore pariatur odit
							fugit, aut, fugiat sunt deserunt placeat voluptatum,
							dicta enim iure! Quia, culpa fugit.
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

			{verified ? <TrustIndex /> : <SubmitReview />}
		</div>
	);
};

export default PostDetails;
