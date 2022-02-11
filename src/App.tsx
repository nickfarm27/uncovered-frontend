import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Profile from "./components/profile/Profile";
import Introduction from "./components/introduction/Introduction";
import ProfileView from "./components/profile/pages/profile/ProfileView";
import RequireAuth from "./components/auth/RequireAuth";
import WalletView from "./components/profile/pages/wallet/WalletView";
import DashboardView from "./components/profile/pages/dashboard/DashboardView";
import LoggedIn from "./components/auth/LoggedIn";
import RewardsView from "./components/profile/pages/rewards/RewardsView";
import TasksView from "./components/profile/pages/tasks/TasksView";
import FeedView from "./components/profile/pages/feed/FeedView";
import UploadView from "./components/home/upload/UploadView";
import LeaderboardView from "./components/profile/pages/leaderboard/LeaderboardView";
import MissionsView from "./components/profile/pages/missions/MissionsView";
import PostDetails from "./components/home/posts/postDetails/PostDetails";
import UpgradeView from "./components/profile/pages/upgrade/UpgradeView";
import Review from "./components/profile/pages/tasks/Review";
import UserContext from "./store/user-context";
import UnverifiedView from "./components/home/unverified/UnverifiedView";
import VerifiedView from "./components/home/verified/VerifiedView";
import ReviewNews from "./components/home/posts/verifiers/InvestigatorView";
import InvestigatorView from "./components/home/posts/verifiers/InvestigatorView";
import JuryView from "./components/home/posts/verifiers/JuryView";

function App() {
	const history = window.history;
	console.log(history);
	const userCtx = useContext(UserContext);
	console.log(userCtx.user);

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
					<Route index element={<VerifiedView />} />
					<Route path="unverified" element={<UnverifiedView />} />
					<Route path="upload" element={<UploadView />} />
					<Route path=":postId" element={<PostDetails />} />
					<Route
						path=":postId/investigator"
						element={<InvestigatorView />}
					/>
					<Route path=":postId/jury" element={<JuryView />} />
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
					<Route path="wallet" element={<WalletView />} />
					<Route path="feed" element={<FeedView />} />
					<Route path="missions" element={<MissionsView />} />
					<Route path="rewards" element={<RewardsView />} />
					<Route path="tasks" element={<TasksView />} />
					<Route path="leaderboard" element={<LeaderboardView />} />
					<Route path="upgrade" element={<UpgradeView />} />
					<Route path=":taskId" element={<Review />} />
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
		</div>
	);
}

export default App;
