import React, { useContext } from "react";
import UserContext from "../../../../store/user-context";
import Investigator from "./Investigator";
import Jury from "./Jury";

type Props = {};

const UpgradeView = (props: Props) => {
	const userCtx = useContext(UserContext);

	return <div>{userCtx.user.role === "INVESTIGATOR" ? <Jury /> : <Investigator />}</div>;
};
export default UpgradeView;
