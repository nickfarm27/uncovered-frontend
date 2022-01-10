import React from "react";
import "./Container.css"

interface Props {
	userName: String;
	numberOfVerifiedNews: String;
}

const Container = (props: Props) => {
	return (
		<div className="containers_leader">
			<h1 className = "name">{props.userName}</h1>
			<h1 className = "news">Total verified news: {props.numberOfVerifiedNews}</h1>
		</div>
	);
};

export default Container;
