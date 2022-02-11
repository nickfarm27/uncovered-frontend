import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../posts/Post";

type Props = {};

const UnverifiedView = (props: Props) => {
	const [posts, setPosts] = useState<any[]>([]);

	const fetchUnverifiedPosts = async () => {
		try {
            
			const response = await axios.get(
				"http://localhost:3030/post/unverified"
			);
			if (response.data.data) {
				setPosts(response.data.data);
                console.log(response.data);
                
			}
		} catch (error) {}
	};

	useEffect(() => {
		const timeout = setTimeout(() => fetchUnverifiedPosts(), 1000);
        console.log("Unverified");
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
								verified={false}
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

export default UnverifiedView;
