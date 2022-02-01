import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Profile from "./components/profile/Profile";
import Introduction from "./components/introduction/Introduction";
import Posts from "./components/home/posts/Posts";
import { get_Auth } from "./Firebase";
import ProfileView from "./components/profile/pages/profile/ProfileView";
import RequireAuth from "./components/auth/RequireAuth";
import { signOut } from "firebase/auth";
import WalletView from "./components/profile/pages/wallet/WalletView";
import DashboardView from "./components/profile/pages/dashboard/DashboardView";
import LoggedIn from "./components/auth/LoggedIn";
import RewardsView from "./components/profile/pages/rewards/RewardsView";
import TasksView from "./components/profile/pages/tasks/TasksView";
import FeedView from "./components/profile/pages/feed/FeedView";

function App() {
    const history = window.history;
    console.log(history);

    return (
        <div className="App">
            <Routes>
                <Route path="introduction" element={<Introduction />} />

                <Route
                    path="login"
                    element={
                        <LoggedIn>
                            <Login />
                        </LoggedIn>
                    }
                />
                <Route
                    path="signup"
                    element={
                        <LoggedIn>
                            <SignUp />
                        </LoggedIn>
                    }
                />

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
					<Route path="wallet" element={<p>{<WalletView />}</p>} />
					<Route path="feed" element={<p>{<FeedView />}</p>} />
					<Route path="missions" element={<p>Missions</p>} />
					<Route path="rewards" element={<p>{<RewardsView />}</p>} />
					<Route path="tasks" element={<p>{<TasksView />}</p>} />
					<Route path="leaderboard" element={<p>Leaderboard</p>} />
                </Route>

                <Route
					path="*"
					element={
						<div className="items-center w-screen h-screen flex flex-col justify-center bg-[#9dbccf]">
							<h1 className="text-9xl text-white font-bold mb-4">
								404
							</h1>
							<h1 className="text-6xl text-white font-medium mt-4">
								There is nothing here!
							</h1>
						</div>
					}
				/>
            </Routes>
            <button
                onClick={() => {
                    signOut(get_Auth);
                }}
            >
                LOGOUT
            </button>
        </div>
    );
}

export default App;
