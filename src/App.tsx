import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Profile from "./components/profile/Profile";
import Introduction from "./components/introduction/Introduction";
import Posts from "./components/home/posts/Posts";
import { get_Auth } from "./Firebase";
import "./App.css";
import ProfileView from "./components/profile/pages/profile/ProfileView";
import RequireAuth from "./components/auth/RequireAuth";
import AuthContext, { AuthContextProvider } from "./store/auth-context";
import { signOut } from "firebase/auth";
import WalletView from "./components/profile/pages/wallet/WalletView";
import DashboardView from "./components/profile/pages/dashboard/DashboardView";


function App() {
    const [auth, setAuth] = useState(get_Auth.currentUser);
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    return (
        <div className="App">
                {/* {authCtx.user?.email ? authCtx.user.email : "NOTHING"}
                {authCtx.num} */}
                <Routes>
                    <Route path="introduction" element={<Introduction />} />

                    <Route path="login" element={<Login setAuth={setAuth} />} />
                    <Route path="signup" element={<SignUp />} />

                    <Route
                        path="/"
                        element={
                            <RequireAuth>
                                <Home />
                            </RequireAuth>
                        }
                    >
                        <Route index element={<Posts />} />
                        <Route path="unverified" element={<p>Unverified</p>} />
                        <Route path="upload" element={<p>Upload Link</p>} />
                    </Route>

                    <Route
                        path="profile"
                        element={
                            <RequireAuth>
                                <Profile />
                            </RequireAuth>
                        }
                    >
                        <Route index element={<DashboardView />} />
                        <Route path="view" element={<ProfileView />} />
                        <Route path="edit" element={<p>Edit</p>} />
                        <Route path="wallet" element={<p>{<WalletView/>}</p>} />
                        <Route path="feed" element={<p>My Feed</p>} />
                        <Route path="missions" element={<p>Missions</p>} />
                        <Route path="tasks" element={<p>Tasks</p>} />
                        <Route
                            path="leaderboard"
                            element={<p>Leaderboard</p>}
                        />
                    </Route>

                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p onClick={authCtx.increase}>There's nothing here!</p>
                                <button onClick={authCtx.increase}>INCREASE</button>
                            </main>
                        }
                    />
                </Routes>
                <button onClick={() => {signOut(get_Auth)}}>LOGOUT</button>
        </div>
    );
}

export default App;
