"use client";

import { getUnrevisedTopics } from "@/actions/studyData_actions";
import ManageAccountPage from "./_components/ManageAccountPage";
import { useEffect, useState } from "react";
import { TRevisionProps } from "@/helpers/types";

const ManageAccount = async () => {
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

  return <ManageAccountPage unrevisedTopicsData={unrevisedTopics!} />;
};

export default ManageAccount;
