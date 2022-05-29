import React, { useState } from "react";

import {
  Overview,
  UserSettings,
  UserStudyGroups,
  AlarmSettings,
} from "./components";
import {
  OVERVIEW,
  USER_SETTINGS,
  USER_STUDY_GROUPS,
  ALARM_SETTINGS,
} from "./constants";

const MyPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const goBack = () => setPageIndex(0);

  return (
    <main>
      {pageIndex === OVERVIEW && <Overview onClick={setPageIndex} />}
      {pageIndex === USER_SETTINGS && <UserSettings goBack={goBack} />}
      {pageIndex === USER_STUDY_GROUPS && <UserStudyGroups goBack={goBack} />}
      {pageIndex === ALARM_SETTINGS && <AlarmSettings goBack={goBack} />}
    </main>
  );
};

export default MyPage;
