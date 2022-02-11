import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Review = (props: Props) => {
	const { taskId } = useParams();
	return <div>testing{taskId}</div>;
};

export default Review;
