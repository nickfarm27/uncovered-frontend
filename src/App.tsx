import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Profile from "./components/profile/Profile";
import Introduction from "./components/introduction/Introduction";
import "./App.css";


function App() {
    // const checkUID = () => {
    // 	console.log(get_Auth.currentUser?.email);
    // };

    // const auth = get_Auth;

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="introduction" element={<Introduction />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="profile" element={<Profile />} />

                    {/* <Route path="/login">
                        <LogIn />
                        <br />
						<GoogleSignIn />
						<br />
						<TwitterSignIn />
                    </Route>

                    <Route path="/signup">
                        <SignUp />
                        <br />
                        <GoogleSignUp />
                        <br />
                        <TwitterSignUp />
                    </Route>

                    <Route path="/menu">
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
