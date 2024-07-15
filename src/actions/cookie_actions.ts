import { Preferences } from "@capacitor/preferences";

export const getCookie = async () => {
  return (await Preferences.get({ key: "token" })).value ?? "";
};
