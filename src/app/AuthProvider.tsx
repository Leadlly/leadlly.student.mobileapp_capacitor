"use client";

import { useAppSelector } from "@/redux/hooks";
import { usePathname, useRouter } from "next/navigation";
import { Preferences } from "@capacitor/preferences";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    const getToken = async () => {
      const token = await Preferences.get({ key: "token" });
      console.log(token);
      setToken(token.value);
    };

    getToken();
  }, []);

  const isPublicPath =
    path.startsWith("/login") ||
    path.startsWith("/signup") ||
    path.startsWith("/verify") ||
    path.startsWith("/forgot-password") ||
    path.startsWith("/resetpassword");

  if (!token && !isPublicPath) {
    router.replace("/login");
  }

  return <>{children}</>;
};

export default AuthProvider;
