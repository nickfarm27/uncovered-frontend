import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Profile from "./components/profile/Profile";
import Introduction from "./components/introduction/Introduction";
import Posts from "./components/home/posts/Posts";
import "./App.css";
import ProfileView from "./components/profile/pages/profile/ProfileView";
import WalletView from "./components/profile/pages/wallet/WalletView";
import DashboardView from "./components/profile/pages/dashboard/DashboardView";


function App() {
    // const checkUID = () => {
    // 	console.log(get_Auth.currentUser?.email);
    // };

    // const auth = get_Auth;

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<Posts />} />
                        <Route path="unverified" element={<p>Unverified</p>} />
                        <Route path="upload" element={<p>Upload Link</p>} />
                    </Route>
                    <Route path="introduction" element={<Introduction />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="profile" element={<Profile />}>
                        <Route index element={<p>{<DashboardView />}</p>} />
                        <Route path="view" element={<p>{<ProfileView />}</p>} />
                        <Route path="edit" element={<p>Edit</p>} />
                        <Route path="wallet" element={<p>{<WalletView/>}</p>} />
                        <Route path="feed" element={<p>My Feed</p>} />
                        <Route path="missions" element={<p>Missions</p>} />
                        <Route path="tasks" element={<p>Tasks</p>} />
                        <Route path="leaderboard" element={<p>Leaderboard</p>} />
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                            </main>
                        }
                    />

                    {/* <Route path="/menu">
                        <Menu />
                    </Route>

                    <Route path="/leaderboard">
                        <Leaderboard />
                    </Route>

                    <Route path="/mission">
                        <Mission />
                    </Route> */}
                </Routes>

                {/* <button
					className="font-bold py-2 px-4 rounded bg-blue-500 text-white"
					onClick={checkUID}
				>
					Check Current Email
				</button> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
