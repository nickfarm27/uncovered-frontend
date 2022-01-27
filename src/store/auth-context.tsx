import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth";
import { get_Auth } from "../Firebase";

type ContextState = {
    user: User | null
    num: number
    login: (email: string, password: string) => void
    increase: () => void
}

// TODO: add an 'is loading'

const AuthContext = React.createContext<ContextState>({
    user: null,
    num: 1,
    login: (email: string, password: string) => {},
    increase: () => {}
});

type Props = { children: React.ReactNode };

export const AuthContextProvider = (props: Props) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [number, setNumber] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(get_Auth, (currentUser) => {
            setCurrentUser(currentUser);
            setLoading(false)
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
          console.log(user);
        } catch (error) {
          console.log(error);
        }
      };

    const increase = () => {
        setNumber(prevValue => prevValue + 1)
    }
    
    return (
        <AuthContext.Provider value={{user: currentUser, login: login, num: number, increase: increase}}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;