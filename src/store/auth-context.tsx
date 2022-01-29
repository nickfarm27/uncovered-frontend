import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth";
import { get_Auth } from "../Firebase";
import { useLocation, useNavigate } from "react-router-dom";

type ContextState = {
    user: User | null
    login: (email: string, password: string) => void
}

const AuthContext = React.createContext<ContextState>({
    user: null,
    login: (email: string, password: string) => {},
});

type Props = { children: React.ReactNode };

export const AuthContextProvider = (props: Props) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
	const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(get_Auth, (currentUser) => {
            setCurrentUser(currentUser);
            setLoading(false)
            console.log(currentUser);
        });
        
        return unsubscribe
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const user = await signInWithEmailAndPassword(
                get_Auth,
                email,
                password
            );
            setCurrentUser(user.user)
            const from = location.state ? location.state as string : "/";
		    navigate(from, { replace: true, state: null });
            
            console.log(user);
        } catch (error) {
            console.log(error);
        }
      };
    
    return (
        <AuthContext.Provider value={{user: currentUser, login: login}}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;