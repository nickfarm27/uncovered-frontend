import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../../../store/user-context";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import Post from "../../../home/posts/Post";

type Props = {};

const FeedView = (props: Props) => {
	const userCtx = useContext(UserContext);
	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchUserPosts = async () => {
		if (userCtx.user) {
			try {
				const response = await axios.get(
					`http://localhost:3030/post/posts/${userCtx.user.uid}`
				);
				if (response.data.data) {
					setPosts(response.data.data);
					console.log(response.data.data);
				}
			} catch (error) {
				console.log("FEED VIEW ERROR");
			}
		}
		setLoading(false);
	};

	useEffect(() => {
		setTimeout(() => fetchUserPosts(), 1000);

		return setLoading(true);
	}, [userCtx.user]);

	return (
		<div className="flex justify-center">
			<div className="flex flex-col w-full p-6">
				{loading ? (
					<div className=" flex absolute top-0 bottom-0 left-0 right-0 w-full items-center justify-center">
						<BallTriangle
							height="100"
							width="100"
							color="#2563eb"
							ariaLabel="loading"
						/>
					</div>
				) : posts.length !== 0 ? (
					posts.map((post) => {
						let status = Boolean(false);
						if (post.investigator_info.length === 5) {
							status = true;
						}
						return (
							<Post
								key={post.tweet_id}
								investigatorIdentifier={
									post.investigator_ids.length
								}
								juryIdentifier={post.jury_ids.length}
								id={post.tweet_id}
								name={post.author_name}
								username={post.author_username}
								text={post.text}
								verified={post.verified}
								verifiedByInvestigator={status}
								role={userCtx.user.role}
								image={post.author_profile_image_url}
								post={post}
							/>
						);
					})
				) : (
					<div className="w-full flex justify-center p-6 bg-zinc-100 drop-shadow-lg rounded-xl">
						<h1 className="font-semibold ">No post available</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default FeedView;
