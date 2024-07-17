import { getCookie } from "./cookie_actions";

export const buySubscription = async (duration: string) => {
  try {
    const token = await getCookie();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/subscribe/create?duration=${duration}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        cache: "no-store",
      }
    );

    const data = await res.json();

    return data.subscription;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error buying subscription: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while buying subscription");
    }
  }
};

export const getFreeTrialActive = async () => {
  try {
    const token = await getCookie();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/subscribe/freetrial`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        cache: "no-store",
      }
    );

    const data = await res.json();

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error activating free trial: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while activating free trial!");
    }
  }
};
