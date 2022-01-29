import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { get_Auth } from "../../Firebase";

type Props = { children: JSX.Element };

const LoggedIn = (props: Props) => {
    const auth = get_Auth;
    const location = useLocation();

    if (auth.currentUser)
        return (
            <Navigate
                to={location.state ? (location.state as string) : "/"}
                replace={true}
            />
        );

    return props.children;
};

export default LoggedIn;
