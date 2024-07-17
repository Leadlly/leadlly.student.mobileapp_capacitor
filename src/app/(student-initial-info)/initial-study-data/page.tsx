"use client";

import { getUnrevisedTopics } from "@/actions/studyData_actions";
import InitialStudyDataPage from "./_components/InitialStudyDataPage";
import { TRevisionProps } from "@/helpers/types";
import { useEffect, useState } from "react";

const InitialStudyData = () => {
  const [unrevisedTopics, setUnrevisedTopics] = useState<TRevisionProps[]>([]);

  useEffect(() => {
    const getUnrevisedTopicsData = async () => {
      const data = await getUnrevisedTopics();
      setUnrevisedTopics((prev) => [...prev, data.data]);
    };

    getUnrevisedTopicsData();
  }, []);

  return <InitialStudyDataPage unrevisedTopics={unrevisedTopics!} />;
};

export default InitialStudyData;
