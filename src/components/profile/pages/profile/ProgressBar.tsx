import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


interface Props {
	color: string
	percentage: number
	text: string
	textSize: string

}

const ProgressBar = (props: Props) => {

	const Color = props.color
	const textSize = props.textSize
	return (
		<div className="box-border w-36 h-36">
			<CircularProgressbar
				value={props.percentage}
				text= {props.text}
				styles={buildStyles({


	
					// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
					strokeLinecap: "round",

					// Text size
					textSize: textSize,

					// How long animation takes to go from one percentage to another, in seconds
					pathTransitionDuration: 0.5,

					// Can specify path transition in more detail, or remove it entirely
					// pathTransition: 'none',

					// Colors
					pathColor: Color,
					textColor: Color,
					trailColor: "#d6d6d6",
				
				})}
			/>
		</div>
	);
};

export default ProgressBar;
