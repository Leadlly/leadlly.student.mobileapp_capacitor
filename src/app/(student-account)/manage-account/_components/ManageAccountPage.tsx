"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import AccountUserProfile from "./AccountUserProfile";
import LogoutButton from "@/components/shared/LogoutButton";
import { manageAccountTabs } from "@/helpers/constants";
import { MotionDiv } from "@/components/shared/MotionDiv";
import { cn } from "@/lib/utils";
import AccountPersonalInfo from "./AccountPersonalInfo";
import AccountStudyProgress from "./AccountStudyProgress";
import { TRevisionProps } from "@/helpers/types";

const ManageAccountPage = ({
  unrevisedTopicsData,
}: {
  unrevisedTopicsData: TRevisionProps[];
}) => {
  const searchParams = useSearchParams();
  const activeManageAccountTab = searchParams.get("tab") ?? "personal-info";

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-6 px-4 pt-2">
        <Link
          href={"/"}
          className="border rounded-md w-8 h-8 flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h3 className="text-2xl font-semibold">Manage Account</h3>
      </div>

      <section className="my-6 bg-primary/15 text-center lg:text-left lg:px-16 py-4 lg:py-8 flex flex-col lg:flex-row items-center justify-between">
        <AccountUserProfile />

        <div className="flex items-center gap-10 mt-5">
          <LogoutButton />
        </div>
      </section>

      <div className="border-b-2 px-2 lg:px-16">
        <ul className="flex items-center justify-center lg:justify-normal gap-3 lg:gap-10 overflow-x-auto no-scrollbar">
          {manageAccountTabs.map((tab) => (
            <Link
              key={tab.id}
              href={`/manage-account?tab=${tab.id}`}
              className="relative pb-1">
              {activeManageAccountTab === tab.id && (
                <MotionDiv
                  layoutId="active_manage_account_tab"
                  transition={{
                    type: "spring",
                    duration: 0.6,
                  }}
                  className="absolute rounded h-1 bg-primary inset-x-0 bottom-0"
                />
              )}
              <li
                className={cn(
                  "flex items-center justify-between w-full capitalize text-[17px] md:text-2xl font-medium px-3 text-black whitespace-nowrap",
                  activeManageAccountTab === tab.id
                    ? "text-primary"
                    : "text-black"
                )}>
                {tab.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex-1 px-2 lg:px-16 py-6">
        {activeManageAccountTab === "personal-info" && (
          <>
            <AccountPersonalInfo />
          </>
        )}

        {activeManageAccountTab === "study-progress" && (
          <>
            <AccountStudyProgress unrevisedTopics={unrevisedTopicsData} />
          </>
        )}

        {/* {activeManageAccountTab === "subject-overview" && (
          <>
            <AccountSubjectOverview />
          </>
        )} */}

        {/* {activeManageAccountTab === "your-mentor" && (
          <>
            <AccountMentorInfo />
          </>
        )} */}
      </div>
    </div>
  );
};

export default ManageAccountPage;
