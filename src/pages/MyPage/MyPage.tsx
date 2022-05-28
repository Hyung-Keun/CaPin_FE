import React, { useState } from "react";

import { OVERVIEW, USER_SETTINGS, USER_STUDY_GROUPS } from "./constants";
import Overview from "./Overview";
import UserSettings from "./UserSettings";
import UserStudyGroups from "./UserStudyGroups";

const MyPage = () => {
  const [pageIndex, setPageIndex] = useState(2);
  const goBack = () => setPageIndex(0);

  return (
    <main>
      {pageIndex === OVERVIEW && <Overview onClick={setPageIndex} />}
      {pageIndex === USER_SETTINGS && <UserSettings goBack={goBack} />}
      {pageIndex === USER_STUDY_GROUPS && <UserStudyGroups goBack={goBack} />}
    </main>
  );
};

export default MyPage;
