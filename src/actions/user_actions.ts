import {
  ForgotPasswordProps,
  ResetPasswordProps,
  SignUpDataProps,
  StudentPersonalInfoProps,
} from "@/helpers/types";
import { getCookie } from "./cookie_actions";
import { revalidateTag } from "next/cache";
import apiClient from "@/apiClient/apiClient";

export const signUpUser = async (data: SignUpDataProps) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
        cache: "no-store",
      }
    );

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error registering user: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while registering user!");
    }
  }
};

export const verifyUser = async (data: { otp: string; email: string }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/auth/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
        cache: "no-store",
      }
    );

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error verifying user: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while verifying user!");
    }
  }
};

export const resendOtp = async (email: string) => {
  try {
    const res = await apiClient.post("/api/auth/resend", { email });

    const data = res.data;
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error re-sending OTP: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while re-sending OTP!");
    }
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
        cache: "no-store",
      }
    );

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error signing in user: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while signing in user!");
    }
  }
};

export const forgotPassword = async (data: ForgotPasswordProps) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/auth/forgetpassword`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        cache: "no-store",
      }
    );

    const responseData = await res.json();
    return responseData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(
        `Error sending password resetting link: ${error.message}`
      );
    } else {
      throw new Error(
        "An unknown error occurred while sending password resetting link!"
      );
    }
  }
};

export const resetPassword = async (
  data: ResetPasswordProps,
  token: string
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/auth/resetpassword/${token}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        cache: "no-store",
      }
    );

    const responseData = await res.json();
    return responseData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error resetting password: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while resetting password!");
    }
  }
};

export const getUser = async () => {
  const token = await getCookie();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/auth/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${token}`,
        },
        credentials: "include",
      }
    );

    const data = await res.json();

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error in fetching logged in user: ${error.message}`);
    } else {
      throw new Error(
        "An unknown error occurred while fetching logged in user"
      );
    }
  }
};

export const studentPersonalInfo = async (data: StudentPersonalInfoProps) => {
  const token = await getCookie();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/user/profile/save`,
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error in saving student info: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while saving student info");
    }
  }
};

export const setTodaysVibe = async (data: { todaysVibe: string }) => {
  const token = await getCookie();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STUDENT_API_BASE_URL}/api/user/todaysVibe/save`,
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
    revalidateTag("userData");

    return responseData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error in saving student current mood: ${error.message}`);
    } else {
      throw new Error(
        "An unknown error occurred while saving student current mood!"
      );
    }
  }
};
