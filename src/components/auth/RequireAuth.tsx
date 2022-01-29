import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { get_Auth } from "../../Firebase";

type Props = { children: JSX.Element };

const RequireAuth = (props: Props) => {
    const auth = get_Auth;
    const location = useLocation();

    if (!auth.currentUser) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return (
            <Navigate to="/login" state={location.pathname} replace={true} />
        );
    }

    return props.children;
};

export default RequireAuth;
