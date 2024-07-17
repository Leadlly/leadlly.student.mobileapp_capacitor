import { getCookie } from "./cookie_actions";

export const getPlanner = async () => {
  try {
    const token = await getCookie();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/planner/get`,
      {
        method: "GET",
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
      throw new Error(`Error fetching planner data: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while fetching planner data!");
    }
  }
};

export const createPlanner = async () => {
  try {
    const token = await getCookie();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/planner/create`,
      {
        method: "GET",
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
      throw new Error(`Error creating planner: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while creating planner!");
    }
  }
};

export const updatePlanner = async () => {
  try {
    const token = await getCookie();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/planner/update`,
      {
        method: "GET",
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
      throw new Error(`Error creating planner: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while creating planner!");
    }
  }
};
