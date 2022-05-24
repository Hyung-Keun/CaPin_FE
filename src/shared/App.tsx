import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Alarm from "@pages/Alarm";
import Login from "@pages/Auth/Login";
import OAuth from "@pages/Auth/OAuth";
import Profile from "@pages/Auth/Profile";
import NotFound from "@pages/Error/NotFound";
import GroupList from "@pages/GroupList";
import MyPage from "@pages/MyPage";
import MyStudyGroups from "@pages/MyStudyGroups";
import PlaceSearch from "@pages/PlaceSearch";
import PostCode from "@pages/PostCode";
import Recommend from "@pages/Recommend";
import SpecificStudy from "@pages/SpecificStudy";
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
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mystudygroups" element={<MyStudyGroups />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/specificstudy" element={<SpecificStudy />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
      {/* </Frame> */}
    </React.Fragment>
  );
};

export default App;
