import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AreaSelection from "@pages/AreaSelection";
import Login from "@pages/Auth/Login";
import OAuth from "@pages/Auth/OAuth";
import NotFound from "@pages/Error/NotFound";
import Explore from "@pages/Explore/Explore";
import GroupList from "@pages/GroupList/GroupList";
import Profile from "@pages/MyPage/components/UserSettings";
import MyPage from "@pages/MyPage/MyPage";
import PlaceSearch from "@pages/PlaceSearch";
import PostCode from "@pages/PostCode";
import Recommend from "@pages/Recommend";
import SpecificStudy from "@pages/SpecificStudy";
import StudyOpen from "@pages/StudyOpen";

import Auth from "./Auth";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/oauth" element={<OAuth />} />
          <Route path="/grouplist" element={Auth(<GroupList />)} />
          <Route path="/explore" element={Auth(<Explore />)} />
          <Route path="/profile" element={Auth(<Profile />)} />
          <Route path="/recommend" element={Auth(<Recommend />)} />
          <Route path="/studyopen" element={Auth(<StudyOpen />)} />
          <Route path="/placesearch/:id" element={Auth(<PlaceSearch />)} />
          <Route path="/postcode" element={Auth(<PostCode />)} />
          <Route path="/mypage" element={Auth(<MyPage />)} />
          <Route path="/specificstudy/:id" element={Auth(<SpecificStudy />)} />
          <Route path="/areaselection" element={Auth(<AreaSelection />)} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
