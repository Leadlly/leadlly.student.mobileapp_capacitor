"use client";

import { useAppSelector } from "@/redux/hooks";
import { usePathname, useRouter } from "next/navigation";
import { Preferences } from "@capacitor/preferences";
import { useCallback, useEffect, useState } from "react";
import { UserDataProps } from "@/helpers/types";
import { getUser } from "@/actions/user_actions";
import { useAuth } from "@/contexts/AuthProviderContext";

type AuthFunctionsProps = {
  token: string | null;
  user: UserDataProps | null;
  path: string;
  isPublicPath: boolean;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { token, user } = useAuth();
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isPublicPath = [
      "/login",
      "/signup",
      "/verify",
      "/forgot-password",
      "/resetpassword",
    ].some((publicPath) => path.startsWith(publicPath));

    const middlewareChecks = [
      checkAuthRedirect,
      checkInitialInfo,
      checkFreeTrialActivation,
      checkInitialStudyData,
    ];

    for (const check of middlewareChecks) {
      const redirectPath = check({ token, user, path, isPublicPath });
      if (redirectPath) {
        router.replace(redirectPath);
        break;
      }
    }
  }, [token, path, router, user]);

  return children;
};

function checkAuthRedirect({ token, path, isPublicPath }: AuthFunctionsProps) {
  if (token && isPublicPath) return "/";
  if (!token && !isPublicPath) return "/login";
  return null;
}

// initial personal info middleware
function checkInitialInfo({
  token,
  user,
  path,
  isPublicPath,
}: AuthFunctionsProps) {
  if (token && !isPublicPath) {
    const hasSubmittedInitialInfo = !!user?.academic.standard;
    if (!hasSubmittedInitialInfo && path !== "/initial-info")
      return "/initial-info";
    if (hasSubmittedInitialInfo && path === "/initial-info") return "/";
  }
  return null;
}

// free trial activation middleware
function checkFreeTrialActivation({
  token,
  user,
  path,
  isPublicPath,
}: AuthFunctionsProps) {
  if (token && !isPublicPath && path !== "/initial-info") {
    const isSubscribed = !!user?.freeTrial.active;
    if (!isSubscribed && path !== "/trial-subscription")
      return "/trial-subscription";
    if (isSubscribed && path === "/trial-subscription") return "/";
  }
  return null;
}

// initial study data middleware
function checkInitialStudyData({
  token,
  user,
  path,
  isPublicPath,
}: AuthFunctionsProps) {
  if (
    token &&
    !isPublicPath &&
    path !== "/trial-subscription" &&
    path !== "/initial-info"
  ) {
    const isPlanner = user?.planner === true;
    if (!isPlanner && path !== "/initial-study-data")
      return "/initial-study-data";
    if (isPlanner && path === "/initial-study-data") return "/";
  }
  return null;
}

export default AuthProvider;
