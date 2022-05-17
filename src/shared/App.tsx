import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "@pages/Auth/Login";
import OAuth from "@pages/Auth/OAuth";
import Profile from "@pages/Auth/Profile";
import NotFound from "@pages/Error/NotFound";
import Home from "@pages/Home";
import KakaoMap from "@pages/KakaoMap";

import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/oauth" element={<OAuth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/map" element={<KakaoMap />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
