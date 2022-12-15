import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/nav/Header";
import Home from "./Home";
import Profile from "./Profile";

const I18n: FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default I18n;
