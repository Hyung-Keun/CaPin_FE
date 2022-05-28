import React, { useState } from "react";

import Overview from "./Overview";
import UserSettings from "./UserSettings";
import UserStudyGroups from "./UserStudyGroups";

const OVERVIEW = 0;
const USER_SETTINGS = 1;
const USER_STUDY_GROUPS = 2;

const MyPage = () => {
  const [pageIndex, setPageIndex] = useState(2);
  const goBack = () => setPageIndex(0);

  return (
    <>
      {pageIndex === OVERVIEW && <Overview />}
      {pageIndex === USER_SETTINGS && <UserSettings />}
      {pageIndex === USER_STUDY_GROUPS && (
        <UserStudyGroups onBackButtonClick={goBack} />
      )}
    </>
  );
};

export default MyPage;
