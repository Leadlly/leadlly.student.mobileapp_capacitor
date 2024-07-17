"use client";

import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/redux/store";
import { UserDataProps } from "@/helpers/types";
import { userData } from "@/redux/slices/userSlice";
import { getUser } from "@/actions/user_actions";

export default function StoreProvider({
  children,
}: // user,
{
  children: React.ReactNode;
  // user: UserDataProps;
}) {
  const [user, setUser] = useState<UserDataProps | null>(null);

  const storeRef = useRef<AppStore>();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await getUser();
        setUser(userData.user);
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, []);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(userData(user));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
