import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../../../store/user-context';
import axios from "axios"
import { BallTriangle } from 'react-loader-spinner';
import Post from '../../../home/posts/Post';

type Props = {
  // investigatorIdentifier: number;
	// juryIdentifier: number;
	// verified: boolean;
	// name: string;
	// username: string;
	// text: string;
	// id: string;
	// verifiedByInvestigator: boolean;
	// role: string;
	// image: string;
	// post: any;
};

const FeedView = (props: Props) => {
  const userCtx = useContext(UserContext);
	const [posts, setPosts] = useState<any[]>([]);

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
	};

	useEffect(() => {
		setTimeout(() => fetchUserPosts(), 1000);
	}, [userCtx.user]);

  return (
    <div className="flex justify-center pt-8">
			<div className="flex flex-col w-1/2">
				{posts.length !== 0 ? (
					posts.map((post) => {
						let status = Boolean(false);
						if (post.investigator_info.length === 5) {
							status = true;
						}
						return (
							<Post
								key={post.tweet_id}
								investigatorIdentifier={post.investigator_ids.length}
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
					<div className=" flex absolute top-0 bottom-0 left-0 right-0 w-full items-center justify-center">
						<BallTriangle
							height="100"
							width="100"
							color="#2563eb"
							ariaLabel="loading"
						/>
					</div>
				)}
			</div>
		</div>
  );
};

export default FeedView;
