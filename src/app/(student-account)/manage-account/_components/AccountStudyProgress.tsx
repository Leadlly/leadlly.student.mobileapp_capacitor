"use client";

import { useEffect, useState } from "react";

import AccountSubjectForm from "./AccountSubjectForm";

import { TabContent, TabNavItem } from "@/components";

import { EllipsisVertical } from "lucide-react";
import AccountChaptersList from "./AccountChaptersList";
import { userSubjects } from "@/helpers/constants";
// import { getSubjectChapters } from "@/actions/question_actions";
import { toast } from "sonner";

const AccountStudyProgress = () => {
  const [activeTab, setActiveTab] = useState("maths");
  const [activeTabChapters, setActiveTabChapters] = useState([]);

  // useEffect(() => {
  //   const chapters = async () => {
  //     try {
  //       const data = await getSubjectChapters(activeTab, 11);
  //       setActiveTabChapters(data.chapters);
  //     } catch (error: any) {
  //       toast.error("Unable to fetch chapters!", {
  //         description: error.message,
  //       });
  //     }
  //   };
  //   chapters();
  // }, [activeTab]);

  return (
    <section className="border rounded-xl h-full shadow-[0_0_28.6px_-4px_rgba(150,84,244,0.16)] flex flex-col">
      <div className="bg-primary/15 px-3 lg:px-7 py-2 flex items-center justify-between rounded-t-xl">
        <h3 className="text-lg lg:text-2xl font-semibold">
          Student Study Feedback
        </h3>

        <div className="flex items-center gap-x-5">
          <ul className="flex items-center justify-between p-1 bg-white rounded-md">
            {userSubjects.map((subject) => (
              <TabNavItem
                key={subject.id}
                id={subject.id}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                title={subject.label}
                layoutIdPrefix="account_subject_progress"
                className="px-2 lg:px-4"
                titleClassName="text-sm lg:text-lg font-medium"
                activeTabClassName="h-full w-full inset-0"
              />
            ))}
          </ul>

          <EllipsisVertical className="w-7 h-7 hidden lg:block" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom__scrollbar">
        <TabContent id="maths" activeTab={activeTab}>
          <AccountSubjectForm
            subjectChapters={activeTabChapters}
            activeSubject={"maths"}
          />
          <AccountChaptersList />
        </TabContent>
        <TabContent id="physics" activeTab={activeTab}>
          <AccountSubjectForm
            subjectChapters={activeTabChapters}
            activeSubject={"physics"}
          />
          <AccountChaptersList />
        </TabContent>
        <TabContent id="chemistry" activeTab={activeTab}>
          <AccountSubjectForm
            subjectChapters={activeTabChapters}
            activeSubject={"chemistry"}
          />
          <AccountChaptersList />
        </TabContent>
      </div>
    </section>
  );
};

export default AccountStudyProgress;
