import React from "react";
import Investigator from "./Investigator";
import Jury from "./Jury";

type Props = {};

const UpgradeView = (props: Props) => {
	const investigator = true;

	return <div>{investigator ? <Jury /> : <Investigator />}</div>;
};
export default UpgradeView;
