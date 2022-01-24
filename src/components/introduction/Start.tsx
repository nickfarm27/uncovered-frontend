import React from "react";

interface Props {}

const Start = (props: Props) => {
	return (
		<div className="flex flex-col justify-center pt-28 pl-12 box-border bg-white h-screen">
			<h1 className="text-6xl font-bold">Uncovered</h1>
			<h1 className="pt-12 text-3xl leading-loose">
				A platform allowing a community to identify news genuinity.{" "}
				<br /> Read and write reviews for every possible news found on
				Twitter. <br /> Keep news honest. Look for credible news online.
			</h1>

			<button className="mt-24 rounded-full w-80 font-bold py-2 px-4 bg-sky-500 text-white">
				Get Started!
			</button>
		</div>
	);
};

export default Start;
