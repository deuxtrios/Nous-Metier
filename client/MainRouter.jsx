import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import FindJobs from "./src/findJobs";
import About from "./src/about";
import Contact from "./src/contact";
import SignIn from "./src/signIn";
import SignUp from "./src/signUp";
import Dashboard from "./src/dashboard";
import MyApplications from "./src/myApplication";
import Profile from "./src/myProfile";
import PostJob from "./src/postJob";

const MainRouter = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<FindJobs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/myApplication" element={<MyApplications />} />
      <Route path="/myProfile" element={<Profile />} />
      <Route path="/postJob" element={<PostJob />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);

export default MainRouter;