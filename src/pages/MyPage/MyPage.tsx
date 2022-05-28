import React, { useState } from "react";

import CurrentStudyGroups from "./CurrentStudyGroups";
import Overview from "./Overview";
import UserSettings from "./UserSettings";

const OVERVIEW = 0;
const USER_SETTINGS = 1;
const USER_STUDY_GROUPS = 2;

const MyPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const goBack = () => setPageIndex(0);

  return (
    <>
      {pageIndex === OVERVIEW && <Overview />}
      {pageIndex === USER_SETTINGS && <UserSettings />}
      {pageIndex === USER_STUDY_GROUPS && (
        <CurrentStudyGroups onBackButtonClick={goBack} />
      )}
    </>
  );
};

export default MyPage;
