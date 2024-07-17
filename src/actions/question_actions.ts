import { getCookie } from "./cookie_actions";

//====== Fetching Chapters ======//
export const getSubjectChapters = async (
  subject: string | string[],
  standard: number
) => {
  try {
    const token = await getCookie();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/questionbank/chapter?subjectName=${subject}&standard=${standard}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );

    const data = await res.json();

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error in fetching chapters: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while fetching chapters");
    }
  }
};

//====== Fetching Topics ======//
export const getChapterTopics = async (
  subject: string | string[],
  chapterName: string,
  standard: number
) => {
  try {
    const token = await getCookie();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/questionbank/topic?subjectName=${subject}&chapterName=${chapterName}&standard=${standard}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );

    const data = await res.json();

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error in fetching chapters: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while fetching chapters");
    }
  }
};
