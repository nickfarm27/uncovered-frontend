import React from "react";
import Questions from "./Questions";
import Team from "./Team";
import Problems from "./Problems";
import Badges from "./Badges";
import Investigation from "./Investigation";
import FunWay from "./FunWay";
import WhatWeUse from "./WhatWeUse";
import Start from "./Start";

interface Props {}

const Introduction = (props: Props) => {
	return (
		<div>
			<Start />
			<WhatWeUse />
			<FunWay />
			<Investigation />
			<Badges />
			<Problems />
			<Team />
			<Questions />
		</div>
	);
};

export default Introduction;
