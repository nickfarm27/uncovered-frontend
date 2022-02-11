import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import AuthContext from "./auth-context";

type ContextState = {
    user: any;
};

const UserContext = React.createContext<ContextState>({
    user: null,
});

type Props = { children: React.ReactNode };

export const UserContextProvider = (props: Props) => {
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    const authCtx = useContext(AuthContext)

    const getUserInfo = useCallback(
        async () => {
            if (authCtx.user) {
                try {
                    const response = await axios.get(`http://localhost:3030/user/${authCtx.user.uid}`)
                    if (response.data.user) {
                        setCurrentUser(response.data.user)
                        console.log("USER IS SET");
                    } else {
                        console.log("USER IS NULL");
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        },
        [authCtx.user],
    )

    useEffect(() => {
        getUserInfo()
        setLoading(false)
    }, [getUserInfo]);

    return (
        <UserContext.Provider
            value={{
                user: currentUser,
            }}
        >
            {!loading && props.children}
        </UserContext.Provider>
    );
};

export default UserContext;
