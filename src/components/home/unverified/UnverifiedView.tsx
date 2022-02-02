import React from "react";
import Post from "../posts/Post";

type Props = {};

const UnverifiedView = (props: Props) => {
	return (
		<div className="flex justify-center pt-8">
			<div className="flex flex-col w-1/2">
			<Post verified = {false}/>
			</div>
		</div>
	);
};

export default UnverifiedView;
