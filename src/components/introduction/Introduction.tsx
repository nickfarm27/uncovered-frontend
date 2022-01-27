import React from "react";
import Questions from "./Questions";
import Team from "./Team";
import Problems from "./Problems";
import Investigation from "./Investigation";
import FunWay from "./FunWay";
import WhatWeUse from "./WhatWeUse";
import Start from "./Start";
import EarnBadges from "./EarnBadges";

interface Props {}

const Introduction = (props: Props) => {
	return (
		<div>
			<Start />
			<WhatWeUse />
			<FunWay />
			<Investigation />
			<EarnBadges />
			<Problems />
			<Team />
			<Questions />
		</div>
	);
};

export default Introduction;
