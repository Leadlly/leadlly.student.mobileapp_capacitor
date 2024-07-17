"use client";

import { getUser } from "@/actions/user_actions";
import { UserDataProps } from "@/helpers/types";
import { Preferences } from "@capacitor/preferences";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthProviderProps = {
  token: string | null;
  setToken: (token: string | null) => void;
  user: UserDataProps | null;
  setUser: (user: UserDataProps | null) => void;
};

const AuthContext = createContext<AuthProviderProps>({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
});

export const AuthProviderContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserDataProps | null>(null);

  useEffect(() => {
    const getToken = async () => {
      const token = await Preferences.get({ key: "token" });
      console.log(token);
      setToken(token.value);
    };

    getToken();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUser();

      setUser(userData.user);
    };

    getUserData();
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, user, setToken, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthProviderProps {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
