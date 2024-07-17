"use client";

import { getUnrevisedTopics } from "@/actions/studyData_actions";
import ManageAccountPage from "./_components/ManageAccountPage";
import { useEffect, useState } from "react";
import { TRevisionProps } from "@/helpers/types";

const ManageAccount = () => {
  const [unrevisedTopics, setUnrevisedTopics] = useState<TRevisionProps[]>([]);

  useEffect(() => {
    const getUnrevisedTopicsData = async () => {
      const data = await getUnrevisedTopics();
      setUnrevisedTopics((prev) => [...prev, data.data]);
    };

    getUnrevisedTopicsData();
  }, []);

  return <ManageAccountPage unrevisedTopicsData={unrevisedTopics!} />;
};

export default ManageAccount;
