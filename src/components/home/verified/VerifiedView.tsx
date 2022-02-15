import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Post from "../posts/Post";
import { BallTriangle } from "react-loader-spinner";
import UserContext from "../../../store/user-context";

type Props = {};

const VerifiedView = (props: Props) => {
	const userCtx = useContext(UserContext);

	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState<any[]>([]);

	const fetchVerifiedPosts = async () => {
		try {
			const response = await axios.get(
				"http://localhost:3030/post/verified"
			);
			if (response.data.data) {
				setPosts(response.data.data);
			}
		} catch (error) {}
		setLoading(false);
	};

	useEffect(() => {
		const timeout = setTimeout(() => fetchVerifiedPosts(), 1000);
		console.log("Verified");
        console.log(timeout)
		return setLoading(true);
	}, []);

	return (
		<div className="flex justify-center pt-8">
			<div className="flex flex-col w-1/2">
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
						return (
							<Post
								key={post.tweet_id}
								investigatorIdentifier={0}
								juryIdentifier={0}
								id={post.tweet_id}
								name={post.author_name}
								username={post.author_username}
								text={post.text}
								verified={post.verified}
                                verifiedByInvestigator={false}
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

export default VerifiedView;
