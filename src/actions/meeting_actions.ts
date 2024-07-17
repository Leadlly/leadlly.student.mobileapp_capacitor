import { getCookie } from "./cookie_actions";

type DataProps = {
  date: Date;
  time: string;
  message: string;
};

export const requestMeeting = async (data: DataProps) => {
  try {
    const token = await getCookie();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/meeting/request`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );

    const responseData = await res.json();

    return responseData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error in requesting a meeting: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while requesting a meeting!");
    }
  }
};

export const getMeetings = async () => {
  try {
    const token = await getCookie();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/meeting/get`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );

    const responseData = await res.json();

    return responseData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error in fetching meetings: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while fetching meetings!");
    }
  }
};
