import React, { useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    User,
} from "firebase/auth";
import { get_Auth, get_Firestore } from "../Firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

type ContextState = {
    user: User | null;
    login: (email: string, password: string) => void;
    googleLogin: () => void;
    signUp: (email: string, password: string, username: string) => void;
    googleSignUp: () => void;
};

const AuthContext = React.createContext<ContextState>({
    user: null,
    login: () => {},
    googleLogin: () => {},
    signUp: () => {},
    googleSignUp: () => {},
});

type Props = { children: React.ReactNode };

export const AuthContextProvider = (props: Props) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const redirectUser = () => {
        const from = location.state ? (location.state as string) : "/";
        navigate(from, { replace: true, state: null });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(get_Auth, (currentUser) => {
            setCurrentUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });

        return unsubscribe;
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const user = await signInWithEmailAndPassword(
                get_Auth,
                email,
                password
            );
            setCurrentUser(user.user);
            // const from = location.state ? location.state as string : "/";
            // navigate(from, { replace: true, state: null });
            redirectUser();
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
            setCurrentUser(user);

            //? This gives you a Google Access Token.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;

            redirectUser();
        } catch (error) {
            console.log(error);
        }
    };

    const uploadUserData = async (user: User, username?: string) => {
        const email = user.email as string
        try {
            const docRef = await setDoc(
                doc(get_Firestore, "Users", user.uid),
                {
                    userName: username || email?.split("@")[0] + Date.now().toString().substring(0, 4),
                    email: email,
                    investigator: false,
                    userRating: 0,
                    onGoingTask: [],
                    missions: [],
                    experiencePoints: 0,
                    numberOfVerifiedNews: 0,
                    privateKey: "TEST",
                }
            );
            console.log("Document written", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const signUp = async (email: string, password: string, username: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(get_Auth, email, password)
            const user = userCredential.user
            setCurrentUser(user)
            
            await uploadUserData(user, username)
            
            redirectUser();
        } catch (error) {
            console.log(error);   
        }
    };

    const googleSignUp = async () => {
        const provider = new GoogleAuthProvider();
        const auth = get_Auth;

        try {
            const result = await signInWithPopup(auth, provider);

            // The signed-in user info.
            const user = result.user;
            setCurrentUser(user);
            await uploadUserData(user);

            redirectUser();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user: currentUser,
                login: login,
                googleLogin: googleLogin,
                signUp: signUp,
                googleSignUp: googleSignUp,
            }}
        >
            {!loading && props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
