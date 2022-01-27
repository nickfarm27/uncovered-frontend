import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

interface Props {}

const ProgressBar = (props: Props) => {
	const percentage = 65;
	return (
		<div className="box-border w-36 h-36">
			<CircularProgressbar
				value={percentage}
				text={`${percentage}%`}
				styles={buildStyles({
	
					// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
					strokeLinecap: "butt",

					// Text size
					textSize: "24px",

					// How long animation takes to go from one percentage to another, in seconds
					pathTransitionDuration: 0.5,

					// Can specify path transition in more detail, or remove it entirely
					// pathTransition: 'none',

					// Colors
					textColor: "#015a91",
					trailColor: "#d6d6d6",
				
				})}
			/>
		</div>
	);
};

export default ProgressBar;
