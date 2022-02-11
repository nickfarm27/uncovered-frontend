import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../posts/Post";

type Props = {};

const VerifiedView = (props: Props) => {
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
	};

	useEffect(() => {
		const timeout = setTimeout(() => fetchVerifiedPosts(), 1000);
        console.log("Verified")
	}, []);

	return (
		<div className="flex justify-center pt-8">
			<div className="flex flex-col w-1/2">
				{posts.length !== 0 ? (
					posts.map((post) => {
						return (
							<Post
								key={post.tweet_id}
								id={post.tweet_id}
								name={post.author_name}
								username={post.author_username}
								text={post.text}
								verified={true}
							/>
						);
					})
				) : (
					<h1>No posts</h1>
				)}
			</div>
		</div>
	);
};

export default VerifiedView;
