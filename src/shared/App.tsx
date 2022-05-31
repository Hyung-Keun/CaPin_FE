import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AreaSelection from "@pages/AreaSelection";
import Login from "@pages/Auth/Login";
import OAuth from "@pages/Auth/OAuth";
import Profile from "@pages/Auth/Profile";
import NotFound from "@pages/Error/NotFound";
import Explore from "@pages/Explore/Explore";
import GroupList from "@pages/GroupList";
import MyPage from "@pages/MyPage/MyPage";
import PlaceSearch from "@pages/PlaceSearch";
import PostCode from "@pages/PostCode";
import Recommend from "@pages/Recommend";
import SpecificStudy from "@pages/SpecificStudy";
import StudyOpen from "@pages/StudyOpen";

import CommonModal from "@components/CommonModal";
import Loading from "@components/Loading";
import PracticeModal from "@components/PracticeModal";
import Start from "@components/Start";

import ProfileSetting from "../pages/Auth/ProfileSetting";
import Frame from "./Frame";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      {/* <Frame> */}
      <BrowserRouter>
        <Routes>
          <Route path="/profilesetting" element={<ProfileSetting />} />
          <Route path="/practicemodal" element={<PracticeModal />} />
          <Route path="/CommonModal" element={<CommonModal />} />
          <Route path="/start" element={<Start />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/" element={<GroupList />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/oauth" element={<OAuth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/studyopen" element={<StudyOpen />} />
          <Route path="/placesearch" element={<PlaceSearch />} />
          <Route path="/postcode" element={<PostCode />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/specificstudy/:id" element={<SpecificStudy />} />
          <Route path="/areaselection" element={<AreaSelection />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
      {/* </Frame> */}
    </React.Fragment>
  );
};

export default App;
