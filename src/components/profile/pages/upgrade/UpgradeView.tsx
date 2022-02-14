import React, { useContext } from "react";
import UserContext from "../../../../store/user-context";
import Investigator from "./Investigator";
import Jury from "./Jury";

type Props = {};

const UpgradeView = (props: Props) => {
	const userCtx = useContext(UserContext);

	let investigator = true;

	if (userCtx.user.role === "NORMAL") {
		investigator = false;
	} else if (userCtx.user.role === "INVESTIGATOR") {
		investigator = true;
	}

	return <div>{investigator ? <Jury /> : <Investigator />}</div>;
};
export default UpgradeView;
