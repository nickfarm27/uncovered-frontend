import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

type Props = {};

const TrustBar = (props: Props) => {
	let percentage = 10;
	let color = "";

	if (percentage < 30) {
		color = "#e60000";
	} else if (percentage < 70) {
		color = "#ff9900";
	} else {
		color = "#4EF421";
	}

	return (
		<div className="w-full">
			<ProgressBar
				completed={percentage}
				bgColor={color}
				baseBgColor="white"
				width="100%"
				isLabelVisible={false}
			/>
		</div>
	);
};

export default TrustBar;
