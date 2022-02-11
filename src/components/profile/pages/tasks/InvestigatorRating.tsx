import React, {useState} from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

type Props = {
	name: string;
	text: string;
};

const InvestigatorRating = (props: Props) => {
    const [valuetext, setValuetext] = useState(0);

	const PrettoSlider = styled(Slider)({
		color: "#2563eb",
		height: 8,
		"& .MuiSlider-track": {
			border: "none",
		},
		"& .MuiSlider-thumb": {
			height: 24,
			width: 24,
			backgroundColor: "#fff",
			border: "2px solid currentColor",
			"&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
				boxShadow: "inherit",
			},
			"&:before": {
				display: "none",
			},
		},
		"& .MuiSlider-valueLabel": {
			lineHeight: 1.2,
			fontSize: 12,
			background: "unset",
			padding: 0,
			width: 32,
			height: 32,
			borderRadius: "50% 50% 50% 0",
			backgroundColor: "#2563eb",
			transformOrigin: "bottom left",
			transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
			"&:before": { display: "none" },
			"&.MuiSlider-valueLabelOpen": {
				transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
			},
			"& > *": {
				transform: "rotate(45deg)",
			},
		},
	});

	return (
		<div className="box-border bg-zinc-100 drop-shadow-lg rounded-xl p-6 flex flex-col justify-center  w-full">
			<h1 className="font-semibold">Investigator: {props.name}</h1>

			<h1 className="font-semibold text-justify mt-4">Research</h1>
			<h1 className="font-medium text-justify">{props.text}</h1>

			<div className="flex flex-col w-1/3">
				<h1 className="font-semibold text-justify mt-4">
					Rate this investigator
				</h1>
				<PrettoSlider
                    
					step={0.5}
					className="mt-8"
					valueLabelDisplay="auto"
					aria-label="Pretto Slider"
					defaultValue={1}
					min={1}
					max={5}
				/>
			</div>
		</div>
	);
};

export default InvestigatorRating;
