"use client";

import { getUnrevisedTopics } from "@/actions/studyData_actions";
import InitialStudyDataPage from "./_components/InitialStudyDataPage";
import { TRevisionProps } from "@/helpers/types";
import { useEffect, useState } from "react";

const InitialStudyData = async () => {
  const [unrevisedTopics, setUnrevisedTopics] = useState<
    TRevisionProps[] | null
  >(null);

  useEffect(() => {
    const getUnrevisedTopicsData = async () => {
      const data = await getUnrevisedTopics();
      setUnrevisedTopics(data.data);
    };

    getUnrevisedTopicsData();
  }, []);

  return <InitialStudyDataPage unrevisedTopics={unrevisedTopics!} />;
};

export default InitialStudyData;
