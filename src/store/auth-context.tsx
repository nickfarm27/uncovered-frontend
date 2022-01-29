import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, User } from "firebase/auth";
import { get_Auth } from "../Firebase";
import { useLocation, useNavigate } from "react-router-dom";

type ContextState = {
    user: User | null
    login: (email: string, password: string) => void
    googleLogin: () => void
}

const AuthContext = React.createContext<ContextState>({
    user: null,
    login: (email: string, password: string) => {},
    googleLogin: () => {}
});

type Props = { children: React.ReactNode };

export const AuthContextProvider = (props: Props) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
	const navigate = useNavigate();

    const redirectUser = () => {
        const from = location.state ? location.state as string : "/";
        navigate(from, { replace: true, state: null });
    }

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
            // const from = location.state ? location.state as string : "/";
		    // navigate(from, { replace: true, state: null });
            redirectUser()
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    const googleLogin = async () => {
        const provider = new GoogleAuthProvider();
		const auth = get_Auth;

        try {
            const result = await signInWithPopup(auth, provider);
    
            // The signed-in user info.
            const user = result.user;
            setCurrentUser(user)
            
            //? This gives you a Google Access Token.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            
            redirectUser()
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <AuthContext.Provider value={{user: currentUser, login: login, googleLogin: googleLogin}}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;