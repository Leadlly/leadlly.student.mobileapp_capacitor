"use client";

import { Header } from "@/components";

import ClientWrapper from "./_components/ClientWrapper";

import { DataProps, PlannerDataProps } from "@/helpers/types";

import { getPlanner } from "@/actions/planner_actions";
import { useEffect, useState } from "react";

const Planner = async () => {
  const [plannerData, setPlannerData] = useState<PlannerDataProps | null>(null);

  useEffect(() => {
    const getPlannerData = async () => {
      const { data }: DataProps = await getPlanner();
      setPlannerData(data);
    };

    getPlannerData();
  }, []);

  return (
    <div className="flex flex-col justify-start gap-4 h-full">
      <Header
        title="Planner"
        titleClassName="text-2xl md:text-3xl lg:text-page-title"
      />

      <ClientWrapper data={plannerData!} />
    </div>
  );
};

export default Planner;
