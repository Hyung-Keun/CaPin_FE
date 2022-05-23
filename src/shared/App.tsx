import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "@pages/Auth/Login";
import OAuth from "@pages/Auth/OAuth";
import Profile from "@pages/Auth/Profile";
import NotFound from "@pages/Error/NotFound";
import GroupList from "@pages/GroupList";
<<<<<<< HEAD
import KakaoMap from "@pages/KakaoMap";
import PlaceSearch from "@pages/PlaceSearch";
import PostCode from "@pages/PostCode";
=======
import Recommend from "@pages/Recommend";
>>>>>>> 3b5abff146e81410ddc7d6e8e815841c26b23cb2
import StudyOpen from "@pages/StudyOpen";

import Frame from "./Frame";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      {/* <Frame> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GroupList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/oauth" element={<OAuth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/studyopen" element={<StudyOpen />} />
          <Route path="/placesearch" element={<PlaceSearch />} />
          <Route path="/postcode" element={<PostCode />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
      {/* </Frame> */}
    </React.Fragment>
  );
};

export default App;
