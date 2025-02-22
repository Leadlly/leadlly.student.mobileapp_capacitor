import { TQuizAnswerProps } from "@/helpers/types";
import { getCookie } from "./cookie_actions";

export const saveDailyQuiz = async (data: {
  topic: { name: string };
  questions: TQuizAnswerProps[];
}) => {
  const token = await getCookie();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/quiz/save`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${token}`,
        },
        credentials: "include",
      }
    );

    const responseData = await res.json();

    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error in saving daily quiz answers: ${error.message}`);
    } else {
      throw new Error(
        "An unknown error occurred while saving daily quiz answers!"
      );
    }
  }
};

export const getDailyStreakQuestions = async () => {
  const token = await getCookie();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/questionbank/streakquestion`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${token}`,
        },
        credentials: "include",
        cache: "force-cache",
      }
    );

    const responseData = await res.json();

    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Error in fetching daily streak questions: ${error.message}`
      );
    } else {
      throw new Error(
        "An unknown error occurred while fetching daily streak questions!"
      );
    }
  }
};
