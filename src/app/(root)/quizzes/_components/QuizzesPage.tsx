"use client";

import { Header } from "@/components";
import { MotionDiv } from "@/components/shared/MotionDiv";
import { quizPageTabs } from "@/helpers/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import Unattempted from "./Unattempted";
import Attempted from "./Attempted";

const QuizzesPage = () => {
  const searchParams = useSearchParams();
  const activeQuizTab = searchParams.get("tab") ?? "unattempted";
  return (
    <div className="flex flex-col justify-start gap-3 md:gap-6 h-full">
      <Header
        title="Quizzes"
        titleClassName="text-xl md:text-3xl lg:text-page-title"
      />

      <div className="flex flex-col justify-start gap-4">
        <ul className="flex justify-center w-full items-center bg-primary/10 rounded-md md:rounded-3xl overflow-hidden shadow-md">
          {quizPageTabs.map((tab) => (
            <Link
              key={tab.id}
              href={`/quizzes?tab=${tab.id}`}
              className="relative max-w-max mx-auto w-full py-3 px-4 md:px-8">
              {activeQuizTab === tab.id && (
                <MotionDiv
                  layoutId="active_quiz_tab"
                  transition={{
                    type: "spring",
                    duration: 0.6,
                  }}
                  className="absolute rounded h-1 bg-primary inset-x-0 bottom-0"
                />
              )}
              <li
                className={cn(
                  "flex items-center justify-between w-full capitalize text-base md:text-xl text-black",
                  activeQuizTab === tab.id ? "text-primary" : "text-black"
                )}>
                {tab.title}
              </li>
            </Link>
          ))}
        </ul>

        <div className="flex flex-col max-h-full">
          {activeQuizTab === "unattempted" && <Unattempted />}
          {activeQuizTab === "attempted" && <Attempted />}
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;
