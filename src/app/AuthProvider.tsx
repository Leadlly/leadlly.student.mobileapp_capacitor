"use client";

import { useAppSelector } from "@/redux/hooks";
import { usePathname, useRouter } from "next/navigation";
import { Preferences } from "@capacitor/preferences";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const path = usePathname();
  const router = useRouter();
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    const getToken = async () => {
      const token = await Preferences.get({ key: "token" });
      console.log(token);
      setToken(token.value);
    };

    getToken();
  }, []);

  useEffect(() => {
    const isPublicPath =
      path.startsWith("/login") ||
      path.startsWith("/signup") ||
      path.startsWith("/verify") ||
      path.startsWith("/forgot-password") ||
      path.startsWith("/resetpassword");

    if (token && isPublicPath) {
      router.replace("/");
    }

    if (!token && !isPublicPath) {
      router.replace("/login");
    }

    // initial personal info middleware
    if (token && !isPublicPath) {
      const hasSubmittedInitialInfo = !!user?.academic.standard;

      if (!hasSubmittedInitialInfo && path !== "/initial-info") {
        router.replace("/initial-info");
      }

      if (hasSubmittedInitialInfo && path === "/initial-info") {
        router.replace("/");
      }
    }

    // free trial activation middleware
    if (token && !isPublicPath && path !== "/initial-info") {
      const isSubscribed = !!user?.freeTrial.active === true;

      if (!isSubscribed && path !== "/trial-subscription") {
        router.replace("/trial-subscription");
      }

      if (isSubscribed && path === "/trial-subscription") {
        router.replace("/");
      }
    }

    // initial study data middleware
    if (
      token &&
      !isPublicPath &&
      path !== "/trial-subscription" &&
      path !== "/initial-info"
    ) {
      const isPlanner = user?.planner === true;

      if (!isPlanner && path !== "/initial-study-data") {
        router.replace("/initial-study-data");
      }

      if (isPlanner && path === "/initial-study-data") {
        router.replace("/");
      }
    }
  }, [token, path, router, user]);

  return <>{children}</>;
};

export default AuthProvider;
